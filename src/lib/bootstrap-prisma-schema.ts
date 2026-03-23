import { prisma } from "@/lib/prisma";

// 운영 DB에 Prisma 스키마가 아직 반영되지 않았을 때(예: Consultation 테이블 없음)
// admin 페이지 진입 시점에 최소 스키마를 자동 생성하도록 돕습니다.
//
// 주의:
// - 실제 운영에서는 prisma migrate/db push로 관리하는 것이 정석입니다.
// - 여기서는 "테이블 없음" 상황을 빠르게 복구하기 위한 안전 장치입니다.
export async function ensureHommageSchema() {
  // CREATE IF NOT EXISTS를 사용하므로 재실행해도 안전합니다.
  await prisma.$executeRawUnsafe(`
    CREATE TABLE IF NOT EXISTS "User" (
      "id" TEXT PRIMARY KEY,
      "email" TEXT NOT NULL UNIQUE,
      "passwordHash" TEXT NOT NULL,
      "name" TEXT,
      "phone" TEXT,
      "termsAcceptedAt" TIMESTAMPTZ,
      "marketingOptIn" BOOLEAN NOT NULL DEFAULT FALSE,
      "role" TEXT NOT NULL DEFAULT 'USER',
      "createdAt" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      CONSTRAINT "User_phone_unique" UNIQUE ("phone")
    );
  `);

  await prisma.$executeRawUnsafe(`
    CREATE TABLE IF NOT EXISTS "PhoneVerification" (
      "id" TEXT PRIMARY KEY,
      "phone" TEXT NOT NULL,
      "codeHash" TEXT NOT NULL,
      "expiresAt" TIMESTAMPTZ NOT NULL,
      "consumedAt" TIMESTAMPTZ,
      "createdAt" TIMESTAMPTZ NOT NULL DEFAULT NOW()
    );
  `);
  await prisma.$executeRawUnsafe(`
    CREATE INDEX IF NOT EXISTS "PhoneVerification_phone_idx"
    ON "PhoneVerification" ("phone");
  `);

  await prisma.$executeRawUnsafe(`
    CREATE TABLE IF NOT EXISTS "Consultation" (
      "id" TEXT PRIMARY KEY,
      "name" TEXT NOT NULL,
      "phone" TEXT NOT NULL,
      "interest" TEXT,
      "message" TEXT,
      "status" TEXT NOT NULL DEFAULT 'NEW',
      "visitType" TEXT NOT NULL DEFAULT 'NEW_PATIENT',
      "privacyConsentAt" TIMESTAMPTZ,
      "createdAt" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      "userId" TEXT
    );
  `);
  await prisma.$executeRawUnsafe(`
    ALTER TABLE "Consultation"
    ADD COLUMN IF NOT EXISTS "visitType" TEXT NOT NULL DEFAULT 'NEW_PATIENT';
  `);

  await prisma.$executeRawUnsafe(`
    DO $$
    BEGIN
      IF NOT EXISTS (
        SELECT 1
        FROM pg_constraint
        WHERE conname = 'Consultation_userId_fkey'
      ) THEN
        ALTER TABLE "Consultation"
        ADD CONSTRAINT "Consultation_userId_fkey"
        FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL;
      END IF;
    END $$;
  `);

  await prisma.$executeRawUnsafe(`
    CREATE INDEX IF NOT EXISTS "Consultation_phone_idx"
    ON "Consultation" ("phone");
  `);
}

