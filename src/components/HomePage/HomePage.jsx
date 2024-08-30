import React, { useState } from "react";
import logo from "../../assets/HomePage/logo.png";
import background from "../../assets/HomePage/background.jpeg";

const Homepage = () => {
  const [hoveredBuilding, setHoveredBuilding] = useState(null);

  const buildings = [
    {
      id: 1,
      name: "Tower Experia",
      info: "1BHK, 2BHK, 3BHK Apartments\n540 Sft - 1572 Sft\nTotal Flats 544",
      points: "200,150 300,150 300,250 200,250", // Example coordinates
    },
    // You can add more buildings with appropriate coordinates here
  ];

  const handleMouseEnter = (building) => {
    setHoveredBuilding(building);
  };

  const handleMouseLeave = () => {
    setHoveredBuilding(null);
  };

  return (
    <div className="relative">
      {/* Navbar */}
      <nav className="absolute z-10 inset-0">
        <div className="container px-10 flex justify-between items-center">
          <img className="w-72 h-14" src={logo} alt="Logo" />
          <div className="space-x-14 text-white font-semibold">
            <a href="#home">Home</a>
            <a href="#site-plan">Site Plan</a>
            <a href="#location-map">Location Map</a>
            <a href="#gallery">Gallery</a>
            <a href="#specifications">Specifications</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* Background Image with SVG Overlay */}
      <div className="relative w-full h-screen bg-cover bg-center">
        <img
          src={background}
          alt="Background"
          className="w-full h-full object-cover"
        />
        <svg
          className="absolute top-0 left-0 w-full h-full"
          viewBox="0 0 1000 500"
        >
          {buildings.map((building) => (
            <polygon
              key={building.id}
              points={building.points}
              fill="transparent" // Initially transparent
              stroke={
                hoveredBuilding?.id === building.id ? "yellow" : "transparent"
              }
              strokeWidth="2"
              onMouseEnter={() => handleMouseEnter(building)}
              onMouseLeave={handleMouseLeave}
              className="cursor-pointer transition-colors duration-300"
            />
          ))}
        </svg>

        {hoveredBuilding && (
          <div
            className="absolute z-20 bg-amber-600 text-white p-4 rounded"
            style={{
              left: "50%",
              top: "20%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <h2 className="font-bold">{hoveredBuilding.name}</h2>
            <p>{hoveredBuilding.info}</p>
          </div>
        )}
      </div>

      <footer className="bg-gray-800 p-1 border text-white text-center absolute left-16 bottom-4">
        <div className="container mx-auto px-2">
          <p>Download Brochure</p>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;
