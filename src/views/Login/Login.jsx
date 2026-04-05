import { useState, useContext } from 'react'; // Única línea para hooks
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../Context/UserContext';
import './Login.css';

function Login() {
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setToken } = useContext(UserContext); 
  const navigate = useNavigate();

  const handleLogin = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (response.ok) {
      // Guardamos el token real que viene del backend
      setToken(data.token); 
      alert("¡Bienvenido de nuevo!");
      navigate("/");
    } else {
      // Si el backend responde con error (ej: credenciales mal)
      alert(data.error || "Credenciales incorrectas");
    }
  } catch (error) {
    // Este es el bloque que el error de la imagen decía que faltaba
    console.error("Error de conexión:", error);
    alert("No se pudo conectar con el servidor. Revisa el puerto 5000.");
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