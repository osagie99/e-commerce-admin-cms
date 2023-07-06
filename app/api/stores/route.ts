import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST (
    req: Request,
) {
    try {
        // Get logged in user
        const { userId } = auth();
        if(!userId) {
            return new NextResponse("Unauthenticated", { status: 401 });
        }
        const body = await req.json();
        const { name } = body;

        if(!name) {
            return new NextResponse("Name is Required", {status: 400})
        }

        const store = await prismadb.store.create({
            data: {
                name,
                userId
            }
        })

        return NextResponse.json(store);

    } catch (error) {
        console.log('[STORES_POST]', error);
        return new NextResponse("Internal Server", {status: 500})
    };
}