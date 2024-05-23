import { ReactNode } from "react"

interface CounterProps{
    // count: number;
    children: ReactNode
    setCount: React.Dispatch<React.SetStateAction<number>>
}

const Counter = ({children,setCount}: CounterProps) => {
    return(
        <>
            {/* <h2>Counter1: {count}</h2> */}
            <h2>Counter2: {children}</h2>
            <button onClick={() => setCount((count) => count + 1)}> + </button>
            <button onClick={() => setCount((count) => count - 1)}> - </button>
        </>
    )
}

export default Counter