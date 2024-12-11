import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const AppointmentList = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    // Load appointments from localStorage
    const storedAppointments = JSON.parse(localStorage.getItem("appointments")) || [];
    setAppointments(storedAppointments);
  }, []);

  const handleDelete = (id) => {
    const updatedAppointments = appointments.filter((appointment) => appointment.id !== id);
    setAppointments(updatedAppointments);
    localStorage.setItem("appointments", JSON.stringify(updatedAppointments));
    toast.success("Appointment deleted successfully!");
  };

  return (
    <div className="w-full md:w-[70%] mx-auto mt-10">
      <Toaster />
      <h3 className="text-[#FCA95D] text-2xl font-bold mb-6">Your Appointments</h3>
      {appointments.length > 0 ? (
        <table className="w-full border border-gray-200 shadow-lg">
          <thead className="bg-[#FCA95D] text-black">
            <tr>
              <th className="py-2 px-4 text-left">#</th>
              <th className="py-2 px-4 text-left">Name</th>
              <th className="py-2 px-4 text-left">Email</th>
              <th className="py-2 px-4 text-left">Phone</th>
              <th className="py-2 px-4 text-left">Date</th>
              <th className="py-2 px-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment, index) => (
              <tr key={appointment.id} className="hover:bg-gray-100">
                <td className="py-2 px-4">{index + 1}</td>
                <td className="py-2 px-4">{appointment.name}</td>
                <td className="py-2 px-4">{appointment.email}</td>
                <td className="py-2 px-4">{appointment.phone}</td>
                <td className="py-2 px-4">
                  {new Date(appointment.date).toLocaleString("en-US", {
                    weekday: "short",
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </td>
                <td className="py-2 px-4 text-center">
                  <button
                    onClick={() => handleDelete(appointment.id)}
                    className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600 transition"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-white">No appointments found.</p>
      )}
    </div>
  );
};

export default AppointmentList;
