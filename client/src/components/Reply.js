import React, { useState, useEffect, Component } from "react";
import "./AddQuestion.css";
import { Link } from "react-router-dom";
import Logo from "../IMAGES/logo.png";
import logo from "../IMAGES/logo.png";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import { MdThumbUp, MdReply, MdPerson, MdSearch } from "react-icons/md";
import { db } from "../firebase";
import { onSnapshot, collection, snapshotEqual, doc, addDoc } from "firebase/firestore";


function Ask() {

  
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

  
  

  return (
    <>
      <div>
        <header>
          <Link to="/"><img src={Logo} className="LogoImg" /></Link>
          <nav>
            <ul class="nav_links">
              <li><Link to="/userhome">Home</Link></li>
              <li><Link to="/community">Community</Link></li>
            </ul>
          </nav>
          <Link class="cta" to="/logintype"><button onClick={handleLogout}>Logout</button></Link>
        </header>
      </div>

      <div>
            

            <div className="comments">
              
            </div>
          </div>


    </>
  );


















  }

export default Ask;
