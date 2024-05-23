import { ReactNode } from "react"

interface ListProps<T>{
    items: T[]
}

const List = <T,>({items}: ListProps<T>) =>{
    return(
        <>
            <h2>MyList</h2>
            <ul>
            {
                items.map((item, i) => {
                     return <li key={i}>{item as ReactNode}</li>
                })
            }                     
            </ul>
        </>
    )
}

export default List

//Regular function syntax

// export default function List<T>({items}: ListProps<T>){
//     return(
//         <>
//             <h2>MyList</h2>
//             <ul>
//             {
//                 items.map((item, i) => {
//                      return <li key={i}>{item}</li>
//                 })
//             }                     
//             </ul>
//         </>
//     )
// }