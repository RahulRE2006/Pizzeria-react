import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import UserProvider, { UserContext } from './Context/UserContext'; 
import CartCompo from './Context/CartCompo';
import Navbar from './components/Navbar/Navbar';
import Home from './views/Home/Home';
import Login from './views/Login/Login';
import Register from './views/Register/Register';
import CartPizza from './views/CartPizza/CartPizza';
import NotFound from './views/NotFound/NotFound';
import Footer from './components/Footer/Footer';
import Profile from './views/Profile/Profile';
import Pizza from './views/Pizza/Pizza';

const AppRoutes = () => {
  const { token } = useContext(UserContext); 

  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      
      <Route 
        path='/login' 
        element={token ? <Navigate to="/" /> : <Login/>} 
      />
      <Route 
        path='/register' 
        element={token ? <Navigate to="/" /> : <Register/>} 
      />
      <Route 
        path='/profile' 
        element={token ? <Profile/> : <Navigate to="/login" />} 
      />
      
      <Route path='/cart' element={<CartPizza/>} />
      <Route path='/pizza/:id' element={<Pizza/>} />

      <Route path='*' element={<NotFound/>} />
    </Routes>
  );
}

function App() {
  return (
    <UserProvider>
      <CartCompo>
        <Navbar />
        <AppRoutes /> 
        <Footer/>
      </CartCompo>
    </UserProvider>
  );
}

export default App;