import { useState, useReducer} from 'react'
import './App.css'
import { useRef } from 'react'
import Counter from './components/Counter'

export const initialState = {
  count: 1,
  tasks: []
}

const INCREMENT = 'increment'
const DECREMENT = 'decrement'
const ADD_TASK = 'add_task'

export const reducer = (state, action) =>{
  switch (action.type) {
    case INCREMENT:
      return {...state, count: state.count + action.payload}
    case DECREMENT:
      return {...state, count: state.count - action.payload}
    case ADD_TASK:
      return { ...state, tasks: [...state.tasks, action.payload] }
    default:
      return state
  }
}

function App() {
  const [count, setCount] = useState(0)
  const [state, dispatch] = useReducer(reducer, initialState)
  const inputRef = useRef()

  const addTask = () => {
    dispatch({type: ADD_TASK, payload: inputRef.current.value})
  }

  return (
    <>
      <div className='card'>
        <h2>React - useState</h2>
        <button onClick={() => setCount((count) => count + 1)}> + </button>
        <h3>Count is {count}</h3>
        <button onClick={() => setCount((count) => count - 1)}> - </button>
      </div>
      <div className='card'>
        <h2>React - useReducer</h2>
        <button onClick={() => dispatch({type: INCREMENT, payload: count})}> + </button>
        <h3>Count is {state.count}</h3>
        <button onClick={() => dispatch({type: DECREMENT, payload: count})}> - </button>
      </div>
      <div>
        <input ref={inputRef}/>
        <button onClick={() => addTask()}>Add Task</button>
        {state.tasks.map((item, i) =>{
          return(<h2 key={i}>{item}</h2>)
        })}
      </div>
      <Counter/>
    </>
  )
}

export default App
