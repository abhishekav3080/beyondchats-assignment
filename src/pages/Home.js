import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header"; 

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-shady">
      <Header /> 
      <Link
        to="/registration"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Get Started
      </Link>
    </div>
  );
};

export default Home;
