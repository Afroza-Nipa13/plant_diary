import React from 'react';
import { Link } from 'react-router'

const AboutUs = () => {
  return (
    <div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex flex-col max-w-screen-lg overflow-hidden bg-white border rounded shadow-sm lg:flex-row sm:mx-auto">
          <div className="relative lg:w-1/2">
            <img
              src="https://media.istockphoto.com/id/1147472170/photo/hand-with-water-can-watering-indoor-plants-on-windowsill.jpg?s=612x612&w=0&k=20&c=ebhi3cBpN-2mdq7x2a_U1VcI6sdZ2uhJDv38Z0AJuYM="
              alt=""
              className="object-cover w-full lg:absolute h-80 lg:h-full"
            />
            <svg
              className="absolute top-0 right-0 hidden h-full text-white lg:inline-block"
              viewBox="0 0 20 104"
              fill="currentColor"
            >
              <polygon points="17.3036738 5.68434189e-14 20 5.68434189e-14 20 104 0.824555778 104" />
            </svg>
          </div>
          <div className="flex flex-col justify-center p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                Plantation Tips
              </p>
            </div>
            <h5 className="mb-3 text-3xl text-[#679267] font-extrabold leading-none sm:text-4xl">
             You Must Know Befor Plantation
            </h5>
            <p className="mb-5 text-gray-800">
              <span className="font-bold">Choose the Right Spot- </span>

              select a sunny, well-drained area to ensure healthy plant growth and strong root development.

              Test Your Soil
              Check soil pH and nutrients before planting—healthy soil means happy plants.

              Water Smartly
              Water early morning or late afternoon to reduce evaporation and prevent leaf burn.

              Mulch for Moisture
              Add mulch around plants to keep soil moist, reduce weeds, and improve fertility.

              Plant at the Right Time
              Always plant during the right season—spring or fall is best for most species.

              Use Compost Regularly
              Enrich your soil with organic compost to give your plants a natural nutrient boost.
            </p>
            <div className="flex items-center">
              <button
                type="submit"
                className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
              >
                Get started
              </button>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Learn More
                <svg
                  className="inline-block w-3 ml-2"
                  fill="currentColor"
                  viewBox="0 0 12 12"
                >
                  <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default AboutUs;