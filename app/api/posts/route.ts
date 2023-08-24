import {NextResponse} from "next/server";

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url)

    const query = searchParams.get("q")

    return NextResponse.json({message: "hello"})
}

export async function POST(req: Request) {
    const body = await req.json()

    return NextResponse.json({body})
}