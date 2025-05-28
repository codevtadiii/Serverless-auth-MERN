import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Need Help? </h1>
      <br>
      </br>
      
      <button
        onClick={() => navigate("/request-form")}
        className="button"
      >
        Raise a Request
      </button>
    </div>
  );
}

export default Home;
