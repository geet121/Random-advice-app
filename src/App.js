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
    console.log("Clicked");
  };

  return (
    <div>
      <div className="app">
        <div className="card">
          <header>Advice of the Day</header>
          <h1 className="heading">{advice}</h1>

          <div className="buttons">
            <div className="features">
              <ul>
                <li className="sound">
                  <div className="fas fa-volume-up"></div>
                </li>
                <li className="copy">
                  <i className="fas fa-copy"></i>
                </li>
                <li className="share">
                  <i className="fas fa-share"></i>
                </li>
              </ul>
              <button className="button" onClick={fetchAdvice}>
                Random Advice
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
