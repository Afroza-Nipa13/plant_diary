import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Contexts/AuthContext';

const PlantDataRow = ({plant,index}) => {
   const {user} =useContext(AuthContext)
    const {_id,photo, plant_name,care_level,water_frequency,category } = plant;
     const navigate = useNavigate()
    const location= useLocation()
const handleClick = () => {
  if(user?.email){
  navigate(`/details/${_id}`);
  }
  else{
    navigate('/signin', { state: { from: location } })
  }
    ;
  };

    

    return (
        <>
       {/* row 1 */}
      <tr className='text-green-600 border-b-2 border-gray-100'>
        <th>
          <label>
            <h2>{index +1}</h2>
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={photo}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{plant_name}</div>
              <div className="text-sm opacity-50">{care_level}</div>
            </div>
          </div>
        </td>
        <td className=' md:table-cell hidden'>
          {category}
          
          
        </td>
        <td className=' md:table-cell hidden'>{water_frequency}</td>
        <th>
          
          
          
          <button onClick={handleClick}  className="btn btn-xs bg-green-500 text-white">Details</button>
          
        
          
       
      
        </th>
      </tr>
        </>
    );
};

export default PlantDataRow;