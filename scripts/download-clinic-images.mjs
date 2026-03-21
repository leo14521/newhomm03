/**
 * 피부과(레스트, 닥터이레이저, BLS, 로렐, 청담밴스) + 산부인과(헤스티아여성의원, 나를위한 산부인과)
 * 예다클리닉 미참고. 여성 케어(소음순·질성형·질필러 등) 이미지는 헤스티아·나를위한 산부인과 참고.
 *
 * 실행: node scripts/download-clinic-images.mjs
 * 저장: public/images/clinic/{분류}/
 */

import https from "https";
import http from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const OUT = path.join(ROOT, "public", "images", "clinic");

/** 색인할 클리닉 (예다클리닉 제외. 산부인과는 헤스티아·나를위한 산부인과만) */
const CRAWL_URLS = [
  "https://www.rest-clinic.com/",
  "https://www.drelaser.com/",
  "https://www.blsclinic2.com/",
  "https://www.laurelclinic.com/",
  "https://cheongdam.vandsclinic.co.kr/",
  "https://www.cd1.co.kr/",
  "https://hestia-womenclinic.co.kr/",
  "https://na-medi.com/",
];

/** URL → 오마쥬 분류 키워드 */
const KEYWORDS = {
  lifting: ["lifting", "리프팅", "ulthera", "울쎄라", "thermage", "써마지", "titanium", "티타늄", "lift", "lf"],
  "skin-booster": ["skin", "스킨", "booster", "부스터", "juvegen", "쥬베룩", "filler", "필러", "skinbooster"],
  body: ["body", "바디", "contour", "리뉴비온", "tunbody", "튠바디"],
  "women-care": [
    "women", "여성", "obgyn", "산부인과", "labia", "소음순", "질", "na-medi", "hestia", "nawe",
    "질필러", "질타이트닝", "질성형", "질축소", "외음부", "유두", "여성성형",
  ],
  consultation: ["consult", "상담", "reservation", "예약", "sub06"],
  philosophy: ["philosophy", "about", "promise", "스토리", "브랜드"],
  interior: ["interior", "인테리어", "clinic", "로비", "lobby", "sub01", "mn01", "inside"],
  device: ["device", "기기", "machine", "시술", "visual", "sub05", "sub03", "mn05", "mn08"],
  illustration: ["illustration", "일러스트", "diagram", "sub08", "img", "figure"],
};

/** 수동 지정 URL — 예다 미사용. 여성 케어는 헤스티아·나를위한·청담산부인과(cd1)만 */
const FALLBACK_LIST = [
  // ----- 여성 케어 (women-care) — 헤스티아여성의원, 나를위한 산부인과, 청담산부인과 -----
  { url: "https://www.cd1.co.kr/wp-content/uploads/2022/07/4g_surgery_img02-1.jpg", localPath: "women-care/01.jpg" },
  { url: "https://hestia-womenclinic.co.kr/data/editor/2208/4fcd5c258473ab91a533b238039c793a_1661138162_6209.jpg", localPath: "women-care/02.jpg" },
  { url: "https://www.cd1.co.kr/wp-content/uploads/2022/02/logo_header.png", localPath: "women-care/03.png" },
  // 나를위한(na-medi.com)·헤스티아 추가 이미지는 크롤 시 자동 수집
];

function get(url) {
  return new Promise((resolve, reject) => {
    const lib = url.startsWith("https") ? https : http;
    lib.get(
      url,
      { timeout: 15000, headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; rv:109.0) Gecko/20100101 Firefox/119.0" } },
      (res) => {
        if (res.statusCode === 301 || res.statusCode === 302) {
          return get(res.headers.location).then(resolve).catch(reject);
        }
        if (res.statusCode !== 200) {
          reject(new Error(`HTTP ${res.statusCode}`));
          return;
        }
        const chunks = [];
        res.on("data", (c) => chunks.push(c));
        res.on("end", () => resolve(Buffer.concat(chunks)));
      }
    ).on("error", reject);
  });
}

function getHtml(url) {
  return get(url).then((buf) => buf.toString("utf-8"));
}

/** HTML에서 img src / data-src 추출 (절대 URL로 정규화) */
function extractImageUrls(html, baseUrl) {
  const base = new URL(baseUrl);
  const out = new Set();
  const re = /<img[^>]+?(?:src|data-src)=["']([^"']+)["']/gi;
  let m;
  while ((m = re.exec(html)) !== null) {
    let u = m[1].trim();
    if (/^data:/.test(u)) continue;
    try {
      out.add(new URL(u, base).href);
    } catch (_) {}
  }
  const re2 = /(?:url|background-image)\s*\(\s*["']?([^"')]+)["']?\s*\)/gi;
  while ((m = re2.exec(html)) !== null) {
    let u = m[1].trim();
    if (/^data:/.test(u)) continue;
    try {
      out.add(new URL(u, base).href);
    } catch (_) {}
  }
  return [...out];
}

/** URL 경로/쿼리를 보고 오마쥬 분류 결정 */
function classifyUrl(url) {
  const lower = url.toLowerCase();
  for (const [category, words] of Object.entries(KEYWORDS)) {
    if (words.some((w) => lower.includes(w))) return category;
  }
  return "main";
}

/** 이미지 확장자만 허용 */
function isImageUrl(url) {
  return /\.(jpg|jpeg|png|webp|gif)(\?|$)/i.test(url) || /\.(jpg|jpeg|png|webp|gif)$/i.test(new URL(url).pathname);
}

async function crawlAndCollect() {
  const collected = new Map(); // url -> category
  for (const baseUrl of CRAWL_URLS) {
    try {
      const html = await getHtml(baseUrl);
      const urls = extractImageUrls(html, baseUrl).filter(isImageUrl);
      for (const u of urls) {
        const cat = classifyUrl(u);
        if (!collected.has(u)) collected.set(u, cat);
      }
      console.log("[CRAWL]", baseUrl, "->", urls.length, "images");
    } catch (e) {
      console.log("[CRAWL SKIP]", baseUrl, e.message);
    }
  }
  return collected;
}

/** 폴더별 인덱스로 로컬 경로 부여 */
function assignLocalPaths(collected) {
  const byCategory = {};
  for (const [url, cat] of collected) {
    if (!byCategory[cat]) byCategory[cat] = [];
    byCategory[cat].push(url);
  }
  const list = [];
  for (const [cat, urls] of Object.entries(byCategory)) {
    urls.forEach((url, i) => {
      const ext = (url.match(/\.(jpg|jpeg|png|webp|gif)(\?|$)/i) || [null, "jpg"])[1];
      list.push({ url, localPath: `${cat}/${String(i + 1).padStart(2, "0")}.${ext}` });
    });
  }
  return list;
}

async function main() {
  if (!fs.existsSync(OUT)) fs.mkdirSync(OUT, { recursive: true });

  let list = [];
  try {
    const collected = await crawlAndCollect();
    list = assignLocalPaths(collected);
    console.log("[CRAWL] Total unique images:", list.length);
  } catch (e) {
    console.log("[CRAWL] Fallback only.", e.message);
  }

  if (list.length === 0) list = FALLBACK_LIST;

  const seen = new Set();
  const uniq = list.filter(({ localPath }) => {
    if (seen.has(localPath)) return false;
    seen.add(localPath);
    return true;
  });

  let ok = 0,
    fail = 0;
  for (const { url, localPath } of uniq) {
    const full = path.join(OUT, localPath);
    const dir = path.dirname(full);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    try {
      fs.writeFileSync(full, await get(url));
      console.log("[OK]", localPath);
      ok++;
    } catch (e) {
      console.log("[SKIP]", localPath, e.message);
      fail++;
    }
  }

  console.log("\nFallback list download (duplicates skipped by path)...");
  const fallbackSeen = new Set();
  for (const { url, localPath } of FALLBACK_LIST) {
    if (fallbackSeen.has(localPath)) continue;
    fallbackSeen.add(localPath);
    const full = path.join(OUT, localPath);
    if (fs.existsSync(full)) continue;
    const dir = path.dirname(full);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    try {
      fs.writeFileSync(full, await get(url));
      console.log("[OK]", localPath);
      ok++;
    } catch (e) {
      console.log("[SKIP]", localPath, e.message);
      fail++;
    }
  }

  console.log("\nDone.", ok, "saved,", fail, "skipped. Path: public/images/clinic/");
}

main();
