import { useState } from 'react'
import './App.css'
import Form from './components/Forms'
import Home from './components/Home'
import About from './components/About'
import { Routes, Route} from 'react-router-dom'
import Nav from './components/Nav'
import Shop from './components/Shop'
import Product from './components/Product'

function App() {
  return (
    <>
    <Nav/>
    <Routes>
      <Route path='/' element = {<Home/>}/>
      <Route path='/about' element = {<About/>}/>
      <Route path='/contact' element = {<><About/><Form/></>}/>
      <Route path="/shop" element= {<Shop/>}/>
      <Route path="/product/:id" element= {<Product/>}/>
      <Route path='*' element={<><h2>404 not found</h2></>}/>
    </Routes>
    </>
  )
}

export default App
