import React, { useState } from 'react';
import { MapPin, Navigation, List } from 'lucide-react'; // Importing icons

const RoutePlanner = ({ onNext }) => {
  const [startLocation, setStartLocation] = useState('');
  const [endLocation, setEndLocation] = useState('');
  const [waypoints, setWaypoints] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext({ startLocation, endLocation, waypoints });
  };

  return (
    <form onSubmit={handleSubmit} className="text-black max-w-xl mx-auto p-6 bg-white shadow-md rounded-md space-y-4">
      <div className="flex flex-col">
        <label className="text-gray-700 mb-1 flex items-center">
          <MapPin className="w-5 h-5 mr-2 text-green-500" />
          Start Location
        </label>
        <input
          type="text"
          value={startLocation}
          onChange={(e) => setStartLocation(e.target.value)}
          required
          className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="Enter start location"
        />
      </div>
      
      <div className="flex flex-col">
        <label className="text-gray-700 mb-1 flex items-center">
          <Navigation className="w-5 h-5 mr-2 text-green-500" />
          End Location
        </label>
        <input
          type="text"
          value={endLocation}
          onChange={(e) => setEndLocation(e.target.value)}
          required
          className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="Enter end location"
        />
      </div>
      
      <div className="flex flex-col">
        <label className="text-gray-700 mb-1 flex items-center">
          <List className="w-5 h-5 mr-2 text-green-500" />
          Waypoints (optional)
        </label>
        <input
          type="text"
          value={waypoints}
          onChange={(e) => setWaypoints(e.target.value)}
          className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="Enter waypoints"
        />
      </div>

      <button
        type="submit"
        className="w-full py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
      >
        Next
      </button>
    </form>
  );
};

export default RoutePlanner;
