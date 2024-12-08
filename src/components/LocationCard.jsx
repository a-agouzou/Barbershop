import { IoLocationSharp } from "react-icons/io5";

const LocationCard = () => {
  return (
    <div className="bg-white/10 rounded-xl p-6 flex items-center space-x-6 hover:scale-105">
      <div className="bg-white text-[#49403B] p-4 rounded-lg">
        <IoLocationSharp className="text-5xl" />
      </div>
      <div>
        <h3 className="text-2xl md:text-3xl font-bold text-[#FCA95D]">Location</h3>
        <p className="text-white/80 mt-2">1234 Street Name, City Name, Country</p>
      </div>
    </div>
  );
};

export default LocationCard;
