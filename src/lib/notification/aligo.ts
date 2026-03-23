type AligoSendPayload = {
  receiver: string;
  msg: string;
  title?: string;
};

type AligoSendResult = {
  ok: boolean;
  skipped?: boolean;
  reason?: string;
};

/**
 * 알리고 문자 연동 스텁.
 * - 환경변수가 준비되면 실제 API 호출 로직으로 교체하면 됩니다.
 * - 현재는 운영 영향 없이 no-op으로 동작합니다.
 */
export async function sendAligoSms(_payload: AligoSendPayload): Promise<AligoSendResult> {
  const key = process.env.ALIGO_API_KEY;
  const userId = process.env.ALIGO_USER_ID;
  const sender = process.env.ALIGO_SENDER;

  if (!key || !userId || !sender) {
    return { ok: true, skipped: true, reason: "ALIGO env not configured" };
  }

  // TODO: 알리고 API 실제 연동 지점
  // ex) POST https://apis.aligo.in/send/
  return { ok: true, skipped: true, reason: "ALIGO integration placeholder" };
}

