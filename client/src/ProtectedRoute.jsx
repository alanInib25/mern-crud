import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

function ProtectedRoute() {
  const { loading, isAuthenticate } = useAuth();

  if(loading) return <h1>Loading...</h1>

  if (!loading && !isAuthenticate) return <Navigate to="/login" replace />;

  //authenticate = true && loading = false;
  return <Outlet />;
}

export default ProtectedRoute;
