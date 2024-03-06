import React from 'react';

export default function form(){
    const[name,setname]=useState('')
    function handleName(event){
        setname(event.target.value)
    }
    function handlesubmit(event){
        event.preventDefault()
    }

    return(
        <div>
            <form onSubmit={handlesubmit}>
                <label>Username:</label>
                <input type="text" value={name}>

                </input>
                <label>Address</label>
                <textarea value={address} onChange={(e)=>{setadress.target.value}}>
                </textarea>
            </form>
        </div>
    )
}