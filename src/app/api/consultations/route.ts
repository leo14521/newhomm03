import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth-options";
import { prisma } from "@/lib/prisma";
import { ensureHommageSchema } from "@/lib/bootstrap-prisma-schema";

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
    // 고정 관리자 세션(admin-fixed)은 DB User FK 대상이 아니므로 userId를 비워 저장
    const sessionUserId = session?.user?.id;
    const userId = sessionUserId && sessionUserId !== "admin-fixed" ? sessionUserId : null;

    const payload = {
      name,
      phone,
      interest: interest || null,
      message: message || null,
      visitType: "NEW_PATIENT",
      privacyConsentAt: new Date(),
      userId,
    };

    try {
      // 동일 유저가 아주 짧은 시간 내 연속 클릭 시 중복 저장 방지
      const duplicated = await prisma.consultation.findFirst({
        where: {
          name,
          phone,
          interest: interest || null,
          message: message || null,
          createdAt: {
            gte: new Date(Date.now() - 60 * 1000),
          },
        },
        select: { id: true },
      });
      if (duplicated) {
        return NextResponse.json({ ok: true, deduped: true });
      }

      await prisma.consultation.create({ data: payload });
    } catch (error) {
      const messageText = error instanceof Error ? error.message : "";
      // 운영 DB에 테이블이 아직 없는 경우 자동 복구 후 1회 재시도
      if (messageText.toLowerCase().includes("does not exist")) {
        await ensureHommageSchema();
        await prisma.consultation.create({ data: payload });
      } else {
        throw error;
      }
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    const msg = error instanceof Error ? error.message : "";
    return NextResponse.json(
      { error: msg ? `상담 신청 처리 중 오류가 발생했습니다. (${msg})` : "상담 신청 처리 중 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
