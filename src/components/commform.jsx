"use state"
import { Book, PhoneCall, CircleArrowDown, CircleArrowUp } from "lucide-react";
import React, { useState, useEffect } from "react";
import { supabase } from '../../supabaseClient';

const CommForm = () => {
  const [commlinks, setCommlink] = useState('');
  const [commdesc, setDescription] = useState('');
  const [channels, setChannels] = useState([]); // Store fetched channels
  const [formVisible, setFormVisible] = useState(false); // To toggle the form
  const [successMessage, setSuccessMessage] = useState(''); // For success messages
  const [errorMessage, setErrorMessage] = useState(''); // For error messages

  // Fetch channels from Supabase table `comms`
  const fetchChannels = async () => {
    const { data, error } = await supabase.from('comms').select('*');
    if (error) {
      console.error('Error fetching channels:', error);
    } else {
      setChannels(data);
    }
  };

  useEffect(() => {
    fetchChannels(); // Fetch channels on component mount lol 3 unsuccessful trials
  }, []);

  // Handle form submission and add the channel to Supabase
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Insert the new channel into Supabase
    const { data, error } = await supabase
      .from('comms')
      .insert([{ commlinks, commdesc }]);

    if (error) {
      console.error('Error inserting channel:', error);
      setErrorMessage('Error adding communication channel. Please try again.');
      setSuccessMessage('');
    } else {
      console.log('Channel added:', data);
      setChannels([...channels, { commlinks, commdesc }]); // Add new channel to state
      setCommlink(''); // Clear inputs
      setDescription('');
      setSuccessMessage('Communication channel successfully added.');
      setErrorMessage('');
      setFormVisible(false); // Hide the form after submission
    }
  };

  // Toggle form visibility
  const toggleForm = () => {
    setFormVisible((prev) => !prev);
  };

  return (
    <div className="text-black max-w-xl mx-auto p-6 bg-white shadow-md rounded-md space-y-4">
      {/* Communication Channels List */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Communication Channels</h2>
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
              Add Communication Channel
            </>
          )}
        </button>
      </div>

      {channels.length > 0 ? (
        <ul className="space-y-2">
          {channels.map((channel, index) => (
            <li key={index} className="border p-4 rounded-md shadow-sm">
              <p className="text-blue-500 font-medium">URL: {channel.commlinks}</p>
              <p>Description: {channel.commdesc}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No channels currently added.</p>
      )}

      {/* Success and Error Messages */}
      {successMessage && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
          <span className="block sm:inline">{successMessage}</span>
        </div>
      )}
      {errorMessage && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
          <span className="block sm:inline">{errorMessage}</span>
        </div>
      )}

      {/* Form to add new communication channel */}
      {formVisible && (
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="flex flex-col">
            <label className="text-gray-700 mb-1 flex items-center">
              <PhoneCall className="w-5 h-5 mr-2 text-blue-500" />
              Communication channel URL
            </label>
            <input
              type="url"
              value={commlinks}
              onChange={(e) => setCommlink(e.target.value)}
              required
              className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter the link/url to your communication channel (e.g., WhatsApp, Telegram)"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700 mb-1 flex items-center">
              <Book className="w-5 h-5 mr-2 text-blue-500" />
              Description
            </label>
            <textarea
              value={commdesc}
              onChange={(e) => setDescription(e.target.value)}
              required
              className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter channel description"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default CommForm;
