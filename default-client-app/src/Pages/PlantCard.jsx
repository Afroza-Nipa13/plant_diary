// components/PlantCard.jsx
import React from 'react';

const PlantCard = ({ plant }) => {
    // Function to get care level color
    const getCareLevelColor = (level) => {
        switch (level?.toLowerCase()) {
            case 'easy':
                return 'bg-green-100 text-green-800';
            case 'moderate':
                return 'bg-yellow-100 text-yellow-800';
            case 'difficult':
                return 'bg-red-100 text-red-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    // Function to get health status color
    const getHealthStatusColor = (status) => {
        switch (status?.toLowerCase()) {
            case 'healthy':
                return 'text-green-600';
            case 'needs care':
                return 'text-yellow-600';
            case 'unhealthy':
                return 'text-red-600';
            default:
                return 'text-gray-600';
        }
    };

    return (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            {/* Plant Image */}
            <div className="h-48 overflow-hidden">
                <img 
                    src={plant.photo} 
                    alt={plant.plant_name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/300x200?text=Plant+Image';
                    }}
                />
            </div>

            {/* Plant Info */}
            <div className="p-6">
                {/* Plant Name and Care Level */}
                <div className="flex justify-between items-start mb-3">
                    <h2 className="text-xl font-semibold text-gray-800 flex-1">
                        {plant.plant_name}
                    </h2>
                    <span className={`ml-2 px-3 py-1 rounded-full text-xs font-medium ${getCareLevelColor(plant.care_level)}`}>
                        {plant.care_level}
                    </span>
                </div>

                {/* Category */}
                <p className="text-gray-600 text-sm mb-4">
                    {plant.category?.replace(/"/g, '')}
                </p>

                {/* Description */}
                <p className="text-gray-700 mb-4 line-clamp-2">
                    {plant.description}
                </p>

                {/* Health Status */}
                <div className="flex items-center mb-4">
                    <div className={`w-3 h-3 rounded-full mr-2 ${getHealthStatusColor(plant.Health_Status)}`}></div>
                    <span className={`font-medium ${getHealthStatusColor(plant.Health_Status)}`}>
                        {plant.Health_Status}
                    </span>
                </div>

                {/* Visitor-friendly information only */}
                <div className="space-y-2 border-t border-gray-100 pt-4">
                    <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Care Level:</span>
                        <span className="font-medium text-gray-800 capitalize">
                            {plant.care_level?.toLowerCase()}
                        </span>
                    </div>
                    <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Water Frequency:</span>
                        <span className="font-medium text-gray-800">
                            {plant.water_frequency}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlantCard;