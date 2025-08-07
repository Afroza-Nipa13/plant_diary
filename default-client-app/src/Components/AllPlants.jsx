
import {  useState } from 'react';
import PlantDataRow from '../Pages/PlantDataRow';
import { useLoaderData } from 'react-router';
import LottieIcon from '../Pages/LottieIcon';
import { Helmet } from 'react-helmet-async';

const AllPlants = () => {
    const initialPlants= useLoaderData()
    const [sortByPlants, setSortByPlants]= useState(null)

    const filteredPlants = sortByPlants ?

    initialPlants.filter(plants=>plants.care_level.toLowerCase() === sortByPlants.toLowerCase())
    
  :
  initialPlants;  
   

  
    return (
        <div className='pt-25 min-h-screen md:w-6xl mx-auto'>
          <Helmet>
                          <title>All Plants</title>
                      </Helmet>
            <h1 className='text-5xl text-green-600 dark:text-white underline my-5 text-center font-bold'> All plants</h1>
            
<div className='my-10 flex justify-center items-center'>
  <select 
  onChange={(e)=>setSortByPlants(e.target.value)} 
  name='care_level' 
  defaultValue="" 
  className="select">
  <option value='' disabled={true}>---Choose plant by Care Level---</option>
  <option value='easy'>Easy</option>
  <option value='medium'>Medium</option>
  <option value='difficult'>Difficult</option>
  
</select>

</div>
            <div className="overflow-x-auto bg-green-200 rounded-2xl mb-10">
  <table className="table md:px-5 md:py-4">
    {/* head */}
    <thead className='bg-green-700 text-green-100'>
      <tr>
        <th>
          <label>
            <h2>No.</h2>
          </label>
        </th>
        <th>Plant name</th>
        <th className=' md:table-cell hidden'>Category</th>
        <th className=' md:table-cell hidden'>Water Frequency</th>
        <th></th>
      </tr>
    </thead>
    <tbody>

        {
            filteredPlants?
            filteredPlants.map((plant,index)=><PlantDataRow key={plant._id}
            plant={plant} 
            index={index}></PlantDataRow>)
            :
            <LottieIcon></LottieIcon>
        }
      
      
      
    </tbody>
</table>
</div>
        </div>
    );
};

export default AllPlants;