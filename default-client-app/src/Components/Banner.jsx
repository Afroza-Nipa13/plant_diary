import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';
// import banner1 from '../assets/banner.png'
import img1 from '../assets/swiper/img1.jpg'
import img2 from '../assets/swiper/img2.jpg'
import img3 from '../assets/swiper/img3.jpg'
import img4 from '../assets/swiper/img4.png'
import img5 from '../assets/swiper/img5.jpg'
import img6 from '../assets/swiper/img6.jpg'
import img7 from '../assets/swiper/img7.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'


const Banner = () => {
    const banners = [
        {
            image: img1,
            title: 'Track Your Garden Like Never Before',
            desc: "Keep your plants thriving with the smartest Plant Care Tracker.",
        },
        {

            image: img2,
            title: 'Plant at the Right Time',
            desc: "Always plant during the right season—spring or fall is best for most species.",

        },
        {

            image: img3,
            title: 'Stay on Top of Your Garden with the Ultimate Plant Care Tracker',
            desc: "Keep your plants thriving with the smartest Plant Care Tracker.",

        },
        {

            image: img4,
            title: 'Choose the Right Spot',
            desc: "Select a sunny, well-drained area to ensure healthy plant growth and strong root development.",

        },
        {
            image: img5,
            title: 'Water Smartly',
            desc: "Water early morning or late afternoon to reduce evaporation and prevent leaf burn.",
        },
        {
            image: img6,
            title: 'Use Compost Regularly',
            desc: "Enrich your soil with organic compost to give your plants a natural nutrient boost.",
        },
        {
            image: img7,
            title: 'Choose the Right Spot',
            desc: "Keep your plants thriving with the smartest Plant Care Tracker.",
        },
    ]

    return (
        <Swiper
            navigation
            pagination={{ type: 'fraction' }}
            modules={[Navigation, Pagination,Autoplay]}
            autoplay={{
                delay:5000,
                disableOnInteraction:false,
            }}
            className='w-full h-[650px] md:h-[550px]'
        >

            {

                banners.map((item, index) => (
                    <SwiperSlide
                        key={index}
                    >

                        <div className='bg-cover bg-center flex items-center text-start glass justify-center h-full w-full'
                            style={{ backgroundImage: `url(${item.image})` }}>
                            <div className='flex flex-col lg:w-3xl h-[400px] justify-start items-start space-y-3 mt-22 p-4 rounded-md'>
                                <h2 className='text-5xl opacity-80 text-white text-shadow-amber-50 mb-5 font-bold'>{item.title}</h2>
                                <p className='mb-6 text-2xl w-2xl text-gray-300'>{item.desc}</p>
                                <div>
                                    <button className='btn mb-6 btn-wide text-primary text-xl  rounded-lg lg:py-4 md:py-2 flex-1 gap-1'>Explore More  <FaArrowRight /></button>
                                </div>
                            </div>
                        </div>


                    </SwiperSlide>
                 ))}

        </Swiper>
    );
};

export default Banner;