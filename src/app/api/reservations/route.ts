import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const { date, time, userId } = await request.json();

    if (!date || !time || !userId) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const dateTime = new Date(`${date}T${time}`);
    if (isNaN(dateTime.getTime())) {
      return NextResponse.json(
        { error: "Invalid date or time format" },
        { status: 400 }
      );
    }

    const reservation = await prisma.reservation.create({
      data: {
        date: new Date(date),
        time: new Date(`${date}T${time}`),
        user: { connect: { id: parseInt(userId) } },
      },
      include: { user: true },
    });

    await prisma.user.update({
      where: { id: parseInt(userId) },
      data: {
        membership: { decrement: 1 },
      },
    });

    return NextResponse.json(reservation, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Reservation could not be created" },
      { status: 500 }
    );
  }
}
