import { NextRequest,NextResponse } from "next/server";
import { sql } from "@vercel/postgres";


export async function GET(){
    const { rows } = await sql`SELECT * from todos`;
    
    return NextResponse.json({message:rows})
}

export async function POST(request:NextRequest){
    const req=await request.json();
    console.log(req);
    const { rows } = await sql`INSERT INTO todos (taskName) VALUES (${req.todoItem})`;
    console.log(rows);
    return NextResponse.json({message:"Todo add successfully."})
}