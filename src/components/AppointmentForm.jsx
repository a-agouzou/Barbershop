import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AppointmentForm = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  // Custom styles for the DatePicker
  const customStyles = `
    .react-datepicker-wrapper {
      width: 100%;
    }
    .react-datepicker__input-container {
      width: 100%;
    }
  `;

  const filterPassedTime = (time) => {
    const currentDate = new Date();
    const selectedDate = new Date(time);

    // If selected date is today, disable past times
    if (
      selectedDate.toDateString() === currentDate.toDateString()
    ) {
      return currentDate.getTime() < selectedDate.getTime();
    }

    // For future dates, only allow times between 9 AM and 5 PM
    const startHour = 9;
    const endHour = 17;
    const hour = selectedDate.getHours();
    
    return hour >= startHour && hour < endHour;
  };

  return (
    <div className="w-full md:w-[40%] backdrop-blur-sm bg-black/30 rounded-lg p-6 mt-20 shadow-lg">
      <style>{customStyles}</style>
      <h3 className="text-[#FCA95D] text-2xl font-bold mb-6">Book an Appointment</h3>
      <form className="flex flex-col gap-5">
        {/* Full Name Input */}
        <div className="relative">
          <input
            type="text"
            id="name"
            className="w-full border border-white/20 rounded-md p-3 bg-transparent text-white placeholder-white/60 focus:outline-none focus:border-[#FCA95D] focus:ring focus:ring-[#FCA95D]/30 transition-all"
            placeholder="Full Name"
            required
            />
        </div>

        {/* Email Address Input */}
        <div className="relative">
          <input
            type="email"
            id="email"
            className="w-full border border-white/20 rounded-md p-3 bg-transparent text-white placeholder-white/60 focus:outline-none focus:border-[#FCA95D] focus:ring focus:ring-[#FCA95D]/30 transition-all"
            placeholder="Email Address"
            required
          />
        </div>

        {/* Phone Number Input */}
        <div className="relative">
          <input
            type="tel"
            id="phone"
            className="w-full border border-white/20 rounded-md p-3 bg-transparent text-white placeholder-white/60 focus:outline-none focus:border-[#FCA95D] focus:ring focus:ring-[#FCA95D]/30 transition-all"
            placeholder="Phone Number"
            required
          />
        </div>

        {/* Date Picker */}
        <div className="relative">
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            showTimeSelect
            timeIntervals={30}
            minDate={new Date()}
            dateFormat="MMMM d, yyyy h:mm aa"
            placeholderText="Select Date and Time"
            className="w-full border border-white/20 rounded-md p-3 bg-transparent text-white placeholder-white/60 focus:outline-none focus:border-[#FCA95D] focus:ring focus:ring-[#FCA95D]/30 transition-all z-20"
            filterTime={filterPassedTime}
            excludeTimes={[
              new Date().setHours(12, 0),
              new Date().setHours(12, 30),
            ]}
          />
        </div>
        
        <button
          type="submit"
          className="bg-[#FCA95D] text-black py-3 px-4 rounded-lg hover:bg-white hover:text-black transition-all duration-300 font-semibold"
        >
          Book Now
        </button>
      </form>
    </div>
  );
};

export default AppointmentForm;