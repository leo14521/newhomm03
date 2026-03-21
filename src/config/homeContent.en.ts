/**
 * English copy for home sections — used when locale === "en"
 */
export const CONTENT_SECTIONS_EN = {
  philosophy: {
    headline: "Beauty is not something we create—\nit is the hidden light within you\nthat we help you see.",
    paragraphs: [
      {
        compact:
          "Hommage rejects factory-style, one-size-fits-all treatments. We focus on the unique story your face already tells.",
        desktopLines: [
          "Hommage rejects factory-style, one-size-fits-all treatments.",
          "We focus on the unique story your face already tells.",
        ],
      },
      {
        compact:
          "Like viewing a single masterpiece in a private gallery, experience medical curation designed only for you—deep, discreet, and personal.",
        desktopLines: [
          "Like viewing a single masterpiece in a private gallery,",
          "experience medical curation designed only for you—deep, discreet, and personal.",
        ],
      },
      {
        compact:
          "We walk with you toward lasting value and the quiet elegance that was yours all along.",
        desktopLines: [
          "We walk with you toward lasting value and",
          "the quiet elegance that was yours all along.",
        ],
      },
    ],
    image: "/images/clinic/main/05.jpg",
    imageAlt: "Hommage clinic consultation",
  },
  rep: {
    subhead: "REPRESENTATIVE",
    head: "Hommage signature treatments",
    lead: "From lifting and skin to body and women’s care—verified devices and protocols in one place.",
  },
  stats: {
    items: [
      { num: "2", unit: "", label: "Specialist directors", sub: "OB-GYN & dermatology collaboration" },
      { num: "5", unit: "", label: "Care steps", sub: "Consultation → exam → plan & prep → treatment → follow-up" },
      { num: "25", unit: "+ yrs", label: "Clinical experience", sub: "Women’s health, intimate care, aesthetics" },
      { num: "30", unit: "K+", label: "Care journeys", sub: "Data-informed personalised planning" },
    ],
  },
  curation: {
    subhead: "PRIVATE CURATION",
    head: "Solutions tailored to you",
    lead: "Treatment combinations matched to your goals—women’s health with skin and body in one clinic.",
  },
  knowhow: {
    subhead: "HOMMAGE EXPERTISE",
    head: "Our clinical edge",
    panels: [
      {
        num: "01",
        title: "Custom-designed lifting",
        desc: "We analyse bone structure, skin thickness, and muscle movement in 3D to map ideal lifting vectors. Ulthera, Onda, and Tune Face may be combined for results you can feel in a single journey.",
      },
      {
        num: "02",
        title: "Minimised discomfort",
        desc: "Layered anaesthesia and cooling reduce intra-procedure sensation and post-treatment swelling. Protocols aim for same-day return to daily life where appropriate.",
      },
      {
        num: "03",
        title: "Premium aftercare",
        desc: "LDM hydro lifting and regenerative laser support are provided to maximise outcomes and recovery. We review your skin together on follow-up visits.",
      },
    ],
    backgroundImage: "/images/clinic/interior/01.jpg",
  },
  care: {
    subhead: "CARE SYSTEM",
    head: "The Hommage care system",
    items: [
      {
        num: "01",
        title: "Consultation",
        desc: "We review history and concerns on schedule, then guide you one-to-one toward the right OB-GYN or aesthetic plan.",
      },
      {
        num: "02",
        title: "Examination",
        desc: "Specialist assessment; gynaecological or dermatologic tests when indicated.",
      },
      {
        num: "03",
        title: "Planning & preparation",
        desc: "We confirm the plan and consent, then complete sterile prep and other pre-treatment steps.",
      },
      {
        num: "04",
        title: "Treatment",
        desc: "Procedures follow the agreed plan, with local or topical anaesthesia when needed for comfort.",
      },
      {
        num: "05",
        title: "Follow-up & aftercare",
        desc: "Immediate post-care guidance, recovery instructions, and follow-up scheduling.",
      },
    ],
  },
} as const;
