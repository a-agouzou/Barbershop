import LocationCard from "./LocationCard";
import ContactCard from "./ContactCard";

const ServicesSection = () => {
  return (
    <section className="bg-[#49403B] text-white py-16 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
      <div className="flex flex-col items-start space-y-6 w-full md:w-1/2 max-w-xl">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#FCA95D]">
          SERVICE BEYOND EXPECTATION
        </h2>
        <p className="text-white/80 text-lg leading-relaxed">
          Our experienced barbers are dedicated to providing exceptional grooming services.
        </p>
        <button className="bg-[#FCA95D] text-black py-3 px-6 rounded-lg">
          Submit Request
        </button>
      </div>
      <div className="w-full md:w-1/2 grid md:grid-cols-1 gap-8 max-w-xl">
        <LocationCard />
         <ContactCard />
      </div>
    </section>
  );
};

export default ServicesSection;
