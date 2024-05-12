import { useContext } from "react";
import { AppContext } from "../App";

const ButtonTwo = () =>{
    const {count, setCounter} = useContext(AppContext)
    return(
        <>
            <button onClick={()=>setCounter(count +1)}>button 2 +</button>
        </>
    )
}

export default ButtonTwo