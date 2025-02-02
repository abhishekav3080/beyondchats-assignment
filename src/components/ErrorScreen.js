import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header"; // Import the Header component

const ErrorScreen = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-shady">
      <Header /> {/* Include the Header component */}
      <h2 className="text-4xl font-bold mb-4">Integration Failed</h2>
      <p className="text-lg mb-4">Please try again or contact support.</p>
      <Link
        to="/chatbot-integration"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 mb-2"
      >
        Retry Integration
      </Link>
      <Link
        to="/dashboard"
        className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700"
      >
        Go to Dashboard
      </Link>
    </div>
  );
};

export default ErrorScreen;
