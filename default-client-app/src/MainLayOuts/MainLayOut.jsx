import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Pages/Footer';

const MainLayOut = () => {
    return (
        <div className=''>
            <header>
                <Navbar></Navbar>
            </header>
            <main className='max-w-7xl mx-auto min-h-screen'>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default MainLayOut;