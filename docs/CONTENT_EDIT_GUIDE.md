# 홈페이지 콘텐츠·이미지 수정 가이드 (분류)

**이미지 정책: Unsplash 등 스톡 사진은 사용하지 않습니다. 청담피부과·청담산부인과 등 실제 클리닉 홈페이지에서 수집한 기기/피부/일러스트 이미지만 사용합니다.**

결과 확인 후 **추후 수정**이 쉽도록, 수정 위치를 주제별로 분류해 두었습니다.

---

## 1. 이미지 교체

| 용도 | 파일 | 위치 (검색 키워드) |
|------|------|---------------------|
| **Philosophy 섹션** 장식 이미지 | `src/config/homeContent.ts` | `CONTENT_SECTIONS.philosophy.image` |
| **큐레이션 카드** (여성/스킨) | `src/config/homePage.ts` | `CURATION_WOMEN`, `CURATION_SKIN` → 각 항목 `image` |
| **대표 시술** 카드 썸네일 | `src/config/homePage.ts` | `REP_ITEMS` → 각 항목 `image` |
| **Knowhow** 배경 스트립 | `src/app/page.tsx` | `IMAGE_POOL.trust[0]` (또는 `homeContent.ts`의 `IMAGE_POOL`) |
| **의료진** 사진 | `src/app/page.tsx` | `HOME_DOCTORS` → 각 `image` (예: `/dr-park.png`) |

- **이미지 풀 전체** (주제별 후보): `src/config/homeContent.ts` → `IMAGE_POOL` (clinic, consultation, skin, women, body, trust)
- **로컬 이미지 사용**: 다운로드 스크립트 실행 후 경로를 `/images/clinic/...` 로 바꾸면 됨.
  - 실행: `node scripts/download-clinic-images.mjs`
  - 저장 위치: `public/images/clinic/{분류}/`

---

## 2. 문구(카피) 수정 — 실감 나게

| 섹션 | 파일 | 위치 |
|------|------|------|
| **Philosophy** 헤드라인·문단 | `src/config/homeContent.ts` | `CONTENT_SECTIONS.philosophy` (headline, paragraphs) |
| **숫자 인포** (전문의 수, 케어 단계 등) | `src/config/homePage.ts` | `STATS` |
| **Care 시스템** 단계별 설명 | `src/config/homePage.ts` | `CARE_ITEMS` |
| **Knowhow** 패널 제목·설명 | `src/config/homePage.ts` | `KNOWHOW_PANELS` |
| **큐레이션** 카드 제목·설명·태그 | `src/config/homePage.ts` | `CURATION_WOMEN`, `CURATION_SKIN` |
| **대표 시술** 제목 | `src/config/homePage.ts` | `REP_ITEMS` (title, en) |
| **의료진** 소개 문구 | `src/app/page.tsx` | `HOME_DOCTORS` (catchCopy, points, oneLiner) |

- **실감 나는 포인트**: 구체적 숫자(예: 케어 단계 수, 누적 케어 수), 과정(상담→검사→시술→애프터케어), 환자 관점 문장(“1:1 상담”, “당일 복귀” 등)을 넣어 두었습니다. 필요 시 위 위치에서 문장만 바꿔 주세요.

---

## 3. 스크롤 애니메이션 켜기/끄기·강도

| 항목 | 파일 | 위치 |
|------|------|------|
| **섹션별 on/off** | `src/config/homeContent.ts` | `SCROLL_ANIMATION` → 각 섹션 `enabled: true/false` |
| **지연·스태거** | `src/config/homeContent.ts` | `SCROLL_ANIMATION` → delay, stagger (숫자 조정) |
| **애니메이션 로직** | `src/app/page.tsx` | `useGSAP` 블록 중 “섹션별 스크롤 리빌” 주석 아래 |

- Philosophy: 등장 시 y 방향 + fade
- 대표 시술: 카드별 stagger
- 숫자 인포: 스케일 + stagger
- 큐레이션: 카드별 y + stagger
- Knowhow: 카드 좌우 번갈아 x + stagger
- Care: 항목별 y + stagger
- YouTube·Form: 단순 fade

---

## 4. 정보 구조 (IA) 요약

- **흐름**: 히어로 → Philosophy(신뢰·차별화) → 대표 시술 → 의료진 → 큐레이션(여성/스킨) → 숫자 인포 → Knowhow → Care → 유튜브 → 전후·폼
- **환자 관점**: “1:1 상담”, “예약 시간에 맞춰”, “당일 복귀”, “검증된 장비”, “무상 애프터케어” 등 구체 문장을 config에 두었습니다. 위 2번 표에서 해당 필드를 수정하면 됩니다.

---

## 5. 이미지·콘텐츠 파일 한눈에

| 파일 | 역할 |
|------|------|
| `src/config/homeContent.ts` | Philosophy 문구·이미지, 이미지 풀(IMAGE_POOL), 스크롤 애니메이션 설정 |
| `src/config/homePage.ts` | STATS, CARE_ITEMS, KNOWHOW_PANELS, CURATION_*, REP_ITEMS (카드 문구·이미지 URL) |
| `src/app/page.tsx` | HOME_DOCTORS, 실제 섹션 ref·애니메이션 훅 |
| `scripts/download-clinic-images.mjs` | 클리닉 테마 이미지 다운로드 → `public/images/clinic/` |

이 가이드만 보면 **이미지·문구·애니메이션**을 빠르게 찾아 수정할 수 있습니다.
