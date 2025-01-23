import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BirdsEyeView from "../assets/birdsEyeView.png";
import './parkingstyles.css';

const Parking = () => {
  // Set default values for development
  const [carCount, setCarCount] = useState(25);  // Default car count
  const [command, setCommand] = useState('stop');  // Default command
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulating API request for development (commented out when Raspberry Pi is live)
    /*
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/detection`)
      .then(response => {
        setCarCount(response.data.carCount);
      })
      .catch(err => {
        setError("Error fetching car count");
        console.error(err);
      });

    axios.get(`${import.meta.env.VITE_BACKEND_URL}/command`)
      .then(response => {
        setCommand(response.data.command);
      })
      .catch(err => {
        setError("Error fetching current command");
        console.error(err);
      });
    */
  }, []);  // Empty dependency array ensures this runs only once, like componentDidMount

  const startRaspberryPi = () => {
    // Simulating the Raspberry Pi start for development
    setCommand('start');
    console.log("Raspberry Pi started.");
    
    // Uncomment to use with live API
    /*
    axios.post(`${import.meta.env.VITE_BACKEND_URL}/command`, { command: 'start' })
      .then(response => {
        setCommand('start');
        console.log(response.data.message);
      })
      .catch(err => {
        setError("Error starting Raspberry Pi");
        console.error(err);
      });
    */
  };

  const stopRaspberryPi = () => {
    // Simulating the Raspberry Pi stop for development
    setCommand('stop');
    console.log("Raspberry Pi stopped.");
    
    // Uncomment to use with live API
    /*
    axios.post(`${import.meta.env.VITE_BACKEND_URL}/command`, { command: 'stop' })
      .then(response => {
        setCommand('stop');
        console.log(response.data.message);
      })
      .catch(err => {
        setError("Error stopping Raspberry Pi");
        console.error(err);
      });
    */
  };

  const spotsAvailable = 51 - carCount;

  return (
    <div className="PushDown">
    <div className="parking-lot-container">
    <div className="parking-lot-content">
      <div>
        <h1>Thomas Jefferson West Parking Lot </h1>
        <p className="total">Total Spots: 51</p>
        <img
          src={BirdsEyeView}
          alt="Bird's Eye View of Parking Lot"
          className="parking-lot-image"
        />
      </div>
      <div className="text-container">
        <p className="available-spaces">
          Available Spots: <strong>{51 - carCount}</strong>
        </p>
      </div>
    </div>
    <div className="actions-container">
      <button className="start-button" onClick={startRaspberryPi}>
        Start Raspberry Pi
      </button>
      <button className="stop-button" onClick={stopRaspberryPi}>
        Stop Raspberry Pi
      </button>
      {error && <p className="error-message">{error}</p>}
    </div>
  </div>
  </div>
  );
};

export default Parking;
