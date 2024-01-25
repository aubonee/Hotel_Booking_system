import { Link } from "react-router-dom/dist";
import { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import GoogleLogin from './GoogleLogin';
import axios from "axios";

const Login = () => {
    const[user,setUser] =useState(null); 

    const {signIn} =useContext(AuthContext);
    const location = useLocation();
      const navigate = useNavigate();
      console.log(' login page', location);
  
      const handleLogin = e =>{
        e.preventDefault();
        const form =new FormData(e.currentTarget);
      const email=form.get('email');
      const password=form.get('password');

    console.log(email,password);
      signIn(email,password)
     
      .then(result=>{
        const loggedInUser =result.user;
          console.log(loggedInUser);
          const user ={email};
          axios.post('https://hotel-booking-server-side-eight.vercel.app/jwt', user , {withCredentials: true})
          .then(res=>{
            console.log(res.data)
            if(res.data.success){
               // navigate after login
         navigate(location?.state ? location.state : '/');
            }
          })
          Swal.fire({
           icon: 'success',
           title: 'Login Succesful',
           showConfirmButton: false,
           timer: 1500
         })
        
        
       //get access token

      })
      .catch(error=>{
        console.error(error)
        Swal.fire({
         icon: 'error',
         title: 'Oops...',
         text: 'Something went wrong!',
        
       })
      }
      )
}
    return (
        <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/XYRMxPN/12.jpg)'}}>
        <div className="">
<div className="hero-content bg-black bg-opacity-20  flex-col ">


<div data-aos="fade-down"  data-aos-easing="ease-out-cubic"  data-aos-duration="2000" className="card mx-24 flex-shrink-0 w-full text-white   bg-transparent">
  <form onSubmit={handleLogin} className="card-body  ">
  <h1 data-aos="fade-right"  data-aos-easing="ease-out-cubic"  data-aos-duration="2000" className="text-5xl text-white font-bold text-center">Login now!</h1>
  
    <div  className="form-control ">
      <label className="label">
        <span className="label-text">Email</span>
      </label>
      <input type="email" name='email' placeholder="email" className="input input-bordered" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Password</span>
      </label>
      <input type="password" name='password' placeholder="password" className="input input-bordered text-black" required />
     
    </div>
    <div className="form-control mt-6 ">
      <button className="btn bg-[#495737] text-white">Login</button>

      <div className='flex items-center justify-center my-2'><GoogleLogin ></GoogleLogin></div>
      
    </div>

  </form>
  <div className='text-center mb-5'><p>Dont have an account?</p> <span className='border-none  my-2 btn text-white bg-[#E1AF55] font-bold'> <Link to="/register">Register</Link></span> </div>
</div>
</div>
</div>
        </div>
    );
};

export default Login;