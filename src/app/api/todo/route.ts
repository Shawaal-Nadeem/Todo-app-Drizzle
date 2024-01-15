import { NextRequest,NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
import { db } from "@/drizzle/drizzle";
import { todos } from "@/drizzle/schema";

// GET Request
export async function GET(){
    
    const results = await db.select().from(todos);
    // const { rows } = await sql`SELECT * from todos`;
    
    return NextResponse.json({message:results})
}

// POST Request
export async function POST(request:NextRequest){
    const req=await request.json();
    console.log("POST API Call")
    console.log(req.todoItem);
    const taskname=req.todoItem;
    await db.insert(todos).values({ taskname });
    // const { rows } = await sql`INSERT INTO todos (taskName) VALUES (${req.todoItem})`;
    // console.log(rows);
    return NextResponse.json({message:"Todo add successfully."})
}

// PUT Request
export async function PUT(request:NextRequest){
    const req=await request.json();
    console.log(req);
    const { rows } = await sql`UPDATE todos SET taskName = ${req.todoItem} WHERE id = ${req.id}`;
    console.log(rows);
    return NextResponse.json({message:"Todo Edit successfully."})
}

// DELETE Request
export async function DELETE(request:NextRequest){
    const req=await request.json();
    console.log(req);
    const { rows } = await sql`DELETE FROM todos WHERE id = ${req.id}`;
    console.log(rows);
    return NextResponse.json({message:"Todo Delete successfully."})
}