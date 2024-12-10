import LocationCard from "./LocationCard";
import ContactCard from "./ContactCard";
import { FaRegClock } from "react-icons/fa";
import { GiScissors } from "react-icons/gi";
import { AiOutlineTrophy } from "react-icons/ai";

const ServiceFeature = ({ icon: Icon, title, description }) => (
  <div className="flex items-start space-x-4 p-4 bg-black/10 rounded-lg hover:bg-black/20 transition-colors duration-300">
    <Icon className="text-[#FCA95D] text-2xl flex-shrink-0 mt-1" />
    <div>
      <h3 className="text-lg font-semibold text-[#FCA95D] mb-2">{title}</h3>
      <p className="text-white/80 text-sm leading-relaxed">{description}</p>
    </div>
  </div>
);

const ServicesSection = () => {
  const features = [
    {
      icon: GiScissors,
      title: "Expert Grooming",
      description: "Professional barbers with years of experience in modern and classic styles."
    },
    {
      icon: FaRegClock,
      title: "Flexible Hours",
      description: "Convenient scheduling to fit your busy lifestyle, including early and late appointments."
    },
    {
      icon: AiOutlineTrophy,
      title: "Premium Service",
      description: "Top-quality products and attention to detail for the perfect grooming experience."
    }
  ];

  return (
    <section className="bg-[#49403B] w-screen overflow-hidden" >
      <div className="mx-auto px-6 py-20 lg:py-28 w-screen max-w-screen-2xl">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-16">
          <div className="flex flex-col items-start space-y-8 w-full lg:w-1/2">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#FCA95D] leading-tight">
                SERVICE BEYOND
                <br />
                EXPECTATION
              </h2>
              <p className="text-white/80 text-lg leading-relaxed max-w-xl">
                Our experienced barbers are dedicated to providing exceptional grooming services
                that exceed your expectations every time you visit.
              </p>
            </div>

            <div className="grid gap-6 w-full">
              {features.map((feature) => (
                <ServiceFeature
                  key={feature.title}
                  {...feature}
                />
              ))}
            </div>

            <button
              className="bg-[#FCA95D] text-black py-4 px-8 rounded-lg font-semibold 
                transition-all duration-300 hover:bg-[#fdb87a] hover:shadow-lg
                focus:outline-none focus:ring-2 focus:ring-[#FCA95D] focus:ring-offset-2 focus:ring-offset-[#49403B]"
            >
              Submit Request
            </button>
          </div>

          <div className="w-full lg:w-1/2 space-y-8">
            <div className="transform hover:-translate-y-2 transition-transform duration-300">
              <LocationCard />
            </div>
            
            <div className="transform hover:-translate-y-2 transition-transform duration-300">
              <ContactCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;