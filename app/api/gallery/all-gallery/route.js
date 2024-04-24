import prisma from "@/libs/prisma";
import { NextResponse } from "next/server";
export const dynamic = 'force-dynamic' // defaults to auto
export const GET = async (request) => {
    try {
        // Perform the logic for handling GET requests here
        const gallery = await prisma.gallery.findMany();

        return NextResponse.json(gallery);
    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: "GET Error", error: err }, { status: 501 });
    }
};