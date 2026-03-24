import { useState } from 'react';
import { buscarUsuario } from '../../Js/usuarios';
import './Login.css'

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();

        const usuarioEncontrado = buscarUsuario(email, password);

        if (usuarioEncontrado) {
            alert(`¡Bienvenido de nuevo, ${email}!`);
        } else {
            alert("Email o contraseña incorrectos. ¿Ya te registraste?");
        }
    };

    return (
        <div className='Container-Login'>
            <form className='Form-Login' onSubmit={handleLogin}>
                <h2>Login</h2>
                <p>Email</p>
                <input 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                />
                <p>Contraseña</p>
                <input 
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                />
                <button type='submit' className='Login-btn'>Entrar</button>
            </form>
        </div>
    );
}

export default Login;