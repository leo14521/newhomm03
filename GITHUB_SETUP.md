# GitHub 연동 방법

로컬 Git 저장소는 이미 초기화되어 있고, 첫 커밋까지 완료된 상태입니다.

## 1. GitHub에서 새 저장소 만들기

1. [GitHub](https://github.com) 로그인 후 **New repository** 클릭
2. **Repository name**: 예) `hommage-clinic` (원하는 이름 입력)
3. **Public** 선택
4. **"Add a README file"** 체크하지 않기 (이미 로컬에 코드가 있음)
5. **Create repository** 클릭

## 2. 로컬에서 GitHub로 푸시

저장소를 만든 뒤 GitHub에서 표시되는 **저장소 URL**을 복사한 다음, 터미널에서 실행하세요.

**HTTPS 사용 시:**
```powershell
cd "c:\Users\user\Desktop\hommage2-main"
git branch -M main
git remote add origin https://github.com/당신의사용자명/저장소이름.git
git push -u origin main
```

**SSH 사용 시:**
```powershell
cd "c:\Users\user\Desktop\hommage2-main"
git branch -M main
git remote add origin git@github.com:당신의사용자명/저장소이름.git
git push -u origin main
```

- `당신의사용자명`: GitHub 아이디  
- `저장소이름`: 1단계에서 만든 저장소 이름 (예: hommage-clinic)

첫 푸시 시 GitHub 로그인 또는 SSH 키 인증이 필요할 수 있습니다.
