import React from 'react'

export default function Prop1({name,age}){
    return(
        <div>
            <h1>Hello {name} with age {age}</h1>
        </div>
    );
}



// export default function Prop1({name,age}){
//     return(
//         <div>
//             <h1>Hello {name} with age {age}</h1>
//         </div>
//     );
// }

// export default function Prop1(Props){
//     return(
//         <div>
//             <h1>Hello {Props.name} with age {Props.age}</h1>
//         </div>
//     )


// export default function Prop1(props){
//     const{name,age}=props
//     return(
//         <div>
//             <h1>Hello {name} with age {age}</h1>
//         </div>
//     );
// }