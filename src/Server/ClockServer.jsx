// src/Clock.js
import React, { useState, useEffect } from 'react';
import './ClockServer.css';
const ClockSrver = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
      const tick = () => setTime(new Date());
      const timerID = setInterval(tick, 1000);
  
      return () => clearInterval(timerID);
    }, []);
  
    return (
      <div className='Appp'>
        <h1>Current Time</h1>
        <p>{time.toLocaleTimeString()}</p>
      </div>
    );
  };
export default ClockSrver;
