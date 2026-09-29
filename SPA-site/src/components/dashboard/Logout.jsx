import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../CartContext/UserContext";

function Logout() {
  const { logOut } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    logOut();
    navigate("/login");
  }, []);

  return null;
}

export default Logout;
