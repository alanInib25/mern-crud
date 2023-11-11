import { createContext, useState, useContext, useEffect } from "react";
import { registerRequest, loginRequest, verifyTokenRequest } from "../api/auth";
//para leer cookies
import Cookies from "js-cookie";

export const AuthContext = createContext();

//use del contexto
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used withing an AuthProvider");
  return context;
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [errors, setErrors] = useState([]);
  const [isAuthenticate, setIsAuthenticate] = useState(false);
  const [loading, setLoading] = useState(true);

  //quita mensajes de error
  useEffect(() => {
    if (errors.length > 0) {
      const timeout = setTimeout(() => {
        setErrors([]);
      }, 5000);
      return () => clearTimeout(timeout);
    }
  }, [errors]);

  useEffect(() => {
    checkLogin();
  }, []);

  //para no perder el estado al refrescar el sitio;
  async function checkLogin() {
    try {
      const cookies = Cookies.get();

      if (!cookies.token) {
        setIsAuthenticate(false);
        setLoading(false);
        setUser(null);
        return;
      }

      const res = await verifyTokenRequest();
      if (!res.data) {
        setIsAuthenticate(false);
        setLoading(false);
        setUser(null);
        return;
      }
      setIsAuthenticate(true);
      setLoading(false);
      setUser(res.data);
      return;
    } catch (error) {
      setIsAuthenticate(false);
      setLoading(false);
      setUser(null);
      return;
    }
  }

  //registrar usuario
  const signup = async (user) => {
    try {
      const res = await registerRequest(user);
      if (res.status === 200) {
        setUser(res.data);
        return setIsAuthenticate(true);
      }
    } catch (error) {
      if (Array.isArray(error.response.data)) {
        return setErrors(error.response.data);
      }
      return setErrors([error.response.data.message]);
    }
  };

  //login usuario
  const signin = async (user) => {
    try {
      const res = await loginRequest(user);
      if (res.status === 200) {
        setUser(res.data);
        setIsAuthenticate(true);
        return;
      }
    } catch (error) {
      if (Array.isArray(error.response.data)) {
        return setErrors(error.response.data);
      }
      return setErrors([error.response.data.message]);
    }
  };

  //logout user
  const logout = async () => {
    try {
      Cookies.remove("token");
      setIsAuthenticate(false);
      setUser(null);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        signup,
        signin,
        logout,
        user,
        loading,
        errors,
        isAuthenticate,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
