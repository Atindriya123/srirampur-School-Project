import prisma from "@/libs/prisma";
import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic' // defaults to auto
export async function GET(request) {
    try {
        // Perform the logic for handling GET requests here
        const admits = await prisma.admit.findMany();

        return NextResponse.json(admits);
    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: "GET Error", error: err }, { status: 501 });
    }
}