import React, { useState } from 'react';
import { UserPlus, Mail, Phone, Trash2, CheckCircle, Camera } from 'lucide-react'; 
import { supabase } from '../../supabaseClient';

const InviteForm = ({ onNext }) => {
  const [participants, setParticipants] = useState([]);
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [idNumber, setIdNumber] = useState('');
  const [status, setStatus] = useState('');
  const [photo, setPhoto] = useState(null);
  const [emergencyContacts, setEmergencyContacts] = useState([
    { fullName: '', phone: '' },
    { fullName: '', phone: '' },
  ]);

  const handleAddParticipant = (e) => {
    e.preventDefault();
    if (name && contact && idNumber && status && emergencyContacts.every(ec => ec.fullName && ec.phone)) {
      setParticipants([...participants, { name, contact, idNumber, status, photo, emergencyContacts }]);
      setName('');
      setContact('');
      setIdNumber('');
      setStatus('');
      setPhoto(null);
      setEmergencyContacts([{ fullName: '', phone: '' }, { fullName: '', phone: '' }]);
    }
  };

  const handleRemoveParticipant = (index) => {
    const updatedList = participants.filter((_, i) => i !== index);
    setParticipants(updatedList);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Structure data as JSON
    const data = {
      participants: participants,
    };

    // Inserts data into Supabase
    const { error } = await supabase
      .from('participants') 
      .insert([{ data: data }]);

    if (error) {
      console.error('Error inserting data:', error.message);
    } else {
      console.log('Data inserted successfully');
    }
  };

  const handleEmergencyContactChange = (index, field, value) => {
    const updatedContacts = emergencyContacts.map((contact, i) =>
      i === index ? { ...contact, [field]: value } : contact
    );
    setEmergencyContacts(updatedContacts);
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-md space-y-6">
      <h2 className="text-2xl font-bold text-gray-700">Participants</h2>

      {participants.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-700">Participants List</h3>
          <ul className="space-y-2">
            {participants.map((participant, index) => (
              <li key={index} className="flex justify-between items-center bg-gray-100 p-2 rounded-md">
                <div>
                  <span className="text-black font-bold">{participant.name}</span> 
                  <span className="">
                    ({participant.contact}, ID: {participant.idNumber}) -{' '}
                  </span>
                  
                  <div>
                    Emergency Contacts:
                    <ul className="text-black">
                      {participant.emergencyContacts.map((ec, i) => (
                        <li key={i}>
                          {ec.fullName} - {ec.phone}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleRemoveParticipant(index)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <button
            onClick={handleSubmit}
            className="w-full py-2 mt-4 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            Submit All <CheckCircle className="inline w-5 h-5 ml-2" />
          </button>
        </div>
      )}

      <form onSubmit={handleAddParticipant} className="space-y-4">
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
            className="text-black px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Enter participant's name"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-black mb-1 flex items-center">
            <Mail className="w-5 h-5 mr-2 text-purple-500" />
            Email/Phone
          </label>
          <input
            type="text"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            required
            className="text-black px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Enter email or phone"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-gray-700 mb-1">ID Number</label>
          <input
            type="text"
            value={idNumber}
            onChange={(e) => setIdNumber(e.target.value)}
            required
            className="text-black px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Enter ID number"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-gray-700 mb-1">Status</label>
          <div className="flex space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="status"
                value="Arrested"
                checked={status === 'Arrested'}
                onChange={(e) => setStatus(e.target.value)}
                className="form-radio text-purple-500"
              />
              <span className="ml-2 text-black">Arrested</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="status"
                value="Injured"
                checked={status === 'Injured'}
                onChange={(e) => setStatus(e.target.value)}
                className="form-radio text-purple-500"
              />
              <span className="ml-2 text-black">Injured</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="status"
                value="Safe Home"
                checked={status === 'Safe Home'}
                onChange={(e) => setStatus(e.target.value)}
                className="form-radio text-purple-500"
              />
              <span className="text-black ml-2">Safe Home</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="status"
                value="At the Protest"
                checked={status === 'At the Protest'}
                onChange={(e) => setStatus(e.target.value)}
                className="form-radio text-purple-500"
              />
              <span className="ml-2 text-black">At the Protest</span>
            </label>
          </div>
        </div>

        <div className="flex flex-col">
          <label className="text-gray-700 mb-1 flex items-center">
            <Camera className="w-5 h-5 mr-2 text-purple-500" />
            Upload Picture
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setPhoto(e.target.files[0])}
            className="text-black"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-gray-700 mb-1">Emergency Contacts</label>
          {emergencyContacts.map((contact, index) => (
            <div key={index} className="flex flex-col mb-2">
              <input
                type="text"
                value={contact.fullName}
                onChange={(e) => handleEmergencyContactChange(index, 'fullName', e.target.value)}
                placeholder={`Full Name ${index + 1}`}
                className="text-black px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 mb-2"
              />
              <input
              type="text"
              value={contact.phone}
              onChange={(e) => handleEmergencyContactChange(index, 'phone', e.target.value)}
              placeholder={`Phone ${index + 1}`}
              className="text-black px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center">
            <button
              type="submit"
              className="w-full py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              Save Participant
            </button>
          </div>
        </form>
    </div>
  );
};
               
export default InviteForm;
