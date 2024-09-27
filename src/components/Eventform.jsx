import React, { useState } from 'react';
import { Calendar, Clock, Edit, FileText, Tag } from 'lucide-react'; // Importing icons

const EventForm = ({ onNext }) => {
  const [eventName, setEventName] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [category, setCategory] = useState('Social Justice');

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext({ eventName, description, date, time, category });
  };

  return (
    <form onSubmit={handleSubmit} className="text-black max-w-xl mx-auto p-6 bg-white shadow-md rounded-md space-y-4">
      <div className="flex flex-col">
        <label className="text-gray-700 mb-1 flex items-center">
          <Edit className="w-5 h-5 mr-2 text-blue-500" />
          Event Name
        </label>
        <input
          type="text"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
          required
          className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter event name"
        />
      </div>
      
      <div className="flex flex-col">
        <label className="text-gray-700 mb-1 flex items-center">
          <FileText className="w-5 h-5 mr-2 text-blue-500" />
          Description
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter event description"
        />
      </div>
      
      <div className="flex flex-col">
        <label className="text-gray-700 mb-1 flex items-center">
          <Calendar className="w-5 h-5 mr-2 text-blue-500" />
          Date
        </label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
          className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      
      <div className="flex flex-col">
        <label className="text-gray-700 mb-1 flex items-center">
          <Clock className="w-5 h-5 mr-2 text-blue-500" />
          Time
        </label>
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
          className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      
      <div className="flex flex-col">
        <label className="text-gray-700 mb-1 flex items-center">
          <Tag className="w-5 h-5 mr-2 text-blue-500" />
          Category
        </label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="Social Justice">Social Justice</option>
          <option value="Climate Change">Climate Change</option>
          <option value="Equality">Equality</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Next
      </button>
    </form>
  );
};

export default EventForm;

