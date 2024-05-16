import { useSelector, useDispatch} from 'react-redux'
import { increment, decrement, reset, incrementStep, decrementStep, setNumber, setWithPrepare, delayIncrementThunk} from './counterSlice'
import { useRef } from 'react'

const Counter = (props) => {
    const inputRef = useRef()
    const count = useSelector((state) => state.counterReducer.count)
    const step = useSelector((state) => state.counterReducer.step)
    const dispatch = useDispatch();
    return (
        <>
            <h2>Count: {count}</h2>
            <button onClick={() => dispatch(decrement())}> - </button>
            <button onClick={() => dispatch(increment())}> + </button>
            <button onClick={() => dispatch(reset())}> Reset </button>
            <div>
                <input ref={inputRef} type='number'/>
                <button onClick={() => dispatch(setNumber(inputRef.current.value))}>Increment by Number</button>
            </div>
            <div>
                <input  type='number'/>
                <button onClick={() => dispatch(setWithPrepare(5, 6))}>Increment by Number</button>
            </div>
            <div>
                <h2>Step = {step}</h2>
                <button onClick={() => dispatch(decrementStep())}> - Step </button>
                <button onClick={() => dispatch(incrementStep())}> + Step</button>
            </div>
            <div>
                <h2>With Delay</h2>
                <button onClick={() => dispatch(delayIncrementThunk())}> + with delay</button>
            </div>
        </>
    )
}

export default Counter