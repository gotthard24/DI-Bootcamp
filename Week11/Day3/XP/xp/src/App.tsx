import './App.css'
import Counter from './features/xp/Counter'
import Greeting from './features/xp/Greeting'
import UserCard from './features/xp/UserCard'
import UserList from './features/xp/Users'

function App() {
  return (
    <>
      <Greeting name={'Daniel'}/>
      <Counter/>
      <UserCard/>
      <UserList/>
    </>
  )
}

export default App
