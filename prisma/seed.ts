import { hash } from "bcryptjs";
import { Prisma } from "@/lib/prisma";

(async () => {
  try {
    console.log(`🌱 Seeding database...`);
    await Prisma.$connect();
    await Prisma.pengguna.deleteMany();
    await Prisma.pengguna.createMany({
      data: [
        {
          nama_lengkap: "Administrator",
          surel: process.env.SUPERUSER_USERNAME as string,
          kata_sandi: await hash(process.env.SUPERUSER_PASSWORD as string, 10),
          peran: "ADMIN",
        },
      ],
    });
  } catch (error: unknown) {
    console.error(`❌ Error seeding database: ${error}.`);
    process.exit(1);
  } finally {
    console.log(`✅ Database seeded.`);
    await Prisma.$disconnect();
  }
})();