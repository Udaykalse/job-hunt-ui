// Home.jsx
import React from 'react';
import { FaBriefcase, FaSearch } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleSearchJob = () => {
    navigate('/search'); 
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-b from-blue-500 to-indigo-600 px-4">
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-8 text-center transition-all duration-300">
        Welcome to Job Portal
      </h1>
      <p className="text-lg md:text-xl lg:text-2xl text-white mb-12 text-center max-w-lg">
        Your one-stop destination to find your dream job. Let's get started!
      </p>
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 w-full sm:w-auto">
        <button className="flex items-center justify-center bg-green-500 text-white w-full sm:w-auto px-6 py-4 rounded-lg shadow-lg hover:bg-green-700 transition duration-300 ease-in-out transform hover:scale-105">
          <FaBriefcase className="mr-2" />
          <Link to='/ordination'>Organization</Link>
        </button>
        <button 
          onClick={handleSearchJob}
          className="flex items-center justify-center bg-yellow-500 text-white w-full sm:w-auto px-6 py-4 rounded-lg shadow-lg hover:bg-yellow-700 transition duration-300 ease-in-out transform hover:scale-105"
        >
          <FaSearch className="mr-2" /> Search Job
        </button>
      </div>
    </div>
  );
};

export default Home;
