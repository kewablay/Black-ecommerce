/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

function Button({ size, type, text, onClick, link }) {
  return (
    // <Link to={link} className={`${type} ${size}`} onClick={onClick}>
    //   {text}
    // </Link>
    <p>{text}</p>
  );
}

export default Button;
