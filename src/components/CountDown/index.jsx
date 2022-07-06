import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

function CountDown() {
  return (
    <div>
      <span className="timer">600</span>
      <p className="seconds">seconds</p>
    </div>
  );
}

export default CountDown;
