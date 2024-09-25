import React, { useState } from 'react';

const RoutePlanner = ({ onNext }) => {
  const [startLocation, setStartLocation] = useState('');
  const [endLocation, setEndLocation] = useState('');
  const [waypoints, setWaypoints] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pass data to next step
    onNext({ startLocation, endLocation, waypoints });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Start Location</label>
        <input
          type="text"
          value={startLocation}
          onChange={(e) => setStartLocation(e.target.value)}
          required
        />
      </div>
      
      <div>
        <label>End Location</label>
        <input
          type="text"
          value={endLocation}
          onChange={(e) => setEndLocation(e.target.value)}
          required
        />
      </div>
      
      <div>
        <label>Waypoints (optional)</label>
        <input
          type="text"
          value={waypoints}
          onChange={(e) => setWaypoints(e.target.value)}
        />
      </div>

      <button type="submit">Next</button>
    </form>
  );
};

export default RoutePlanner;
