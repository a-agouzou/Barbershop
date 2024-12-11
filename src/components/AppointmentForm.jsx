import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";

const AppointmentForm = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    date: null, // Initialize with null to avoid issues with empty strings
  });
  const [reservedTimes, setReservedTimes] = useState([]);

  useEffect(() => {
    // Load existing appointments from localStorage
    const existingAppointments =
      JSON.parse(localStorage.getItem("appointments")) || [];
    const reserved = existingAppointments.map((appointment) =>
      new Date(appointment.date).getTime()
    );
    setReservedTimes(reserved);
  }, []);

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

    // Define working hours
    const startHour = 9; // Start hour is 9 AM to allow 9:30 as the first valid time
    const endHour = 16; // End hour is 4 PM to allow 4:30 as the last valid time
    const startMinute = 0;
    const endMinute = 30;

    const hour = selectedDate.getHours();
    const minute = selectedDate.getMinutes();

    // Only allow times in the working hours range
    if (hour < startHour || (hour === startHour && minute < startMinute)) {
      return false; // Exclude times before 9:00 AM
    }
    if (hour > endHour || (hour === endHour && minute > endMinute)) {
      return false; // Exclude times after 4:30 PM
    }

    // For today's date, exclude past times
    if (selectedDate.toDateString() === currentDate.toDateString()) {
      return currentDate.getTime() < selectedDate.getTime();
    }

    return true;
  };

  const isTimeReserved = (date) => {
    return reservedTimes.includes(date.getTime());
  };

  const validateForm = () => {
    if (!data.name || !data.email || !data.phone || !data.date) {
      toast.error("Please fill all the fields.");
      return false;
    }
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(data.email)) {
      toast.error("Please enter a valid email address.");
      return false;
    }
    const phonePattern = /^[0-9]{10}$/;
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

    const existingAppointments =
      JSON.parse(localStorage.getItem("appointments")) || [];
    const appointmentID =
      existingAppointments.length > 0
        ? existingAppointments[existingAppointments.length - 1].id + 1
        : 1;

    const newAppointment = {
      id: appointmentID,
      ...data,
    };

    existingAppointments.push(newAppointment);
    localStorage.setItem("appointments", JSON.stringify(existingAppointments));

    console.log("Appointment booked:", newAppointment);
    const toastId = toast.loading("Booking your appointment...");
    setTimeout(() => {
      toast.success("Appointment booked successfully!");
      toast.dismiss(toastId);
      navigate("/thank-you");
    }, 1000);
  };

  const filterDate = (date) => {
    // Exclude weekends (Saturday = 6, Sunday = 0)
    const day = date.getDay();
    return day !== 0 && day !== 6; // Allow only weekdays (Monday to Friday)
  };

  return (
    <>
      <div className="w-full md:w-[40%] backdrop-blur-sm bg-black/30 rounded-lg p-6 mt-20 shadow-lg">
        <style>{customStyles}</style>
        <h3 className="text-[#FCA95D] text-2xl font-bold mb-6">
          Book an Appointment
        </h3>
        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
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
          <div className="relative">
            <DatePicker
              selected={data.date}
              onChange={(date) => setData({ ...data, date })}
              showTimeSelect
              timeIntervals={30}
              minDate={new Date()}
              dateFormat="MMMM d, yyyy h:mm aa"
              placeholderText="Select Date and Time"
              className="w-full border border-white/20 rounded-md p-3 bg-transparent text-white placeholder-white/60 focus:outline-none focus:border-[#FCA95D] focus:ring focus:ring-[#FCA95D]/30 transition-all z-20"
              filterTime={filterPassedTime}
              excludeTimes={reservedTimes.map((ts) =>
                new Date(ts).setSeconds(0, 0)
              )}
              filterDate={filterDate}
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
    </>
  );
};

export default AppointmentForm;
