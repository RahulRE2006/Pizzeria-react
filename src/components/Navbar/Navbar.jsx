import './Navbar.css'
import { Link } from 'react-router-dom';

function Navbar () {
    const total = 25000;
    const token = true;
    let button1;
    let button2;
    if (token){
        button1 = "Login"
        button2 = "Register"
    }
    else{
        button1 = "Profile"
        button2 = "Logout"
    }
    return(
        <div className='container-fluid'>
            <div className='d-flex gap-3 align-items-center
             justify-content-center'>
                <h2>Pizzeria Mamma Mia</h2>
                <ul className='list-unstyled d-flex gap-3 mb-0'>
                    <li><Link to='/'><button className='button'>home </button></Link></li>
                    <li><Link to='/login' ><button className='button'> Login</button></Link></li>
                    <li><Link to='/register'><button className='button'> Register</button></Link></li>
                    <li><Link to='/profile'><button className='button'>Profile</button></Link></li>
                </ul>
            </div>
            <div>
                <Link to='/cart' ><button className='button button-total'>total : ${total.toLocaleString()}</button></Link>
            </div>
        </div>
    );
}

export default Navbar;