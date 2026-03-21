import Link from "next/link";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[var(--bg-page)] px-6 pb-24 pt-[calc(var(--header-height)+2rem)] text-[var(--text-primary)] lg:pt-[calc(var(--header-h)+2rem)]">
      <div className="mx-auto max-w-[640px]">
        <p className="sec-label mb-2 uppercase">Legal</p>
        <h1 className="font-[family-name:var(--font-kr-heading)] text-[clamp(22px,3vw,28px)] font-medium">서비스 이용약관</h1>
        <p className="mt-4 text-[14px] leading-relaxed text-[var(--text-secondary)]">
          본 약관은 오마쥬 클리닉(이하 &quot;클리닉&quot;)이 제공하는 웹사이트 및 관련 서비스 이용과 관련하여 클리닉과 이용자 간의 권리·의무를
          규정합니다. 실제 법률 검토 후 병원 정책에 맞게 수정하여 사용하시기 바랍니다.
        </p>
        <ol className="mt-8 list-decimal space-y-4 pl-5 text-[14px] leading-relaxed text-[var(--text-secondary)]">
          <li>
            <strong className="text-[var(--text-primary)]">목적</strong>
            <p className="mt-1">본 약관은 서비스 이용 조건 및 절차, 클리닉과 이용자의 책임사항을 정하는 것을 목적으로 합니다.</p>
          </li>
          <li>
            <strong className="text-[var(--text-primary)]">회원가입</strong>
            <p className="mt-1">
              이용자는 사실에 근거한 정보를 제공해야 하며, 휴대폰 인증 등 클리닉이 정한 절차를 거쳐 가입을 완료합니다.
            </p>
          </li>
          <li>
            <strong className="text-[var(--text-primary)]">계정 및 보안</strong>
            <p className="mt-1">이용자는 계정 정보를 타인에게 공유하지 않으며, 도용이 의심될 경우 즉시 클리닉에 알려야 합니다.</p>
          </li>
          <li>
            <strong className="text-[var(--text-primary)]">서비스 변경</strong>
            <p className="mt-1">클리닉은 운영상·기술상 필요에 따라 서비스 내용을 변경하거나 중단할 수 있습니다.</p>
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
