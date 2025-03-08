import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">Welcome to the Blood Donation App</h1>
      <button
        onClick={() => navigate("/request-form")}
        className="px-6 py-3 bg-blue-500 text-white font-bold rounded-md shadow-md hover:bg-blue-700"
      >
        Raise a Request
      </button>
    </div>
  );
}

export default Home;
