import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import "./dashboard.css";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import Logo from "../IMAGES/logo.png";
import { Link } from "react-router-dom";
import comp from "../IMAGES/compostStage.png";
import cust from "../IMAGES/customer.png";
import logo from "../IMAGES/logo.png";
import moisture from "../IMAGES/moisture.png";
import ph from "../IMAGES/ph.png";
// import bg from "./images/plant-in-compos.png"
import temp from "../IMAGES/temperature.png";





const UserHome = () => {
  const [data, setdata] = useState([{}])
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/login");
    } catch (error) {
      console.log(error.message);
    }
  };


useEffect (() => {
  fetch("/dashboard").then(
    res => res.json()
  ).then(
    data=> {
      setdata(data)
      console.log(data)
    }
  )
}, [])



  return (
    <>
      <div>
        <header>
          <Link to="/"><img src={Logo} /></Link>
          <nav>
            <ul class="nav_links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/community">Community</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </nav>
          <Link class="cta" to="/logintype"><button onClick={handleLogout}>Logout</button></Link>
        </header>
      </div>
      <div className="p-4 box mt-3 text-center">
        Hello Welcome <br />
        {user && user.email}
      </div>

      <div className="dashboard">
        <div className="days"></div>
        <div className="dayMar"></div>
        <div className="numDays">{data.days}</div>
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
            <div className="presentage_1">{data.moisture}</div>
          </div>

          <div className="pH">
            <div className="Icon">
              <img
                className="phImg"
                src={ph} alt="pH" />
            </div>
            <div className="pHtxt">pH Level</div>
            <div className="presentage_1">50</div>
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
            <div className="presentage_2">{data.temp}F</div>
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
            <div className="presentage_2">{data.stage}</div>
          </div>



        </div>


        <button>Refresh</button>



      </div>

    </>
  );
};

export default UserHome; 