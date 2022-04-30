import { Link } from "react-router-dom";
import Logo from "../IMAGES/logo.png";
import "./Home.css";
import "./Navbar.css";

function About() {
  return (
    // <div>
    //   <h1>This is the home page</h1>
    //   <Link to="about">Click to view our about page</Link>
    //   <Link to="contact">Click to view our contact page</Link>
    // </div>
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

    <div className="AboutUs">
      
          <p>Hi There,</p>
          <p>Make yorr own smart compost bin</p>
          <p>Join with us......</p>
          </div>
    </div>
  )
}

export default About;