import React from 'react';
import { Bars } from 'react-loader-spinner'

const Loading = () => {
    return (
        <div className="flex justify-center items-center min-h-screen">
             <Bars
  height="80"
  width="80"
  color="#edff78"
  ariaLabel="bars-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  />
        </div>
    );
};

export default Loading;