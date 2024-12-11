import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const FooterSection = () => {
  const navigate = useNavigate();
  return (
    <footer className="bg-white w-screen overflow-hidden border-t-4 border-x-gray-500 p-7 flex justify-between items-center">
      <div className="flex space-x-4">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-700 transition duration-300">
          <FaFacebook size="1.5em" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-700 transition duration-300">
          <FaInstagram size="1.5em" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-700 transition duration-300">
          <FaTwitter size="1.5em" />
        </a>
      </div>
      <div className="text-black font-bold text-xl md:text-2xl">
        <span className="text-[#FCA95D]">Barber</span>Shop
      </div>
      {/*button to navigate to appointments lits */}
      <button className="bg-[#FCA95D] text-black py-2 px-6 rounded-lg hover:bg-white hover:text-black transition-all duration-300" onClick={()=>navigate("/appointments")}>
        Appointments
      </button>
    </footer>
  );
};

export default FooterSection;