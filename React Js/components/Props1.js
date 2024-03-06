import React from 'react'
function Props(){
    let a=prompt();
    let fact=1
    while(a){
        fact=fact*a;
        a=a-1;
    }
    return(
        <div>
            <h1>Output----{fact}</h1>
        </div>
    )
}
export default Props