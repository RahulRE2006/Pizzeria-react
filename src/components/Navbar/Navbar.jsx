import './Navbar.css'
function Navbar ({ setVistaActual }) {
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
                    <li><button className='button'   onClick={() => setVistaActual('home')}> Home</button></li>
                    <li><button className='button'   onClick={() => setVistaActual('login')}> Login</button></li>
                    <li><button className='button'  onClick={() => setVistaActual('register')}> Register</button></li>
                </ul>
            </div>
            <div>
                <button className='button button-total' onClick={() => setVistaActual('cart')}>total : ${total.toLocaleString()}</button>
            </div>
        </div>
    );
}

export default Navbar;