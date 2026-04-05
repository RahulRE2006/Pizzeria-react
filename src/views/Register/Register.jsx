import './Register.css';
import { registrarUsuario } from '../../Js/usuarios';
import { useState, useContext } from 'react'; 
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../Context/UserContext';
function Register() {
    const { setToken } = useContext(UserContext);
  const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

   const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden.");
      return;
    }

    registrarUsuario({ email, password });

    alert("¡Cuenta creada con éxito! Bienvenido.");
    
    setToken(true); 
    navigate("/"); 
  };

    return (
        <form className='Container-Register' onSubmit={handleSubmit}>
            <h2>Registro</h2>
            <p>Ingrese Email</p>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <p>Ingrese Contraseña</p>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <p>Confirme Contraseña</p>
            <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            <button type='submit' className='Register-btn'>Registrese</button>
        </form>
    );
}

export default Register;