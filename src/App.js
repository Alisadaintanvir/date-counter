import { useState } from "react";
import "./App.css";

export default function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + count);
  const newDate = date.toDateString();

  function handleReset() {
    setStep(1);
    setCount(0);
  }

  return (
    <div className="container">
      <div className="component">
        <input
          type="range"
          min={1}
          max={10}
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <h3>{step}</h3>
      </div>

      <div>
        <button
          className="btn"
          onClick={() => setCount((currCount) => currCount - step)}
        >
          -
        </button>
        <input
          type="text"
          value={count}
          placeholder="0"
          onChange={(e) => setCount(Number(e.target.value))}
        />
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

      {step !== 1 || count !== 0 ? (
        <button onClick={handleReset}>Reset</button>
      ) : null}
    </div>
  );
}
