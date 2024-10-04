import React, { useEffect, useState } from 'react';
// Import Supabase client
import { supabase } from '../../supabaseClient';
import { ShareIcon } from 'lucide-react';
import ProtestChecklist from './Checklist';
import QuickToolsCard from './Toolscard';

const HomePage = () => {
  const [protests, setProtests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProtests = async () => {
      const { data, error } = await supabase
        .from('protest')
        .select('*');

      if (error) {
        setError(error.message);
      } else {
        setProtests(data);
      }
      setLoading(false);
    };

    fetchProtests();
  }, []);

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error fetching data: {error}</p>;

  return (
    <div className="max-w-6xl mx-auto p-6 sm:p-10">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 text-center sm:text-left">
        Inject Buddy
      </h1>
      
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <QuickToolsCard/>
        {/* Checklist Component */}
        <ProtestChecklist />

        {/* Display Submitted Protests */}
        {protests.map((protest) => (
          <div key={protest.id} className="bg-white rounded-lg shadow-md p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl font-semibold mb-2">{protest.event_details.eventData.eventName}</h2>
            <p className="text-sm sm:text-base mb-2"><strong>Description:</strong> {protest.event_details.eventData.description}</p>
            <p className="text-sm sm:text-base mb-2"><strong>Date:</strong> {protest.event_details.eventData.date}</p>
            <p className="text-sm sm:text-base mb-2"><strong>Time:</strong> {protest.event_details.eventData.time}</p>
            <p className="text-sm sm:text-base mb-2"><strong>Location:</strong> {protest.event_details.routeData.startLocation} to {protest.event_details.routeData.endLocation}</p>
            <p className="text-sm sm:text-base mb-4"><strong>Participants:</strong> {protest.event_details.participants.length}</p>
            <p className="text-sm sm:text-base mb-4"><strong>Justification:</strong> {protest.event_details.justificationData.description}</p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <button
                className="rounded-full border border-solid border-gray-300 dark:border-white transition-colors flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
                onClick={() => window.location.href='/invite'}
              >
                Join
              </button>
              <button
                className="rounded-full border border-solid border-gray-300 dark:border-white transition-colors flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
              >
                <ShareIcon className="w-5 h-5 mr-2" />
                Invite Others
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;

