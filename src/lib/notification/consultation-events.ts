import { sendAligoSms } from "@/lib/notification/aligo";

type ConsultationEventInput = {
  name: string;
  phone: string;
  status: string;
  visitType: string;
};

const STATUS_LABEL: Record<string, string> = {
  NEW: "신규",
  CONTACTED: "연락함",
  DONE: "완료",
};

const VISIT_LABEL: Record<string, string> = {
  NEW_PATIENT: "신환",
  FIRST_VISIT: "초진",
  RETURN_VISIT: "재진",
};

export async function notifyConsultationUpdate(input: ConsultationEventInput) {
  const statusKo = STATUS_LABEL[input.status] ?? input.status;
  const visitKo = VISIT_LABEL[input.visitType] ?? input.visitType;
  const receiver = process.env.ALIGO_RECEIVER_FALLBACK || process.env.ALIGO_SENDER || "";
  if (!receiver) return;

  await sendAligoSms({
    receiver,
    title: "[HOMMAGE] 상담 상태 변경",
    msg: `상담 상태 업데이트\n고객: ${input.name}\n연락처: ${input.phone}\n상태: ${statusKo}\n내원: ${visitKo}`,
  });
}

