import React from "react";
import './contactUs.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/community">Community</Link>
            </li>
            <li>
              <Link to="/aboutUs">About</Link>
            </li>
            <li>
              <Link to="/">Contact Us</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/community">
            <Community />
          </Route>
          <Route path="/aboutUs">
            <About />
          </Route>
          <Route path="/">
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function Community() {
  return <h2>Community</h2>;
}

function About() {
  return <h2>About </h2>;
}
function Contact() {
    return <h2>Contact </h2>;
}
<p>
<h1> Contact Us </h1>
<div class="info">
        <p><b>Group Name</b> : Coders 5.0</p>
        <p><b>Group No</b> : CS-18</p>
        <p><b>Email</b><a href="gg@gmail.com">: gg@gmail.com</a></p>
        <P><b>Contact No</b> : 0123456789</P>
</div>
</p>