import React from "react";
import "./confirmation.css";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";

function Confirmation(props) {

  const user=props.booking;  
  return (
    <div>
      <h1 id="heading">Your Booking has been confirmed</h1>
      <div class="confirmation">
        <div class="top">
          <div class="logo">
        // put company logo here
            {/* <img src= /> */}
          </div>
          <div class="date">{user.date}</div>
        </div>
        <div class="bottom">
          <p>Name : {user.name}</p>
          <p>Contact Number : {user.number}</p>
          <p>Email : {user.email}</p>
          <p>Date : {user.date}</p>
          <p>Time : {user.time}</p>
          <p align="right">
            <CheckCircleOutlineIcon fontSize="large" />
          </p>
        </div>
      </div>
    </div>
  );
}
export default Confirmation;
