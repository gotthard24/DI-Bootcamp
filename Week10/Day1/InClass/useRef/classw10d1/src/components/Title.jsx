import { useContext } from "react"
import { DisplayContext } from "./Display"

const Title = () =>{
    const {title, setTitle} = useContext(DisplayContext)
    return(
        <>
            {/* <h1>{title}</h1> */}
            <input onChange={(e)=> setTitle(e.target.value)} />
        </>
    )
}

export default Title