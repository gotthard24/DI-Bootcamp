import './App.css';
import {useState, useEffect} from 'react'

const App = () =>{
  // const [state, setState] = useState();
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState()

  useEffect(() =>{
    console.log('useEffect');
    if (count === 0){
      setCount(10)
    }
  }, [count])


  const addOne = (num) => {
    setCount(count + num)
  }

  const getusers = async() =>{
    try {
      const users = await fetch('https://jsonplaceholder.typicode.com/users')
      const usersData = await users.json()
      setUsers(usersData)
    } catch (error) {
      console.log(error);
    }
  }
  return(
    <div className="App">
      <header className="App-header">
        <button onClick={() => addOne(1)}>+</button>
        {count}
        <button onClick={() => addOne(-1)}>-</button>
        <h1>Users</h1>
        <button onClick={getusers}>GET</button>
        {users ? users.map(item =>{
          return <div>{item.name}</div>
        }) : null}
      </header>
    </div>
  )
}

export default App;