"use client"
import React from 'react';
import InviteForm from '@/components/Inviteform'; // Adjust the path based on where the InviteForm is stored
import Sidebar from '@/components/Sidebar';
import { ClipboardCopy } from 'lucide-react';
import DataUsageCard from '@/components/Dataconsent';

const InvitePage = () => {
  return (
    <>
    <Sidebar/>
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Join and Invite Participants to the Protest
        </h1>
        <div className=
        "max-w-xl mx-auto p-6 bg-white shadow-md rounded-md space-y-6"
        >
            <button>
                <ClipboardCopy/>Share the Link to Your friends
            </button>
        </div>
        <br/>
        <DataUsageCard/>

        <InviteForm />
      </div>
    </div>
    </>
  );
};

export default InvitePage;
