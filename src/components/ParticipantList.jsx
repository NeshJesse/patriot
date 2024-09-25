import React, { useState } from 'react';

const ParticipantList = ({ onNext }) => {
  const [participants, setParticipants] = useState([]);
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');

  const handleAddParticipant = (e) => {
    e.preventDefault();
    if (name && contact) {
      setParticipants([...participants, { name, contact }]);
      setName('');
      setContact('');
    }
  };

  const handleRemoveParticipant = (index) => {
    const updatedList = participants.filter((_, i) => i !== index);
    setParticipants(updatedList);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext(participants);
  };

  return (
    <div>
      <h2>Add Participants</h2>
      <form onSubmit={handleAddParticipant}>
        <div>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        
        <div>
          <label>Email/Phone</label>
          <input
            type="text"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            required
          />
        </div>
        
        <button type="submit">Add Participant</button>
      </form>

      <h3>Participants List</h3>
      <ul>
        {participants.map((participant, index) => (
          <li key={index}>
            {participant.name} ({participant.contact})
            <button onClick={() => handleRemoveParticipant(index)}>Remove</button>
          </li>
        ))}
      </ul>

      {participants.length > 0 && (
        <button onClick={handleSubmit}>Next</button>
      )}
    </div>
  );
};

export default ParticipantList;
