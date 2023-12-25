import { NextRequest,NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
import { db } from "@/lib/drizzle";
import { todosTable } from "@/lib/schema";

export async function GET(){
    
    // const results = await db.select().from(todosTable);
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

export async function PUT(request:NextRequest){
    const req=await request.json();
    console.log(req);
    const { rows } = await sql`UPDATE todos SET taskName = ${req.todoItem} WHERE id = ${req.id}`;
    console.log(rows);
    return NextResponse.json({message:"Todo Edit successfully."})
}

export async function DELETE(request:NextRequest){
    const req=await request.json();
    console.log(req);
    const { rows } = await sql`DELETE FROM todos WHERE id = ${req.id}`;
    console.log(rows);
    return NextResponse.json({message:"Todo Delete successfully."})
}