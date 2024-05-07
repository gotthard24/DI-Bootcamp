import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import Search from './Components/Search'
import Parent from './Components/Parent'
import Child from './Components/Child'
import Counter from './Components/Counter'
import ErrorBoundry from './ErrorBoundary'

function App() {
  const [users, setUsers] = useState([])
  const [search, setSearch] = useState('')

  useEffect(()=>{
    const getData = async() =>{
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await res.json();
        setUsers(data)
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, [])

  const result = users.filter(item=> item.name.toLowerCase().includes(search.toLowerCase()))

  const handleSubmit = (e)=>{
    e.preventDefault();
  }

  return (
    <>
    <form onSubmit={handleSubmit}>

    </form>
      {/* <h2>Users</h2>
      <Search a={setSearch}/>
      {result.map(item => <div key={item.id}>{item.name}</div>)} */}
      {/* <Parent>
        <Child />
      </Parent> */}
      <ErrorBoundry fallback ={<p>counter 1 was down</p>}>
        <Counter/>
      </ErrorBoundry>
      <ErrorBoundry fallback ={<p>counter 2 was down</p>}>
        <Counter/>
      </ErrorBoundry>
    </>
  )
}

export default App
