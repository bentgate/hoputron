import { NextRequest, NextResponse } from "next/server";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const name = searchParams.get("name") || "";

  try {
    // Proxy request to the backend
    const response = await fetch(`${BASE_URL}/hops/search?name=${encodeURIComponent(name)}`);

    if (!response.ok) {
      throw new Error(`Backend responded with status ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Hop search error:", error);
    return NextResponse.json({ error: "Failed to fetch hops" }, { status: 500 });
  }
}
