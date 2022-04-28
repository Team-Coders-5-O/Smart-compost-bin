import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import GoogleButton from "react-google-button";
import { useUserAuth } from "../context/UserAuthContext";
import Logo from "../IMAGES/logo.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css'
import Axios from 'axios';



const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();

  
<<<<<<< HEAD

  const UserLogin = () => {
    localStorage.setItem('UserEmail', email);
    Axios.post("http://localhost:3001/api/insert", {
      Email: email, 
      Password: password,
    }).then(()=> {
      alert("successful insert")
    })
  }; 
=======
>>>>>>> main

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/userhome");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/userhome");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
    <div>
    <header>
        <Link to="/"><img src={Logo} className = "LogoImg" /></Link>
        <nav>
            <ul class="nav_links">
                <li><Link to="/">Home</Link></li> 
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
            </ul>
        </nav>
        <Link class="cta" to="/logintype"><button>Login</button></Link>
        <Link class="cta2" to="/Signup">
          <button>Signup</button>
        </Link>
    </header>
    </div>
      
        <div className="mb-3">Login</div>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3 input1" controlId="formBasicEmail">
            <Form.Control
              type="email"
              className="Email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3 input2" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              className="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit" className="btnlog">
              Log In
            </Button>
          </div>
        </Form>
        <hr />
        <div className="googlebtn">
          <GoogleButton
            className="g-btn"
            type="dark"
            onClick={handleGoogleSignIn}
          />
        </div>
        <Link to="/phonesignup">
          <div className="d-grid gap-2 mt-3">
            <Button variant="success" type="Submit" className="phonebtn">
              Sign in with Phone
            </Button>
          </div>
        </Link>
      
      <div className="p-4 box mt-3 text-center dntacc">
        Don't have an account? <Link to="/signup" className="dntacc-link">Sign up</Link>
      </div>
    </>
  );
};

export default Login;
