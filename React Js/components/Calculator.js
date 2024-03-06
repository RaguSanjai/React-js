import React, { useState } from "react";

export default function Calculator(){
    const[cal,setcalc]=useState('')
    const handleEvaluate=()=>{
        setcalc(eval(cal))
    }
    return(
        <div>
            <input type='text' value={cal}/>
            <br></br>
            <button onClick={()=>{setcalc(prev=>prev+'1')}}>1</button>
            <button onClick={()=>{setcalc(prev=>prev+'2')}}>2</button>
            
            <button onClick={()=>{setcalc(prev=>prev+'3')}}>3</button>
            
            <button onClick={()=>{setcalc(prev=>prev+'+')}}>+</button>
            
            <button onClick={()=>{setcalc(prev=>prev+'-')}}>-</button>

            <button onClick={()=>{setcalc(prev=>prev+'*')}}>*</button>
            
            <button onClick={handleEvaluate}>=</button>
        </div>
    )
}