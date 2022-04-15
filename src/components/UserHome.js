import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import Logo from "../IMAGES/logo.png";
import { Link } from "react-router-dom";

const UserHome = () => {
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
      
    </>
  );
};

export default UserHome; 