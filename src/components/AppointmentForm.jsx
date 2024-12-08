const AppointmentForm = () => {
  return (
    <div className="w-full md:w-[40%] backdrop-blur-sm bg-black/30 rounded-lg p-6 mt-20">
      <h3 className="text-[#FCA95D] text-xl mb-6">Book an Appointment</h3>
      <form className="flex flex-col gap-4">
        <div className="relative">
          <input
            type="text"
            id="name"
            className="w-full border border-white/20 rounded-md p-3 bg-transparent text-white placeholder-white/60 focus:outline-none focus:border-[#FCA95D]"
            placeholder="Full Name"
            required
          />
        </div>

        <div className="relative">
          <input
            type="email"
            id="email"
            className="w-full border border-white/20 rounded-md p-3 bg-transparent text-white placeholder-white/60 focus:outline-none focus:border-[#FCA95D]"
            placeholder="Email Address"
            required
          />
        </div>

        <div className="relative">
          <input
            type="tel"
            id="phone"
            className="w-full border border-white/20 rounded-md p-3 bg-transparent text-white placeholder-white/60 focus:outline-none focus:border-[#FCA95D]"
            placeholder="Phone Number"
            required
          />
        </div>

        <div className="flex gap-4">
          <input
            type="date"
            className="w-1/2 border border-white/20 rounded-md p-3 bg-transparent text-white focus:outline-none focus:border-[#FCA95D]"
            required
          />
          <input
            type="time"
            className="w-1/2 border border-white/20 rounded-md p-3 bg-transparent text-white focus:outline-none focus:border-[#FCA95D]"
            required
          />
        </div>

        <button className="bg-[#FCA95D] text-black py-3 px-4 rounded-lg hover:bg-white transition-all duration-300 font-semibold">
          Book Now
        </button>
      </form>
    </div>
  );
};

export default AppointmentForm;
