import { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [token, setToken] = useState(false);
  const [email, setEmail] = useState(null);

  const login = async (email, password) => {
    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    if (data.token) {
      setToken(data.token);
      setEmail(data.email);
    }
    return data;
  };

  const logout = () => {
    setToken(false);
    setEmail(null);
  };

  const getProfile = async () => {
    const res = await fetch("http://localhost:5000/api/auth/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();
    return data;
  };

  return (
    <UserContext.Provider value={{ token, email, login, logout, getProfile }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;