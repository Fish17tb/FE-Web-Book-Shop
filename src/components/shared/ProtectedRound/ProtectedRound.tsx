import { useCurrentApp } from "@/utils/context/app.context";
import { useLocation, Navigate } from "react-router-dom";

interface IProps {
  children: React.ReactNode;
}

const ProtectedRound = (props: IProps) => {
  const { isAuthenticated, user } = useCurrentApp();
  const location = useLocation();

  if (isAuthenticated === false) {
    // Chuyển hướng sang trang 404
    return <Navigate to="/404" replace />;
  }

  const isAdminRoute = location.pathname.includes("admin");
  if (isAuthenticated === true && isAdminRoute === true) {
    const roleName = user?.roleId?.name;
    if (roleName === "USER") {
      // Chuyển hướng sang trang 403
      return <Navigate to="/403" replace />;
    }
  }

  return <>{props.children}</>;
};

export default ProtectedRound;
