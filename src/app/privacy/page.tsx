import Link from "next/link";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[var(--bg-page)] px-6 pb-24 pt-[calc(var(--header-height)+2rem)] text-[var(--text-primary)] lg:pt-[calc(var(--header-h)+2rem)]">
      <div className="mx-auto max-w-[640px]">
        <p className="sec-label mb-2 uppercase">Legal</p>
        <h1 className="font-[family-name:var(--font-kr-heading)] text-[clamp(22px,3vw,28px)] font-medium">개인정보 처리방침</h1>
        <p className="mt-4 text-[14px] leading-relaxed text-[var(--text-secondary)]">
          오마쥬 클리닉(이하 &quot;클리닉&quot;)은 개인정보보호법 등 관련 법령에 따라 이용자의 개인정보를 보호합니다. 아래 내용은 예시이며,
          실제 운영 정책·법률 자문에 따라 반드시 보완해야 합니다.
        </p>
        <ol className="mt-8 list-decimal space-y-4 pl-5 text-[14px] leading-relaxed text-[var(--text-secondary)]">
          <li>
            <strong className="text-[var(--text-primary)]">수집 항목</strong>
            <p className="mt-1">회원가입 시 이메일, 비밀번호(암호화 저장), 휴대폰 번호, 이름(선택) 등을 수집할 수 있습니다.</p>
          </li>
          <li>
            <strong className="text-[var(--text-primary)]">이용 목적</strong>
            <p className="mt-1">회원 식별, 상담·예약 관련 연락, 서비스 제공 및 품질 개선, 법령상 의무 이행 등에 이용합니다.</p>
          </li>
          <li>
            <strong className="text-[var(--text-primary)]">보관 및 파기</strong>
            <p className="mt-1">수집 목적이 달성되거나 법령에서 정한 기간이 지나면 지체 없이 파기합니다.</p>
          </li>
          <li>
            <strong className="text-[var(--text-primary)]">이용자 권리</strong>
            <p className="mt-1">이용자는 개인정보 열람·정정·삭제·처리정지를 요청할 수 있으며, 클리닉은 지체 없이 조치합니다.</p>
          </li>
        </ol>
        <p className="mt-10 text-center">
          <Link href="/register" className="text-[13px] text-[var(--accent-terracotta-dark)] underline underline-offset-4">
            ← 회원가입으로
          </Link>
        </p>
      </div>
    </main>
  );
}
