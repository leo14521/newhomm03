/** 숫자만 남기고, +82 / 82 로 시작하면 0 접두로 통일 */
export function normalizeKrMobile(input: string): string {
  let d = input.replace(/\D/g, "");
  if (d.startsWith("82") && d.length >= 11) {
    d = `0${d.slice(2)}`;
  }
  return d;
}

/** 국내 휴대폰 번호 (하이픈 없이) */
export function isValidKrMobile(digits: string): boolean {
  return /^01[016789]\d{7,8}$/.test(digits);
}
