import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Header from './components/Header'
import LoginPage from './components/LoginPage'
import Dashboard from './components/Dashboard'
import { createContext, useState } from 'react'
import Auth from './auth/auth'
import './App.css'

export const AuthContext = createContext()

function App() {
  const [token, setToken] = useState()

  return (
    <AuthContext.Provider value={{token,setToken}}>
      <div>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<LoginPage page={"Login"}/>}/>
          <Route path='/register' element={<LoginPage page={"Register"}/>}/>
          <Route path='/dash' element={<Auth><Dashboard/></Auth>}/>
        </Routes>
      </div>
    </AuthContext.Provider>
  )
}

export default App
