# 오마쥬 클리닉 이미지 (진료과목·페이지별 분류)

실제 피부과·산부인과 홈페이지를 색인해 다운로드한 이미지를 **오마쥬 진료과목·페이지에 맞게 분류**해 둔 폴더입니다.

- **예다클리닉 이미지는 참고하지 않음.**
- **소음순성형·질성형·질필러 등 산부인과 진료 이미지**는 **헤스티아여성의원**, **나를위한 산부인과**에서 참고합니다.

## 다운로드

터미널에서 실행:

```bash
node scripts/download-clinic-images.mjs
```

- **피부과 색인**: 레스트의원(rest-clinic.com), 닥터이레이저(drelaser.com), BLS청담(blsclinic2.com), 로렐의원(laurelclinic.com), 청담밴스(vandsclinic.co.kr)
- **산부인과 색인**: 헤스티아여성의원(hestia-womenclinic.co.kr), 나를위한 산부인과(na-medi.com), 청담산부인과(cd1.co.kr)
- **저장 구조**: `public/images/clinic/{분류}/`

## 오마쥬 분류 (페이지 매핑)

| 분류 | 용도 |
|------|------|
| **main** | 메인 히어로·비주얼 |
| **philosophy** / **main** | 브랜드 스토리·Philosophy 섹션 |
| **lifting** | 리프팅 대표 시술·큐레이션 |
| **skin-booster** | 스킨부스터 |
| **body** | 바디 컨투어 |
| **women-care** | 여성 케어·산부인과 |
| **consultation** / **main** | 상담·예약 |
| **device** | 기기·시술 공통 |
| **illustration** | 일러스트·도식 |
| **interior** | 인테리어·Stage 배경 |

## 디자인 변용

- **Stage·Philosophy**: `bg-cover` + `bg-center` + 어두운 오버레이(`bg-black/30` 등)로 통일.
- **시그니처 히어로**: 그라데이션·grayscale·opacity는 `SignatureHero` 등 컴포넌트에서 적용.
- 이미지 교체 시 `src/config/homePage.ts`, `src/config/homeContent.ts` 경로만 수정하면 됨.
