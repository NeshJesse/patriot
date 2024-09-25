import React, { useState } from 'react';

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
    <div>
      <h2>Protest Justification</h2>
      
      <form onSubmit={handleSubmit}>
        {/* Description of the protest */}
        <div>
          <label>Background/Context</label>
          <textarea
            rows="5"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Explain the reason behind the protest..."
            required
          />
        </div>

        {/* Image Upload */}
        <div>
          <label>Upload Images</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
          />
          {image && <img src={image} alt="Uploaded" style={{ width: '100px', marginTop: '10px' }} />}
        </div>

        {/* Video Link */}
        <div>
          <label>Video Link</label>
          <input
            type="url"
            value={videoLink}
            onChange={(e) => setVideoLink(e.target.value)}
            placeholder="Provide a video link (YouTube, etc.)"
          />
        </div>

        {/* External Links */}
        <div>
          <label>Relevant Articles/Links</label>
          <input
            type="text"
            value={externalLinks}
            onChange={(e) => setExternalLinks(e.target.value)}
            placeholder="Comma-separated links (e.g., news, blogs)"
          />
        </div>

        <button type="submit">Next</button>
      </form>
    </div>
  );
};

export default JustificationPage;
