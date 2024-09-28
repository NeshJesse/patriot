import { MessageSquareLock } from 'lucide-react';
import React, { useState } from 'react';

const CommChannelsCard = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage toggle

  const channels = [
    {
      name: 'Telegram Channel',
      url: 'https://t.me/yourchannel',
      icon: 'telegram', 
    },
    {
     name:'TikTok',
     url:'',
     icon:'',

    },
    {
      name: 'WhatsApp Group',
      url: 'https://wa.me/yourgroup', 
      icon: 'whatsapp', 
    },
    {
      name: 'Facebook Group',
      url: 'https://facebook.com/groups/yourgroup', 
      icon: 'facebook', 
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/yourhandle',
      icon: 'twitter', 
    },
  ];

  const toggleCard = () => {
    setIsOpen((prev) => !prev); // Toggle the card visibility
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
        
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
      <MessageSquareLock/>Communication Channels</h2>
      <button
        onClick={toggleCard}
        className="flex items-center justify-between w-full bg-indigo-600 text-white rounded-lg p-4 mb-2"
      >
        <span className="text-lg font-medium">
        <MessageSquareLock/>            
            Toggle Communication Channels</span>
        <span>{isOpen ? '-' : '+'}</span> {/* Toggle icon */}
      </button>
      
      {isOpen && ( // Conditional rendering of the card
        <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
          <ul className="space-y-4">
            {channels.map((channel, index) => (
              <li key={index} className="flex items-center space-x-3">
                <a
                  href={channel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-indigo-600 hover:text-indigo-800 transition duration-200"
                >
                  {/* Icon */}
                  <div className="bg-indigo-600 text-white p-2 rounded-full">
                    <i className={`lucide lucide-${channel.icon}`}></i>
                  </div>
                  <span className="text-lg font-medium">{channel.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CommChannelsCard;
