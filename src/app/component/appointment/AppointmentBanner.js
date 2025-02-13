"use client";

import React from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {
  const isDateBeforeToday = (date) => {
    return date < new Date().setHours(0, 0, 0, 0);
  };

  return (
    <header className="my-6">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-6 max-w-screen-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
        {/* Left Side: Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="/images/doctor.png"
            alt="Doctor"
            className="w-72 md:w-80 lg:w-full max-w-md"
          />
        </div>

        {/* Right Side: Calendar */}
        <div className="w-full lg:w-1/2 flex flex-col items-center">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Choose Your Appointment Date
          </h2>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              disabled={isDateBeforeToday}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppointmentBanner;
