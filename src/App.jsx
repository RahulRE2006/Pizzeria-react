import './App.css'
import Navbar from './components/Navbar/Navbar';
import Home from './views/Home/Home';
import Login from './views/Login/Login';
import Register from './views/Register/Register';
import CartPizza from './views/CartPizza/CartPizza';
import NotFound from './views/NotFound/NotFound';
import Footer from './components/Footer/Footer';
import{Route , Routes} from 'react-router-dom';
import Profile from './views/Profile/Profile';

function App() {
  return (
      <>
      <Navbar />
      <Routes>
        <Route
        path='/'
        element={<Home/>}
        />
        <Route
        path='/login'
        element={<Login/>}
        />
        <Route
        path='/register'
        element={<Register/>}
        />
        <Route
        path='/cart'
        element={<CartPizza/>}
        />
        <Route
        path='/profile'
        element={<Profile/>}
        />
        <Route
        path='*'
        element={<NotFound/>}
        />
      







      </Routes>
      
      <Footer/>
      </>
  );
}
export default App
