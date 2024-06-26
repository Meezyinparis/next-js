import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";

export function GET(
  request: NextRequest,
  { params: { id } }: { params: { id: number } }
) {
  // Fetch data from a db
  // If not found, return 404 error
  // Else return data
  if (id > 10)
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  return NextResponse.json({ id: 1, name: "meezy" });
}

// PUT - Replacing an object
// PATCH - Updating one or more properties
export async function PUT(
  request: NextRequest,
  { params: { id } }: { params: { id: number } }
) {
  // Validate the request body
  const body = await request.json();
  const validation = schema.safeParse(body);
  // If invalid, return 400
  if (!validation.success)
    return NextResponse.json(
      { error: validation.error.errors },
      { status: 400 }
    );
  // Fetch the user with the given id
  // If doesn't exist, return 404
  if (id > 10)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  // Update the user
  // Return the updated user
  return NextResponse.json({ id: 1, name: body.name });
}

export function DELETE(
  request: NextRequest,
  { params: { id } }: { params: { id: number } }
) {
  // Fetch user from db

  // If doesn't exist, return 404
  if (id > 10)
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  // Delete the user
  // Return 200
  return NextResponse.json({});
}
