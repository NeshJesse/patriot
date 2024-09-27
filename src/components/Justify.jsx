import React, { useState } from 'react';
import { FilePlus, Image as ImageIcon, Video, Link as LinkIcon } from 'lucide-react';

const JustificationPage = ({ onNext }) => {
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [videoLink, setVideoLink] = useState('');
  const [externalLinks, setExternalLinks] = useState('');

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(URL.createObjectURL(file));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const justificationData = {
      description,
      image,
      videoLink,
      externalLinks: externalLinks.split(',').map(link => link.trim()),
    };
    onNext(justificationData);
  };

  return (
    <div className="text-black max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Protest Justification</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Description of the protest */}
        <div>
          <label className="block text-sm font-medium mb-1">Background/Context</label>
          <textarea
            rows="5"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Explain the reason behind the protest..."
            required
            className="block w-full border border-gray-300 rounded-md p-2 focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        {/* Image Upload */}
        <div className="flex flex-col">
          <label className="flex items-center text-sm font-medium mb-1">
            <ImageIcon className="mr-2" />
            Upload Images
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="border border-gray-300 rounded-md p-2 cursor-pointer"
          />
          {image && <img src={image} alt="Uploaded" className="mt-2 w-24 h-24 object-cover" />}
        </div>

        {/* Video Link */}
        <div>
          <label className="block text-sm font-medium mb-1">
            <Video className="inline mr-1" />
            Video Link
          </label>
          <input
            type="url"
            value={videoLink}
            onChange={(e) => setVideoLink(e.target.value)}
            placeholder="Provide a video link (YouTube, etc.)"
            className="block w-full border border-gray-300 rounded-md p-2 focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        {/* External Links */}
        <div>
          <label className="block text-sm font-medium mb-1">
            <LinkIcon className="inline mr-1" />
            Relevant Articles/Links
          </label>
          <input
            type="text"
            value={externalLinks}
            onChange={(e) => setExternalLinks(e.target.value)}
            placeholder="Comma-separated links (e.g., news, blogs)"
            className="block w-full border border-gray-300 rounded-md p-2 focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <button 
          type="submit" 
          className="flex items-center justify-center bg-blue-600 text-white rounded-md px-4 py-2 hover:bg-blue-700 transition-colors"
        >
          <FilePlus className="mr-2" />
          Next
        </button>
      </form>
    </div>
  );
};

export default JustificationPage;
