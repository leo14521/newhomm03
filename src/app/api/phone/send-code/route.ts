import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { isValidKrMobile, normalizeKrMobile } from "@/lib/phone-kr";

const CODE_TTL_MS = 5 * 60 * 1000;
const RESEND_COOLDOWN_MS = 60 * 1000;

/** phone → 마지막 발송 시각 (프로세스 메모리, 서버리스에서는 제한적) */
const lastSent = new Map<string, number>();

function randomSixDigitCode(): string {
  return String(Math.floor(100000 + Math.random() * 900000));
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const raw = typeof body.phone === "string" ? body.phone : "";
    const phone = normalizeKrMobile(raw);

    if (!isValidKrMobile(phone)) {
      return NextResponse.json({ error: "올바른 휴대폰 번호를 입력해 주세요." }, { status: 400 });
    }

    const now = Date.now();
    const prev = lastSent.get(phone) ?? 0;
    if (now - prev < RESEND_COOLDOWN_MS) {
      const waitSec = Math.ceil((RESEND_COOLDOWN_MS - (now - prev)) / 1000);
      return NextResponse.json(
        { error: `인증번호는 ${waitSec}초 후에 다시 요청할 수 있습니다.` },
        { status: 429 }
      );
    }

    const mockFixed = process.env.MOCK_PHONE_VERIFY_CODE?.trim();
    const code =
      process.env.NODE_ENV === "development" && mockFixed && /^\d{6}$/.test(mockFixed)
        ? mockFixed
        : randomSixDigitCode();

    const codeHash = await bcrypt.hash(code, 10);
    const expiresAt = new Date(now + CODE_TTL_MS);

    await prisma.$transaction([
      prisma.phoneVerification.deleteMany({
        where: { phone, consumedAt: null },
      }),
      prisma.phoneVerification.create({
        data: { phone, codeHash, expiresAt },
      }),
    ]);

    lastSent.set(phone, now);

    if (process.env.NODE_ENV === "development") {
      console.info(`[phone-verify] ${phone} 인증번호: ${code} (5분 유효)`);
    }

    return NextResponse.json({
      ok: true,
      /** 개발 전용: 콘솔에도 동일 코드가 출력됩니다 */
      devHint: process.env.NODE_ENV === "development" ? "터미널에 인증번호가 출력됩니다." : undefined,
    });
  } catch {
    return NextResponse.json({ error: "인증번호 발송 처리 중 오류가 발생했습니다." }, { status: 500 });
  }
}
