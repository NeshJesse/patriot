'use client';
import { useEffect, useState } from 'react';
import { supabase } from '../../supabaseClient';

const UploadComp = () => {
  const [imageUrl, setImageUrl] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('');
  const [receipts, setReceipts] = useState([]); // State for fetched receipts data
  const [showForm, setShowForm] = useState(false); // State for form visibility
  const [loading, setLoading] = useState(true);

  // Fetch receipts data from Supabase
  useEffect(() => {
    const fetchReceipts = async () => {
      const { data, error } = await supabase.from('receipts').select('*');
      if (error) {
        console.error('Error fetching data:', error);
      } else {
        setReceipts(data);
      }
      setLoading(false);
    };
    fetchReceipts();
  }, []);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!imageUrl || !description || !tags) {
      alert('Please fill in all fields');
      return;
    }

    // Submit to Supabase
    const { data, error } = await supabase.from('receipts').insert([
      { image_url: imageUrl, description, tags }
    ]);

    if (error) {
      console.error('Error inserting data:', error);
    } else {
      alert('Data submitted successfully!');
      setImageUrl('');
      setDescription('');
      setTags('');
      setReceipts([...receipts, { image_url: imageUrl, description, tags }]); // Update receipts list
    }
  };

  // Toggle form visibility
  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <>
      {/* Toggle button to show/hide form */}
      <button
        onClick={toggleForm}
        className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 mb-4"
      >
        {showForm ? 'Hide Form' : 'Add New Receipt'}
      </button>

      {/* Form for adding new receipt */}
      {showForm && (
        <form onSubmit={handleSubmit} className="mb-6">
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Image URL</label>
            <input
              type="url"
              placeholder="Enter image URL"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Description</label>
            <textarea
              placeholder="Enter description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Tags (comma separated)</label>
            <input
              type="text"
              placeholder="Enter tags"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Submit
          </button>
        </form>
      )}

      {/* Loading state */}
      {loading ? (
        <p>Loading receipts...</p>
      ) : (
        <>
          {receipts.length > 0 ? (
            // Display fetched receipts
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {receipts.map((receipt, index) => (
                <div key={index} className="border border-gray-300 p-4 rounded-md">
                  <img
                    src={receipt.image_url}
                    alt="Receipt"
                    className="w-full h-40 object-cover mb-2"
                  />
                  <p className="text-gray-700 mb-2">{receipt.description}</p>
                  <div className="text-gray-500">
                    <strong>Tags: </strong> {receipt.tags}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>No receipts available.</p>
          )}
        </>
      )}
    </>
  );
};

export default UploadComp;
