import { useContext } from "react"
import { AppContext } from "../App"
import { DisplayContext } from "./Display"

const ShowCounter = (props)=>{
    const {count} = useContext(AppContext)
    const {title} = useContext(DisplayContext)
    return (
        <>
            <h1>{title}</h1>
            <h2>ShowCounter</h2>
            <div>{count}</div>
        </>
    )
}

export  default ShowCounter