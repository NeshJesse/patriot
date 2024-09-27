import React, { useState } from 'react';
import { UserPlus, Mail, Phone, Trash2, CheckCircle } from 'lucide-react'; // Importing icons

const ParticipantList = ({ onNext }) => {
  const [participants, setParticipants] = useState([]);
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [participantType, setParticipantType] = useState('');

  const handleAddParticipant = (e) => {
    e.preventDefault();
    if (name && contact && participantType) {
      setParticipants([...participants, { name, contact, participantType }]);
      setName('');
      setContact('');
      setParticipantType('');
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
    <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-md space-y-6">
      <h2 className="text-2xl font-bold text-gray-700">Add Participants</h2>
      <form onSubmit={handleAddParticipant} className="text-black space-y-4">
        <div className="flex flex-col">
          <label className="text-gray-700 mb-1 flex items-center">
            <UserPlus className="w-5 h-5 mr-2 text-purple-500" />
            Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Enter participant's name"
          />
        </div>
        
        <div className="flex flex-col">
          <label className="text-gray-700 mb-1 flex items-center">
            <Mail className="w-5 h-5 mr-2 text-purple-500" />
            Email/Phone
          </label>
          <input
            type="text"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            required
            className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Enter email or phone"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-gray-700 mb-1">Participant Type</label>
          <div className="flex space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="participantType"
                value="Medic"
                checked={participantType === 'Medic'}
                onChange={(e) => setParticipantType(e.target.value)}
                className="form-radio text-purple-500"
              />
              <span className="ml-2">Medic</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="participantType"
                value="Legal"
                checked={participantType === 'Legal'}
                onChange={(e) => setParticipantType(e.target.value)}
                className="form-radio text-purple-500"
              />
              <span className="ml-2">Legal</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="participantType"
                value="Media"
                checked={participantType === 'Media'}
                onChange={(e) => setParticipantType(e.target.value)}
                className="form-radio text-purple-500"
              />
              <span className="ml-2">Media</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="participantType"
                value="Demonstrator"
                checked={participantType === 'Demonstrator'}
                onChange={(e) => setParticipantType(e.target.value)}
                className="form-radio text-purple-500"
              />
              <span className="ml-2">Demonstrator</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="participantType"
                value="Equipment Provider"
                checked={participantType === 'Equipment Provider'}
                onChange={(e) => setParticipantType(e.target.value)}
                className="form-radio text-purple-500"
              />
              <span className="ml-2">Equipment Provider</span>
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
        >
          Add Participant
        </button>
      </form>

      <h3 className="text-lg font-semibold text-gray-700">Participants List</h3>
      <ul className="space-y-2">
        {participants.map((participant, index) => (
          <li key={index} className="flex justify-between items-center bg-gray-100 p-2 rounded-md">
            <div className='text-black'>
              <span className="font-bold">{participant.name}</span> ({participant.contact}) -{' '}
              <span className="text-sm text-gray-500">{participant.participantType}</span>
            </div>
            <button
              onClick={() => handleRemoveParticipant(index)}
              className="text-red-500 hover:text-red-700"
            >
              <Trash2 className="w-5 h-5" />
            </button>
          </li>
        ))}
      </ul>

      {participants.length > 0 && (
        <button
          onClick={handleSubmit}
          className="w-full py-2 mt-4 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        >
          Next <CheckCircle className="inline w-5 h-5 ml-2" />
        </button>
      )}
    </div>
  );
};

export default ParticipantList;

