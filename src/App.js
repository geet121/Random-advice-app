import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App(props) {
  const [advice, setAdvice] = useState("");

  useEffect(() => {
    fetchAdvice();
  }, []);

  const fetchAdvice = async () => {
    try {
      const apiResponse = await axios.get("https://api.adviceslip.com/advice");
      setAdvice(apiResponse.data.slip.advice);
      //   console.log(advice);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="app">
        <div className="card">
          <h1 className="heading">{advice}</h1>
          <button className="button" onClick={fetchAdvice}>
           Random Advice
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
