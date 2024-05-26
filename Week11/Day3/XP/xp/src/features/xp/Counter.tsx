import { useState } from "react"

const Counter = () => {
    const [count, setCount] = useState<number>(0)
    return(
        <>
            <h2>Counter</h2>
            <h3>{count}</h3>
            <button onClick={() => setCount(count + 1)} > + </button>
        </>
    )
}

export default Counter