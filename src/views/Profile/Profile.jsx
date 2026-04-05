import { useContext } from "react";
import { UserContext } from "../../Context/UserContext"; 

const Profile = () => {
  const { email, logout } = useContext(UserContext);

  return (
    <div className="container mt-5 text-start mb-5">
      <h1>Mi Perfil</h1>
      <p>Email: <strong>{email}</strong></p>
      <button onClick={logout} className="btn btn-danger">
        Cerrar Sesión
      </button>
    </div>
  );
};

export default Profile;