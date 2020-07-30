import React from "react";
import "./styles.css";
import ReactDOM from "react-dom";

function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Chak',
  lastName: 'Tsz Kiu',
};


const element = (
  <div>
    <div>Hello, {formatName(user)}!</div>
    <div>Good to see you!</div>
    <div>{getGreeting(user)}</div>
  </div>
);

ReactDOM.render(
  element, 
  document.getElementById("root")
);