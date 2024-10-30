import { PrismaClient } from "@prisma/client";

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

export const db = (globalThis as typeof globalThis & { prisma: PrismaClient | undefined }).prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalThis.prisma = db;
