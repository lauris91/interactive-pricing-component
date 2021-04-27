import React from "react";
import SliderComponent from "./SliderComponent";

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <div className="header">
          <div className="title">Simple, traffic-based pricing</div>
          <div className="description">
            Sign-up for our 30-day trial. No credit card required.
          </div>
        </div>
        <div className="main-box">
          <div className="section">
            <SliderComponent />
          </div>
          <div className="section">
            <div className="section-block">
              <ul>
                <li>Unlimited websites</li>
                <li>100% data ownership</li>
                <li>Email reports</li>
              </ul>
            </div>
            <div className="section-block">
              <button>Start my trial</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
