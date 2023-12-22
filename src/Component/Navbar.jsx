import { Link, NavLink } from "react-router-dom";
import img from '../assets/image/7537053.jpg'
import Useauth from "../Hook/Useauth";
import Swal from "sweetalert2";
const Navbar = () => {
    const {user,logout}=Useauth()
    const header=<div  className="lg:flex gap-2 text-xl   ">
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/about'>About</NavLink></li>
    <li><NavLink to='/addfood'>Conatct</NavLink></li>
    
</div>

const handlelogout=()=>{
    logout()
    .then(()=>{
      Swal.fire(
        '',
        'You have successfully logout from this site!',
        'success'
      )
    })
    .catch(()=>{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: '<a href="">Why do I have this issue?</a>'
      })
    })
  }
    return (
        <div className="navbar rounded-xl ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {header}
            </ul>
          </div>
          <div className="flex items-center gap-4">
          <img className="lg:w-20 w-6 rounded-full" src={img} alt="" />
          {/* <a className="btn btn-ghost normal-case text-xl font-bold"> Food Sharing <br />plaform</a> */}
        
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {header}
          </ul>
        </div>
        <div className="navbar-end">
        {
            user? <div className="flex gap-5">
              <img className="w-10 rounded-full" src={user.photoURL} alt="" />  
             <Link to='/'> <button onClick={handlelogout} className="btn lg:text-xl">Logout</button></Link>
              </div>
            
            :<button className="btn text-2xl"><Link to='/login'>Login</Link> </button>
          } 

           {/* <button className="btn text-2xl"><Link to='/login'>Login</Link> </button> */}

        </div>
      </div>
    );
};

export default Navbar;