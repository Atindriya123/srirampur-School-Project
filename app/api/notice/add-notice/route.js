import prisma from "@/libs/prisma";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  try {
    const body = await request.json();
    const { action, data } = body;

    if (action === "create" && data) {
      // Creation logic
      const { date, title, file } = data;
      const addNotice = await prisma.notice.create({
        data: {
          date: new Date(date).toISOString(),
          title: title,
          file: file,
        },
      });

      return NextResponse.json(addNotice);
    } else if (action === "delete" && data && data.id) {
      // Deletion logic
      const deleteNotice = await prisma.notice.delete({
        where: {
          id: data.id,
        },
      });

      return NextResponse.json(deleteNotice);
    } else {
      // Handle other actions or report an error for invalid actions
      return NextResponse.json(
        { message: "Invalid POST action or missing data" },
        { status: 400 }
      );
    }
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { message: "POST Error", error: err },
      { status: 501 }
    );
  }
};
