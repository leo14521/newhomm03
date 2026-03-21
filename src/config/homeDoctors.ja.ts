import type { HomeDoctor } from "@/config/homeDoctors";

export const HOME_DOCTORS_JA: HomeDoctor[] = [
  {
    id: "park",
    position: "院長",
    nameKo: "박유나",
    nameEn: "Park Yuna",
    image: "/dr-park.png",
    catchCopy: "女性の健康と小陰唇形成の専門医\n朴ユナ院長",
    points: [
      "産婦人科専門医として女性の健康と美容を両立してサポート。",
      "小陰唇形成・インティメートケアで多くの方から信頼される。",
      "まずお話を伺い、テンプレートではなくあなたに合う計画をご提案。",
    ],
    oneLiner: "あなたの話から始め、一歩ずつ一緒に決めていきます。",
    instagram: "#",
    youtube: "#",
  },
  {
    id: "kim",
    position: "副院長",
    nameKo: "김현빈",
    nameEn: "Kim Hyunbin",
    image: "/dr-kim.png",
    catchCopy: "皮膚科施術の専門医\n金ヒョンビン副院長",
    points: [
      "リフティング・ボトックス・フィラー・レーザーなど皮膚科施術を担当。",
      "再生、毛穴、傷跡、美白まで自然な仕上がりを目指す。",
      "カウンセリングから施術まで丁寧にケア。",
    ],
    oneLiner: "肌の悩みを理解し、本当に合う方法をご提案します。",
    instagram: "#",
    youtube: "#",
  },
];
