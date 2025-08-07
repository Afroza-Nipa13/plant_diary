
import { Helmet } from 'react-helmet-async';
import addPlants from '../assets/addPlants.png'
import Swal from 'sweetalert2';

const AddPlants = () => {
     
 

    const handleAddPlants = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const newObjectData = Object.fromEntries(formData.entries());
       
        // send plants to database
        fetch('https://backend-server-three-lyart.vercel.app/plants', {
            method: "POST",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(newObjectData)
        })
            .then(res => res.json())
            .then(data => {
              
                if (data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your added a plant successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    form.reset()
                }

            })

    }
    return (
        <div className='p-24'>
            <Helmet>
                            <title>Add Plants</title>
                        </Helmet>
            <div
                className='mx-auto p-12 shadow-2xl bg-no-repeat  bg-cover mt-10 rounded-2xl text-center space-y-5 '
                style={{ backgroundImage: `url(${addPlants})` }}>
                <h1 className='text-6xl font-bold text-green-950 mx-auto italic'>Add New Plant</h1>
                <p className='md:w-3xl text-center text-xl mx-auto text-green-900'>Keep your plants happy! Fill out this form to set reminders and <br />track your plant's care routine.</p>

                <form onSubmit={handleAddPlants} className='space-y-5'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-2 mx-auto'>
                        {/* image */}
                        <fieldset className="fieldset bg-green-100 border-green-200 rounded-box border p-4">
                            <label className="label">Image</label>
                            <input type="text" name='photo' className="input w-full text-gray-600 font-bold" placeholder="photo URL" />
                        </fieldset>

                        {/* name */}
                        <fieldset className="fieldset  bg-green-100 border-green-200 rounded-box border p-4">
                            <label className="label">Plant Name</label>
                            <input type="text" name='plant_name' className="input w-full text-gray-600 font-bold" placeholder="Plant Name" />
                        </fieldset>
                        {/*Water frequency  */}
                        <fieldset className="fieldset bg-green-100 border-green-200 rounded-box border p-4">
                            <label className="label">Watering Frequency</label>
                            <select name='water_frequency' defaultValue="" className="select w-full">
                                <option className='input w-full text-gray-600 font-bold' value='' disabled={true}>Pick an option</option>

                                <option>every 7 days</option>
                                <option>every 10 days</option>
                                <option>every 5 days</option>
                                <option>every 2 days</option>
                                <option>every 3 days</option>
                            </select>

                        </fieldset>
                        {/* Category */}
                        <fieldset className="fieldset bg-green-100 border-green-200 rounded-box border p-4">
                            <label className="label">Category</label>
                            <select name='category' defaultValue="" className="select w-full">
                                <option className='font-bold text-gray-600' value="" disabled={true}>Pick a type of category</option>

                                <option>Succulent</option>
                                <option>Fern</option>
                                <option>Flowering</option>
                                <option>Aquatic plant</option>
                                <option>Climbers</option>
                            </select>
                        </fieldset>
                        {/* Care level */}
                        <fieldset className="fieldset bg-green-100 border-green-200 rounded-box border p-4">
                            <label className="label">Care level</label>
                            <select name='care_level' defaultValue="" className="select w-full">
                                <option className='input w-full text-gray-600 font-bold' value='' disabled={true}>Care level</option>
                                <option>Moderate</option>
                                <option>Easy</option>
                                <option>difficult</option>

                            </select>
                        </fieldset>
                        {/* Health status */}
                        <fieldset className="fieldset bg-green-100 border-green-200 rounded-box border p-4">
                            <label className="label">Health Status</label>
                            <input type="text" name='Health_Status' className="input w-full text-gray-600 font-bold" placeholder="Write your plant's health status" />
                        </fieldset>

                        {/* last waterd day */}

                        <fieldset className="fieldset bg-green-100 border-green-200 rounded-box border p-4">
                            <label className="label">Last Watered Date</label>
                            <input type="date" name='last_watered_day' className="input w-full text-gray-600 font-bold" />
                        </fieldset>

                        {/* Next watering day */}
                        <fieldset className="fieldset bg-green-100 border-green-200 rounded-box border p-4">
                            <label className="label">Next Watering Date</label>
                            <input type="date" name='next_watered_day' className="input w-full text-gray-600 font-bold" />
                        </fieldset>


                        {/* User Name */}
                        <fieldset className="fieldset bg-green-100 border-green-200 rounded-box border p-4">
                            <label className="label">User Name</label>
                            <input type="text" name='user_name' className="input w-full text-gray-600 font-bold" placeholder="your name" />
                        </fieldset>

                        {/* users email */}
                        <fieldset className="fieldset bg-green-100 border-green-200 rounded-box border p-4">
                            <label className="label">Users Email</label>
                            <input type="text" name='user_email' className="input w-full text-gray-600 font-bold" placeholder="Write your email" />
                        </fieldset>

                    </div>
                    {/* Description */}
                    <fieldset className="fieldset bg-green-100 border-green-200 rounded-box border p-4">
                        <label className="label">Description</label>
                        <input type="text" name='description' className="input w-full text-gray-600 font-bold" placeholder="Write your plant details" />
                    </fieldset>
                    {/* submit button */}
                    <button type='submit' className='btn bg-green-600 text-white w-full'>Add Plant</button>
                </form>
            </div>
        </div>
    );
};

export default AddPlants;