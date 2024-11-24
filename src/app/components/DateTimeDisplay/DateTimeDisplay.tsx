'use client';

import React, { useState, useEffect } from 'react';
import './DateTimeDisplay.css';

const DateTimeDisplay: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 10000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString([], { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' });
  };

  return (
    <div className="date-time-container">
      <div className="date-time">
        <span className="date">{formatDate(currentTime)}</span>
        <span className="time">{formatTime(currentTime)}</span>
      </div>
    </div>
  );
};

export default DateTimeDisplay;
