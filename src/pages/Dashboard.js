import React from "react";
import Header from "../components/Header"; 

const Dashboard = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-shady">
      <Header /> 
      <h2 className="text-4xl font-bold mb-4">Dashboard</h2>
      <p className="text-lg">
        Here you can manage your chatbot settings and view analytics.
      </p>
    </div>
  );
};

export default Dashboard;
