import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { PrismaClient } from "@/lib/generated/prisma/client";
import "dotenv/config";

export const Prisma = new PrismaClient({
  adapter: new PrismaMariaDb({
    host: new URL(process.env.DATABASE_URL as string).hostname,
    port: parseInt(new URL(process.env.DATABASE_URL as string).port),
    user: new URL(process.env.DATABASE_URL as string).username,
    password: new URL(process.env.DATABASE_URL as string).password,
    database: new URL(process.env.DATABASE_URL as string).pathname.substring(1),
  }),
});