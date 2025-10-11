"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const DateAndTime: React.FC = () => {
  // State for date and time
  const [currentTime, setCurrentTime] = useState<string>("");
  const [currentDate, setCurrentDate] = useState<string>("");

  // Update date and time every second
  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();

      // Format time (e.g., 12:36 AM)
      const timeOptions: Intl.DateTimeFormatOptions = {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      const timeString = now.toLocaleTimeString("en-US", timeOptions);

      // Format date (e.g., Wednesday, July 23, 2025)
      const dateOptions: Intl.DateTimeFormatOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      const dateString = now.toLocaleDateString("en-US", dateOptions);

      setCurrentTime(timeString);
      setCurrentDate(dateString);
    };

    // Initial update
    updateDateTime();

    // Update every second
    const interval = setInterval(updateDateTime, 1000);

    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="relative py-6 sm:py-8 lg:py-12 px-4 sm:px-6 lg:px-8  rounded-xl shadow-xl  max-w-md mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-center">
        <motion.div
          className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {currentTime}
        </motion.div>
        <motion.div
          className="text-base sm:text-lg md:text-xl text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          {currentDate}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default DateAndTime;
