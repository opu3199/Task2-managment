import { Outlet } from "react-router-dom";
import Navbar from "../Component/Navbar";

const Mainlayout = () => {
    return (
        <div className="lg:max-w-[1400px] mx-auto">
            
            <Outlet></Outlet>

       
        </div>
    );
};

export default Mainlayout;