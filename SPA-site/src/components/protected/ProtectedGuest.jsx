import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
function ProtectedGuest({ children }) {
  const user = useSelector((state) => state.user.user);
  if (user) {
    return <Navigate to={"/dashboard"} />;
  } else {
    return children;
  }
}
export default ProtectedGuest;
