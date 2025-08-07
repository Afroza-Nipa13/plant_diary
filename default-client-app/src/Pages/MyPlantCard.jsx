import { FaUserEdit } from 'react-icons/fa';
import { FaDeleteLeft, FaRecycle } from 'react-icons/fa6';
import { MdDeleteForever } from 'react-icons/md';
import { Link } from 'react-router';
import Swal from 'sweetalert2';
import alternativePhoto from '../assets/alternativePhoto.jpg'

import { formatDistanceToNow, parseISO } from 'date-fns';

const MyPlantCard = ({ plant,newPlants,setNewPlants, }) => {

 const { _id, Health_Status,  category, description, last_watered_day, next_watered_day, photo, plant_name } = plant;

 
 
 
    
    
 const handleDeletePlants=(_id)=>{
        

        Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
    
  if (result.isConfirmed) {
    // deleting the plant
    
   fetch(`https://backend-server-three-lyart.vercel.app/plants/${_id}`,{
    method: "DELETE",
   
   }).then(res => res.json()).then(data=>{
    // console.log("after deleting data",data)
   })


    Swal.fire({
      title: "Deleted!",
      text: "Your plant has been deleted.",
      icon: "success"
    });

    // remove plants from the state
    const remainingPlants = newPlants.filter(plants=>plants._id !== _id)
    // console.log(remainingPlants)
    setNewPlants(remainingPlants)

  }
});
    }






    return (
        <div className='card bg-teal-100 rounded-2xl shadow-sm mt-10'>

            <div className="">
                <figure className='object-cover content-center h-[250px] mx-auto'>
                    <img
                        className='w-full h-full rounded-t-3xl mx-auto'
                        src={photo || alternativePhoto}
                        alt={plant_name} />
                </figure>
                <div className="card-body justify-center items-center">
                    <h2 className="card-title underline">{plant_name}</h2>
                    <div className='space-y-4 text-start'>
                        <p className='text-black font-bold'>Description: <span>{description} </span></p>
                        <p className='text-black font-bold'>Category: <span>{category} </span></p>
                        <p className='text-black font-bold'>Health Status : <span> {Health_Status}</span></p>
                        <hr className='text-gray-500 my-3'/>
                        <h2 className='text-black font-bold'>Last Watered Day : <span className='text-blue-600 font-bold'> {last_watered_day}</span> </h2>
                        <h2 className='text-black font-bold'>Next Watered Day : <span className='text-blue-600 font-bold'> {next_watered_day}</span></h2>
                        <p className='bg-red-400 rounded-full text-white px-3 py-2 font-semibold text-center'>{next_watered_day ? (
    formatDistanceToNow(new Date(next_watered_day), { addSuffix: true })
  ) : (
    "No watering date set"
  )} from today</p>
                    </div>
                    <div className="card-actions justify-start">

                        {/* update button */}
                        <Link
                            to={`/updateplants/${_id}`}
                        >
                            <button
                                type="submit"
                                className="inline-flex items-center cursor-pointer justify-center h-12 px-6 font-medium tracking-wide text-green-600 transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                            > <FaUserEdit
                             className='w-7 h-7'/>
                               
                            </button>
                        </Link>
                        {/* delete button */}
                        <button
                            
                            onClick={()=>handleDeletePlants(_id)}
                            
                            className="inline-flex items-center justify-center h-12 px-6 cursor-pointer font-medium tracking-wide text-red-600 transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                        >
                           <MdDeleteForever
                           className='w-7 h-7'/>
                        </button>


                    </div>
                </div>
            </div>

        </div>
    );
};

export default MyPlantCard;