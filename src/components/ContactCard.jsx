import { FaPhoneVolume } from "react-icons/fa";


const ContactCard = () => {
    return (
        <div
            className=" rounded-xl p-6 flex items-center space-x-6 transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <div className="bg-white text-[#49403B] p-4 rounded-lg">
              <FaPhoneVolume className="text-5xl" />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#FCA95D]">
                Contact
              </h3>
              <p className="text-white/80 mt-2">+123 456 7890</p>
            </div>
          </div>
    )
}

export default ContactCard

