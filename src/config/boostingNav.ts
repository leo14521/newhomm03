/** 부스팅 허브 카드 순서 — 카피는 `messages.ts` → `boosting.prog.*` */
export const BOOSTING_PROGRAM_ORDER = [
  { href: "/signature/rejuran", progKey: "rejuran" },
  { href: "/signature/litoo", progKey: "litoo" },
  { href: "/signature/juvelook", progKey: "juvelook" },
  { href: "/signature/skinvive", progKey: "skinvive" },
  { href: "/signature/hilo-wave", progKey: "hilo" },
  { href: "/signature/juvegen", progKey: "juvegen" },
  { href: "/signature/exosome", progKey: "exosome" },
] as const;

export type BoostingProgKey = (typeof BOOSTING_PROGRAM_ORDER)[number]["progKey"];
