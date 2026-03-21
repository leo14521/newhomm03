/** landing 폴더의 이미지 목록 */
export const LANDING_IMAGES = [
  "/landing/3717368605_67e60e75c2e20_EC8B9CEC88A0EB8C80EC8381.jpg",
  "/landing/item01.webp",
  "/landing/main_visual_model.png",
  "/landing/main-model.png",
  "/landing/unnamed.png",
  "/landing/그림1.png",
];

/** 이미지를 순환하면서 가져오는 함수 */
let currentIndex = 0;
export function getNextLandingImage(): string {
  const image = LANDING_IMAGES[currentIndex % LANDING_IMAGES.length];
  currentIndex++;
  return image;
}

/** 특정 인덱스의 이미지를 가져오는 함수 */
export function getLandingImage(index: number): string {
  return LANDING_IMAGES[index % LANDING_IMAGES.length];
}

/** 랜덤 이미지를 가져오는 함수 */
export function getRandomLandingImage(): string {
  const randomIndex = Math.floor(Math.random() * LANDING_IMAGES.length);
  return LANDING_IMAGES[randomIndex];
}
