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


function Reply() {


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

  const questionId = localStorage.getItem("QuestionId");
  console.log(questionId)


  const [Reply, setReply] = useState([])
  console.log(Reply)

  useEffect(
    () =>
      onSnapshot(collection(db, questionId), (snapshot) =>
        setReply(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      ), []
  );



  const handleSubmit = async () => {

    const name = prompt("enter your name")
    const reply = prompt("enter your reply")

    // setQuestion(question)


    const collectionRef = collection(db, questionId)
    const payLoad = { reply: reply, name: name }
    await addDoc(collectionRef, payLoad)




  }




  return (
    <>
      <div>
        <header>
          <Link to="/"><img src={Logo} className="LogoImg" /></Link>
          <nav>
            <ul class="nav_links">
              <li><Link to="/experthome">Community</Link></li>
            </ul>
          </nav>
          <Link class="cta" to="/logintype"><button onClick={handleLogout}>Logout</button></Link>
        </header>
      </div>



      <div key={Reply.id}>
        {Reply.map((replys) => (

          <div>
            <div className="user" >
              <div className="image">
                <MdPerson className="image-icon" />
              </div>
              <div className="name"> {replys.name}</div>
            </div>

            <div className="comments">
              reply: {replys.reply}<br/>
              <br/>
            </div>
          </div>

        ))}

      </div>

      <div>



        <button onClick={handleSubmit}>Add reply</button>
      </div>



    </>
  );


















}

export default Reply;
