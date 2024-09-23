import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center mt-24  w-full">
      <h1 className="text-5xl md:text-7xl lg:text-9xl text-black mb-4">
        404 Not Found
      </h1>
      <p className="text-sm text-black font-medium">
        Your visited psge not found.You may go to home page
      </p>
      <button
        className="bg-red-700 px-3 mt-14  py-2 text-white border border-green-200"
        onClick={() => navigate("/")}
      >
        Back to home page
      </button>
    </div>
  );
};

export default ErrorPage;
