import React, { useEffect, useState } from 'react';
// Import Supabase client
import { supabase } from '../../supabaseClient';
import { AlertTriangle, ShieldCheck, Home, UserPlus, BriefcaseMedicalIcon, PhoneCallIcon } from 'lucide-react';
import SpecializedHelpCard from './Specialcard';
import CommChannelsCard from './Comms';
import CommForm from './commform';
import Routes from './Routes';

const WelfarePage = () => {
  const [participants, setParticipants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch participants data from Supabase
  useEffect(() => {
    const fetchParticipants = async () => {
      const { data, error } = await supabase.from('participants').select('*');
      if (error) {
        setError(error.message);
      } else {
        setParticipants(data);
      }
      setLoading(false);
    };
    fetchParticipants();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching participants data: {error}</p>;

  // Helper function to filter participants based on status
  const filterByStatus = (status) => {
    return participants.filter((participant) => participant.status === status);
  };

  return (
    <>
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">
        
        Participant Welfare Tools
        <BriefcaseMedicalIcon/>
      </h1>
      <CommForm/>
      <Routes/>
      <SpecializedHelpCard/>
      {/* Status Cards */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        <PhoneCallIcon/>
        Protesters Status</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
     
        {/* Card for Safe Participants */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="flex items-center space-x-3 mb-4">
            <ShieldCheck className="text-green-500" />
            <h2 className="text-xl font-semibold">Safe Participants</h2>
          </div>
          <p className="text-gray-700">Number of safe participants: {filterByStatus('safe').length}</p>
        </div>

        {/* Card for Safe at Home Participants */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="flex items-center space-x-3 mb-4">
            <Home className="text-blue-500" />
            <h2 className="text-xl font-semibold">Safe at Home Participants</h2>
          </div>
          <p className="text-gray-700">Number of participants safe at home: {filterByStatus('safe at home').length}</p>
        </div>

        {/* Card for Injured Participants */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="flex items-center space-x-3 mb-4">
            <AlertTriangle className="text-yellow-500" />
            <h2 className="text-xl font-semibold">Injured Participants</h2>
          </div>
          <p className="text-gray-700">Number of injured participants: {filterByStatus('injured').length}</p>
        </div>

        {/* Card for Arrested Participants */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="flex items-center space-x-3 mb-4">
            <UserPlus className="text-red-500" />
            <h2 className="text-xl font-semibold">Arrested Participants</h2>
          </div>
          <p className="text-gray-700">Number of arrested participants: {filterByStatus('arrested').length}</p>
        </div>
      </div>

      {/* Emergency Contacts Display */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Emergency Contacts for Arrested and Injured Participants</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {participants.filter(p => p.status === 'arrested' || p.status === 'injured').map((participant, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">{participant.name}</h3>
              <p className="text-gray-700"><strong>Status:</strong> {participant.status}</p>
              <p className="text-gray-700"><strong>Emergency Contact:</strong> {participant.emergencyContact}</p>
              <p className="text-gray-700"><strong>Contact Number:</strong> {participant.emergencyPhone}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default WelfarePage;
