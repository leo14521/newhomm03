import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth-options";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const name = typeof body.name === "string" ? body.name.trim() : "";
    const phone = typeof body.phone === "string" ? body.phone.trim() : "";
    const interest = typeof body.interest === "string" ? body.interest.trim() : "";
    const message = typeof body.message === "string" ? body.message.trim() : "";
    const privacyConsent = body.privacyConsent === true;

    if (!name || !phone) {
      return NextResponse.json({ error: "성함과 연락처는 필수입니다." }, { status: 400 });
    }

    if (!privacyConsent) {
      return NextResponse.json({ error: "개인정보 수집·이용에 동의해 주세요." }, { status: 400 });
    }

    const session = await getServerSession(authOptions);
    const userId = session?.user?.id;

    await prisma.consultation.create({
      data: {
        name,
        phone,
        interest: interest || null,
        message: message || null,
        privacyConsentAt: new Date(),
        userId: userId ?? null,
      },
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "상담 신청 처리 중 오류가 발생했습니다." }, { status: 500 });
  }
}
