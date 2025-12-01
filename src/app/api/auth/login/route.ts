import { NextResponse } from "next/server";
import { API_AUTH_LOGIN } from "@/constants/route";

export async function POST(): Promise<NextResponse> {
  try {
    return NextResponse.json({ message: `Login route at ${API_AUTH_LOGIN}` }, { status: 200 });
  } catch (error: unknown) {
    console.error(`❌ Error in ${API_AUTH_LOGIN} route: ${error}`);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}