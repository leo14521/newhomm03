import type { Locale } from "@/i18n/messages";
import type { LegalDocument } from "./types";

const KO: LegalDocument = {
  title: "이용약관",
  updatedLine: "시행일: 2025년 3월 21일",
  sections: [
    {
      heading: "제1조 (목적)",
      paragraphs: [
        "본 약관은 오마쥬클리닉(이하 \"의원\")이 운영하는 웹사이트 및 온라인 상담·안내 서비스(이하 \"서비스\")의 이용과 관련하여 의원과 이용자 간 권리·의무 및 책임사항을 규정함을 목적으로 합니다.",
      ],
    },
    {
      heading: "제2조 (서비스의 내용)",
      paragraphs: [
        "의원은 웹사이트를 통해 클리닉 소개, 시술 안내, 상담 신청 접수, 오시는 길 안내 등의 서비스를 제공합니다. 구체적인 진료·시술 내용은 방문 상담 및 의료진 판단에 따릅니다.",
      ],
    },
    {
      heading: "제3조 (이용자의 의무)",
      paragraphs: [
        "이용자는 관계 법령, 본 약관, 의원이 공지한 이용 안내를 준수하여야 합니다. 타인의 정보를 도용하거나 허위 사실을 기재해서는 안 되며, 의원의 업무를 방해하거나 명예를 훼손하는 행위를 해서는 안 됩니다.",
      ],
    },
    {
      heading: "제4조 (의료 정보의 한계)",
      paragraphs: [
        "웹사이트에 게시된 내용은 일반적인 안내 목적에 한하며, 개별 진단·치료를 대체하지 않습니다. 정확한 진단과 치료 계획은 반드시 의료진과의 대면 상담을 통해 이루어집니다.",
      ],
    },
    {
      heading: "제5조 (서비스 중단)",
      paragraphs: [
        "의원은 시스템 점검, 천재지변, 기술적 장애 등 불가피한 사유가 있는 경우 서비스 제공을 일시 중단할 수 있으며, 사전 또는 사후에 웹사이트 등을 통해 공지합니다.",
      ],
    },
    {
      heading: "제6조 (면책)",
      paragraphs: [
        "의원은 이용자가 웹사이트에 입력한 정보의 정확성을 보증하지 않으며, 이용자의 귀책 사유로 발생한 손해에 대해 책임을 지지 않습니다. 다만 의원의 고의 또는 중대한 과실이 있는 경우에는 그러하지 아니합니다.",
      ],
    },
    {
      heading: "제7조 (준거법 및 관할)",
      paragraphs: [
        "본 약관의 해석 및 분쟁에 관하여는 대한민국 법을 준거법으로 하며, 소송이 제기되는 경우 관할 법원은 민사소송법 등 관계 법령에 따릅니다.",
      ],
    },
  ],
};

const EN: LegalDocument = {
  title: "Terms of Service",
  updatedLine: "Effective date: 21 March 2025",
  sections: [
    {
      heading: "1. Purpose",
      paragraphs: [
        "These terms govern your use of the website and online services (including consultation requests) provided by Hommage Clinic (“the Clinic”).",
      ],
    },
    {
      heading: "2. Services",
      paragraphs: [
        "The Clinic provides information about the clinic, treatments, directions, and online consultation requests. Actual medical care requires in-person assessment by qualified staff.",
      ],
    },
    {
      heading: "3. User obligations",
      paragraphs: [
        "You must comply with applicable laws and these terms. You must not submit false information, impersonate others, or interfere with the Clinic’s operations.",
      ],
    },
    {
      heading: "4. Medical information",
      paragraphs: [
        "Website content is for general guidance only and does not replace professional medical advice, diagnosis, or treatment.",
      ],
    },
    {
      heading: "5. Interruptions",
      paragraphs: [
        "The Clinic may suspend services for maintenance, force majeure, or technical reasons, with notice where reasonably practicable.",
      ],
    },
    {
      heading: "6. Disclaimer",
      paragraphs: [
        "To the extent permitted by law, the Clinic is not liable for issues arising from inaccurate information you provide or from events beyond reasonable control, except in cases of wilful misconduct or gross negligence.",
      ],
    },
    {
      heading: "7. Governing law",
      paragraphs: [
        "These terms are governed by the laws of the Republic of Korea. Disputes shall be subject to the jurisdiction of competent courts as determined by applicable law.",
      ],
    },
  ],
};

export function getTermsDocument(locale: Locale): LegalDocument {
  return locale === "ko" ? KO : EN;
}
