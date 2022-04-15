import React from "react";
import './aboutUs.css';
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
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/contactUs">Contact Us</Link>
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
          <Route path="/contactUs">
            <Contact />
          </Route>
          <Route path="/">
            <About />
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

<div class="team-section">
<h1>Our Team</h1>
<span class="border"></span>
<div class = "ps">
    <a href="#p1"><img src="" alt="student 1" id="p1img"/></a>
    <a href="#p2"><img src="" alt="student 2" id="p2img" /></a>
    <a href="#p3"><img src="" alt="student 3" id="p3img" /></a>
    <a href="#p4"><img src="" alt="student 4" id="p4img" /></a>
    <a href="#p5"><img src="" alt="student 5" id="p5img" /></a>
</div>

<div class = "section" id = "p1">
    <span class = "name">Gavinu Jayawardene</span>
</div>

<div class = "section" id = "p2">
    <span class = "name">Vinuka Wimalananda</span>				
</div>

<div class = "section" id = "p3">
    <span class = "name">Dewni Jayawardene</span>				
</div>

<div class = "section" id = "p4">
    <span class = "name">Mathushan Thirugnanasambantham</span>
</div>

<div class = "section" id = "p5">
    <span class = "name">Janarththan Vyravanathan</span>
</div>			
</div>	