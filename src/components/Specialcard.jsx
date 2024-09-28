import React, { useState, useEffect } from 'react';
import { supabase } from '../../supabaseClient';

const SpecializedHelpCard = () => {
  const [showSection, setShowSection] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [helpProfiles, setHelpProfiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    expertise: '',
    contact: '',
    availability: ''
  });

  // Fetch help profiles from Supabase
  const fetchProfiles = async () => {
    setLoading(true);
    const { data, error } = await supabase.from('helpers').select('*');
    if (error) {
      console.error('Error fetching help profiles:', error);
    } else {
      setHelpProfiles(data);
    }
    setLoading(false);
  };

  // Fetch profiles when the section is shown
  useEffect(() => {
    if (showSection) {
      fetchProfiles();
    }
  }, [showSection]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const { error } = await supabase.from('helpers').insert([formData]);
    if (error) {
      console.error('Error submitting form:', error);
    } else {
      // Fetch updated profiles after submission
      await fetchProfiles();
      setShowForm(false);
    }
  };

  const filteredProfiles = helpProfiles.filter((profile) => {
    if (selectedFilter === 'All') return true;
    return profile.expertise.toLowerCase().includes(selectedFilter.toLowerCase());
  });

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Specialized Help</h2>
      <p>This section allows you to seek and find specialized help from available professionals like lawyers, medics, and media teams when you need them.</p>
      <button
        className="bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-500"
        onClick={() => setShowSection(!showSection)}
      >
        {showSection ? 'Hide Specialized Help Section' : 'Show Specialized Help Section'}
      </button>

      {showSection && (
        <>
          <div className="flex space-x-4 mb-6">
            <button
              className={`py-2 px-4 rounded-lg ${selectedFilter === 'All' ? 'bg-indigo-600 text-white' : 'bg-gray-200'}`}
              onClick={() => setSelectedFilter('All')}
            >
              All
            </button>
            <button
              className={`py-2 px-4 rounded-lg ${selectedFilter === 'Lawyer' ? 'bg-indigo-600 text-white' : 'bg-gray-200'}`}
              onClick={() => setSelectedFilter('Lawyer')}
            >
              Lawyers
            </button>
            <button
              className={`py-2 px-4 rounded-lg ${selectedFilter === 'Medical' ? 'bg-indigo-600 text-white' : 'bg-gray-200'}`}
              onClick={() => setSelectedFilter('Medical')}
            >
              Medics
            </button>
            <button
              className={`py-2 px-4 rounded-lg ${selectedFilter === 'Media' ? 'bg-indigo-600 text-white' : 'bg-gray-200'}`}
              onClick={() => setSelectedFilter('Media')}
            >
              Media
            </button>
          </div>

          {loading ? (
            <p>Loading...</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProfiles.length > 0 ? (
                filteredProfiles.map((profile, index) => (
                  <div key={index} className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900">{profile.name}</h3>
                    <p className="text-gray-700"><strong>Expertise:</strong> {profile.expertise}</p>
                    <p className="text-gray-700"><strong>Contact:</strong> {profile.contact}</p>
                  </div>
                ))
              ) : (
                <p className="text-gray-500">No profiles found for {selectedFilter}.</p>
              )}
            </div>
          )}

          <button
            className="bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-500 mt-6"
            onClick={() => setShowForm(!showForm)}
          >
            {showForm ? 'Hide Offer Help Form' : 'Offer Specialized Help'}
          </button>

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
        </>
      )}
    </div>
  );
};

export default SpecializedHelpCard;