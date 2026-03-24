import { useState } from 'react';
import './Register.css';
import { registrarUsuario } from '../../Js/usuarios';

function Register() {
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
        
        alert("¡Cuenta creada! Ahora puedes ir al Login.");
        setEmail(""); setPassword(""); setConfirmPassword("");
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