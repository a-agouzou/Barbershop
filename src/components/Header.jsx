const Header = () => {
  return (
    <header className="w-screen fixed top-0 backdrop-blur-sm bg-black/10 z-50">
      <div className="flex justify-between items-center md:px-12 max-w-screen-2xl w-full py-4 mx-auto">
      <div className="text-white font-bold text-xl md:text-2xl">
        <span className="text-[#FCA95D]">Barber</span>Shop
      </div>

      <nav className="hidden md:block border border-white/20 rounded-md p-3">
        <ul className="flex justify-around text-white">
          <li className="py-1 px-6 hover:text-black hover:bg-white transition-all duration-300 rounded-md cursor-pointer">
            Home
          </li>
          <li className="py-1 px-6 hover:text-black hover:bg-white transition-all duration-300 rounded-md cursor-pointer">
            About
          </li>
          <li className="py-1 px-6 hover:text-black hover:bg-white transition-all duration-300 rounded-md cursor-pointer">
            Services
          </li>
        </ul>
      </nav>

      <button className="hidden md:block bg-[#FCA95D] text-black py-2 px-6 rounded-lg hover:bg-white transition-all duration-300">
        Contact Us
      </button>

      <button className="md:hidden text-white">
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
