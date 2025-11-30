import { defineConfig, env } from "prisma/config";
import "dotenv/config";

export default defineConfig({
  schema: "./prisma/schema.prisma",
  migrations: {
    path: "./prisma/migrations",
    seed: "bun prisma/seed.ts",
  },
  datasource: {
    url: process.env.DATABASE_URL as string || env("DATABASE_URL"),
  }
});