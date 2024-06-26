import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";

// GET - getting data
// POST - creating data
// PUT - updating data

// If I dont pass the request parameter, the data will be cached
export function GET(request: NextRequest) {
  // fetch users from a db
  return NextResponse.json([
    { id: 1, name: "Meezy" },
    { id: 2, name: "Gaby" },
  ]);
}

export async function POST(request: NextRequest) {
  // Validate

  const body = await request.json();
  const validation = schema.safeParse(body);
  // If invalid, return 400
  if (!validation.success) {
    return NextResponse.json(
      { error: validation.error.errors },
      { status: 400 }
    );
  }
  // Else return 201
  return NextResponse.json({ id: 1, name: body.name }, { status: 201 });
}
