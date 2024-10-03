import React, { useState } from 'react';
import { supabase } from '../../supabaseClient'; 
import { ArrowDownCircleIcon, ArrowUpCircleIcon } from 'lucide-react';

const QuickToolsCard = ({ participantId }) => {
  const [status, setStatus] = useState('none');
  const [isOpen, setIsOpen] = useState(false); // State to manage toggle

  const updateStatus = async (newStatus) => {
    const { data, error } = await supabase
      .from('participants')
      .update({ status: newStatus })
      .eq('id', participantId);

    if (error) {
      console.error('Error updating status:', error.message);
    } else {
      setStatus(newStatus);
    }
  };

  const selfDestruct = async () => {
    const { data, error } = await supabase
      .from('participants')
      .delete()
      .eq('id', participantId);

    if (error) {
      console.error('Error during self-destruct:', error.message);
    } else {
      console.log('Participant data deleted:', data);
    }
  };

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="max-w-md mx-auto my-6 border rounded-lg shadow-lg bg-white p-6">
      <h2 className="text-xl font-bold mb-4">Quick Tools</h2>

      {/* Toggle Button */}
      <button
        onClick={toggleOpen}
        className="flex items-center justify-between w-full bg-gray-200 p-2 rounded-md"
      >
        <span className="font-semibold">Show Quick Tools</span>
        {isOpen ? <ArrowUpCircleIcon /> : <ArrowDownCircleIcon />}
      </button>

      {/* Quick Tools Content (shown only when toggled open) */}
      {isOpen && (
        <div className="flex flex-col space-y-4 mt-4">
          {/* Self Destruct Button */}
          <button
            onClick={selfDestruct}
            className="bg-red-500 text-white py-2 rounded-md hover:bg-red-600"
          >
            Self Destruct
          </button>

          {/* Status Update Buttons */}
          <h3 className="text-lg font-semibold">Update Status:</h3>
          <div className="flex flex-col space-y-2">
            <button
              onClick={() => updateStatus('arrested')}
              className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
            >
              Arrested
            </button>
            <button
              onClick={() => updateStatus('injured')}
              className="bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600"
            >
              Injured
            </button>
            <button
              onClick={() => updateStatus('safe at home')}
              className="bg-green-500 text-white py-2 rounded-md hover:bg-green-600"
            >
              Safe at Home
            </button>
            <button
              onClick={() => updateStatus('at the protest')}
              className="bg-yellow-500 text-white py-2 rounded-md hover:bg-yellow-600"
            >
              At the Protest
            </button>
          </div>
        </div>
      )}

      {/* Current Status Display */}
      <div className="mt-4">
        <p className="text-gray-700">
          Current Status: <strong>{status === 'none' ? 'No status set' : status}</strong>
        </p>
      </div>
    </div>
  );
};

export default QuickToolsCard;

