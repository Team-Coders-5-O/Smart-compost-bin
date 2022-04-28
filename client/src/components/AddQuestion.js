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

  

  const [Question, setQuestion] = useState([])
  console.log(Question)

  useEffect(
    () =>
      onSnapshot(collection(db, "questions"), (snapshot) =>
        setQuestion(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      ), []
  );

  const handleSubmit = async () => {

    const name = prompt("enter your name")
    const question = prompt("enter your question")
    // setQuestion(question)


    const collectionRef = collection(db, "questions")
    const payLoad = { user: name, question: question }
    await addDoc(collectionRef, payLoad)




  }
  const storeON = async () => {
    {localStorage.setItem('User', Question.id)}
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

        <div className="searchBox">
          <input type="text" id="uname" name="uname" placeholder="search question....." />
          <i>
            <MdSearch className="fa fa-search" aria-hidden="true" />
          </i>
        </div>
      </div>

      <div key={Question.id}>
        {Question.map((questions) => (

          <div>
            <div className="user" >
              <div className="image">
                <MdPerson className="image-icon" />
              </div>
              <div className="name"> {questions.user}</div>
            </div>

            <div className="comments">
              Question: {questions.question}
              <div className="buttons">
                <Link to="">
                  <div className="btn-like">
                    <MdThumbUp className="btn-like-icon" />
                    &nbsp;Like
                  </div>
                </Link>

                <Link to="/reply">
                  <button className="btn-like">
                    
                    <MdReply className="btn-like-icon" />
                    &nbsp;Reply
                  </button>
                </Link>
              </div>
            </div>
          </div>

        ))}

      </div>


      <button type="submit" name="submit" className="submit-question" onClick={handleSubmit}>
        Add a Question
      </button>

    </>
  );


















}

export default Ask;
