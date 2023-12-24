'use client'
import { useState,useEffect } from "react"
export const Todos=()=>{

    const [todoItem,setTodoItem]=useState('Empty');
    const [todoList,setTodoList]=useState([]);
    const [handleFetching,setHandleFetching]=useState(false);

    useEffect(()=>{
       async function getTodo(){
        const response=await fetch('/api/todo');
        const res=await response.json();
        setTodoList(res.message);
        console.log('All Todos');
        console.log(res.message);
        }
        getTodo();
    },[handleFetching])

    const handleTodoItem=(content:string)=>{
        setTodoItem(content);
    }
    
    const addTodo= async()=>{
        const response =await fetch('/api/todo',{
            method:"POST",
            body:JSON.stringify({todoItem})
            
        })
        const res= await response.json();   
        console.log(res);
        if(handleFetching===false){
            setHandleFetching(true);
        }
        else{
            setHandleFetching(false);
        }
    }

    console.log(todoList);
    return(
        <div className=" flex justify-center items-center">
        <div className=" w-[100%]">
            <div className="flex justify-center gap-8 mt-8">
            <input type="text" placeholder="Enter Todo here ..." className=" border border-solid border-[black] placeholder:pl-1" onChange={(e)=>{handleTodoItem(e.target.value)}}/>
            <button className=" bg-black text-white text-sm w-24 h-8 rounded-sm" onClick={()=>{addTodo()}}>ADD +</button>
            </div>
           
            {todoList?.map((temp:any,index)=>{
                return(
                <div key={index}>
                    <p>{temp.taskname}</p>
                </div>
                )
            })}

        </div>
        </div>
    )
}