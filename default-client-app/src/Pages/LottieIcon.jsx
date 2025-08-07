import React from 'react';
import Lottie from "lottie-react";
import AnimationHarbs from '../assets/harbs.json'

const LottieIcon = () => {
    return (
        <div className="text-center mt-10">
      <div className="w-40 mx-auto">
        <Lottie animationData={AnimationHarbs} loop={true} />
      </div>
      <p className="text-xs mt-2 text-gray-500">
        
      </p>
    </div>
    );
};

export default LottieIcon;