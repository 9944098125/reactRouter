import React, { useContext } from "react";
import messageContext from "./../context/messageContext";
import Outer from "./../components/outer";

const styles = {
  color: "yellow",
  fontSize: "60px",
  backgroundColor: "black",
  borderRadius: "15px",
  padding: "20px",
};

/* we cannot use this context in callback functions, 
so we have to create a separate component */
function About() {
  return (
    <>
      <h1 style={styles}>IT IS THE ABOUT PAGE</h1>
      <h2 style={styles}>
        Message context in about page: {useContext(messageContext)}
      </h2>
      <h3 style={styles}>
        <Outer />
      </h3>
    </>
  );
}
export default About;
