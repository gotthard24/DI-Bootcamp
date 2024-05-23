import './App.css'
import { useCallback, useRef, useState, useMemo, ChangeEventHandler } from 'react'
import Heading from './components/Heading'
import Section from './components/Section'
import Counter from './components/Counter'
import List from './components/List'

type fibFunc = (n: number) => number
const fib: fibFunc = (n) =>{
  if(n<2) return n;
  return fib(n-1) + fib(n-2)
}

const myNum: number = 37

function App() {
  const [count, setCount] = useState<number>(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const fibResult = useMemo<number>(()=> fib(myNum), [myNum])

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
  //   console.log(e.target.value);
  // }

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) =>{
    console.log(e.target.value);
  }

  // const add = (e: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>) => {
  //   console.log(e.currentTarget.value);
  // }

  const add = useCallback((): void =>{
    setCount(count => count + 10)
  }, [])

  return (
    <>
      <input ref={inputRef} onChange={handleChange}/>
      <button onClick={add}>Click</button>
      {fibResult}
      <h2>Typescript Day 4</h2>
      <Heading title={'Heading'}/>
      <Section><h2>Children</h2></Section>
      <Counter setCount={setCount}>{count}</Counter>
      <List items = {['Dan', 'Yulia']}/>
    </>
  )
}

export default App
