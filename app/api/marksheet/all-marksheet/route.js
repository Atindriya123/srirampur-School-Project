import prisma from "@/libs/prisma";
import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic' // defaults to auto
export async function GET(request) {
    try {
        // Perform the logic for handling GET requests here
        const marksheets = await prisma.marksheet.findMany();

        return NextResponse.json(marksheets);
    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: "GET Error", error: err }, { status: 501 });
    }
}