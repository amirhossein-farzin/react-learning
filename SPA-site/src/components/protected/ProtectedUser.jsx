import { useContext } from "react";
import { UserContext } from "../CartContext/UserContext";
import { Navigate } from "react-router-dom";

function ProtectedUser({children}){
    const {user} = useContext(UserContext)
    if(!user){
        return <Navigate to={"/login"} />
    }else{
        return children
    }
}
export default ProtectedUser;