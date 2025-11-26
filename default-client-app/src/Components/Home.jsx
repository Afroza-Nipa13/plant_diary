import React from 'react';

import Banner from './Banner';
import AllPlants from './AllPlants';
import AboutUs from '../Pages/AboutUs';
import OurClients from '../Pages/OurClients';
import LottieIcon from '../Pages/LottieIcon';
import { Helmet } from 'react-helmet-async';
import Plants from '../Pages/Plants';


const Home = () => {
    



    return (
        <div>
            <Helmet>
                <title>My Plant Diary| Home</title>
            </Helmet>
           <Banner></Banner>
           <Plants/>
           <LottieIcon></LottieIcon>
          
            <AboutUs></AboutUs>
            <OurClients></OurClients>
            <LottieIcon></LottieIcon>

           
        </div>
    );
};

export default Home;