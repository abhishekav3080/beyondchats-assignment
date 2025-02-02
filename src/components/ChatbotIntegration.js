import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header"; // Import the Header component

const ChatbotIntegration = () => {
  const [integrationStatus, setIntegrationStatus] = useState(null);

  const handleTestChatbot = () => {
    // Open the client's website with a dummy chatbot integration
    window.open("https://example.com", "_blank");
  };

  const handleIntegrate = () => {
    // Show instructions for integrating the chatbot
    alert(
      'Copy the following code and paste it within the <head> of your website:\n\n<script src="https://example.com/chatbot.js"></script>'
    );
  };

  const handleMailInstructions = () => {
    // Mail instructions to the client's developer
    alert("Instructions have been mailed to your developer.");
  };

  const handleTestIntegration = () => {
    // Simulate integration testing
    const success = Math.random() > 0.5;
    setIntegrationStatus(success ? "success" : "failure");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-shady">
      <Header /> {/* Include the Header component */}
      <h2 className="text-4xl font-bold mb-4">Chatbot Integration & Testing</h2>
      <button
        onClick={handleTestChatbot}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 mb-2"
      >
        Test Chatbot
      </button>
      <div className="flex items-center my-4">
        <button
          onClick={handleIntegrate}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 mb-2"
        >
          Integrate on your website
        </button>
        <button
          onClick={handleMailInstructions}
          className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-700 mb-2 ml-2"
        >
          Mail Instructions to Developer
        </button>
      </div>
      <button
        onClick={handleTestIntegration}
        className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-700 mb-4"
      >
        Test Integration
      </button>
      {integrationStatus === "success" && (
        <div className="flex flex-col items-center justify-center min-h-screen bg-shady">
          <h2 className="text-4xl font-bold mb-4">Integration Successful!</h2>
          <div className="confetti"></div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 mb-2">
            Explore Admin Panel
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 mb-2">
            Start talking to your chatbot
          </button>
          <div className="flex space-x-2">
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
              Share on Facebook
            </button>
            <button className="bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-600">
              Share on Twitter
            </button>
            <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700">
              Share on LinkedIn
            </button>
          </div>
        </div>
      )}
      {integrationStatus === "failure" && (
        <div className="flex flex-col items-center justify-center min-h-screen bg-shady">
          <h2 className="text-4xl font-bold mb-4">Integration Failed</h2>
          <p className="text-lg mb-4">Please try again or contact support.</p>
          <button
            onClick={handleTestIntegration}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 mb-2"
          >
            Retry Integration
          </button>
          <Link
            to="/dashboard"
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700"
          >
            Go to Dashboard
          </Link>
        </div>
      )}
    </div>
  );
};

export default ChatbotIntegration;
