import { Navigate } from "react-router-dom";
import Useauth from "./Useauth";


const Privateroute = ({children}) => {
    const {user,loading}=Useauth()
    if(loading){
       return <span className="loading  loading-bars loading-lg"></span>
   }



   if(user){
       return children
   }
   return  <Navigate  to='/login'></Navigate>
};

export default Privateroute;