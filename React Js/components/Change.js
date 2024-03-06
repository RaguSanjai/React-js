import React from 'react'
import { useState } from 'react'
export default function Change(){
    const[name,setName]=useState(0);
    function handleIncrement(){
       setcount(prev=>prev+1)
    }
    return(
        <div>
        <h1>Welcome{name}</h1>
        <br></br>
        <button onClick={handleIncrement}>Change</button>
        </div>
    )

}





// import React from 'react'
// import { useState } from 'react'
// export default function Change(){
//     const[name,setName]=useState("Guest");
//     function handleChange(){
//         setName("Adam")
//     }
//     return(
//         <div>
//         <h1>Welcome{name}</h1>
//         <br></br>
//         <button onClick={handleChange}>Change</button>
//         </div>
//     )

// }