import { useState } from 'react';
import { SlArrowLeftCircle, SlArrowRightCircle } from "react-icons/sl";

const testimonials = [
  {
    id: 1,
    text: "I've been coming here for over a year now, and I wouldn't trust anyone else with my hair. The attention to detail and friendly atmosphere make every visit a pleasure. My fade is always on point, and I leave feeling confident every time!",
    author: "John Doe"
  },
  {
    id: 2,
    text: "The level of professionalism and skill here is unmatched. Every haircut is consistent, and the barbers take their time to ensure everything is perfect.",
    author: "Mike Smith"
  },
  {
    id: 3,
    text: "Best barbershop in town! The atmosphere is great, and the attention to detail is impressive. I always leave looking and feeling great.",
    author: "David Wilson"
  }
];

const PricesSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const services = [
    { name: "Haircut", price: 25 },
    { name: "Beard Trim", price: 15 },
    { name: "Shave", price: 20 },
    { name: "Haircut + Shave", price: 35 },
    { name: "Kids Haircut", price: 20 },
  ];

  return (
    <section className="bg-[#ECE1CD] w-screen overflow-hidden">
      <div className="py-16 px-6 md:px-12 flex flex-col md:flex-row items-start justify-between gap-12 w-screen max-w-screen-2xl border mx-auto">
        <div className="flex flex-col items-center justify-center w-full md:w-1/2">
          <div className="bg-[#FCA95D] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="space-y-6">
              <p className="text-white/90 text-lg leading-relaxed italic">
                "{testimonials[currentTestimonial].text}"
              </p>
              <div className="flex items-center justify-between w-full pt-4 border-t border-white/20">
                <p className="text-white font-bold">
                  - {testimonials[currentTestimonial].author}
                </p>
                <div className="flex gap-4">
                  <button 
                    onClick={prevTestimonial}
                    className="hover:scale-110 transition-transform duration-200"
                    aria-label="Previous testimonial"
                  >
                    <SlArrowLeftCircle className="text-white text-2xl" />
                  </button>
                  <button 
                    onClick={nextTestimonial}
                    className="hover:scale-110 transition-transform duration-200"
                    aria-label="Next testimonial"
                  >
                    <SlArrowRightCircle className="text-white text-2xl" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 space-y-8">
          <h3 className="text-3xl lg:text-4xl font-bold text-[#FCA95D] relative">
            OUR PRICES
            <span className="absolute bottom-0 left-0 w-24 h-1 bg-[#FCA95D] rounded-full"></span>
          </h3>
          <div className="flex flex-col items-start space-y-6 text-black">
            {services.map((service, index) => (
              <div 
                key={service.name}
                className="flex justify-between w-full py-3 border-b border-black/10 hover:border-[#FCA95D] transition-colors duration-300"
              >
                <p className="text-lg font-medium">{service.name}</p>
                <p className="text-lg font-bold text-[#FCA95D]">${service.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricesSection;