import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const UpdatePlants = () => {
    const { _id, plant_name, photo, water_frequency, category, care_level, Health_Status, last_watered_day, next_watered_day, user_name, user_email, description } = useLoaderData();


    const handleUpdatePlants = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const updatedPlants = Object.fromEntries(formData.entries())
        // console.log(updatedPlants)

        // updating data to database
        fetch(`https://backend-server-three-lyart.vercel.app/plants/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updatedPlants)
        }).then(res => res.json()).then(data => {
            // console.log(data)
            if (data.matchedCount) {

                const Toast = Swal.mixin({
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.onmouseenter = Swal.stopTimer;
                        toast.onmouseleave = Swal.resumeTimer;
                    }
                });
                Toast.fire({
                    icon: "success",
                    title: "Plant updated successfully"
                });

            }
        })


    }
    return (
        <div className='pt-30'>
            <Helmet>
                            <title>Update prifile</title>
                        </Helmet>
            <div
                className='mx-auto p-12 shadow-2xl bg-no-repeat bg-green-200  bg-cover  rounded-2xl text-center space-y-5 '
            >
                <h1 className='text-6xl font-bold text-[#679267] mx-auto italic'>Update Your Plant</h1>
                <p className='md:w-3xl text-center text-xl mx-auto text-[#679267]'>Keep your plants happy! Fill out this form to set reminders and <br />track your plant's care routine.</p>

                <form onSubmit={handleUpdatePlants} className='space-y-5'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-2 mx-auto'>
                        {/* image */}
                        <fieldset className="fieldset bg-green-100 border-green-200 rounded-box border p-4">
                            <label className="label">Image</label>
                            <input type="text" name='photo' defaultValue={photo} className="input w-full" placeholder="photo URL" />
                        </fieldset>

                        {/* name */}
                        <fieldset className="fieldset  bg-green-100 border-green-200 rounded-box border p-4">
                            <label className="label">Plant Name</label>
                            <input type="text" name='plant_name' defaultValue={plant_name} className="input w-full" placeholder="Plant Name" />
                        </fieldset>
                        {/*Water frequency  */}
                        <fieldset className="fieldset bg-green-100 border-green-200 rounded-box border p-4">
                            <label className="label">Watering Frequency</label>
                            <select name='water_frequency' defaultValue={water_frequency} className="select w-full">
                                <option disabled={true}>Pick an option</option>

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
                            <select name='category' defaultValue={category} className="select w-full">
                                <option disabled={true}>Pick a type of category</option>

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
                            <select name='care_level' defaultValue={care_level} className="select select-ghost">
                                <option disabled={true}>Care level</option>
                                <option>Moderate</option>
                                <option>Easy</option>
                                <option>difficult</option>

                            </select>
                        </fieldset>
                        {/* Health status */}
                        <fieldset className="fieldset bg-green-100 border-green-200 rounded-box border p-4">
                            <label className="label">Health Status</label>
                            <input type="text" name='Health_Status' defaultValue={Health_Status} className="input w-full" placeholder="Write your plant's health status" />
                        </fieldset>

                        {/* last waterd day */}

                        <fieldset className="fieldset bg-green-100 border-green-200 rounded-box border p-4">
                            <label className="label">Last Watered Date</label>
                            <input type="date" name='last_watered_day' defaultValue={last_watered_day} className="input w-full" />
                        </fieldset>

                        {/* Next watering day */}
                        <fieldset className="fieldset bg-green-100 border-green-200 rounded-box border p-4">
                            <label className="label">Next Watering Date</label>
                            <input type="date" name='next_watered_day' defaultValue={next_watered_day} className="input w-full" />
                        </fieldset>


                        {/* User Name */}
                        <fieldset className="fieldset bg-green-100 border-green-200 rounded-box border p-4">
                            <label className="label">User Name</label>
                            <input type="text" name='user_name' defaultValue={user_name} className="input w-full" placeholder="your name" readOnly />
                        </fieldset>

                        {/* users email */}
                        <fieldset className="fieldset bg-green-100 border-green-200 rounded-box border p-4">
                            <label className="label">Users Email</label>
                            <input type="text" name='user_email' defaultValue={user_email} className="input w-full" placeholder="Write your email" readOnly />
                        </fieldset>

                    </div>
                    {/* Description */}
                    <fieldset className="fieldset bg-green-100 border-green-200 rounded-box border p-4">
                        <label className="label">Description</label>
                        <input type="text" name='description' defaultValue={description} className="input w-full" placeholder="Write your plant details" />
                    </fieldset>
                    {/* submit button */}
                    <button type='submit' className='btn bg-green-600 text-white w-full'>Update Plant</button>
                </form>
            </div>
        </div>
    );
};

export default UpdatePlants;