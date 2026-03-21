import os
import time
import requests
import google.generativeai as genai
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from webdriver_manager.chrome import ChromeDriverManager
from google.generativeai.types import HarmCategory, HarmBlockThreshold

# ==========================================
# 1. 설정 (API 키는 환경 변수 GOOGLE_API_KEY 사용, 로컬에서는 .env 등으로 설정)
# ==========================================
GOOGLE_API_KEY = os.environ.get("GOOGLE_API_KEY", "")
genai.configure(api_key=GOOGLE_API_KEY)
model = genai.GenerativeModel('gemini-1.5-pro')

# ==========================================
# 2. 메뉴 및 검색 키워드
# ==========================================
TASKS = {
    "about": "피부과 브랜드 철학",
    "signature/total-erase": "바디 레이저 시술",
    "signature/link-free-body": "강남 비수술 바디 리프팅",
    "signature/recovery": "피부과 수술 후 재생 관리 프로그램",
    "treatment/labiaplasty": "강남 소음순수술 레이저 후기",
    "treatment/vaginal-plasty": "질축소수술 질성형 방법",
    "treatment/hymen-restoration": "처녀막 재생 수술",
    "treatment/vaginal-tightening": "질타이트닝 레이저 비비브",
    "treatment/urinary-incontinence": "여성 요실금 치료법",
    "treatment/intimate-whitening": "소음순 미백 레이저",
    "signature/lifting": "청담동 안티에이징 리프팅 시술",
    "signature/ulthera": "울쎄라 리프팅 정품",
    "signature/ulthera-pro-prime": "울쎄라 프로 효과",
    "signature/onda": "온다 리프팅 통증",
    "signature/tune-face": "악센트프라임 튠페이스 효과",
    "signature/correction-fit": "코레지 셀핏 리프팅",
    "signature/shrink-universe": "슈링크 유니버스 차이점",
    "signature/mint-thread": "민트실 리프팅 후기",
    "signature/silhouette-soft": "실루엣소프트 리프팅 가격",
    "signature/aptos": "압토스 실리프팅 유지기간",
    "signature/juvegen": "자가진피재생술 쥬브젠",
    "signature/rejuran": "리쥬란 힐러 효과 통증",
    "signature/exosome": "줄기세포 엑소좀 피부과"
}

# ==========================================
# 3. 기능 함수
# ==========================================
def setup_driver():
    chrome_options = Options()
    # 네이버는 봇 차단이 덜하지만 안전하게 설정
    chrome_options.add_argument("--disable-blink-features=AutomationControlled")
    chrome_options.add_argument("user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36")
    chrome_options.add_argument("--no-sandbox")
    chrome_options.add_argument("--disable-dev-shm-usage")
    chrome_options.add_argument("--disable-gpu")
    chrome_options.add_argument("--window-size=1920,1080")
    chrome_options.add_argument("--log-level=3")
    
    # 화면을 보고 싶으면 아래 줄 주석 유지, 안 보고 싶으면 주석 해제
    # chrome_options.add_argument("--headless=new") 
    
    driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=chrome_options)
    return driver

def create_directory(path):
    full_path = os.path.join(os.getcwd(), "HOMMAGE_WEB", path)
    if not os.path.exists(full_path):
        os.makedirs(full_path)
    return full_path

def download_images(driver, save_path, limit=4):
    # 네이버 검색결과 화면이면 다운로드 스킵
    if "search.naver.com" in driver.current_url:
        return []

    images = driver.find_elements(By.TAG_NAME, 'img')
    saved_images = []
    count = 0
    print(f"   📷 이미지 다운로드 시작... (목표: {limit}장)")
    
    headers = {'User-Agent': 'Mozilla/5.0'}

    for img in images:
        if count >= limit: break
        try:
            src = img.get_attribute('src')
            if src and src.startswith('http') and "naver" not in src: # 네이버 아이콘 제외
                response = requests.get(src, headers=headers, timeout=3)
                if response.status_code == 200:
                    ext = src.split('.')[-1]
                    if len(ext) > 4 or '?' in ext: ext = 'jpg'
                    filename = f"img_{count}.{ext}"
                    with open(os.path.join(save_path, filename), 'wb') as f:
                        f.write(response.content)
                    saved_images.append(filename)
                    count += 1
        except Exception:
            continue
    return saved_images

def generate_html_gemini(menu_name, text_content, img_list):
    prompt = f"""
    너는 피부과 'HOMMAGE'의 웹 개발자야.
    '{menu_name}' 상세 페이지용 HTML(Body부분)을 작성해.
    
    [조건]
    1. Tailwind CSS 사용.
    2. 이미지: {img_list} 활용 (없으면 Unsplash 랜덤 이미지 사용).
    3. 구성: 메인배너 -> 통증/효과 설명 -> 차별점 -> 전후사진/후기 섹션.
    
    [참고 텍스트]
    {text_content[:4000]}
    
    [출력]
    <!DOCTYPE html>로 시작하는 전체 코드만 출력.
    """
    try:
        response = model.generate_content(prompt)
        return response.text.replace("```html", "").replace("```", "")
    except Exception as e:
        return f""

# ==========================================
# 4. 메인 실행 (네이버 전용)
# ==========================================
def main():
    try:
        os.system("taskkill /f /im chrome.exe")
    except:
        pass

    driver = setup_driver()
    print("🚀 네이버 검색 봇 시작...\n")

    for path_key, keyword in TASKS.items():
        print(f"--------------------------------------------------")
        print(f"📂 작업: [{path_key}] / 키워드: {keyword}")
        
        save_dir = create_directory(path_key)
        
        try:
            # 1. 네이버 '웹사이트' 탭 검색 (블로그 제외하고 홈페이지 찾기 위함)
            # where=webkr 파라미터가 '웹사이트' 탭입니다.
            naver_url = f"https://search.naver.com/search.naver?where=webkr&query={keyword}"
            driver.get(naver_url)
            
            # 2. 결과 기다리기
            time.sleep(2)
            
            # 3. 첫 번째 웹사이트 링크 찾기
            # 네이버 웹사이트 검색결과 클래스는 보통 'link_tit' 입니다.
            target_url = None
            try:
                links = driver.find_elements(By.CLASS_NAME, "link_tit")
                
                for link in links:
                    href = link.get_attribute("href")
                    # 나무위키나 네이버 자체 링크 제외
                    if href and "namu.wiki" not in href and "search.naver" not in href:
                        target_url = href
                        print(f"   🎯 타겟 사이트 발견: {link.text} ({href})")
                        break
            except:
                pass
            
            if not target_url:
                print("   ⚠️ 적절한 웹사이트를 못 찾았습니다. 건너뜁니다.")
                continue

            # 4. 접속
            print(f"   🌐 사이트 접속 중...")
            driver.get(target_url)
            time.sleep(4) # 로딩 대기
            
            # 5. 데이터 추출
            body_text = driver.find_element(By.TAG_NAME, "body").text
            if len(body_text) < 50:
                print("   ⚠️ 본문 내용이 너무 짧습니다. 로딩 실패로 간주합니다.")
                continue

            images = download_images(driver, save_dir, limit=4)
            
            # 6. 코딩
            print(f"   🤖 Gemini 코딩 중...")
            html_code = generate_html_gemini(path_key, body_text, images)
            
            with open(os.path.join(save_dir, "index.html"), "w", encoding="utf-8") as f:
                f.write(html_code)
            print(f"   ✅ 완료!")
            
        except Exception as e:
            print(f"   ❌ 에러: {e}")
            continue
            
    driver.quit()
    print("\n🎉 작업 끝!")

if __name__ == "__main__":
    main()