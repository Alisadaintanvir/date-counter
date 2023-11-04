import { useState } from "react";
import "./App.css";

export default function App() {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <div className="container">
      <div className="component">
        <button
          className="btn"
          onClick={() => setStep((currStep) => currStep - 1)}
        >
          -
        </button>
        <h3>Steps: {step}</h3>
        <button
          className="btn"
          onClick={() => setStep((currStep) => currStep + 1)}
        >
          +
        </button>
      </div>

      <div className="component">
        <button
          className="btn"
          onClick={() => setCount((currCount) => currCount - 1)}
        >
          -
        </button>
        <h3>Count: {count}</h3>
        <button
          className="btn"
          onClick={() => setCount((currCount) => currCount + 1)}
        >
          +
        </button>
      </div>

      <h3 className="result">Today is {date.toLocaleDateString()}</h3>
    </div>
  );
}
