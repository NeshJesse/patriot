import React, { useState } from 'react';
import EventForm from './Eventform';
import RoutePlanner from './RoutePlanner';
import ParticipantList from './ParticipantList';
import EventSummary from './EventSummary';
import JustificationPage from './Justify';

import { supabase } from '../../supabaseClient';

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

  const handleRoutePlanner = (data) => {
    setRouteData(data);
    setStep(3);
  };

  const handlePartNext = (data) => {
    setParticipants(data);
    setStep(4);
  };

  const handleJustNext = (data) => {
    setJustificationData(data);
    setStep(5);
  };

  const ConfirmEvent = async () => {
    const eventDetails = {
      eventData,
      routeData,
      participants,
      justificationData
    };

    try {
      const { data, error } = await supabase
        .from('protest')  // Insert into the protest table
        .insert([
          { event_details: eventDetails }  // Insert the data as JSONB
        ]);

      if (error) {
        console.error('Error saving event:', error.message);
        alert('Failed to save event');
      } else {
        alert('Event saved successfully!');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while saving event');
    }
  };

  return (
    <div>
      {step === 1 && <EventForm onNext={handleEventFormNext} />}
      {step === 2 && <RoutePlanner onNext={handleRoutePlanner} />}
      {step === 3 && <ParticipantList onNext={handlePartNext} />}
      {step === 4 && <JustificationPage onNext={handleJustNext} />}
      {step === 5 && (
        <EventSummary
          eventData={eventData}
          routeData={routeData}
          participants={participants}
          justificationData={justificationData}
          onConfirm={ConfirmEvent}
        />
      )}
    </div>
  );
};

export default EventCreation;
