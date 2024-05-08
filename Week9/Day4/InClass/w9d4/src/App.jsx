import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import { Link, createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Product from './components/Product'
import Shop from './components/Shop'
import Nav from './components/Nav'
import Form from './components/Forms'

//Routering component
const Root = () => {
  return(
    <>
      <Nav/>
      <Outlet/>
    </>
  )
}

const router = createBrowserRouter([
  {
    path:'/',
    element:<Root/>,
    errorElement: <h2>Oops</h2>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/about',
        element: <About/>
      },
      {
        path: '/contact',
        element: <Form/>
      },
      {
        path: '/shop',
        element: <Shop/>
      },
      {
        path: '/product/:id',
        element: <Product/>
      },
    ]
  }
])

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
