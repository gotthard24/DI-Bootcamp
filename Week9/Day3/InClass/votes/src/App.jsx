import { useState } from 'react'
import './App.css'

function App() {
  const [languages, setLanguages] = useState([
    { name: "Php", votes: 0 },
    { name: "Python", votes: 0 },
    { name: "JavaScript", votes: 0 },
    { name: "Java", votes: 0 }
]);

  const vote = (lang) =>{
    lang.votes++;
    setLanguages([...languages])
  }

  return (
    <>
      <h1>Vote For Me !</h1>
      {languages.map((item, i) =>{
        return (
          <div key={i}>
            {item.votes} {item.name}
            <button onClick={()=>vote(item)}>Vote!</button>
          </div>
        )
      })}
    </>
  )
}

export default App
