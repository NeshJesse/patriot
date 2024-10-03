import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react'; 

const ProtestChecklist = () => {
  // Set isOpen to true by default so the list is shown initially
  const [isOpen, setIsOpen] = useState(true); 

  const checklistItems = [
    {
      title: 'Obtain Necessary Permits',
      description: 'Ensure you have obtained any required permits from local authorities before the protest.',
      audience: 'Organizers',
      icon: 'document-text',
    },
    {
      title: 'Plan Protest Route',
      description: 'Carefully plan the protest route, considering safety and visibility.',
      audience: 'Organizers',
      icon: 'map-pin',
    },
    {
      title: 'Invite Participants',
      description: 'Create an event and send invitations through social media or email.',
      audience: 'Organizers',
      icon: 'user-plus',
    },
    {
      title: 'Carry ID and Emergency Contacts',
      description: 'All participants should carry ID and have emergency contacts handy.',
      audience: 'Participants',
      icon: 'id-card',
    },
    {
      title: 'Pack Water and Snacks',
      description: 'Participants should stay hydrated and have snacks during long protests.',
      audience: 'Participants',
      icon: 'water',
    },
    {
      title: 'Wear Comfortable Clothes and Shoes',
      description: 'Dress for comfort, and wear shoes that will keep you going for hours.',
      audience: 'Participants',
      icon: 'shirt',
    },
    {
      title: 'Know Your Rights',
      description: 'Familiarize yourself with local laws regarding protests and peaceful assembly.',
      audience: 'Both',
      icon: 'scale',
    },
    {
      title: 'Prepare Signs and Banners',
      description: 'Make clear and visible signs to convey your message to onlookers and media.',
      audience: 'Both',
      icon: 'megaphone',
    },
    {
      title: 'Emergency Plan',
      description: 'Have a plan for emergency situations, including designated meeting points.',
      audience: 'Both',
      icon: 'alert-triangle',
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Toggle button for showing/hiding the checklist */}
      <div 
        className="flex justify-between items-center bg-gray-100 p-4 rounded-lg cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="text-xl font-semibold">Protest Checklist</h2>
        {isOpen ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
      </div>

      {/* Checklist items, displayed with scrolling when overflowing */}
      {isOpen && (
        <div className="mt-4 h-64 overflow-y-auto grid grid-cols-1 gap-4">
          {checklistItems.map((item, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-4 border border-gray-200">
              <div className="flex items-center space-x-3 mb-2">
                <div className="bg-indigo-600 text-white p-2 rounded-full">
                  {/* Using lucide-react icons */}
                  <i className={`lucide lucide-${item.icon}`}></i>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                  <span className="text-sm text-gray-500">{item.audience}</span>
                </div>
              </div>
              <p className="text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProtestChecklist;
