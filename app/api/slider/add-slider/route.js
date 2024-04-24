import prisma from "@/libs/prisma";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  try {
    const body = await request.json();
    const { action, data } = body;

    if (action === "create" && data) {
      // Creation logic
      const { file } = data;
      const addSlider = await prisma.slider.create({
        data: {
          file: file,
        },
      });

      return NextResponse.json(addSlider);
    } else if (action === "delete" && data && data.id) {
      // Deletion logic
      const deleteSlider = await prisma.slider.delete({
        where: {
          id: data.id,
        },
      });

      return NextResponse.json(deleteSlider);
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
