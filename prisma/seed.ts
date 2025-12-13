import { hash } from "bcryptjs";
import { PrismaClientKnownRequestError } from "@/lib/generated/prisma/internal/prismaNamespace";
import { Prisma } from "@/lib/prisma";
import { PrismaClientValidationError } from "@prisma/client/runtime/client";

(async () => {
  try {
    console.log(`🌱 Seeding database...`);
    await Prisma.$connect();
    await Prisma.pengguna.deleteMany();
    await Prisma.pengguna.createMany({
      data: [
        {
          nama_lengkap: "Administrator",
          surel: process.env.SUPERUSER_EMAIL as string,
          kata_sandi: await hash(process.env.SUPERUSER_PASSWORD as string, 10),
        },
      ],
    });
  } catch (error: unknown) {
    if (error instanceof PrismaClientValidationError) console.error(`❌ [PrismaClientValidationError] Error seeding database: ${error.message}.`);
    else if (error instanceof PrismaClientKnownRequestError) console.error(`❌ [PrismaClientKnownRequestError] Error seeding database: ${error.cause}.`);
    else console.error(`❌ [Unknown Error] Error seeding database: ${error instanceof Error ? error.message : String(error)}.`);
    process.exit(1);
  } finally {
    console.log(`✅ Database seeded.`);
    await Prisma.$disconnect();
  }
})();
