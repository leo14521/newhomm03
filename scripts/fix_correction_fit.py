# -*- coding: utf-8 -*-
import pathlib

p = pathlib.Path(__file__).resolve().parents[1] / "src/app/signature/correction-fit/CorrectionFitView.tsx"
text = p.read_text(encoding="utf-8", errors="replace")
start = text.index("const SV_ITEMS")
end = text.index("export default function")
new_block = r'''const SV_ITEMS = [
  { label: "시술시간", value: "도자/롤러/글러브 10분 내외\n니들쉐이핑 20 - 30분" },
  { label: "마취여부", value: "니들 쉐이핑 시\n연고 마취\n(30~40분 소요)" },
  { label: "회복기간", value: "즉시생활가능" },
  { label: "유지기간", value: "개인 차 있음" },
];

const ROUND_ITEMS = [
  "피부결, 피부톤\n개선 효과",
  "보습 효과",
  "타이트닝 효과",
  "피부 두께 증가\n(0.2~0.3mm)",
];

const PRINCIPLE_STEPS = [
  { img: "corage-img3.png", title: "공명 에너지 전달", sub: "노후 섬유아세포 탈락" },
  { img: "corage-img4.png", title: "공명 현상에 의해 세포분열 및 증식", sub: "새로운 섬유아세포\n(Baby collagen/Elastin) 생성" },
  { img: "corage-img5.png", title: "콜라겐 재생 및 주름 개선", sub: "탄력/진피\n두께(0.2~0.3mm) 증가" },
];

const HANDPIECES = [
  { img: "corage-img7.png", name: "스킨 롤러 핸드피스", desc: "피부와 피부 속 세포에 코레지 멀티 파장을 집중하여 전달", note: "* 시술 시 발생되는 코레지 멀티파장으로 피부(표피)는 물론 피부 속 세포를 자극합니다.\n* 모공축소, 토닝 효과를 기대할 수 있습니다." },
  { img: "corage-img8.png", name: "스킨 모노 핸드피스", desc: "피부와 피부 속 세포에 코레지 멀티 파장을 일정하게 전달", note: "* 16가지 파장의 코레지 멀티파장을 세라믹 스톤으로 피부를 강하지만 부드럽게 풀어줍니다.\n* 진피 두께가 증가함으로써 타이트닝 효과를 기대할 수 있습니다." },
  { img: "corage-img9.png", name: "스킨 글러브 핸드피스", desc: "피부와 피부 속 세포에 글로브를 낀 손가락을 통해 강도 조절하여 전달", note: "* 글로브에서 나오는 코레지 멀티파장으로 부드럽게 때론 강하게 에너지를 피부와 피부 속 세포에 전달합니다.\n* 피부재생, 주름개선 효과를 기대할 수 있습니다." },
];

const RECOMMEND = [
  "저하된 피부 탄력을 개선하고 싶으신 분",
  "피부 노화 예방을 원하시는 분",
  "피부결 개선이 필요하신 분",
  "주름 감소 효과를 기대하시는 분",
  "피부 건강에 도움을 받고 싶으신 분",
  "여드름 등 피부 질환이 고민이신 분",
];

const PROCESS = [
  "맞춤상담",
  "클렌징",
  "사진촬영",
  "마취(연고마취)",
  "코레지 롤러\n+도자+글러브+니들",
  "재생크림+재생레이저",
  "마무리",
];

const QNA = [
  { q: "코레지가 무엇인가요?", a: "코레지는 다중파장의 고주파를 이용한 공명파 장비입니다. 글러브, 롤러, 도자 3가지 핸드피스를 이용하여 다양한 에너지를 피부에 맞춤으로 전달하여 피부세포 활성도를 높이는 시술입니다." },
  { q: "코레지는 어떤 효과가 있나요?", a: "코레지는 다중파장 고주파 장비로 공명파를 이용한 cell fitness 작용으로 피부 세포 활성화, 세포 재생 유도, 피부 탄력 증가, 주름 개선, 피부결 개선, 여드름 등 피부질환 개선 등의 다양한 효과를 기대할 수 있습니다." },
  { q: "시술 시 통증은 어떤가요?", a: "시술 시 통증은 개인차가 있을 수 있습니다." },
];

const CAUTIONS = [
  "시술 당일 과음, 사우나, 수영장 출입, 격한 운동은 피해주시기 바랍니다.",
  "스크럽제와 같은 피부에 자극에 되는 홈 케어는 1주일 뒤에 하시기 바랍니다.",
  "부기, 멍, 가려움증의 증상은 자연스럽게 사라집니다.",
  "시술 후 시술 부위가 심한 고온과 저온에 노출되지 않도록 주의해 주세요.",
];

const PROMISE_ITEMS = [
  { num: 1, title: "편히쉬세요", desc: "모든 베드는 청결하게 세탁된 침구를 사용합니다.\n더욱 포근하고 편안한 시간을 전합니다." },
  { num: 2, title: "걱정마세요", desc: "클렌징 스펀지는 1회용 해면, 살균·소독 스펀지를 사용합니다.\n예민한 피부라도 걱정은 내려놓으세요." },
  { num: 3, title: "골라보세요", desc: "오마쥬클리닉에서\n피부 전문가가 만든 프리미엄 스킨케어를 직접 경험해보세요." },
  { num: 4, title: "안심하세요", desc: "모든 기기와 시술 도구들은\n전문가의 관리하에 엄격하게 멸균하고 성능을 유지하고 있습니다." },
  { num: 5, title: "말해주세요", desc: "모든 시술은\n개인의 상태와 특성, 고민을 꼼꼼히 반영한 의료진의 명확한 진단하에 이루어집니다." },
  { num: 6, title: "맡겨주세요", desc: "단 한병이라도,\n공식 수입절차를 거쳐 정품을 정량으로 안전하게 시술하고 있습니다." },
];

'''
text = text[:start] + new_block + text[end:]

middle = r'''      {/* 코레지는 어떤 시술일까요? */}
      <section className="section-block bg-[var(--bg-page)]">
        <div className="mx-auto max-w-[900px]">
          <div className="sec-head text-center">
            <span className="sec-label block">코레지는 어떤 시술일까요?</span>
            <h2 className="sec-title mt-2">코레지</h2>
          </div>
          <div className="mt-10 font-[family-name:var(--font-kr-body)] text-[15px] leading-[1.9] text-[var(--text-secondary)]">
            <p>
              코레지(Corage Cell Fitness)는 기존 고주파 장비와 달리
              <br />
              16가지 공명 파장을 이용하는 QMR Technology(미국 Telea사의 특허) 기술로
              <br />
              1초에 최대 6천2백만 번의 고속진동으로 세포를 자극, 재생시켜 콜라겐을 리빌드합니다.
            </p>
            <p className="mt-6">
              미국에서도 널리 연구·활용될 만큼 세포 재생 효과가 뛰어난 QMR 공명기술이 코레지에
              <br />
              시술 후 피부 노화 예방, 피부 탄력 증가, 모공 타이트닝과 주름 감소,
              <br />
              피부결 개선, 여드름 등 피부질환 개선 등의 효과를 기대할 수 있습니다.
            </p>
          </div>
        </div>
      </section>

      {/* Point 1 - 피부 광채 리프팅 */}
      <section className="section-block bg-[var(--bg-card)]">
        <div className="mx-auto max-w-[900px] text-center">
          <div className="flex flex-col items-center gap-8">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${CORAGE}/corage-img.png`} alt="Corage" className="max-h-[320px] w-auto object-contain" />
            <p className="text-[18px] lg:text-[22px] text-[var(--text-primary)]">
              피부 속 빛을 찾아주는
              <br />
              <span className="font-semibold">피부 광채 리프팅</span>
            </p>
          </div>
        </div>
      </section>

      {/* Point 2 - 4가지 효과 */}
      <section className="section-block bg-[var(--bg-page)]">
        <div className="mx-auto max-w-[900px]">
          <div className="flex flex-col items-center gap-10 lg:flex-row lg:justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${CORAGE}/corage-img2.png`} alt="Corage" className="max-h-[280px] w-auto object-contain" />
            <ul className="flex flex-wrap justify-center gap-4">
              {ROUND_ITEMS.map((text, i) => (
                <li key={i} className="flex h-28 w-28 items-center justify-center rounded-full border-2 border-[var(--text-primary)]/20 bg-[var(--bg-card)] text-center text-[14px] font-medium leading-snug text-[var(--text-primary)] lg:h-32 lg:w-32">
                  {text.split("\n").map((line, j) => (
                    <span key={j}>{line}<br /></span>
                  ))}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Point 3 - 코레지 원리 */}
      <section className="section-block bg-[var(--bg-card)]">
        <div className="mx-auto max-w-[1000px]">
          <div className="sec-head text-center">
            <span className="sec-label block">코레지는 어떤 원리로 작용할까요?</span>
            <h2 className="sec-title mt-2">코레지 원리</h2>
          </div>
          <div className="mt-12 flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-14">
            <div className="flex-shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`${CORAGE}/corage-img10.png`} alt="QMR TECHNOLOGY" className="max-h-[300px] w-auto" />
            </div>
            <div className="space-y-6 text-[15px] leading-[1.85] text-[var(--text-secondary)]">
              <p>
                특허 기술인 <b className="text-[var(--text-primary)]">QMR Technology</b>는 <span className="text-[var(--text-primary)]">16가지 공명 파장</span>으로 1초에 <span className="text-[var(--text-primary)]">최대 6천2백만 번</span>의 세포 진동과 동시에 <span className="text-[var(--text-primary)]">세포 재생·활성</span>을 촉진해 콜라겐을 리빌드하고 <span className="text-[var(--text-primary)]">조직 손상 없이 피부를 건강</span>하게 만듭니다.
              </p>
              <p>
                <span className="text-[var(--text-primary)] font-medium">3가지 핸드피스로 맞춤 치료</span>는, 16개의 파장이 피부 깊이까지 전달되어 <span className="text-[var(--text-primary)]">몸속 이온의 전후 이동, 극성 분자의 회전운동</span>을 유도하는 기술을 담고 있습니다.
              </p>
            </div>
          </div>
          <ul className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {PRINCIPLE_STEPS.map((step, i) => (
              <li key={i} className="text-center">
                <div className="flex justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`${CORAGE}/${step.img}`} alt="" className="h-24 w-auto object-contain" />
                </div>
                <span className="mt-4 block font-medium text-[var(--text-primary)]">{step.title}</span>
                <p className="mt-1 whitespace-pre-line text-[14px] text-[var(--text-secondary)]">{step.sub}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Point 4 - 16가지 파장 */}
      <section className="section-block bg-[var(--bg-page)]">
        <div className="mx-auto max-w-[900px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`${CORAGE}/corage-img11.png`} alt="피부에 전달되는 16가지 파장" className="w-full object-contain" />
        </div>
      </section>

      {/* Point 5 - 3가지 핸드피스 */}
      <section className="section-block bg-[var(--bg-card)]">
        <div className="mx-auto max-w-[1000px]">
          <div className="sec-head text-center">
            <span className="sec-label block">코레지 특징은 무엇일까요?</span>
            <h2 className="sec-title mt-2">코레지 특징</h2>
          </div>
          <div className="mt-10 flex justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${CORAGE}/corage-img12.png`} alt="" className="max-h-[200px] w-auto" />
          </div>
          <h3 className="mt-12 text-center text-[20px] font-medium text-[var(--text-primary)]">피부 맞춤 <b>3가지 핸드피스</b></h3>
          <ul className="mt-10 space-y-12">
            {HANDPIECES.map((hp, i) => (
              <li key={i} className="flex flex-col gap-6 rounded-lg border border-[var(--border-page)] bg-[var(--bg-page)] p-8 lg:flex-row lg:items-start">
                <div className="flex-shrink-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`${CORAGE}/${hp.img}`} alt="" className="h-32 w-auto object-contain" />
                </div>
                <div>
                  <span className="block font-medium text-[var(--text-primary)]">{hp.name}</span>
                  <p className="mt-2 text-[15px] leading-relaxed text-[var(--text-secondary)]">{hp.desc}</p>
                  <p className="mt-4 whitespace-pre-line text-[14px] leading-relaxed text-[var(--text-secondary)]">{hp.note}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

'''

tail_marker = "      {/* Card"
i0 = text.find(tail_marker)
i1 = text.rfind("      </section>", 0, i0)
# end of HANDPIECES section: last </section> before Card comment
# find start: after hero's closing section — first `{/*` after Thumb hero block
thumb = text.index("{/* Thumb / Hero */}")
i_hero_end = text.index("      </section>", text.index("SV_ITEMS.map", thumb)) + len("      </section>")
while text[i_hero_end] in "\n\r ":
    i_hero_end += 1
if text[i_hero_end : i_hero_end + 1] == "\n":
    i_hero_end += 1
# skip blank lines
while text.startswith("\n", i_hero_end):
    i_hero_end += 1
i_mid_start = text.index("      {/*", i_hero_end)
text = text[:i_mid_start] + middle + text[i0:]

# Fix broken img alt / Q&A chevron / CTA strings
text = text.replace(
    'alt="?????? ???? className="w-full rounded-lg object-cover"',
    'alt="코레지 시술" className="w-full rounded-lg object-cover"',
)
text = text.replace('aria-hidden>??/span>', 'aria-hidden>▼</span>')

p.write_text(text, encoding="utf-8")
print("patched full", p)
