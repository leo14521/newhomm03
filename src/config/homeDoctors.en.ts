import type { HomeDoctor } from "@/config/homeDoctors";

/** English doctor bios for home */

export const HOME_DOCTORS_EN: HomeDoctor[] = [
  {
    id: "park",
    position: "Medical director",
    nameKo: "박유나",
    nameEn: "Park Yuna",
    image: "/dr-park.jpg",
    catchCopy: "OB-GYN specialist in women’s health\nand labiaplasty — Dr. Park Yuna",
    points: [
      "Board-certified OB-GYN supporting women’s health and aesthetics together.",
      "Trusted for labiaplasty and intimate-care procedures with a calm, thorough approach.",
      "Listens first, then proposes a plan that fits you—not a template.",
    ],
    oneLiner: "We decide together, step by step, starting with your story.",
    instagram: "#",
    youtube: "#",
  },
  {
    id: "kim",
    position: "Associate director",
    nameKo: "김현빈",
    nameEn: "Kim Hyunbin",
    image: "/dr-kim.jpg",
    catchCopy: "Dermatology procedures specialist\nDr. Kim Hyunbin, associate director",
    points: [
      "Lead associate for lifting, botulinum toxin, fillers, lasers, and more.",
      "Focus on regeneration, pores, scars, and brightening with natural-looking outcomes.",
      "Meticulous care from consultation through treatment.",
    ],
    oneLiner: "Understanding your skin concerns and recommending what truly fits.",
    instagram: "#",
    youtube: "#",
  },
];
