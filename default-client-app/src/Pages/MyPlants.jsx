import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthContext';
import MyPlantCard from './MyPlantCard';
import { Helmet } from 'react-helmet-async';
import LottieIcon from './LottieIcon';


const MyPlants = () => {
const [newPlants, setNewPlants]= useState([])
const [nextWateringDay, setNextWateringDay]= useState('')


const {user} = useContext(AuthContext);
const userEmail = user?.email;
  useEffect(()=>{
    if(userEmail){
fetch('https://backend-server-three-lyart.vercel.app/plants')
    .then(res=>res.json())
    .then(data=>{
        // console.log(data)
        const myPlants = data.filter(userPlant => userPlant.user_email === userEmail)
        setNewPlants(myPlants)
    }).catch(error=>{
        // console.log(error)
    })

    }
    
  },[userEmail])
    
    return (
        <div className='pt-30 mb-10 px-5 mx-auto items-center text-center'>
            <Helmet>
                <title>My Plants | {userEmail}</title>
            </Helmet>
            <h2 className='text-5xl font-bold text-green-600 dark:text-base-200 underline'>My Plants</h2>
           <div className='grid lg:grid-cols-3 md:grid-cols-2  grid-cols-1 gap-5 mx-auto'>
             {newPlants.length<1?  <div className='min-h-screen flex justify-center w-7xl mt-20 mx-auto'>
               <div>
                 <LottieIcon></LottieIcon>
                <h2 className='text-5xl font-bold'>You haven't added any plant yet...</h2>
               </div>

             </div> :
                newPlants.map(plant=><MyPlantCard key={plant._id}
                    newPlants={newPlants}
                    nextWateringDay={nextWateringDay}
                    setNextWateringDay={setNextWateringDay}
                    setNewPlants={setNewPlants}
                    plant={plant}></MyPlantCard>)
            }
           </div>
        </div>
    );
};

export default MyPlants;