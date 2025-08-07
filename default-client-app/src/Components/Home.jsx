import React from 'react';

import Banner from './Banner';
import AllPlants from './AllPlants';
import AboutUs from '../Pages/AboutUs';
import OurClients from '../Pages/OurClients';
import LottieIcon from '../Pages/LottieIcon';
import { Helmet } from 'react-helmet-async';


const Home = () => {
    



    return (
        <div>
            <Helmet>
                <title>My Plant Diary| Home</title>
            </Helmet>
           <Banner></Banner>
           <LottieIcon></LottieIcon>
            <AboutUs></AboutUs>
            <OurClients></OurClients>

           
        </div>
    );
};

export default Home;