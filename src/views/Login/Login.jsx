import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../Context/UserContext'; 
import './Login.css';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const { login } = useContext(UserContext); 
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        const data = await login(email, password);

        if (data.token) {
            alert("¡Bienvenido de nuevo!");
            navigate("/");
        } else {

            alert(data.error || "Credenciales incorrectas o error de conexión");
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
                    required
                />
                <p>Contraseña</p>
                <input 
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required
                />
                <button type='submit' className='Login-btn'>Entrar</button>
            </form>
        </div>
    );
}

export default Login;