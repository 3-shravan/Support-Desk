import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const PublicRoutes = () => {
  const { auth } = useAuth();

  const location = useLocation();
  // console.log(location);

  return !auth?.token ? <Outlet /> : <Navigate to="/" replace />;
};

export default PublicRoutes;
