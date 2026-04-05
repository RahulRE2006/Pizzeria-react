import { Link } from 'react-router-dom';
import { useContext } from "react";
import { UserContext } from "../../Context/UserContext"; 
import { ContextCart } from "../../Context/cartContext";

function Navbar() {
  const { totalPagar } = useContext(ContextCart);
  const { token, logout } = useContext(UserContext);
  return (
    <div className='container-fluid bg-dark text-white p-3'>
      <div className='d-flex gap-3 align-items-center justify-content-between'>
        <div className='d-flex align-items-center gap-3'>
          <h2 className='m-0'>Pizzería Mamma Mia!</h2>
          <ul className='list-unstyled d-flex gap-2 mb-0'>
            <li><Link to='/'><button className='btn btn-outline-light'>home</button></Link></li>
            
            {token ? (
              <>
                <li><Link to='/profile'><button className='btn btn-outline-light'>Profile</button></Link></li>
                <li><button className='btn btn-outline-light' onClick={logout}>Logout</button></li>
              </>
            ) : (
              <>
                <li><Link to='/login'><button className='btn btn-outline-light'>Login</button></Link></li>
                <li><Link to='/register'><button className='btn btn-outline-light'>Register</button></Link></li>
              </>
            )}
          </ul>
        </div>

        <div>
          <Link to='/cart'>
            <button className='btn btn-outline-info'>
              total: ${totalPagar.toLocaleString()}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;