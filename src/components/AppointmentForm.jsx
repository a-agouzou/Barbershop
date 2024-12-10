import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";

const AppointmentForm = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
  });

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

  // Validate form inputs
  const validateForm = () => {
    if (!data.name || !data.email || !data.phone || !data.date) {
      toast.error("Please fill in all fields.");
      return false;
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(data.email)) {
      toast.error("Please enter a valid email address.");
      return false;
    }

    const phonePattern = /^[0-9]{10}$/; // Adjust phone validation based on your country format
    if (!phonePattern.test(data.phone)) {
      toast.error("Please enter a valid phone number.");
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Store form data in localStorage
    localStorage.setItem("appointment", JSON.stringify(data));

    // Log the data (optional)
    console.log("Appointment booked:", data);
    navigate("/thank-you");
  };

  return (
    <div className="w-full md:w-[40%] backdrop-blur-sm bg-black/30 rounded-lg p-6 mt-20 shadow-lg">
      <style>{customStyles}</style>
      <h3 className="text-[#FCA95D] text-2xl font-bold mb-6">Book an Appointment</h3>
      <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
        {/* Full Name Input */}
        <div className="relative">
          <input
            type="text"
            id="name"
            className="w-full border border-white/20 rounded-md p-3 bg-transparent text-white placeholder-white/60 focus:outline-none focus:border-[#FCA95D] focus:ring focus:ring-[#FCA95D]/30 transition-all"
            placeholder="Full Name"
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
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
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
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
            value={data.phone}
            onChange={(e) => setData({ ...data, phone: e.target.value })}
            required
          />
        </div>

        {/* Date Picker */}
        <div className="relative">
          <DatePicker
            selected={data.date}
            onChange={(date) => setData({ ...data, date: date })}
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
