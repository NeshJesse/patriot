// HomePage.jsx
import React, { useEffect, useState } from 'react';
 // Import Supabase client
import { supabase } from '../../supabaseClient';
import { ShareIcon } from 'lucide-react';
import ProtestChecklist from './Checklist';
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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data: {error}</p>;

  return (
    <div className="max-w-6xl mx-auto p-6">
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProtestChecklist/>
        {protests.map((protest) => (
          <>
          <h1 className="text-3xl font-bold mb-6">Submitted Protests</h1>
          <div key={protest.id} className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-xl font-semibold mb-2">{protest.event_details.eventData.eventName}</h2>
            <p><strong>Description:</strong> {protest.event_details.eventData.description}</p>
            <p><strong>Date:</strong> {protest.event_details.eventData.date}</p>
            <p><strong>Time:</strong> {protest.event_details.eventData.time}</p>
            <p><strong>Location:</strong> {protest.event_details.routeData.startLocation} to {protest.event_details.routeData.endLocation}</p>
            <p><strong>Participants:</strong> {protest.event_details.participants.length}</p>
            <p><strong>Justification:</strong> {protest.event_details.justificationData.description}</p>
            <br/>
            <div className="">
              <h2>Exercise your Democratic right</h2>
              <p1>Join the peacefull protest against {protest.event_details.eventData.eventName}</p1>
              <br/>
              <a href='/account'>
              <button
              className='rounded-full border border-solid border-gray-300 dark:border-white transition-colors flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44'
              
              >
              
              Join

              </button>
              <button className='rounded-full border border-solid border-gray-300 dark:border-white transition-colors flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44'
              >
                <ShareIcon/>
                Invite Others
              </button>
             
              </a>
            </div>
          </div>
          </>
        ))}
        <div className="">
          
        </div>
      </div>
    </div>
  );
};

export default HomePage;
