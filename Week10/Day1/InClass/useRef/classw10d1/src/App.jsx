import './App.css'
import Display from './components/Display'
import Action from './components/Action'
import { useState, createContext} from 'react'

export const AppContext = createContext();

function App() {
  const [count, setCounter] = useState(0)
  return (
    <>
    <div>
      <AppContext.Provider value={{count, setCounter}}>
        <Display />
        <Action />
      </AppContext.Provider>
    </div>
    </>
  )
}

export default App
