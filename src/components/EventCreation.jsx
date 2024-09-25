import React, { useState } from 'react';
import EventForm from './Eventform';
import RoutePlanner from './RoutePlanner';
import ParticipantList from './ParticipantList';
import EventSummary from './EventSummary';
import JustificationPage from './Justify';

const EventCreation = () => {
  const [step, setStep] = useState(1);
  const [eventData, setEventData] = useState({});
  const [routeData, setRouteData] = useState({});
  const [participants, setParticipants] = useState([]);
  const [justificationData, setJustificationData] = useState({});

  const handleEventFormNext = (data) => {
    setEventData(data);
    setStep(2);
  };

  const handleRoutePlannerNext = (data) => {
    setRouteData(data);
    setStep(3);
  };

  const handleParticipantListNext = (data) => {
    setParticipants(data);
    setStep(4);
  };

  const handleJustificationNext = (data) => {
    setJustificationData(data);
    setStep(5);
  };

  const handleConfirmEvent = () => {
    // Final confirmation logic (save to database or submit event)
    console.log('Event Data:', eventData);
    console.log('Route Data:', routeData);
    console.log('Participants:', participants);
    console.log('Justification:', justificationData);
    alert('Event Created Successfully!');
  };

  return (
    <div>
      {step === 1 && <EventForm onNext={handleEventFormNext} />}
      {step === 2 && <RoutePlanner onNext={handleRoutePlannerNext} />}
      {step === 3 && <ParticipantList onNext={handleParticipantListNext} />}
      {step === 4 && <JustificationPage onNext={handleJustificationNext} />}
      {step === 5 && (
        <EventSummary
          eventData={eventData}
          routeData={routeData}
          participants={participants}
          justificationData={justificationData}
          onConfirm={handleConfirmEvent}
        />
      )}
    </div>
  );
};

export default EventCreation;
