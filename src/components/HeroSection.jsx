import AppointmentForm from "./AppointmentForm";
import Header from "./Header";

const HeroSection = () => {
  return (
    <div
      className="bg-cover bg-center min-h-screen w-full relative overflow-hidden"
      style={{ backgroundImage: "url(public/assets/images/Hero.jpg)" }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <Header />

      <main className="flex flex-col items-start justify-evenly h-screen px-4 md:px-12 pt-20">
        <AppointmentForm />

        <div className=" relative flex flex-col md:flex-row justify-between  items-center md:items-start w-full gap-8 mb-12">
          <p className="text-white/80 text-base md:text-lg max-w-md order-2 md:order-1">
            Our mission is to provide exceptional grooming services in a relaxed
            and friendly environment. Whether you're here for a classic haircut,
            a modern fade, or a clean shave, our experienced barbers will help
            you achieve the look you desire.
          </p>
          <h1 className="text-3xl md:text-7xl font-bold text-white leading-tight order-1 md:order-2 md:text-right">
            WHERE TRADITION
            <br />
            MEETS MODERN STYLE
          </h1>
        </div>
      </main>
    </div>
  );
};

export default HeroSection;
