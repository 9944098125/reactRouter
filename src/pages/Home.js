import React, { useContext } from "react";
import messageContext from "./../context/messageContext";

const styles = {
  color: "yellow",
  fontSize: "60px",
  backgroundColor: "black",
  borderRadius: "15px",
  padding: "20px",
};

function Home() {
  return (
    <>
      <h1 style={styles}>IT IS THE HOME PAGE</h1>
      <h2 style={styles}>
        Message context in home page: {useContext(messageContext)}
      </h2>
    </>
  );
}
export default Home;
