import { useState, useCallback, useMemo} from 'react'
import './App.css'
import ToDo from './ToDo'

function App() {
  const [count, setCount] = useState(0)
  const [todos, setTodos] = useState([])

  const expensiveCalculation = (num) =>{
    for (let i = 0; i < 1000000000; i++) {
      num++    
    }
    return num
  }

  // const calc = expensiveCalculation(0)
  const calc = useMemo(() => expensiveCalculation(0), [count])
  // console.log(calc);

  const increment = () =>{
    setCount(prev => prev + 1)
  }

  // const addTask = () => {
  //   setTodos(todos => [...todos, 'new task'])
  // }

  const addTask = useCallback(() =>{
    setTodos(todos => [...todos, 'new optimized task'])
  }, [todos])

  return (
    <>
      <h2>{count}</h2>
      <button onClick={() => increment()}> + </button>
      <ToDo todos={todos} addTask={addTask} calc = {calc}/>
    </>
  )
}

export default App
