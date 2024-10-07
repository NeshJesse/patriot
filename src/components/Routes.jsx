"use state"
import React, { useState,useEffect } from 'react';
import { MapPin, CircleArrowDown, CircleArrowUp } from 'lucide-react';
import { supabase } from '../../supabaseClient';

const Routes = () => {
  const [waypoints, setWaypoints] = useState([{ name: '', type: '' }]);
  const [formVisible, setFormVisible] = useState(false); // Toggle form visibility
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [existingWaypoints, setExistingWaypoints] = useState([]); 



  // Function to handle changes to waypoint fields
  const handleWaypointChange = (index, field, value) => {
    const newWaypoints = [...waypoints];
    newWaypoints[index][field] = value;
    setWaypoints(newWaypoints);
  };

  // Function to add a new waypoint input field
  const addWaypoint = () => {
    setWaypoints([...waypoints, { name: '', type: '' }]);
  };
  // Fetch existing waypoints on component mount
useEffect(() => {
  const fetchWaypoints = async () => {
    const { data, error } = await supabase
      .from('waypoints') // Table name in Supabase
      .select('*'); // Adjust this to select fields as needed

    if (error) {
      console.error('Error fetching waypoints:', error);
    } else {
      setExistingWaypoints(data || []); // Set the fetched data to state
    }
  };

  fetchWaypoints();
}, []); // Empty dependency array ensures this runs only on mount
  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage(''); // Reset success message on new submit
    setErrorMessage('');

    try {
      const { data, error } = await supabase
        .from('waypoints') // Table name in Supabase
        .insert(waypoints); // Insert waypoints array into the database

      if (error) {
        setErrorMessage('Error inserting waypoints. Please try again.');
        console.error('Error inserting waypoints:', error);
      } else {
        setSuccessMessage('Waypoints inserted successfully!');
        // Optionally, clear the form
        setWaypoints([{ name: '', type: '' }]);
        setFormVisible(false); // Hide the form after successful submission
      }
    } catch (err) {
      setErrorMessage('An error occurred. Please try again.');
      console.error('An error occurred:', err);
    }

    setLoading(false);
  };

  // Function to toggle form visibility
  const toggleForm = () => {
    setFormVisible((prev) => !prev);
  };

  return (
    <div className="text-black max-w-xl mx-auto p-6 bg-white shadow-md rounded-md space-y-4">
      {/* Success message */}
      {successMessage && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
          <span className="block sm:inline">{successMessage}</span>
        </div>
      )}

      {/* Error message */}
      {errorMessage && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
          <span className="block sm:inline">{errorMessage}</span>
        </div>
      )}

      {/* Toggle form button */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Waypoints</h2>
        <button
          onClick={toggleForm}
          className="bg-indigo-600 text-white rounded-lg p-2 flex items-center"
        >
          {formVisible ? (
            <>
              <CircleArrowUp className="mr-2" />
              Hide Form
            </>
          ) : (
            <>
              <CircleArrowDown className="mr-2" />
              Add Waypoints
            </>
          )}
        </button>
      </div>
      {/* Display existing waypoints if available */}
{existingWaypoints.length > 0 ? (
  <div className="mb-4">
    <h3 className="text-lg font-semibold">Existing Waypoints</h3>
    <ul className="space-y-2">
      {existingWaypoints.map((waypoint, index) => (
        <li key={index} className="p-2 bg-gray-100 rounded-md">
          <strong>{waypoint.name}</strong> - {waypoint.type}
        </li>
      ))}
    </ul>
  </div>
) : (
  <p className="text-gray-500">No channels currently added.</p>
)}


      {/* Form to add waypoints */}
      {formVisible && (
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          {waypoints.map((waypoint, index) => (
            <div key={index} className="flex flex-col space-y-2">
              <label className="text-gray-700 mb-1 flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-green-500" />
                Waypoint {index + 1}
              </label>
              <input
                type="text"
                value={waypoint.name}
                onChange={(e) => handleWaypointChange(index, 'name', e.target.value)}
                className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder={`Waypoint ${index + 1} name`}
                required
              />
              <select
                value={waypoint.type}
                onChange={(e) => handleWaypointChange(index, 'type', e.target.value)}
                className="px-3 py-2 border rounded-md"
                required
              >
                <option value="">Select Type</option>
                <option value="medical">Medical Point</option>
                <option value="supplies">Supplies Point</option>
              </select>
            </div>
          ))}

          <button
            type="button"
            onClick={addWaypoint}
            className="py-2 px-4 bg-gray-500 text-white rounded-md"
          >
            Add Waypoint
          </button>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 ${loading ? 'bg-gray-400' : 'bg-green-500'} text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2`}
          >
            {loading ? 'Submitting...' : 'Submit Waypoints'}
          </button>
        </form>
      )}
    </div>
  );
};

export default Routes;
