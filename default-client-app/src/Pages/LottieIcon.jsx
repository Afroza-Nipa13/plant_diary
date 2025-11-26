import React from 'react';
import Lottie from "lottie-react";
import AnimationHarbs from '../assets/harbs.json'

const LottieIcon = () => {
    return (
        <div className="mt-10">
            <div className="flex justify-center items-center ">
                {/* First leaf - extra large */}
                <div className="w-56">
                    <Lottie 
                        animationData={AnimationHarbs} 
                        loop={true}
                    />
                </div>
                
                {/* Second leaf - small and flipped horizontally */}
                <div 
                    className="w-36 -ml-78 mt-20"
                    style={{
                        transform: 'scaleX(-1)', // Horizontal flip
                    }}
                >
                    <Lottie 
                        animationData={AnimationHarbs} 
                        loop={true}
                    />
                </div>
                {/* <div 
                    className="w-26"
                    style={{
                        transform: 'scaleX(-1)', // Horizontal flip
                    }}
                >
                    <Lottie 
                        animationData={AnimationHarbs} 
                        loop={true}
                    />
                </div> */}
            </div>
            <p className="text-xs mt-2 text-gray-500">
                
            </p>
        </div>
    );
};

export default LottieIcon;