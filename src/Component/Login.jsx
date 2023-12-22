import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Useauth from "../Hook/Useauth";
import Swal from "sweetalert2";
import Navbar from "./Navbar";
import { AiOutlineGoogle } from "react-icons/ai";

const Login = () => {
    const {createsignin,googlelogin}=Useauth()
        // const navigate =useNavigate()
        // const location =useLocation()


    const handlelogin=(e)=>{

        
        // const from=location.state?.from?.pathname ||"/";
        e.preventDefault()
        const email=e.target.email.value
        const password=e.target.password.value 
        console.log(email,password)

        createsignin(email,password)
          .then(()=>{
            
            Swal.fire(
                'Good job!',
                'You have successfully login!',
                'success'
              )
            //   navigate(from,{replace:true})
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

    const handlegoogle=()=>{
      googlelogin()
  .then(res=>console.log(res.user))
  .catch(error=>console.error(error))
      
  }
    return (
        <div>
          <div>
            <Navbar></Navbar>
          </div>
        <div className="bg-teal-700">
        
        </div>
        <div className="hero min-h-screen bg-black ">
        <div className="hero-content flex-col lg:w-1/2 my-10 bg-blue-950  ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-white">Login now!</h1>
           
          </div>
          <div className="card flex-shrink-0  w-full   shadow-2xl bg-base-100">
            <div className="card-body bg-teal-200 ">
                <form onSubmit={handlelogin} className="lg:w-1/2 mx-auto" >
            
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white text-lg font-bold">Email</span>
                </label>
                <input type="email" placeholder="email"  name="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white text-lg font-bold">Password</span>
                </label>
                <input type="password" placeholder="password"  name="password" className="input input-bordered" />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover text-white">Forgot password?</a>
                </label>
              </div>
              
              <div className="form-control mt-6">
                
                    <button disabled={false} className="btn btn-primary ">Login</button>

                    <div className="my-5 w-full text-center">
                      <button onClick={handlegoogle} className="btn"> <span className="text-2xl"><AiOutlineGoogle></AiOutlineGoogle> </span> </button>
                    </div>
              </div>
              <div className=" my-5">
                <p className="text-white">Are complete register? 

                 <span className="text-blue-600 font-bold text-xl"><NavLink to="/register">Register</NavLink> </span>
                 </p> 
              </div>

              {/* <Socilalogin></Socilalogin> */}
        
              </form>
            </div>
           
          </div>
        </div>
      </div>
      </div>
    );
};

export default Login;