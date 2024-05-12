import ShowCounter from "./ShowCounter"
import { createContext, useState } from "react"
import Title from "./Title";

export const DisplayContext = createContext();

const Display = (props)=>{
    const [title, setTitle] = useState('Default')
    return(
        <>
            <h2>Display</h2>
            <DisplayContext.Provider value={{title, setTitle}}>
                <ShowCounter/>
                <Title/>
            </DisplayContext.Provider>
        </>
    )
}

export  default Display