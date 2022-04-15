
import './App.css';
import { Routes, Route } from "react-router-dom"
import { Container, Row , Col } from 'react-bootstrap'
import Login from "./components/Login"
import Signup from "./components/Signup"
import PhoneSignup from "./components/Phonesignup"
import ProtectedRoute from "./components/ProtectedRoute";
import UserHome from "./components/UserHome";
import Home from './components/Home';
import Community from './components/Community';
import About from './components/About';
import Contact from './components/Contact'
import LoginType from './components/loginType';
import { UserAuthContextProvider } from './context/UserAuthContext';


function App() {
  return (
    <Container>
      <Row>
        <Col>
          <UserAuthContextProvider>
            <Routes>
            <Route
                path="/userhome"
                element={
                  <ProtectedRoute>
                    <UserHome />
                  </ProtectedRoute>
                }
              />
              <Route path='/' element= {<Home />} />
              <Route path='/login' element= {<Login />} />
              <Route path='/about' element= {<About />} />
              <Route path='/contact' element= {<Contact />} />
              <Route path='/signup' element= {<Signup />} />
              <Route path='/phonesignup' element= {<PhoneSignup />} />
              <Route path='/community' element= {<Community />} />
              <Route path='/logintype' element= {<LoginType />} />

            </Routes>
          </UserAuthContextProvider>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
