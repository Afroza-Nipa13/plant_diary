// components/CustomCurvedNavbar.jsx
import React from 'react';
import { NavLink, useLocation } from 'react-router';
import { FaHome, FaSeedling, FaPlus, FaLeaf } from 'react-icons/fa';

const CustomCurvedNavbar = () => {
  const location = useLocation();

  const navItems = [
    { 
      name: 'home', 
      path: '/', 
      icon: <FaHome size={20} />, 
      label: 'Home' 
    },
    { 
      name: 'plants', 
      path: '/plants', 
      icon: <FaSeedling size={20} />, 
      label: 'Plants' 
    },
    { 
      name: 'add', 
      path: '/addplant', 
      icon: <FaPlus size={20} />, 
      label: 'Add' 
    },
    { 
      name: 'myplants', 
      path: '/myplants', 
      icon: <FaLeaf size={20} />, 
      label: 'My Plants' 
    },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40">
      {/* Curved Background */}
      <div className="relative">
        {/* Curved SVG */}
        <svg 
          className="w-full h-16 absolute bottom-0" 
          viewBox="0 0 1440 120" 
          preserveAspectRatio="none"
        >
          <path 
            d="M0,0 L1440,0 L1440,120 Q720,80 0,120 Z" 
            className="fill-base-200 stroke-base-300 stroke-[0.5]"
          />
        </svg>
        
        {/* Navigation Items */}
        <div className="relative flex justify-around items-center h-16 px-4">
          {navItems.map((item, index) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) => `
                flex flex-col items-center justify-center 
                transition-all duration-300 transform
                ${isActive 
                  ? 'text-primary -translate-y-4 scale-110' 
                  : 'text-gray-500 hover:text-gray-700'
                }
              `}
            >
              {/* Active Indicator */}
              {isActive(item.path) && (
                <div className="absolute -top-2 w-12 h-1 bg-primary rounded-full"></div>
              )}
              
              {/* Icon Container */}
              <div className={`
                flex items-center justify-center 
                w-12 h-12 rounded-2xl transition-all duration-300
                ${isActive(item.path) 
                  ? 'bg-primary text-primary-content shadow-lg' 
                  : 'bg-transparent hover:bg-base-300'
                }
              `}>
                {item.icon}
              </div>
              
              {/* Label */}
              <span className={`
                text-xs font-semibold mt-1 transition-all duration-300
                ${isActive(item.path) ? 'opacity-100' : 'opacity-0'}
              `}>
                {item.label}
              </span>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomCurvedNavbar;