import React from 'react';
import { FaFacebook, FaKaaba, FaYoutube } from 'react-icons/fa6';
import { Link, NavLink } from 'react-router';
import logo from '../assets/logo-dark.png'

const Footer = () => {
    const links = <>
        <NavLink to='/' className='mr-2'><li>Home</li></NavLink>

        <NavLink to='/plants' className='mr-2'><li>All Plants</li></NavLink>
        <NavLink to='/addplant' className='mr-2'><li>Add Plants</li></NavLink>
        <NavLink to='/myplants' className='mr-2'><li>My Plants</li></NavLink>
        

    </>
    return (
        <footer className="bg-[#333d29]   text-[#f4f0bb] p-10 pt-20 md:flex justify-around">
            <nav className='items-center text-center space-y-5'>
                <img className='md:w-50 w-30 mx-auto' src={logo} alt="" />
                <p>
                    Plant Diary Industries Ltd.
                    <br />
                    Providing reliable tech since 1992
                </p>
            </nav>

            <nav className='items-center text-center md:mt-10'>
                <h6 className="footer-title pt-4">Konow About Us</h6>
                <ul className='md:flex justify-center gap-5 '>
                    {links}
                </ul>
            </nav>
            <nav className='items-center text-center md:mt-10'>
                <h6 className="footer-title pt-4">Follow Us</h6>
                <div className='flex md:flex-row justify-center gap-5 mx-auto'>
                    <Link to='https://www.facebook.com/' target='_blank'  className="link link-hover"><FaFacebook /></Link>
                    <Link to='https://www.tiktok.com/@muslim.hikers/video/7483891807307369730https://www.google.com/search?q=treeplantation+in+islam+video+in+youtube&sca_esv=bc572bb3c7050c83&sxsrf=AHTn8zqheyrVJ8g8LyP9x-vsYabwlBjt-w%3A1747977899723&ei=qwYwaNz0K9jg4-EPoZnbiAQ&oq=treeplantation+in+islam+video+in+yo&gs_lp=Egxnd3Mtd2l6LXNlcnAiI3RyZWVwbGFudGF0aW9uIGluIGlzbGFtIHZpZGVvIGluIHlvKgIIADIHECEYoAEYCjIHECEYoAEYCjIHECEYoAEYCkjrOlCcCliIKnADeACQAQCYAYoCoAHbEKoBAzItObgBA8gBAPgBAZgCC6AC9A_CAgoQABiwAxjWBBhHwgIEECEYFZgDAOIDBRIBMSBAiAYBkAYEkgcFMy4wLjigB6o0sgcDMi04uAfVDw&sclient=gws-wiz-serp#fpstate=ive&vld=cid:8b68d47a,vid:mvumFzMlZKw,st:0' target='_blank' className="link link-hover"><FaKaaba /></Link>
                    <Link to='https://www.youtube.com/'  target='_blank' className="link link-hover"><FaYoutube /></Link>

                </div>
                
            </nav>
            
        </footer>
    );
};

export default Footer;