import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { isValidKrMobile, normalizeKrMobile } from "@/lib/phone-kr";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
    const password = typeof body.password === "string" ? body.password : "";
    const name = typeof body.name === "string" ? body.name.trim() : undefined;
    const phone = normalizeKrMobile(typeof body.phone === "string" ? body.phone : "");
    const phoneCode = typeof body.phoneCode === "string" ? body.phoneCode.replace(/\D/g, "") : "";
    const agreeTerms = body.agreeTerms === true;
    const agreePrivacy = body.agreePrivacy === true;
    const marketingOptIn = body.marketingOptIn === true;

    if (!agreeTerms || !agreePrivacy) {
      return NextResponse.json(
        { error: "서비스 이용약관 및 개인정보 처리방침에 동의해 주세요." },
        { status: 400 }
      );
    }

    if (!email || !password) {
      return NextResponse.json({ error: "이메일과 비밀번호를 입력해 주세요." }, { status: 400 });
    }
    if (password.length < 8) {
      return NextResponse.json({ error: "비밀번호는 8자 이상이어야 합니다." }, { status: 400 });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "올바른 이메일 형식이 아닙니다." }, { status: 400 });
    }

    if (!isValidKrMobile(phone)) {
      return NextResponse.json({ error: "올바른 휴대폰 번호를 입력해 주세요." }, { status: 400 });
    }
    if (!/^\d{6}$/.test(phoneCode)) {
      return NextResponse.json({ error: "6자리 인증번호를 입력해 주세요." }, { status: 400 });
    }

    const existsEmail = await prisma.user.findUnique({ where: { email } });
    if (existsEmail) {
      return NextResponse.json({ error: "이미 가입된 이메일입니다." }, { status: 409 });
    }

    const existsPhone = await prisma.user.findUnique({ where: { phone } });
    if (existsPhone) {
      return NextResponse.json({ error: "이미 가입된 휴대폰 번호입니다." }, { status: 409 });
    }

    const record = await prisma.phoneVerification.findFirst({
      where: {
        phone,
        consumedAt: null,
        expiresAt: { gt: new Date() },
      },
      orderBy: { createdAt: "desc" },
    });

    if (!record) {
      return NextResponse.json(
        { error: "인증번호를 먼저 요청하고, 유효 시간 내에 입력해 주세요." },
        { status: 400 }
      );
    }

    const codeOk = await bcrypt.compare(phoneCode, record.codeHash);
    if (!codeOk) {
      return NextResponse.json({ error: "인증번호가 올바르지 않습니다." }, { status: 400 });
    }

    const passwordHash = await bcrypt.hash(password, 12);
    const termsAcceptedAt = new Date();

    await prisma.$transaction([
      prisma.phoneVerification.update({
        where: { id: record.id },
        data: { consumedAt: new Date() },
      }),
      prisma.user.create({
        data: {
          email,
          passwordHash,
          name: name || null,
          phone,
          termsAcceptedAt,
          marketingOptIn,
          role: "USER",
        },
      }),
    ]);

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "회원가입 처리 중 오류가 발생했습니다." }, { status: 500 });
  }
}
