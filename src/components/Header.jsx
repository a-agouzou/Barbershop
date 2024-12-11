import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="w-screen fixed top-0 backdrop-blur-sm bg-black z-50 px-4">
      {isOpen && (
        <nav className="flex flex-col items-center justify-center h-screen bg-black/80 text-white">
          <button
            className="absolute top-4 right-4 text-white"
            onClick={() => setIsOpen(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <ul className="flex flex-col gap-4">
            <Link to="/">
              <li onClick={() => setIsOpen(false)}>Home</li>
            </Link>
            <Link to="/about">
              <li onClick={() => setIsOpen(false)}>About</li>
            </Link>
            <Link to="/services">
              <li onClick={() => setIsOpen(false)}>Services</li>
            </Link>
            <button
              className="bg-[#FCA95D] text-black py-2 px-6 rounded-lg hover:bg-white hover:text-black transition-all duration-300"
              onClick={() => {
                navigate("contact-us");
                setIsOpen(false);
              }}
            >
              Contact Us
            </button>
          </ul>
        </nav>
      )}

      <div className="flex justify-between items-center md:px-12 max-w-screen-2xl w-full py-4 mx-auto z-50">
        <div
          className="text-white font-bold text-xl md:text-2xl cursor-pointer"
          onClick={() => {
            navigate("/");
            console.log("Header");
          }}
        >
          <span className="text-[#FCA95D]">Barber</span>Shop
        </div>

        <nav className="hidden md:block border border-white/20 rounded-md p-3">
          <ul className="flex justify-around text-white">
            <Link to="/">
              <li className="py-1 px-6 hover:text-black hover:bg-white transition-all duration-300 rounded-md cursor-pointer">
                Home
              </li>
            </Link>
            <Link to="/about">
              <li className="py-1 px-6 hover:text-black hover:bg-white transition-all duration-300 rounded-md cursor-pointer">
                About
              </li>
            </Link>
            <Link to="/services">
              <li className="py-1 px-6 hover:text-black hover:bg-white transition-all duration-300 rounded-md cursor-pointer">
                Services
              </li>
            </Link>
          </ul>
        </nav>

        <button
          className="hidden md:block bg-[#FCA95D] text-black py-2 px-6 rounded-lg hover:bg-white transition-all duration-300"
          onClick={() => navigate("contact-us")}
        >
          Contact Us
        </button>

        <button className="md:hidden text-white" onClick={() => setIsOpen(true)}>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
