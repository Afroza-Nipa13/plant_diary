import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLoaderData } from 'react-router';

const DetailsProduct = () => {
    const { _id, photo, plant_name, water_frequency,category,care_level,Health_Status,last_watered_day,next_watered_day,user_name,user_email,description } = useLoaderData()

    return (

        <div className="relative bg-cover bg-center image-full min-h-screen pt-20 px-30 shadow-sm"
                style={{backgroundImage:`url(${photo})`}}>
        <Helmet>
                        <title>Details</title>
                    </Helmet>
                    

            <div className='md:absolute inset-0 bg-black min-h-screen opacity-85' >
                
                
                <div className="md:relative z-0 top-10 flex flex-col gap-5 md:flex-row justify-center ml-10 min-h-screen mx-auto mt-30">
                    <div>
                        <img src={photo} className=' w-140 h-100 rounded-3xl border shadow-2xl' alt="" />
                    </div>

                    <div className='text-white lg:w-3xl px-10 pb-24'>
                        <h2 className="card-title mb-3 text-white text-4xl underline">{plant_name}</h2>
                        
                        <p  className='font-semibold text-gray-200'>Water Frequency: <span>{water_frequency}</span></p>
                        <p ><span>{category}</span></p>
                        <p  className='font-semibold text-gray-200'>Health Status : <span> {Health_Status}</span></p>
                        <p  className='font-semibold text-gray-200'>Care Level : <span> {care_level}</span></p>
                        <hr className='text-green-200'/>
                        <div className=' my-5 flex justify-around'>
                        <p className='font-semibold text-gray-200'>Last watered day : <span className='bg-green-100 text-green-800 px-4 py-1 rounded-4xl'>{last_watered_day}</span></p>
                        <p className='font-semibold text-gray-200'>Next watered day : <span className='bg-blue-100 text-blue-800 px-4 py-1 rounded-4xl'>{next_watered_day}</span></p>
                        </div>
                        <hr className='text-green-200 my-3'/>
                        
                        
                        
                        <p className='my-3 w-2xl font-semibold'>Description :<span> {description} </span></p>

                        <hr className='text-green-200 my-3'/>

                        <p className='my-3 w-2xl font-semibold'>Users name : <span className='underline'>{user_name}</span></p>
                        <p className='my-3 w-2xl font-semibold'>Users email : <span className='underline'>{user_email}</span></p>
                        <div className="card-actions justify-start">
                           <Link to='/plants'>
                            <button className="btn btn-primary mb-5">Go Back</button>
                           </Link>
                           <Link to='/addplant'>
                            <button className="btn btn-primary mb-5">Add Plant</button>
                           </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default DetailsProduct;