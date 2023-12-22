import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {

    const header=<div  className="  text-xl   ">
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/task'>Task Add</NavLink></li>
    <li><NavLink to='/managment'>TaskManagment</NavLink></li>

    <li><NavLink to='/'>Conatct</NavLink></li>
    
</div>
    return (
        <div className="max-w-[1400px] mx-auto lg:flex items-center gap-56">
            <div className=" mt-10">
                
           <div className="drawer">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
    <label htmlFor="my-drawer" className="btn btn-primary drawer-button">Open drawer</label>
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
      {/* Sidebar content here */}
    {header}
      
    </ul>
  </div>
</div>
</div>
{/* <div className="border-l-8 w-full p-5">
<h1 className="text-4xl font-bold text-center">Dashboard</h1>
</div> */}
        </div>
    );
};

export default Dashboard;