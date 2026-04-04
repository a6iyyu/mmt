import { hash } from "bcryptjs";
import { Prisma } from "@/lib/prisma";

// prettier-ignore
(async () => {
  try {
    console.log("🌱 Seeding database...");

    if (!process.env.SUPERUSER_EMAIL || !process.env.SUPERUSER_PASSWORD) {
      throw new Error("Nama pengguna dan kata sandi admin harus disetel dalam variabel lingkungan.");
    }

    await Prisma.$connect();
    await Prisma.user.deleteMany();
    await Prisma.user.upsert({
      where: { email: process.env.SUPERUSER_EMAIL },
      update: {},
      create: {
        name: "Administrator",
        email: process.env.SUPERUSER_EMAIL as string,
        password: await hash(process.env.SUPERUSER_PASSWORD as string, 10),
      },
    });
  } catch (error: unknown) {
    console.error(`❌ Error seeding: ${error}`);
    process.exit(1);
  } finally {
    console.log("✅ Database seeded.");
    await Prisma.$disconnect();
  }
})();