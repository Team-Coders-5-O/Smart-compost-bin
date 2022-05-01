
import './App.css';
import { Routes, Route } from "react-router-dom"
import { Container, Row , Col } from 'react-bootstrap'
import Login from "./components/Login"
import Signup from "./components/Signup"
import PhoneSignup from "./components/Phonesignup"
import ProtectedRoute from "./components/ProtectedRoute";
import UserHome from "./components/UserHome";
import Home from './components/Home';
import Community from './components/AddQuestion';
import About from './components/About';
import Contact from './components/Contact'
import LoginType from './components/loginType';
import Reply from './components/Reply';
import ExpertReply from './components/ExpertReply';
import ExpertHome from './components/ExperHome';
import ExpertLogin from './components/ExpertLogin';
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
              <Route path='/expertreply' element= {<ExpertReply/>} />
              <Route path='/expertlogin' element= {<ExpertLogin/>} />
              <Route path='/experthome' element= {<ExpertHome/>} />
              <Route path='/reply' element= {<Reply/>} />

            </Routes>
          </UserAuthContextProvider>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
