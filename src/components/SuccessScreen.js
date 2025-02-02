import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header"; 

const SuccessScreen = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-shady">
      <Header /> 
      <h2 className="text-4xl font-bold mb-4">Integration Successful!</h2>
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 mb-2">
        Explore Admin Panel
      </button>
      <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 mb-2">
        Start talking to your chatbot
      </button>
      <button className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-700 mb-4">
        Share on Social Media
      </button>
      <Link
        to="/dashboard"
        className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700"
      >
        Go to Dashboard
      </Link>
    </div>
  );
};

export default SuccessScreen;
