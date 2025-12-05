import { compare } from "bcryptjs";
import { SignJWT } from "jose";
import { cookies as cookieStore } from "next/headers";
import { NextResponse, NextRequest } from "next/server";
import { UserLoginSchema } from "@/app/api/auth/login/user.schema";
import { API_AUTH_LOGIN } from "@/constants/route";
import { Prisma } from "@/lib/prisma";

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const body = await request.json();
    const result = UserLoginSchema.safeParse(body);
    const cookies = await cookieStore();

    if (!result.success) {
      console.error(`❌ Validasi gagal pada rute ${API_AUTH_LOGIN}: ${result.error.message}`);
      return NextResponse.json({ message: "Data tidak valid." }, { status: 400 });
    }

    console.log(`🗒️ Isi permintaan dari klien: ${JSON.stringify(result.data)}`)
    console.log(`🔐 Mencoba masuk pada rute ${API_AUTH_LOGIN} untuk surel: ${result.data.surel}`);

    const { surel, kata_sandi } = result.data;
    const user = await Prisma.pengguna.findUnique({ where: { surel } });

    if (!user) {
      console.error(`❌ Pengguna tidak ditemukan pada rute ${API_AUTH_LOGIN} untuk surel: ${surel}`);
      return NextResponse.json({ message: "Pengguna tidak ditemukan." }, { status: 401 });
    }

    const isPasswordValid = await compare(kata_sandi, user.kata_sandi);

    if (!isPasswordValid) {
      console.error(`❌ Kata sandi salah pada rute ${API_AUTH_LOGIN} untuk surel: ${surel}`);
      return NextResponse.json({ message: "Kata sandi salah." }, { status: 401 });
    }

    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const token = await new SignJWT({ id: user.id_pengguna, surel: user.surel }).setProtectedHeader({ alg: "HS256" }).setIssuedAt().setExpirationTime("1h").sign(secret);

    cookies.set("auth_token", token, {
      httpOnly: true,
      maxAge: 3600,
      path: "/",
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
    });

    return NextResponse.json({ message: "Pengguna berhasil masuk." }, { status: 200 });
  } catch (error: unknown) {
    console.error(`❌ Kesalahan pada rute ${API_AUTH_LOGIN}: ${error}`);
    return NextResponse.json({ message: "Terjadi kesalahan pada server." }, { status: 500 });
  }
}