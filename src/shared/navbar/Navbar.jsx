
import { useContext} from "react";
import logo from "../../assets/images/Logo.png"
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {


  
  const {user, logOut} = useContext(AuthContext);
   //////////////////////////////////////////////////////////////////////////////////
 
  const handleSignOut =() =>{
    logOut()
    .then()
    .catch()
  }
    const navItems =<>
    <li><NavLink to="/" className={({ isActive, isPending }) =>  isPending ? "pending" : isActive ? "font-bold text-lg" : "text-lg"}> Home</NavLink></li> 
    <li><NavLink to="/rooms" className={({ isActive, isPending }) =>  isPending ? "pending" : isActive ? "font-bold text-lg" : "text-lg"}> Rooms</NavLink></li>
   <li><NavLink to="/mybookings" className={({ isActive, isPending }) =>  isPending ? "pending" : isActive ? "font-bold text-lg" : "text-lg"}> My Bookings</NavLink></li>
   <li><NavLink to="/review" className={({ isActive, isPending }) =>  isPending ? "pending" : isActive ? "font-bold text-lg" : "text-lg"}> Reviews</NavLink></li>
    
    </>
    return (
        <div>
        <div className="navbar fixed z-10 top-0 bg-base-100  text-green-900 font-semibold shadow-xl ">
<div className="navbar-start">
  <div className="dropdown">
    <label tabIndex={0} className="btn btn-ghost lg:hidden">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
    </label>
    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
     {navItems}
    </ul>
  </div>
  <a className=" normal-case text-xl"><img src="https://i.ibb.co/TKmWJsm/logo2-removebg.png" alt="" className='w-[70px]' /></a>
</div>
<div className="navbar-center hidden lg:flex">
  <ul className="menu menu-horizontal px-1">
  {navItems}
  </ul>
</div>
<div className="navbar-end">
<div className="flex ">
      {
        user && <div className="flex  items-center"> <div><img className=" w-[30px] h-[30px] rounded-full" src={user.photoURL} alt="" /></div> <h2>{user.displayName}</h2> </div> 
      }
    </div>


 
  {
    user ?
    <button onClick={handleSignOut} className="text-sm  my-2 mx-2 btn rounded-none bg-[#495737]  border-2 border-spacing-y-3 border-spacing-x-7 text-[#FFFFFA] border-[#495737]">Sign Out</button>
  :
  <Link className=" my-2 mx-2 btn rounded-none bg-[#495737] border-2 border-spacing-y-3 border-spacing-x-7 text-[#FFFFFA] border-[#495737]" to="/login">Login</Link>
  }
</div>
</div>
      </div>
    );
};

export default Navbar;