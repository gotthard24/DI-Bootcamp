import React, { useState } from 'react'
import './App.css'

function App() {
  const [result, setResult] = useState(0)
  const [numbers, setNumbers] = useState({
    number1: 0,
    number2: 0
  })

  const handleAdd = () => {
    const sum = parseInt(numbers.number1) + parseInt(numbers.number2)
    setResult(sum)
  }

  return (
    <>
      <h2>Adding Two</h2>
      <input type="number" value={numbers.number1} onChange={(e) => setNumbers({ ...numbers, number1: e.target.value })} />
      {"  "}
      <input type="number" value={numbers.number2} onChange={(e) => setNumbers({ ...numbers, number2: e.target.value })} /> <br /> <br />
      <button onClick={handleAdd}>Add</button>
      <h2>{result}</h2>
    </>
  )
}

export default App
