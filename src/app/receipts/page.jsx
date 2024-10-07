'use client';
import { useState } from 'react';
import { supabase } from '../../../supabaseClient'; 
import UploadComp from '@/components/receipts';
import Sidebar from '@/components/Sidebar';

const ReceiptPage = () => {
  const [imageUrl, setImageUrl] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('');

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
    }
  };

  return (
    <>
        <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Inject Buddy - Safeguard Protests and Organize with Ease</title>
    
   
    <meta name="description" content="Inject Buddy is the ultimate tool for organizing peaceful protests. Enhance coordination, ensure participant safety, and offer real-time updates with our secure communication platform." />
    <meta name="keywords" content="protest organizer, protest coordination, participant safety, real-time updates, secure communication, civil rights, protest tools" />
    <meta name="author" content="Nehemiah Onyango Jesse Nehemiah" />
    <meta name="robots" content="index, follow" />

    <link rel="canonical" href="https://neshjesse.github.io/patriot/" />
    
    <meta property="og:description" content="Inject Buddy helps you organize peaceful protests effectively, ensuring safety and real-time coordination for participants." />
    <meta property="og:image" content="https://neshjesse.github.io/patriot/public/social.png" />
    <meta property="og:url" content="https://neshjesse.github.io/patriot/public/" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Inject Buddy" />
    <meta property="og:title" content="Inject Buddy - Organize peacefull protests with Ease" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Inject Buddy - Organize peacefull protests with Ease" />
    <meta name="twitter:description" content="Enhance coordination, participant safety, and communication during peaceful protests with Inject Buddy." />
    <meta name="twitter:image" content="https://neshjesse.github.io/patriot/public/social.png" />
 
    <link rel="icon" type="image/png" href="https://neshjesse.github.io/patriot/public/favicon.ico" />
    <link rel="apple-touch-icon" href="https://neshjesse.github.io/patriot/public/favicon.ico" />
    

    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
  </head>
    <Sidebar/>
    <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md">
      <h2 className="text-lg font-bold mb-4">Upload Image via URL</h2>
      <UploadComp/>
    </div>
    </>
  );
};

export default ReceiptPage;