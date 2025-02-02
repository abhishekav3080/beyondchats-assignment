import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Registration from "./components/Registration";
import SetupOrganisation from "./components/SetupOrganisation";
import ChatbotIntegration from "./components/ChatbotIntegration";
import SuccessScreen from "./components/SuccessScreen";
import ErrorScreen from "./components/ErrorScreen";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/setup-organisation" element={<SetupOrganisation />} />
        <Route path="/chatbot-integration" element={<ChatbotIntegration />} />
        <Route path="/success" element={<SuccessScreen />} />
        <Route path="/error" element={<ErrorScreen />} />
      </Routes>
    </Router>
  );
};

export default App;
