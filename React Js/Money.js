import React, { useState } from 'react'

function Money() {
    const[usd,setusd]=useState()
    const[inr,setinr]=useState()

    const handleusd=(e)=>{
        setusd(e.target.value)
        setinr(e.target.value*82.90)
    }

    const handleinr=(e)=>{
        setinr(e.target.value)
        setusd(e.target.value/82.90)
    }
    

  return (
    <div>
      <label>USD:</label>
      <input type="number" value={usd} onChange={handleusd}/>
      <br></br>
      <label>INR:</label>
      <input type="number" value={inr} onChange={handleinr}/>
    </div>
  )
}

export default Money


