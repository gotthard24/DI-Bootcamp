import './App.css'
import {Routes, Route} from 'react-router-dom'
import Shop from './components/Shop'
import Product from './components/Product'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/:id' element={<Product/>}/>
      </Routes>
    </>
  )
}

export default App
