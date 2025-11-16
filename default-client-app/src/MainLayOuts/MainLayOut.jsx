import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Pages/Footer';

const MainLayOut = () => {
    return (
        <div className='min-h-screen bg-base-200 '
        
    >
            <header>
                <Navbar></Navbar>
            </header>
            <main className=''>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default MainLayOut;