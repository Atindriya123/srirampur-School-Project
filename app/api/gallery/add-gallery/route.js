import prisma from "@/libs/prisma";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  try {
    const body = await request.json();
    const { action, data } = body;

    if (action === "create" && data) {
      // Creation logic
      const { file } = data;
      const addGallery = await prisma.gallery.create({
        data: {
          file: file,
        },
      });

      return NextResponse.json(addGallery);
    } else if (action === "delete" && data && data.id) {
      // Deletion logic
      const deleteGallery = await prisma.gallery.delete({
        where: {
          id: data.id,
        },
      });

      return NextResponse.json(deleteGallery);
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
