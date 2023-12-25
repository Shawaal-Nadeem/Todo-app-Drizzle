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

    const editTodo= async(id:number)=>{
        const response =await fetch('/api/todo',{
            method:"PUT",
            body:JSON.stringify({id,todoItem})
            
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

    const deleteTodo= async(id:number)=>{
        const response =await fetch('/api/todo',{
            method:"DELETE",
            body:JSON.stringify({id})
            
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
            <div className="flex justify-center gap-8 mt-8 mb-10">
            <input type="text" placeholder="Enter Todo here ..." className=" border border-solid border-[black] placeholder:pl-1" onChange={(e)=>{handleTodoItem(e.target.value)}}/>
            <button className=" bg-black text-white text-sm w-24 h-8 rounded-sm" onClick={()=>{addTodo()}}>ADD +</button>
            </div>
           
            {todoList?.map((temp:any,index)=>{
                return(
                <div key={index} className=" mt-4 flex justify-around items-center w-[100%] h-14 bg-black text-white">
                    <div className=" w-[70%] flex justify-center">
                    <p>{temp.taskname}</p>
                    </div>
                    <div className=" flex items-center gap-20 w-[30%]">
                    <button className=" w-24 h-7 rounded-sm bg-slate-400" onClick={()=>{editTodo(temp.id)}}>Edit</button>
                    <button className=" w-24 h-10 rounded-sm bg-[red]" onClick={()=>{deleteTodo(temp.id)}}>Delete</button>
                    </div>
                </div>
                )
            })}

        </div>
        </div>
    )
}