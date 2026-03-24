import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Register from './components/Register/Register';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
function App() {
  const [vistaActual, setVistaActual] = useState('home');
  return (
    <div>
      <Navbar setVistaActual={setVistaActual} />
      {vistaActual === 'home' && <Home />}
      {vistaActual === 'register' && <Register />}
      {vistaActual === 'login' && <Login />}
      <Footer></Footer>
    </div>
  );
}
export default App
