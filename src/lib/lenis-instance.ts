import type Lenis from "lenis";

let lenisRef: Lenis | null = null;

/** SmoothScroll 마운트 시 등록, 언마운트 시 해제 */
export function setLenisInstance(instance: Lenis | null) {
  lenisRef = instance;
}

export function getLenisInstance(): Lenis | null {
  return lenisRef;
}
