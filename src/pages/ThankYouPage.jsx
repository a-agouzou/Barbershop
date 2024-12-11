import React from "react";
import { useNavigate } from "react-router-dom";

const ThankYouPage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <main className="flex flex-col items-center justify-center mt-20">
        <h1 className="text-3xl font-bold text-[#FCA95D]">Thank You!</h1>
        <p className="mt-4 text-lg text-gray-700">
          Your appointment has been successfully reserved! We look forward to
          seeing you at our shop.
        </p>
        <p className="mt-2 text-lg text-gray-700">
          If you have any questions or need to make changes, feel free to
          contact us.
        </p>
        <button
          className="mt-6 bg-[#FCA95D] text-black py-2 px-6 rounded-lg hover:bg-white transition-all duration-300"
          onClick={() => navigate("/")}
        >
          Go Back to Home
        </button>
      </main>
    </div>
  );
};

export default ThankYouPage;
