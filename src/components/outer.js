import React, { useContext } from "react";
import Inner from "./inner";
import messageContext from "./../context/messageContext";

export default function Outer() {
  return (
    <>
      <h1>OUTER:{useContext(messageContext)[0]}</h1>
      <Inner />
    </>
  );
}
