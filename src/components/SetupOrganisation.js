import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "../components/Header"; 
const SetupOrganisation = () => {
  const [companyName, setCompanyName] = useState("");
  const [companyURL, setCompanyURL] = useState("");
  const [companyDescription, setCompanyDescription] = useState("");
  const [webpages, setWebpages] = useState([]);
  const [selectedPage, setSelectedPage] = useState(null);

  useEffect(() => {
    if (companyURL) {
      
      axios
        .get(
          `https://opengraph.io/api/1.1/site/${encodeURIComponent(
            companyURL
          )}?app_id=8d641356-7203-479c-8122-30cc91a501f7`
        )
        .then((response) => {
          setCompanyDescription(response.data.hybridGraph.description);
        })
        .catch((error) => {
          console.error("Error fetching meta-description:", error);
        });
    }
  }, [companyURL]);

  const handleSetup = () => {
    
    axios
      .get("https://api.artic.edu/api/v1/artworks")
      .then((response) => {
        const artworks = response.data.data.map((artwork, index) => ({
          id: index + 1,
          url: artwork.api_link,
          status: index % 2 === 0 ? "scraped" : "pending",
        }));
        setWebpages(artworks);
      })
      .catch((error) => {
        console.error("Error fetching artworks:", error);
      });
  };

  const handlePageClick = (page) => {
    
    setSelectedPage(page);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-shady">
      <Header /> 
      <h2 className="text-4xl font-bold mb-4">Setup Organisation</h2>
      <input
        type="text"
        placeholder="Company Name"
        value={companyName}
        onChange={(e) => setCompanyName(e.target.value)}
        className="mb-2 p-2 border border-gray-300 rounded"
      />
      <input
        type="url"
        placeholder="Company Website URL"
        value={companyURL}
        onChange={(e) => setCompanyURL(e.target.value)}
        className="mb-2 p-2 border border-gray-300 rounded"
      />
      <textarea
        placeholder="Company Description"
        value={companyDescription}
        onChange={(e) => setCompanyDescription(e.target.value)}
        className="mb-2 p-2 border border-gray-300 rounded"
      />
      <button
        onClick={handleSetup}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Setup
      </button>
      <div className="mt-4">
        <h3 className="text-2xl font-bold mb-2">Webpages</h3>
        <ul>
          {webpages.map((page) => (
            <li key={page.id} className="mb-2">
              <button
                onClick={() => handlePageClick(page)}
                className={`px-4 py-2 rounded ${
                  page.status === "scraped"
                    ? "bg-green-500"
                    : page.status === "pending"
                    ? "bg-yellow-500"
                    : "bg-gray-500"
                } text-white`}
              >
                {page.url} - {page.status}
              </button>
            </li>
          ))}
        </ul>
      </div>
      {selectedPage && (
        <div className="mt-4">
          <h3 className="text-2xl font-bold mb-2">
            Data Chunks from {selectedPage.url}
          </h3>
          <p>Dummy data chunks for {selectedPage.url}</p>
        </div>
      )}
      <Link
        to="/chatbot-integration"
        className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-700 mt-4"
      >
        Chatbot Integration
      </Link>
      
    </div>
  );
};

export default SetupOrganisation;
