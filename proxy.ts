import { NextResponse } from "next/server";

export async function proxy(): Promise<NextResponse> {
  try {
    return NextResponse.next();
  } catch (error: unknown) {
    console.error(`❌ ${new Date().toISOString()} - Middleware error: ${error}`);
    return NextResponse.next();
  }
}