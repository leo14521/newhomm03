import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth-options";
import { prisma } from "@/lib/prisma";
import { notifyConsultationUpdate } from "@/lib/notification/consultation-events";

const ALLOWED_STATUS = ["NEW", "CONTACTED", "DONE"];
const ALLOWED_VISIT_TYPE = ["NEW_PATIENT", "FIRST_VISIT", "RETURN_VISIT"];

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions);
  if (!session?.user || session.user.role !== "ADMIN") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const body = await req.json().catch(() => ({}));
  const name = typeof body.name === "string" ? body.name.trim() : "";
  const phone = typeof body.phone === "string" ? body.phone.trim() : "";
  const interest = typeof body.interest === "string" ? body.interest.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";
  const status = typeof body.status === "string" ? body.status : "";
  const visitType = typeof body.visitType === "string" ? body.visitType : "";

  const data: {
    name?: string;
    phone?: string;
    interest?: string | null;
    message?: string | null;
    status?: string;
    visitType?: string;
  } = {};
  if (name) data.name = name;
  if (phone) data.phone = phone;
  if ("interest" in body) data.interest = interest || null;
  if ("message" in body) data.message = message || null;
  if (status) {
    if (!ALLOWED_STATUS.includes(status)) {
      return NextResponse.json({ error: "Invalid status" }, { status: 400 });
    }
    data.status = status;
  }
  if (visitType) {
    if (!ALLOWED_VISIT_TYPE.includes(visitType)) {
      return NextResponse.json({ error: "Invalid visitType" }, { status: 400 });
    }
    data.visitType = visitType;
  }
  if (!data.status && !data.visitType && !data.name && !data.phone && !("interest" in data) && !("message" in data)) {
    return NextResponse.json({ error: "No update field provided" }, { status: 400 });
  }

  try {
    const updated = await prisma.consultation.update({
      where: { id: params.id },
      data,
    });

    try {
      await notifyConsultationUpdate({
        name: updated.name,
        phone: updated.phone,
        status: updated.status,
        visitType: updated.visitType,
      });
    } catch {
      // 알리고 연동 실패는 관리자 상태 변경 자체를 막지 않음
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
}

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions);
  if (!session?.user || session.user.role !== "ADMIN") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  try {
    await prisma.consultation.delete({
      where: { id: params.id },
    });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
}
