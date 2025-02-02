import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import Header from "../components/Header"; 

const Registration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [errors, setErrors] = useState({});

  const validateName = (name) => /^[a-zA-Z\s]+$/.test(name);
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePassword = (password) => password.length >= 8;
  const validateCode = (code) => /^[0-9]{6}$/.test(code);

  const handleRegister = () => {
    // Handle registration logic
  };

  const handleInputChange = (e, validator, field) => {
    const value = e.target.value;
    if (!validator(value)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [field]: `Invalid ${field}`,
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, [field]: "" }));
    }
    switch (field) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "verificationCode":
        setVerificationCode(value);
        break;
      default:
        break;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-shady">
      <Header /> {/* Include the Header component */}
      <h2 className="text-4xl font-bold mb-4">User Registration</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => handleInputChange(e, validateName, "name")}
        className="mb-2 p-2 border border-gray-300 rounded"
      />
      {errors.name && <p className="text-red-500">{errors.name}</p>}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => handleInputChange(e, validateEmail, "email")}
        className="mb-2 p-2 border border-gray-300 rounded"
      />
      {errors.email && <p className="text-red-500">{errors.email}</p>}
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => handleInputChange(e, validatePassword, "password")}
        className="mb-2 p-2 border border-gray-300 rounded"
      />
      {errors.password && <p className="text-red-500">{errors.password}</p>}
      <button
        onClick={handleRegister}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 mb-2"
      >
        Register
      </button>
      <div className="flex items-center my-4">
        <hr className="flex-grow border-t border-gray-300" />
        <span className="mx-4 text-black font-bold">OR</span>
        <hr className="flex-grow border-t border-gray-300" />
      </div>
      <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 mb-2 flex items-center">
        <FontAwesomeIcon icon={faGoogle} className="mr-2" />
        Continue with Google
      </button>
      <input
        type="text"
        placeholder="Verification Code"
        value={verificationCode}
        onChange={(e) => handleInputChange(e, validateCode, "verificationCode")}
        className="mb-2 p-2 border border-gray-300 rounded"
      />
      {errors.verificationCode && (
        <p className="text-red-500">{errors.verificationCode}</p>
      )}
      <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 mb-4">
        Submit Verification Code
      </button>
      <Link
        to="/setup-organisation"
        className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-700"
      >
        Setup Organisation
      </Link>
    </div>
  );
};

export default Registration;
