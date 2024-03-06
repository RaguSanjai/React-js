import React from 'react'
import { useState } from 'react'
export default function Count(){
    const[Count,setCount]=useState(0);
    function handleIncrement(){
       setCount(prev=>prev+1)
    }
    return(
        <div>
            Count---{Count}
        <h1>Increment</h1>
        <br></br>
        <button onClick={handleIncrement}>Increment</button>
        </div>
    )
    }