import { Link } from "react-router-dom";
import Privateroute from "../Hook/Privateroute";

const Banner = () => {
    return (
        <div className="  h-[600px] rounded-lg space-y-5 bg-[url('https://i.ibb.co/wrzSrvJ/19197470.jpg')] bg-contain  bg-center h-screen ">

            <h1 className="lg:text-4xl text-2xl font-bold text-center text-red-950   ">Task Mnangment Platform</h1>

          <div className="text-center p-10 lg:p-56">
     
     <button className="text-xl font-bold btn  text-white bg-emerald-950 hover:-translate-y-4"><Link to='/dashboard'>Let's Explore</Link> </button>
    
       </div> 
        </div>
    );
};

export default Banner;