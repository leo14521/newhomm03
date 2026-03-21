/** 首页区块 — locale === "zh" */
export const CONTENT_SECTIONS_ZH = {
  philosophy: {
    headline: "美不是被制造出来的，\n而是我们与您一起\n发现内在的光。",
    paragraphs: [
      {
        compact: "Hommage 拒绝流水线式、千人一面的治疗。我们关注您面容本身独特的故事。",
        desktopLines: ["Hommage 拒绝流水线式、千人一面的治疗。", "我们关注您面容本身独特的故事。"],
      },
      {
        compact:
          "就像在私人画廊欣赏唯一杰作一样，体验只为您的、深入而私密的医学级策展。",
        desktopLines: ["就像在私人画廊欣赏唯一杰作一样，", "体验只为您的、深入而私密的医学级策展。"],
      },
      {
        compact: "我们陪伴您走向经得起时间考验的价值，与本就属于您的从容优雅。",
        desktopLines: ["我们陪伴您走向经得起时间考验的价值，", "与本就属于您的从容优雅。"],
      },
    ],
    image: "/images/clinic/main/05.jpg",
    imageAlt: "Hommage 诊所咨询",
  },
  rep: {
    subhead: "REPRESENTATIVE",
    head: "Hommage 代表项目",
    lead: "从提拉、皮肤到身体与女性护理——验证过的设备与方案，一站整合。",
  },
  stats: {
    items: [
      { num: "2", unit: "位", label: "专科院长", sub: "妇产科与皮肤科协作" },
      { num: "5", unit: "步", label: "护理流程", sub: "咨询 → 检查 → 方案与准备 → 治疗 → 随访" },
      { num: "25", unit: "年", label: "临床经验", sub: "女性健康、私密护理、医美" },
      { num: "30", unit: "K+", label: "护理案例", sub: "数据驱动的个性化规划" },
    ],
  },
  curation: {
    subhead: "PRIVATE CURATION",
    head: "为您量身定制的方案",
    lead: "根据目标组合治疗——女性健康与皮肤、身体护理同院完成。",
  },
  knowhow: {
    subhead: "HOMMAGE EXPERTISE",
    head: "我们的临床优势",
    panels: [
      {
        num: "01",
        title: "定制提拉设计",
        desc: "三维分析骨骼、皮肤厚度与肌肉运动，规划理想提拉向量。可联合超声刀、Onda、Tune Face，在一次疗程中追求可感知的效果。",
      },
      {
        num: "02",
        title: "尽量减少不适",
        desc: "分层麻醉与冷却减轻术中感受与术后肿胀，在合适情况下力求当日回归日常。",
      },
      {
        num: "03",
        title: "高端术后护理",
        desc: "提供 LDM 水光提拉与再生激光支持，优化效果与恢复；复诊时共同评估皮肤状态。",
      },
    ],
    backgroundImage: "/images/clinic/interior/01.jpg",
  },
  care: {
    subhead: "CARE SYSTEM",
    head: "Hommage 护理体系",
    items: [
      {
        num: "01",
        title: "初诊与咨询",
        desc: "按预约梳理病史与诉求，一对一引导适合的妇产科或医美方案。",
      },
      {
        num: "02",
        title: "检查",
        desc: "专科评估；必要时进行妇科或皮肤科相关检查。",
      },
      {
        num: "03",
        title: "方案与准备",
        desc: "确认治疗计划并取得同意，完成无菌准备等术前步骤。",
      },
      {
        num: "04",
        title: "治疗",
        desc: "按既定方案实施，必要时使用局部或表面麻醉以提高舒适度。",
      },
      {
        num: "05",
        title: "随访与护理",
        desc: "术后即时指导、恢复说明与复诊安排。",
      },
    ],
  },
} as const;
