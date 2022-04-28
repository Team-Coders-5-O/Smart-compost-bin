import React, { useState, useEffect, Component } from "react";
import "./AddQuestion.css";
import { Link } from "react-router-dom";
import Logo from "../IMAGES/logo.png";
import logo from "../IMAGES/logo.png";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import { MdThumbUp, MdReply, MdPerson, MdSearch } from "react-icons/md";

// var namesList = [];
// var descriptionList = [];


const SetData = (props) => {
  const { name, description } = props;

  return (
    <>
      <div className="user">
        <div className="image">
          <MdPerson className="image-icon" />
        </div>
        <div className="name"> {name}</div>
      </div>

      <div className="comments">
        Question: {description}
        <div className="buttons">
          <div className="btn-like">
            <MdThumbUp className="btn-like-icon" />
            &nbsp;Like
          </div>
          <button className="btn-like">
            <MdReply className="btn-like-icon" />
            &nbsp;Reply
          </button>
        </div>
      </div>

      <div className="reply-div">
        <form>
          <input className="reply-form" placeholder="Type your reply here"></input>
          <button type="submit" name="submit" className="btn-submit-reply">
            submit
          </button>
        </form>
      </div>
    </>
  );
};

function Ask() {

  const onClickReply = () => {
    
  }
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
  const [nameList, setNameList] = useState([]);
  const [descriptionList, setDescriptionList] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    var name = event.target[0].value;
    var description = event.target[1].value;
    if (name.length > 0 && description.length > 0) {
      console.log(name);
      console.log(description);

      setNameList((nameList) => {
        return [...nameList, name];
      });

      setDescriptionList((descriptionList) => {
        return [...descriptionList, description];
      });

      event.target.reset();
    } else {
      alert("Fields Can't be Empty!");
    }
  };

  return (
    <>
      <div>
      <header>
          <Link to="/"><img src={Logo} className = "LogoImg"/></Link>
          <nav>
            <ul class="nav_links">
              <li><Link to="/userhome">Home</Link></li>
              <li><Link to="/community">Community</Link></li>
            </ul>
          </nav>
          <Link class="cta" to="/logintype"><button onClick={handleLogout}>Logout</button></Link>
        </header>

        <div className="searchBox">
        <input type="text" id="uname" name="uname" placeholder="search question....."/>
        <i>
        <MdSearch className="fa fa-search" aria-hidden="true"/>     
        </i>
        </div>
        
        
        <div className="notification">
          {nameList.map((item, i) => {
            return (
              <SetData name={item} description={descriptionList[i]} key={i} />
            );
          })}
          
        </div>
        <form onSubmit={handleSubmit}>
          <input className="inputName" name="name" placeholder="Name"></input>
          <input
            className="inputQuestion"
            placeholder="Type your question here"
          ></input>
          <br />
          <br />
          <button type="submit" name="submit" className="submit-question">
            submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Ask;
