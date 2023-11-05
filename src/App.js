import { useState } from "react";
import "./App.css";

export default function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + count);
  const newDate = date.toDateString();

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
          onClick={() => setCount((currCount) => currCount - step)}
        >
          -
        </button>
        <h3>Count: {count}</h3>
        <button
          className="btn"
          onClick={() => setCount((currCount) => currCount + step)}
        >
          +
        </button>
      </div>
      <h3 className="result">
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{newDate}</span>
      </h3>
    </div>
  );
}
