import type { MenuOverlayItem } from "./menuOverlay";

/** 日本語メニュー（リンクは韓国版と同一） */
export const MENU_OVERLAY_ITEMS_JA: MenuOverlayItem[] = [
  { title: "オマージュについて", subtitle: "ブランド・クリニック", link: "/about" },
  {
    title: "シグネチャー",
    subtitle: "SIGNATURE",
    link: "/signature/total-erase",
    children: [
      { title: "TOTAL ERASE", subtitle: "色素・肌質", link: "/signature/total-erase" },
      {
        title: "LINK-FREE BODY",
        subtitle: "ボディライン",
        link: "/signature/link-free-body",
        children: [
          { title: "Renuviron", subtitle: "引き締め", link: "/signature/renewvion" },
          { title: "Body filler", subtitle: "ボリューム・ライン", link: "/signature/link-free-body#body-filler" },
        ],
      },
      { title: "RECOVERY", subtitle: "再生", link: "/signature/recovery" },
    ],
  },
  { title: "幹細胞", subtitle: "STEM CELL", link: "/signature/stem-cell" },
  {
    title: "女性エステティック",
    subtitle: "インティメート・女性ケア",
    link: "/treatment/labiaplasty",
    children: [
      { title: "小陰唇形成", subtitle: "レーザー小陰唇", link: "/treatment/labiaplasty" },
      { title: "膣の若返り", subtitle: "", link: "/treatment/vaginal-plasty" },
      { title: "膣フィラー", subtitle: "", link: "/treatment/vaginal-filler" },
      { title: "大陰唇", subtitle: "", link: "/treatment/labia-majora#vulva-procedures" },
      { title: "処女膜再生", subtitle: "", link: "/treatment/hymen-restoration" },
      { title: "膣タイトニング", subtitle: "", link: "/treatment/vaginal-tightening" },
      { title: "尿失禁ケア", subtitle: "", link: "/treatment/urinary-incontinence" },
      { title: "インティメート美白", subtitle: "", link: "/treatment/intimate-whitening" },
    ],
  },
  { title: "リフティング", subtitle: "LIFTING", link: "/signature/lifting" },
  {
    title: "レーザー",
    subtitle: "LASER",
    link: "/signature/ulthera",
    children: [
      { title: "ULTHERAPY PRIME", subtitle: "超音波リフト", link: "/signature/ulthera-pro-prime" },
      { title: "Onda", subtitle: "マイクロ波 顔・体", link: "/signature/onda" },
      { title: "Tune Face", subtitle: "高周波リフト", link: "/signature/tune-face" },
      { title: "Correction Fit", subtitle: "細胞シナジー", link: "/signature/correction-fit" },
    ],
  },
  {
    title: "糸リフト",
    subtitle: "THREAD",
    link: "/signature/mint-thread",
    children: [
      { title: "Mint", subtitle: "PDO糸", link: "/signature/mint-thread" },
      { title: "Silhouette Soft", subtitle: "双方向", link: "/signature/silhouette-soft" },
      { title: "Aptos", subtitle: "糸", link: "/signature/aptos" },
    ],
  },
  {
    title: "スキンブースター",
    subtitle: "SKIN BOOSTER",
    link: "/signature/skin-booster",
    children: [
      { title: "Rejuran", subtitle: "", link: "/signature/rejuran" },
      { title: "Exosome", subtitle: "", link: "/signature/exosome" },
    ],
  },
  {
    title: "コラゲンブースター",
    subtitle: "COLLAGEN BOOSTER",
    link: "/signature/collagen-booster",
    children: [{ title: "Juvegen", subtitle: "", link: "/signature/juvegen" }],
  },
];

export const MENU_OVERLAY_ITEMS_ZH: MenuOverlayItem[] = [
  { title: "关于 Hommage", subtitle: "品牌与诊所", link: "/about" },
  {
    title: "招牌项目",
    subtitle: "SIGNATURE",
    link: "/signature/total-erase",
    children: [
      { title: "TOTAL ERASE", subtitle: "色素与肤质", link: "/signature/total-erase" },
      {
        title: "LINK-FREE BODY",
        subtitle: "身体轮廓",
        link: "/signature/link-free-body",
        children: [
          { title: "Renuviron", subtitle: "紧致", link: "/signature/renewvion" },
          { title: "Body filler", subtitle: "容积与线条", link: "/signature/link-free-body#body-filler" },
        ],
      },
      { title: "RECOVERY", subtitle: "再生修复", link: "/signature/recovery" },
    ],
  },
  { title: "干细胞", subtitle: "STEM CELL", link: "/signature/stem-cell" },
  {
    title: "女性医美",
    subtitle: "私密与女性健康",
    link: "/treatment/labiaplasty",
    children: [
      { title: "小阴唇整形", subtitle: "激光小阴唇", link: "/treatment/labiaplasty" },
      { title: "阴道年轻化", subtitle: "", link: "/treatment/vaginal-plasty" },
      { title: "阴道填充", subtitle: "", link: "/treatment/vaginal-filler" },
      { title: "大阴唇", subtitle: "", link: "/treatment/labia-majora#vulva-procedures" },
      { title: "处女膜修复", subtitle: "", link: "/treatment/hymen-restoration" },
      { title: "阴道紧缩", subtitle: "", link: "/treatment/vaginal-tightening" },
      { title: "尿失禁护理", subtitle: "", link: "/treatment/urinary-incontinence" },
      { title: "私密美白", subtitle: "", link: "/treatment/intimate-whitening" },
    ],
  },
  { title: "提拉", subtitle: "LIFTING", link: "/signature/lifting" },
  {
    title: "激光",
    subtitle: "LASER",
    link: "/signature/ulthera",
    children: [
      { title: "ULTHERAPY PRIME", subtitle: "超声提拉", link: "/signature/ulthera-pro-prime" },
      { title: "Onda", subtitle: "微波面与体", link: "/signature/onda" },
      { title: "Tune Face", subtitle: "射频提拉", link: "/signature/tune-face" },
      { title: "Correction Fit", subtitle: "细胞协同", link: "/signature/correction-fit" },
    ],
  },
  {
    title: "线雕",
    subtitle: "THREAD",
    link: "/signature/mint-thread",
    children: [
      { title: "Mint", subtitle: "PDO 线", link: "/signature/mint-thread" },
      { title: "Silhouette Soft", subtitle: "双向", link: "/signature/silhouette-soft" },
      { title: "Aptos", subtitle: "线材", link: "/signature/aptos" },
    ],
  },
  {
    title: "皮肤助推",
    subtitle: "SKIN BOOSTER",
    link: "/signature/skin-booster",
    children: [
      { title: "Rejuran", subtitle: "", link: "/signature/rejuran" },
      { title: "Exosome", subtitle: "", link: "/signature/exosome" },
    ],
  },
  {
    title: "胶原助推",
    subtitle: "COLLAGEN BOOSTER",
    link: "/signature/collagen-booster",
    children: [{ title: "Juvegen", subtitle: "", link: "/signature/juvegen" }],
  },
];

export const MENU_OVERLAY_ITEMS_RU: MenuOverlayItem[] = [
  { title: "О клинике Hommage", subtitle: "Бренд и клиника", link: "/about" },
  {
    title: "Сигнатура",
    subtitle: "SIGNATURE",
    link: "/signature/total-erase",
    children: [
      { title: "TOTAL ERASE", subtitle: "Пигмент и текстура", link: "/signature/total-erase" },
      {
        title: "LINK-FREE BODY",
        subtitle: "Контур тела",
        link: "/signature/link-free-body",
        children: [
          { title: "Renuviron", subtitle: "Упругость", link: "/signature/renewvion" },
          { title: "Body filler", subtitle: "Объём и линия", link: "/signature/link-free-body#body-filler" },
        ],
      },
      { title: "RECOVERY", subtitle: "Регенерация", link: "/signature/recovery" },
    ],
  },
  { title: "Стволовые клетки", subtitle: "STEM CELL", link: "/signature/stem-cell" },
  {
    title: "Женская эстетика",
    subtitle: "Интимный и женский уход",
    link: "/treatment/labiaplasty",
    children: [
      { title: "Лабиопластика", subtitle: "Лазер", link: "/treatment/labiaplasty" },
      { title: "Вагинальное омоложение", subtitle: "", link: "/treatment/vaginal-plasty" },
      { title: "Вагинальный филлер", subtitle: "", link: "/treatment/vaginal-filler" },
      { title: "Большие половые губы", subtitle: "", link: "/treatment/labia-majora#vulva-procedures" },
      { title: "Восстановление девственной плевы", subtitle: "", link: "/treatment/hymen-restoration" },
      { title: "Укрепление влагалища", subtitle: "", link: "/treatment/vaginal-tightening" },
      { title: "Недержание мочи", subtitle: "", link: "/treatment/urinary-incontinence" },
      { title: "Осветление интимной зоны", subtitle: "", link: "/treatment/intimate-whitening" },
    ],
  },
  { title: "Лифтинг", subtitle: "LIFTING", link: "/signature/lifting" },
  {
    title: "Лазер",
    subtitle: "LASER",
    link: "/signature/ulthera",
    children: [
      { title: "ULTHERAPY PRIME", subtitle: "УЗ-лифтинг", link: "/signature/ulthera-pro-prime" },
      { title: "Onda", subtitle: "СВЧ лицо и тело", link: "/signature/onda" },
      { title: "Tune Face", subtitle: "RF-лифтинг", link: "/signature/tune-face" },
      { title: "Correction Fit", subtitle: "Клеточная синергия", link: "/signature/correction-fit" },
    ],
  },
  {
    title: "Нити",
    subtitle: "THREAD",
    link: "/signature/mint-thread",
    children: [
      { title: "Mint", subtitle: "PDO-нити", link: "/signature/mint-thread" },
      { title: "Silhouette Soft", subtitle: "Двунаправленные", link: "/signature/silhouette-soft" },
      { title: "Aptos", subtitle: "Нити", link: "/signature/aptos" },
    ],
  },
  {
    title: "Скин-бустер",
    subtitle: "SKIN BOOSTER",
    link: "/signature/skin-booster",
    children: [
      { title: "Rejuran", subtitle: "", link: "/signature/rejuran" },
      { title: "Exosome", subtitle: "", link: "/signature/exosome" },
    ],
  },
  {
    title: "Коллаген-бустер",
    subtitle: "COLLAGEN BOOSTER",
    link: "/signature/collagen-booster",
    children: [{ title: "Juvegen", subtitle: "", link: "/signature/juvegen" }],
  },
];
