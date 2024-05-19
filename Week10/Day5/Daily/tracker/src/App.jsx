import './App.css'
import { Link, createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import TaskList from './features/tasks/TaskList'
import Nav from './features/tasks/Nav'
import CategoriesEditer from './features/tasks/CategoriesEditor'

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
        path: '/tasks',
        element: <TaskList/>
      },
      {
        path: '/categories',
        element: <CategoriesEditer/>
      }
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
