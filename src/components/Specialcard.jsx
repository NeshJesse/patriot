import React, { useState } from 'react';

const SpecializedHelpCard = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    expertise: '',
    contact: '',
    availability: ''
  });

  const helpProfiles = [
    {
      name: 'John Doe',
      expertise: 'Lawyer',
      contact: 'john.doe@example.com',
    },
    {
      name: 'Dr. Jane Smith',
      expertise: 'Medical Personnel',
      contact: 'jane.smith@hospital.com',
    },
    {
      name: 'Mike Johnson',
      expertise: 'Media',
      contact: 'mike.johnson@news.com',
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., save to database)
    console.log(formData);
    setShowForm(false);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Specialized Help</h2>
      
      {/* Display Help Profiles */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {helpProfiles.map((profile, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">{profile.name}</h3>
            <p className="text-gray-700"><strong>Expertise:</strong> {profile.expertise}</p>
            <p className="text-gray-700"><strong>Contact:</strong> {profile.contact}</p>
          </div>
        ))}
      </div>

      {/* Offer Specialized Help Button */}
      <button
        className="bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-500"
        onClick={() => setShowForm(!showForm)}
      >
        Offer Specialized Help
      </button>

      {/* Specialized Help Form */}
      {showForm && (
        <form onSubmit={handleFormSubmit} className="bg-white p-6 rounded-lg shadow-lg mt-6">
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2" htmlFor="expertise">
              Expertise
            </label>
            <input
              type="text"
              id="expertise"
              name="expertise"
              value={formData.expertise}
              onChange={handleInputChange}
              placeholder="Lawyer, Medical, Media, etc."
              required
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2" htmlFor="contact">
              Contact Info
            </label>
            <input
              type="text"
              id="contact"
              name="contact"
              value={formData.contact}
              onChange={handleInputChange}
              required
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2" htmlFor="availability">
              Availability
            </label>
            <input
              type="text"
              id="availability"
              name="availability"
              value={formData.availability}
              onChange={handleInputChange}
              placeholder="Specify available days/times"
              required
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>

          <button
            type="submit"
            className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-500"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default SpecializedHelpCard;
