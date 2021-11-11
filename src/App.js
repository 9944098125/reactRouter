import React, { useState } from "react";
import { Route, NavLink, Redirect, Prompt } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import messageContext from "./context/messageContext";

import "./App.css";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [age, setAge] = useState(null);
  const [message, setMessage] = useState("");

  function onClickHandle() {
    setLoggedIn(!loggedIn);
    console.log(loggedIn);
  }
  function eventHandler(event) {
    setAge(event.target.value);
  }

  /* message context is given as props in the about page,
  and the value is provided here as attribute */
  return (
    <messageContext.Provider value={[message, setMessage]}>
      <div className="App">
        <header className="App-header">
          <ul className="ul-style">
            <li className="li-style">
              <NavLink to="/" className="App-link">
                Home
              </NavLink>
            </li>
            <li className="li-style">
              <NavLink to="/about" className="App-link">
                About
              </NavLink>
            </li>
            <li className="li-style">
              <NavLink to="/user/john" className="App-link">
                User
              </NavLink>
            </li>
          </ul>
          <Prompt /* created a prompt so that when logged in and the age is not entered,
             then a prompt comes with the message are you sure? and if we select cancel it moves to another route
             and if ok is selected, then it stays, waiting us to enter the age */
            when={loggedIn && !age}
            message={(location) => {
              return location.pathname.startsWith("/user")
                ? true
                : "Are You Sure ?";
            }}
          />
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route
            exact
            path="/user/:username"
            render={({ match }) => {
              return loggedIn ? (
                <>
                  <h2>Age: {age}</h2>
                  <input type="text" value={age} onChange={eventHandler} />
                  <h1 className="head"> Hello MR.{match.params.username} </h1>
                </>
              ) : (
                /* we can use even render method to return jsx to the web-page */
                <Redirect to="/" />
              );
            }}
          />
          {loggedIn.toString()}
          <button className="login-butt" onClick={onClickHandle}>
            Login
          </button>
        </header>
      </div>
    </messageContext.Provider>
  );
}

export default App;
