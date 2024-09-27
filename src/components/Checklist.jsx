import React from 'react';

const ProtestChecklist = () => {
  const checklistItems = [
    {
      title: 'Obtain Necessary Permits',
      description: 'Ensure you have obtained any required permits from local authorities before the protest.',
      audience: 'Organizers',
      icon: 'document-text', // Use relevant icon
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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {checklistItems.map((item, index) => (
        <div key={index} className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
          <div className="flex items-center space-x-3 mb-4">
            {/* Icon */}
            <div className="bg-indigo-600 text-white p-2 rounded-full">
              {/* Use lucide-react icons here */}
              <i className={`lucide lucide-${item.icon}`}></i>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
              <span className="text-sm text-gray-500">{item.audience}</span>
            </div>
          </div>
          {/* Description */}
          <p className="text-gray-700">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ProtestChecklist;
