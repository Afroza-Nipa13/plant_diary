import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router';
import { AuthContext } from '../Contexts/AuthContext';
import Swal from 'sweetalert2';
import logo from '../assets/logo.png';
import leaf from '../assets/leaf.png';
import { 
  FaHome, 
  FaUser, 
  FaLeaf, 
  FaPlus, 
  FaSeedling 
} from 'react-icons/fa';
import CustomCurvedNavbar from './CustomCurvedNavbar';

const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContext);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  
  useEffect(() => {
    const html = document.querySelector("html");
    if (html) {
      html.setAttribute("data-theme", theme);
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  const handleTheme = (e) => {
    const isDark = e.target.checked;
    setTheme(isDark ? "dark" : "light");
  };

  const handleLogOut = () => {
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
        title: "Signed out successfully"
      });
    }).catch((error) => {
      alert("Something went wrong!", error);
    });
  };

  const handleImageError = (e) => {
    e.target.style.display = 'none';
    const nextSibling = e.target.nextSibling;
    if (nextSibling && nextSibling.style) {
      nextSibling.style.display = 'block';
    }
  };

  // Enhanced navigation items with icons
  const navItems = [
    { path: '/', label: 'Home', icon: <FaHome className="text-lg" /> },
    { path: '/plants', label: 'All Plants', icon: <FaSeedling className="text-lg" /> },
    { path: '/addplant', label: 'Add Plants', icon: <FaPlus className="text-lg" /> },
    { path: `/myplants/${user?.email}`, label: 'My Plants', icon: <FaLeaf className="text-lg" /> },
  ];

  const links = (
    <>
      {navItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) =>
            `flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 hover:bg-primary hover:text-primary-content mr-2 ${
              isActive ? 'bg-primary text-primary-content shadow-lg' : ''
            }`
          }
        >
          {item.icon}
          <span className="font-semibold">{item.label}</span>
        </NavLink>
      ))}
    </>
  );

  return (
    <>
      {/* Main Desktop Navbar */}
      <div className='mx-8'>
        <div className="navbar fixed top-3 left-0 z-50 w-full bg-base-200 rounded-r-3xl rounded-l-3xl shadow-lg lg:px-8 border border-base-300">
          <div className="navbar-start flex items-center">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </div>
              <ul tabIndex={0} className="menu menu-lg dropdown-content bg-base-100 rounded-box z-1 mt-3 w-64 p-4 shadow-xl border border-base-300">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `flex items-center gap-3 py-3 text-lg ${isActive ? 'text-primary font-bold' : ''}`
                      }
                    >
                      {item.icon}
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            
            <NavLink to="/" className="flex items-center">
              <img
                className="w-12 h-12 block sm:hidden animate-pulse"
                src={leaf}
                alt="Leaf Logo"
              />
              <img
                className="w-40 h-15 hidden sm:block transition-transform duration-300 hover:scale-105"
                src={logo}
                alt="Plant Diary Logo"
              />
            </NavLink>
          </div>
          
          <div className="navbar-center hidden lg:flex">
            <div className="flex items-center space-x-1 bg-base-300 rounded-2xl p-2 shadow-inner">
              {links}
            </div>
          </div>
          
          <div className="navbar-end space-x-4">
            <div className="tooltip tooltip-bottom" data-tip={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}>
              <label className="flex cursor-pointer gap-2">
                <input 
                  type="checkbox" 
                  onChange={handleTheme}
                  className="toggle theme-controller" 
                  checked={theme === "dark"}
                />
              </label>
            </div>
            
            {user ? (
              <div className='flex items-center gap-4'>
                <div className='tooltip tooltip-bottom' data-tip={user.displayName || 'My Profile'}>
                  <NavLink to='/my-profile' className='flex justify-center gap-2'>
                    {user.photoURL ? (
                      <>
                        <img 
                          src={user.photoURL} 
                          className="w-12 h-12 rounded-full border-2 border-primary shadow-lg transition-transform duration-300 hover:scale-110" 
                          alt={user.displayName} 
                          onError={handleImageError}
                        />
                        <FaUser className="w-12 h-12 rounded-full border-2 border-primary hidden" />
                      </>
                    ) : (
                      <div className="w-12 h-12 rounded-full border-2 border-primary bg-primary text-primary-content flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110">
                        <FaUser className="text-lg" />
                      </div>
                    )}
                  </NavLink>
                </div>
                <button 
                  onClick={handleLogOut} 
                  className='btn btn-primary rounded-full px-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1'
                >
                  Log Out
                </button>
              </div>
            ) : (
              <div className='flex space-x-3'>
                <NavLink 
                  className='btn rounded-full px-6 bg-base-300 text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1' 
                  to='/signup'
                >
                  SignUp
                </NavLink>
                <NavLink 
                  className='btn btn-primary rounded-full px-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1' 
                  to='/signin'
                >
                  SignIn
                </NavLink>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Custom Curved Bottom Navigation for Mobile */}
      <CustomCurvedNavbar />

      {/* Spacer for mobile bottom nav */}
      <div className="lg:hidden h-20"></div>
    </>
  );
};

export default Navbar;