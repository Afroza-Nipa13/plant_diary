import React, { useContext } from 'react';
import { NavLink } from 'react-router';
import { AuthContext } from '../Contexts/AuthContext';
import Swal from 'sweetalert2';
import logo from '../assets/logo-removebg.png'
import { FaUser } from 'react-icons/fa6';

const Navbar = () => {
  const {user,logOutUser}=useContext(AuthContext)
  
 

  const handleLogOut=()=>{

    logOutUser().then(() => {
     
       const Toast = Swal.mixin({
                              toast: true,
                              position: "top-end",
                              showConfirmButton: false,
                              timer: 3000,
                              timerProgressBar: true,
                              didOpen: (toast) => {
                                  toast.onmouseenter = Swal.stopTimer;
                                  toast.onmouseleave = Swal.resumeTimer;
                              }
                          });
                          Toast.fire({
                              icon: "success",
                              title: "Signed up successfully"
                          });
      
}).catch((error) => {
  // console.log(error)
});

  }

 const links = <>
 <NavLink to='/' className='mr-4'><li>Home</li></NavLink>
 
 <NavLink to='/plants'className='mr-4'><li>All Plants</li></NavLink>
 <NavLink to='/addplant'className='mr-4'><li>Add Plants</li></NavLink>
 <NavLink to={`/myplants/${user?.email}`} className='mr-4'><li>My Plants</li></NavLink>
 
 
 </>   
    return (
        <div className="navbar bg-green-900 absolute top-0 left-0 z-50 w-full mx-auto shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn  lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-lg dropdown-content bg-green-700 text-white rounded-box z-1 mt-3 w-52 p-2 shadow">
        
        {links}
          
      </ul>
    </div>
    <div className="text-xl">
      <img className='w-70 h-20' src={logo}/>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal text-2xl text-white px-1">
     {links}
      
        
    </ul>
  </div>
  <div className="navbar-end">
    <div>

      <label className="flex cursor-pointer gap-2 mr-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round">
    <circle cx="12" cy="12" r="5" />
    <path
      d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
  </svg>
  <input type="checkbox" value="dark" className="toggle theme-controller" />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
  </svg>
</label>

    </div>
    {
      user ? 
      <div className='flex gap-2'>
        <div className='relative group inline-block'>
          <NavLink to='/my-profile' className='flex justify-center gap-2 '>
   <img src={user.photoURL || <FaUser/>} className={`w-10 rounded-full border border-amber-400`}  data-reference='no-reference' alt={user.displayName} />
   
   </NavLink>
   <div className='absolute left-0.5 translate-x-0.5 bg-yellow-100 text-green-700 rounded mt-2 px-2 py-1 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10'>
    {user.displayName}
   </div>
        </div>
        <button onClick={handleLogOut} className='btn text-green-700 bg-yellow-200 border-none rounded-full'>Log Out</button>
      </div>
      :
     <div className='flex space-x-2'>
    <NavLink className='btn rounded-4xl px-8 bg-white hover:bg-green-200 text-lg border-none' to='/signup'>SignUp</NavLink>
    <NavLink className='btn rounded-4xl px-8 bg-yellow-200 text-lg border-none' to='/signin'>SignIn</NavLink>
    </div>

    }
    
  </div>
</div>
    );
};

export default Navbar;