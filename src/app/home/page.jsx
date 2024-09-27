"use client"
// App.jsx or index.jsx
import React from 'react';
// Import the HomePage component
import HomePage from '@/components/Homepage';
import Sidebar from '@/components/Sidebar';
const App = () => {
  return (
    <div>
      <Sidebar/>
      <HomePage /> {/* Render the HomePage component */}
    </div>
  );
};

export default App;
