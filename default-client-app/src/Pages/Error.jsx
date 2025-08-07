import React from 'react';
import pageNotFound from '../assets/Page not found.png'
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router';

const Error = () => {
    return (
        <div style={{backgroundImage: `url(${pageNotFound})`}} className='relative bg-center bg-green-500 bg-cover object-bottom mx-auto md:min-h-screen md:w-full h-[550px]  '>
           <Link to='/'>
           <button className='absolute md:top-20 md:left-100 lg:top-10 lg:left-150 btn rounded-full bg-[#679267] text-white hover:bg-amber-200 cursor-pointer hover:text-[#679267] md:px-10 md:py-6 md:text-2xl flex m-5'>Back to home <FaArrowLeft/></button>
           </Link>
        </div>
    );
};

export default Error;