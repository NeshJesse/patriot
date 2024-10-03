import { ArrowDownCircleIcon, ArrowUpCircleIcon } from 'lucide-react';
import React, { useState } from 'react';

const DataUsageCard = () => {
  // Initialize state to show the card by default
  const [isVisible, setIsVisible] = useState(true);

  // Toggle function to show/hide the card
  const toggleCard = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="max-w-md mx-auto my-6">
      {/* Toggle button */}
      <div className='flex flex-col max-w-xl mx-auto p-6 bg-white shadow-md rounded-md space-y-6'>
        <p1>Your Personal Data Consent Form</p1>
      <button
        onClick={toggleCard}
        className="flex items-center justify-between w-20 bg-indigo-600 text-white rounded-lg p-4 mb-2"
      >
        {isVisible ? <ArrowUpCircleIcon/> : <ArrowDownCircleIcon/>}
      </button>
      </div>
      

      {/* Always render the card */}
      {isVisible && (
        <div className="border border-gray-300 shadow-lg rounded-lg p-6 bg-white">
          <h2 className="text-xl font-bold mb-4">How Your Data Will Be Used</h2>
          <p className="mb-4">
            By signing up or joining this protest, you are agreeing to share certain personal data with us, including:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Your name</li>
            <li>Your phone number</li>
            <li>Your ID number</li>
          </ul>
          <p className='font-semibold mb-4'>The information will not be visible to anybody even the organizers
             However if you change your status
             <br/>
            to "arrested" or "injured," we may share some of your sensitive data, including your phone number and ID number, with emergency contacts,Lawyers, and medical personnel to ensure your safety and well-being.
          </p>

          <p>When you are arrested you can click the Self-distruct button at the home Page
            which will:

          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Delete your personal Data and Info</li>
            <li>Delete the communication channels</li>
            <li>Submit your data to volunteer lawyers and media personnel</li>
          </ul>

          <p className="text-sm text-gray-600">
            We take your privacy seriously and will only share this data with trusted parties when absolutely necessary to protect your rights and safety.
          </p>
        </div>
      )}
    </div>
  );
};

export default DataUsageCard;
