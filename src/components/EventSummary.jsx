import React from 'react';
import { CheckCircle, MapPin, Users, Video, Link as LinkIcon, PhoneCallIcon } from 'lucide-react';

const EventSummary = ({ eventData, routeData, participants, justificationData, onConfirm }) => {
  return (
    <div className="text-black max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Event Summary</h2>
      
      {/* Event Details */}
      <div className="mb-4">
        <h3 className="text-xl font-semibold flex items-center mb-2">
          <CheckCircle className="mr-2" /> Event Details
        </h3>
        <p><strong>Name:</strong> {eventData.eventName}</p>
        <p><strong>Description:</strong> {eventData.description}</p>
        <p><strong>Date:</strong> {eventData.date}</p>
        <p><strong>Time:</strong> {eventData.time}</p>
        <p><strong>Category:</strong> {eventData.category}</p>
      </div>
      
      {/* Route Details */}
      <div className="mb-4">
        <h3 className="text-xl font-semibold flex items-center mb-2">
          <MapPin className="mr-2" /> Route Details
        </h3>
        <p><strong>Start Location:</strong> {routeData.startLocation}</p>
        <p><strong>End Location:</strong> {routeData.endLocation}</p>
        <p><strong>Waypoints:</strong> {routeData.waypoints || 'None'}</p>
      </div>
      
      {/* Participants */}
      <div className="mb-4">
        <h3 className="text-xl font-semibold flex items-center mb-2">
          <Users className="mr-2" /> Participants
        </h3>
        <ul className="list-disc list-inside">
          {participants.map((participant, index) => (
            <li key={index}>{participant.name} ({participant.contact})</li>
          ))}
        </ul>
      </div>

      {/*cOMM LINKs 
      <div className="mb-4">
        <h3 className="text-xl font-semibold flex items-center mb-2">
          <PhoneCallIcon className="mr-2" /> Communication Channels
        </h3>
        <ul className="list-disc list-inside">
          {commlinks.map((commlink, index) => (
            <li key={index}> ({commlink.link})</li>
          ))}
        </ul>
      </div>
      */}
      
      {/* Justification Details */}
      <div>
        <h3 className="text-xl font-semibold flex items-center mb-2">
          <CheckCircle className="mr-2" /> Justification/Background
        </h3>
        <p><strong>Description:</strong> {justificationData.description}</p>
        
        {/* Display Image if uploaded */}
        {justificationData.image && (
          <div className="mt-2">
            <strong>Image:</strong>
            <img src={justificationData.image} alt="Uploaded" className="mt-2 w-24 h-24 object-cover" />
          </div>
        )}
        
        {/* Video Link if provided */}
        {justificationData.videoLink && (
          <div className="mt-2">
            <strong>Video:</strong> 
            <a href={justificationData.videoLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              Watch Video
            </a>
          </div>
        )}

        {/* External Links if any */}
        {justificationData.externalLinks && justificationData.externalLinks.length > 0 && (
          <div className="mt-2">
            <strong>Related Links:</strong>
            <ul className="list-disc list-inside">
              {justificationData.externalLinks.map((link, index) => (
                <li key={index}>
                  <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      
      <button  onClick={onConfirm}  // This will now trigger the ConfirmEvent function
       className="mt-6 w-full bg-blue-600 text-white rounded-md px-4 py-2 hover:bg-blue-700 transition-colors flex items-center justify-center"
       >
        <CheckCircle className="mr-2" />
        Confirm Event
      </button>

    </div>
  );
};

export default EventSummary;
