import { useNavigate } from "react-router";
import useUser from "../features/authentication/useUser";
import Loader from "./Loader";
import { useEffect } from "react";

function ProtectedRoute({ children }) {
  const { isAuthenticated, isLoading } = useUser();
  const navigate = useNavigate();

  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate("/login");
    },
    [isAuthenticated, isLoading, navigate],
  );

  if (isLoading) return <Loader />;

  if (isAuthenticated) return children;
}

export default ProtectedRoute;
