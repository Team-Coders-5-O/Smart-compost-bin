import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";
import {db} from '../firebase'
import {collection, addDoc, Timestamp} from 'firebase/firestore'
import Logo from "../IMAGES/logo.png";
import './Login.css'

const Signup = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const { signUp } = useUserAuth();
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password, name);
      await addDoc(collection(db, 'users'), {
        name: name,
        email: email,
        created: Timestamp.now()
      })
      
      navigate("/login"); 
    } catch (err) {
      setError(err.message);
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
    </header>
    </div>
      
        <h2 className="mb-3">Signup</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 input1" controlId="formBasicName">
            <Form.Control
              type="name"
              placeholder="Username"
              name="username"
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3 input2" controlId="formBasicEmail">
            <Form.Control
              type="email"
              name="email"              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3 input2" controlId="formBasicPassword">
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit" className="btnsign">
              Sign up
            </Button>
          </div>
        </Form>
      
      <div className="p-4 box mt-3 text-center dntacc">
        Already have an account? <Link to="/login" className="dntacc-link">Log In</Link>
      </div>
    </>
  );
};

export default Signup;