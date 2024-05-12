import './App.css'
import { useState, useRef, useEffect} from 'react'

function App() {
  // const divRef = useRef()
  // const h2Ref = useRef()
  // const inputRef = useRef()

  // useEffect(()=>{
  //   console.log(divRef.current);
  //   divRef.current.style.color = 'red'
  // }, [])

  // const changeToBlue = () =>{
  //   h2Ref.current.style.color = 'blue'
  // }

  // const handleChange = (e) => {
  //   // inputRef.current = e.target.value;
  //   console.log(inputRef.current.value);
  // }
  const [title, setTitle] = useState('my title')
  let name = 'Dan'
  const nameRef = useRef('Dan Ref')

  const changeName = () => {
    name = 'John'
    nameRef.current = 'JohnRef'
    console.log(name);
    console.log(nameRef.current);
  }

  const changeTitle = () => {
    setTitle('new title')
  }

  return (
    <>
    {/* <div ref={divRef}>
      <h2 ref={h2Ref}>UseRef</h2>
      <button onClick={changeToBlue}>Change to blue</button>
      <div>
        <input onChange={handleChange} ref={inputRef}/>
      </div>
    </div> */}
    <div>
      <h1>{name}</h1>
      <button onClick={changeName}>Change name</button>
    </div>
    <div>
      <h1>{nameRef.current}</h1>
      <button onClick={changeName}>Change nameRef</button>
    </div>
    <div>
      <h1>{title}</h1>
      <button onClick={changeTitle}>Change Title</button>
    </div>
    </>
  )
}

export default App
