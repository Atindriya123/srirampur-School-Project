import prisma from "@/libs/prisma";
import { NextResponse } from "next/server";
const bcrypt = require('bcrypt');


export const POST = async (request) => {
    try {
        const body = await request.json();
        const { name, email, password } = body;
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, 12);
        // if (form == "adduser") {
        const newUser = await prisma.user.create({
            data: {
                name: name,
                email: email,
                hashedPassword: hashedPassword,

            }
        });
        return NextResponse.json(newUser);
        // }
        // return NextResponse.json(hashedPassword);

    } catch (err) {
        console.log(err)
        return NextResponse.json({ message: "POST Error", error: err }, { status: 501 });
    }
};