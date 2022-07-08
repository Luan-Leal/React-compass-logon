import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

function CountDown() {
  const nav = useNavigate();
  const [counter, setCounter] = React.useState(600);

  React.useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);
  if (counter === 0) {
    nav("/");
  }

  return (
    <div>
      <span className="timer">{counter}</span>
      <p className="seconds">seconds</p>
    </div>
  );
}

export default CountDown;
