import type { Locale } from "@/i18n/messages";
import type { LegalDocument } from "./types";

const KO: LegalDocument = {
  title: "개인정보처리방침",
  updatedLine: "시행일: 2025년 3월 21일",
  sections: [
    {
      heading: "제1조 (목적)",
      paragraphs: [
        "오마쥬클리닉(이하 \"의원\")은 이용자의 개인정보를 중요시하며, 「개인정보 보호법」 등 관계 법령을 준수합니다. 본 방침은 의원이 운영하는 웹사이트에서 수집·이용하는 개인정보의 항목, 목적, 보유 기간 등을 안내합니다.",
      ],
    },
    {
      heading: "제2조 (수집하는 개인정보의 항목)",
      paragraphs: [
        "의원은 상담 신청 등 서비스 제공을 위해 아래와 같은 개인정보를 수집할 수 있습니다.",
        "• 필수: 성명, 연락처(휴대전화번호)\n• 선택: 관심 시술 분야, 문의 내용\n• 자동 수집: 접속 IP 정보, 쿠키, 접속 로그 등 서비스 이용 과정에서 생성·수집될 수 있는 정보",
      ],
    },
    {
      heading: "제3조 (개인정보의 수집·이용 목적)",
      paragraphs: [
        "의원은 수집한 개인정보를 다음의 목적 범위 내에서만 이용합니다.",
        "• 상담·예약 요청에 대한 회신 및 안내\n• 불만 처리, 분쟁 대응 등 민원 처리\n• 서비스 개선을 위한 통계·분석(식별 불가 형태로 가공하는 경우 포함)",
      ],
    },
    {
      heading: "제4조 (보유 및 이용 기간)",
      paragraphs: [
        "의원은 개인정보 수집·이용 목적이 달성된 후에는 지체 없이 해당 정보를 파기합니다. 다만, 관계 법령에 따라 보관할 의무가 있는 경우에는 해당 법령에서 정한 기간 동안 보관합니다.",
        "상담 신청 등을 통해 수집된 정보는 일반적으로 상담 처리 완료 후 3년 이내 파기를 원칙으로 하되, 진료·시술과 연계되어 의료법 등 다른 법령의 보존 의무가 적용되는 경우에는 그에 따릅니다.",
      ],
    },
    {
      heading: "제5조 (개인정보의 파기)",
      paragraphs: [
        "파기 사유가 발생한 개인정보는 복구·재생되지 않는 방법으로 안전하게 파기합니다. 전자적 파일은 복구가 불가능한 기술적 방법을 사용하며, 출력물 등은 분쇄 또는 소각합니다.",
      ],
    },
    {
      heading: "제6조 (정보주체의 권리)",
      paragraphs: [
        "이용자는 언제든지 개인정보 열람·정정·삭제·처리 정지를 요구할 수 있습니다. 요청은 대표 전화 또는 이메일로 접수하며, 의원은 지체 없이 조치합니다. 다만 법령상 열람이 제한되거나 의원의 정당한 사업 운영에 중대한 지장이 있는 경우 일부 요청이 거절될 수 있습니다.",
      ],
    },
    {
      heading: "제7조 (개인정보 보호책임자)",
      paragraphs: [
        "의원은 개인정보 처리에 관한 업무를 총괄하는 책임자를 지정합니다.",
        "• 상호: 오마쥬클리닉\n• 주소: 서울특별시 서초구 강남대로 509, A동 4층\n• 대표전화: 070-4144-7125\n• 이메일: master@hommage.com",
      ],
    },
    {
      heading: "제8조 (고지의 의무)",
      paragraphs: [
        "본 방침이 변경되는 경우 웹사이트를 통해 공지합니다. 중요한 변경 사항이 있는 경우 시행일 7일 전부터 공지할 수 있습니다.",
      ],
    },
  ],
};

const EN: LegalDocument = {
  title: "Privacy Policy",
  updatedLine: "Effective date: 21 March 2025",
  sections: [
    {
      heading: "1. Purpose",
      paragraphs: [
        "Hommage Clinic (“the Clinic”) respects your privacy and complies with applicable laws including the Personal Information Protection Act of Korea. This policy explains what data we collect through our website, why we collect it, and how long we keep it.",
      ],
    },
    {
      heading: "2. Data we collect",
      paragraphs: [
        "We may collect the following categories of information when you use our services (e.g. quick consultation form):",
        "• Required: name, phone number\n• Optional: treatment interest, message content\n• Automatic: IP address, cookies, and similar technical data generated during your visit",
      ],
    },
    {
      heading: "3. Purposes of use",
      paragraphs: [
        "We use personal data only for:",
        "• Responding to consultation or appointment requests\n• Handling complaints and disputes\n• Improving our services (including aggregated or de-identified analytics where applicable)",
      ],
    },
    {
      heading: "4. Retention",
      paragraphs: [
        "We delete personal data without undue delay once the purpose of collection is achieved, unless a longer retention period is required by law (e.g. medical or accounting rules).",
        "Consultation requests are generally deleted within three years after the matter is closed, unless another statute requires a different period.",
      ],
    },
    {
      heading: "5. Destruction",
      paragraphs: [
        "When data is no longer needed, we destroy it using methods that make recovery impractical (e.g. secure deletion for electronic files, shredding for paper records).",
      ],
    },
    {
      heading: "6. Your rights",
      paragraphs: [
        "You may request access, correction, deletion, or restriction of processing of your personal data. Contact us by phone or email listed below. Some requests may be limited where permitted by law.",
      ],
    },
    {
      heading: "7. Data protection contact",
      paragraphs: [
        "• Name: Hommage Clinic\n• Address: 509 Gangnam-daero, Seocho-gu, Seoul, Building A, 4F\n• Phone: 070-4144-7125\n• Email: master@hommage.com",
      ],
    },
    {
      heading: "8. Changes",
      paragraphs: [
        "We may update this policy and will post changes on this website. Material changes may be announced at least seven days before they take effect.",
      ],
    },
  ],
};

export function getPrivacyDocument(locale: Locale): LegalDocument {
  return locale === "ko" ? KO : EN;
}
