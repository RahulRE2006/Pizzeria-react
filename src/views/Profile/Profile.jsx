 import './Profile.css'
function Profile (){
    return(
        <div className='container d-flex flex-column align-items-star gap-3 p-4 my-4 border rounded-3'>
            <label>gmail : gmail.prueba@gmail.com</label>
            <label>contraseña : 123456789</label>
            <button className='btn btn-primary w-25'>cerrar sesion</button>
        </div>
    );
}

export default Profile;