import prisma from "@/libs/prisma";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  try {
    const body = await request.json();
    const { action, data } = body;

    if (action === "create" && data) {
      // Creation logic
      const { stdname, rollno, sclass, dob, file } = data;
      const addAdmit = await prisma.admit.create({
        data: {
          dob: new Date(dob).toISOString(),
          stdname: stdname,
          rollno: rollno,
          sclass: sclass,
          file: file,
        },
      });

      return NextResponse.json(addAdmit);
    } else if (action === "delete" && data && data.id) {
      // Deletion logic
      const deleteMarksheet = await prisma.admit.delete({
        where: {
          id: data.id,
        },
      });

      return NextResponse.json(deleteMarksheet);
    } else if (action === "search" && data) {
      // Search logic
      const { rollno, dob, sclass } = data;
      const searchResult = await prisma.admit.findFirst({
        where: {
          rollno: rollno,
          dob: new Date(dob).toISOString(),
          sclass: sclass,
        },
      });

      return NextResponse.json(searchResult);
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
