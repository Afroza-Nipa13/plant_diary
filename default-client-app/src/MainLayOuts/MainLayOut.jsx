import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Pages/Footer';
import bg from "/woodenbg.webp"

const MainLayOut = () => {
    return (
        <div className='min-h-screen '
        style={{
                backgroundImage: `url(${bg})`,
                backgroundPosition: "center",
                backgroundSize: "auto",
                backgroundRepeat: "repeat",
                backgroundAttachment: "fixed"
            }}            
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