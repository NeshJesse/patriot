import React from 'react';

const EventSummary = ({ eventData, routeData, participants, justificationData, onConfirm }) => {
  return (
    <div>
      <h2>Event Summary</h2>
      
      {/* Event Details */}
      <div>
        <h3>Event Details</h3>
        <p><strong>Name:</strong> {eventData.eventName}</p>
        <p><strong>Description:</strong> {eventData.description}</p>
        <p><strong>Date:</strong> {eventData.date}</p>
        <p><strong>Time:</strong> {eventData.time}</p>
        <p><strong>Category:</strong> {eventData.category}</p>
      </div>
      
      {/* Route Details */}
      <div>
        <h3>Route Details</h3>
        <p><strong>Start Location:</strong> {routeData.startLocation}</p>
        <p><strong>End Location:</strong> {routeData.endLocation}</p>
        <p><strong>Waypoints:</strong> {routeData.waypoints || 'None'}</p>
      </div>
      
      {/* Participants */}
      <div>
        <h3>Participants</h3>
        <ul>
          {participants.map((participant, index) => (
            <li key={index}>{participant.name} ({participant.contact})</li>
          ))}
        </ul>
      </div>
      
      {/* Justification Details */}
      <div>
        <h3>Justification/Background</h3>
        <p><strong>Description:</strong> {justificationData.description}</p>
        
        {/* Display Image if uploaded */}
        {justificationData.image && (
          <div>
            <strong>Image:</strong>
            <img src={justificationData.image} alt="Uploaded" style={{ width: '100px', marginTop: '10px' }} />
          </div>
        )}
        
        {/* Video Link if provided */}
        {justificationData.videoLink && (
          <div>
            <strong>Video:</strong> 
            <a href={justificationData.videoLink} target="_blank" rel="noopener noreferrer">
              Watch Video
            </a>
          </div>
        )}

        {/* External Links if any */}
        {justificationData.externalLinks && justificationData.externalLinks.length > 0 && (
          <div>
            <strong>Related Links:</strong>
            <ul>
              {justificationData.externalLinks.map((link, index) => (
                <li key={index}>
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Confirm Button */}
      <button onClick={onConfirm}>Confirm Event</button>
    </div>
  );
};

export default EventSummary;
