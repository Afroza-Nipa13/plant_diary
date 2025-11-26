import React, { useEffect, useState } from 'react';
import PlantCard from './PlantCard';

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
        <div className="min-h-screen bg-base-200 py-8 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">My Plant Collection</h1>
                    <p className="text-gray-600 text-lg">Manage and track all your beautiful plants</p>
                </div>

                {/* Plants Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {plants.map(plant => (
                       <PlantCard plant={plant}/>
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