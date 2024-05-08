import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/HomeScreen';
import Profile from './components/ProfileScreen';
import Shop from './components/ShopScreen';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/NavBar';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <BrowserRouter>
      <>
        <Navbar/>
        <Routes>
          <Route path='/' element={<ErrorBoundary fallback={<div>Error occurred</div>}><Home /></ErrorBoundary>} />
          <Route path='/profile' element={<ErrorBoundary fallback={<div>Error occurred</div>}><Profile /></ErrorBoundary>} />
          <Route path="/shop" element={<ErrorBoundary fallback={<div>Error occurred</div>}><Shop /></ErrorBoundary>} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
