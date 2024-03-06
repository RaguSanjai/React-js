import React from 'react'
import { useState } from 'react'
export default function Task1(){
    const[Count,setCount]=useState(0);
    function handleIncrement(){
        if(Count<10)
       setCount(prev=>prev+1)
    }
    function handleDecrement(){
        if(Count>0)
        setCount(prev=>prev-1)
    }
    function reset(){
        setCount(0)
    }
    
    return(
        <div>
        <h1>Count---{Count}</h1>
        <br></br>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
        
        </div>
    )
    }