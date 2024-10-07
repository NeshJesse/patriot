'use client';
import { useState } from 'react';
import { supabase } from '../../../supabaseClient'; 
import UploadComp from '@/components/receipts';
import Sidebar from '@/components/Sidebar';
import Head from '@/components/Head';

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
    <Head/>
    <Sidebar/>
    <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md">
      <h2 className="text-lg font-bold mb-4">Upload Image via URL</h2>
      <UploadComp/>
    </div>
    </>
  );
};

export default ReceiptPage;