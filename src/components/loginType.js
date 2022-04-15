import { Link } from "react-router-dom";
import Logo from "../IMAGES/logo.png";
import "./loginType.css";
import "./Navbar.css";
import Expert from "../IMAGES/two-color-expert-icon-from-business-concept-vector-25734766.png";
import Customer from "../IMAGES/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png";

function LoginType() {
  return (
    // <div>
    //   <h1>This is the home page</h1>
    //   <Link to="about">Click to view our about page</Link>
    //   <Link to="contact">Click to view our contact page</Link>
    // </div>
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
        <Link class="cta" to="/logintype"><button>Login</button></Link>
    </header>
    
    

    <div className="type">
      <h1 className="typeHead">Login As</h1>
      <Link to="/login"><img src={Expert} className="expert" /></Link>
      <Link to="/login"><img src={Customer} className="customer" /></Link>
      <Link to="/login"><button className="expertbtn">Expert</button></Link>
      <Link to="/login"><button className="cusbtn">Customer</button></Link>

    
        
    </div>
    </div>
  );
}

export default LoginType;