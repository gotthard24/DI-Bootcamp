import './App.css';
import {createBrowserRouter,RouterProvider, Outlet} from "react-router-dom";
import Nav from './components/Nav';
import Photoes from './components/Photoes';

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
    errorElement: <h2>Oops Smth Went Wrong!</h2>,
    children:[
      {
        path: '/mountain',
        element: <>
          <Photoes category={'mountain'}/>
        </>
      },
      {
        path: '/forest',
        element: <>
          <Photoes category={'forest'}/>
        </>
      },
      {
        path: '/dog',
        element: <>
          <Photoes category={'dog'}/>
        </>
      },
      {
        path: '/parrot',
        element: <>
          <Photoes category={'parrot'}/>
        </>
      },
      {
        path: '/search/:category',
        element: <>
            <Photoes category={'search'} />
          </>
      },
      {
        path: '/search/',
        element: <>
            <Photoes category={'search'} />
          </>
      },
    ]
  }
])

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
