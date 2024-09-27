// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Use react-router for navigation

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white">
      <Link to="/" className="mr-4">Home</Link>
      <Link to="/create-event" className="mr-4">Create Event</Link>
    </nav>
  );
};

export default Navbar;
