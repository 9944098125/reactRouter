import React, { useContext } from "react";
import messageContext from "./../context/messageContext";

export default function Inner() {
  const [message, setMessage] = useContext(messageContext);
  return (
    <>
      <h1>INNER:{useContext(messageContext)}</h1>
      <button onClick={() => setMessage(Math.random().toString())}>
        Change Message
      </button>
    </>
  );
}
