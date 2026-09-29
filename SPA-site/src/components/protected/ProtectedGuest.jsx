import { useContext } from "react";
import { UserContext } from "../CartContext/UserContext";
import { Navigate } from "react-router-dom";

function ProtectedGuest({ children }) {
  const { user } = useContext(UserContext);
  if (user) {
    return <Navigate to={"/dashboard"} />;
  } else {
    return children;
  }
}
export default ProtectedGuest;
