import React from "react";
import "./dashboard.css";
import comp from "./images/compostStage.png";
import cust from "./images/customer.png";
import logo from "./images/logo.png";
import moisture from "./images/moisture.png";
import ph from "./images/ph.png";
// import bg from "./images/plant-in-compos.png"
import temp from "./images/temperature.png";

function Dashboard() {
  return (
    <>
      <div>
        <header>
          <img src={logo} alt="logo" className="logo" />
          <nav>
            <ul class="nav_links">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Community</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </nav>
          <a className="cta" href="">
            <button>Login</button>
          </a>
        </header>
      </div>

      <div>
        <div className="days"></div>
        <div className="dayMar"></div>
        <div className="numDays">5</div>
        <div className="fullyDates">Days out of 60 days</div>

        
        <div className="readings">
        <div className="moisture">
            <div className="Icon">
              <img 
                className="moistImg"
                src={moisture}
                alt="moisture"            
              />
            </div>
            <div className="moisttxt">Moisture</div>
            <div className="presentage_1">50%</div>
          </div>

          <div className="pH">
            <div className="Icon">
              <img 
              className="phImg"
              src={ph} alt="pH"  />
            </div>
            <div className="pHtxt">pH Level</div>
            <div className="presentage_1">5.5</div>
          </div>

          <div className="temperature">
            <div className="Icon">
              <img
                className="tempImg"
                src={temp}
                alt="temperature"
                
              />
            </div>
            <div className="temptxt">Temperature</div>
            <div className="presentage_2">50 F</div>
          </div>

          <div className="comStage">
            <div className="Icon">
              <img
                className="comImg"
                src={comp}
                alt="compostStage"
               
              />
            </div>
            <div className="comtxt">Compost Stage</div>
            <div className="presentage_2">50%</div>
          </div>
        </div>

        

      </div>
    </>
  );
}

export default Dashboard;
