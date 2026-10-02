import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function ProtectedUser({ children }) {
  const user = useSelector((state) => state.user.user);
  if (!user) {
    return <Navigate to={"/login"} />;
  } else {
    return children;
  }
}
export default ProtectedUser;
