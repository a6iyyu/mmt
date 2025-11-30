import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest): Promise<NextResponse> {
  return NextResponse.json({ message: "Logout route" });
}