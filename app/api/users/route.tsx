import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import prisma from "@/prisma/client";

// GET - getting data
// POST - creating data
// PUT - updating data

// If I dont pass the request parameter, the data will be cached
export async function GET(request: NextRequest) {
  // fetch users from a db
  const users = await prisma.user.findMany(); // we can filter queries in the parentheses
  return NextResponse.json(users);
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

  // Check if user exists before creating one
  const user = await prisma.user.findUnique({
    where: {
      email: body.email,
    },
  });

  if (user)
    return NextResponse.json({ error: "User already exists" }, { status: 400 });

  const newUser = await prisma.user.create({
    data: {
      name: body.name,
      email: body.email,
    },
  });

  // Else return 201
  return NextResponse.json(newUser, { status: 201 });
}
