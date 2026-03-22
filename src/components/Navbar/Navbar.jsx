import './Navbar.css'

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
        <div className='container'>
            <div className='container-main'>
                <h2>Pizzeria Mamma Mia</h2>
                <ul>
                    <li><button className='button'>Home</button></li>
                    <li><button className='button'>{button1}</button></li>
                    <li><button className='button'>{button2}</button></li>
                </ul>
            </div>
            <button className='button button-total'>total : ${total.toLocaleString()}</button>
        </div>
    );
}

export default Navbar;