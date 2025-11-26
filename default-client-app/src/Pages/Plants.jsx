import React, { useEffect, useState } from 'react';

const Plants = () => {
    const [plants, setPlants] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPlants = async () => {
            try {
                setLoading(true);
                const res = await fetch('https://backend-server-three-lyart.vercel.app/plants');
                console.log(res);
                
                if (!res.ok) {
                    throw new Error("Failed to fetch data");
                }
                const data = await res.json();
                setPlants(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchPlants();
    }, []);

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

    if (loading) return (
        <div className="flex justify-center items-center min-h-64">
            <div className="text-xl text-gray-600">Loading plants...</div>
        </div>
    );
    
    if (error) return (
        <div className="flex justify-center items-center min-h-64">
            <div className="text-red-500 text-xl">Error: {error}</div>
        </div>
    );

    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">My Plant Collection</h1>
                    <p className="text-gray-600 text-lg">Manage and track all your beautiful plants</p>
                </div>

                {/* Plants Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {plants.map(plant => (
                        <div 
                            key={plant._id}
                            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                        >
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

                                {/* Watering Information */}
                                <div className="space-y-2 border-t border-gray-100 pt-4">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-600">Last Watered:</span>
                                        <span className="font-medium text-gray-800">
                                            {new Date(plant.last_watered_day).toLocaleDateString()}
                                        </span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-600">Next Water:</span>
                                        <span className="font-medium text-blue-600">
                                            {new Date(plant.next_watered_day).toLocaleDateString()}
                                        </span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-600">Frequency:</span>
                                        <span className="font-medium text-gray-800">
                                            {plant.water_frequency}
                                        </span>
                                    </div>
                                </div>

                                {/* Owner Info */}
                                <div className="mt-4 pt-4 border-t border-gray-100">
                                    <p className="text-xs text-gray-500">
                                        Owned by <span className="font-medium text-gray-700">{plant.user_name}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Empty State */}
                {plants.length === 0 && !loading && (
                    <div className="text-center py-12">
                        <div className="text-gray-400 text-6xl mb-4">🌱</div>
                        <h3 className="text-xl font-semibold text-gray-600 mb-2">No Plants Found</h3>
                        <p className="text-gray-500">Start by adding your first plant to the collection!</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Plants;