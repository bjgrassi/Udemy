import { useState } from "react";

export default function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const date = new Date("jun 23 2024");
  date.setDate(date.getDate() + count);

  function handleCountDecrease() {
    setCount((c) => c - step);
  }

  function handleCountIncrease() {
    setCount((c) => c + step);
  }

  return (
    <div>
      <div>
        <input
          id="step"
          type="range"
          min="0"
          max="10"
          onChange={(e) => setStep(Number(e.target.value))}
          value={step}
        />
        <label htmlFor="step">{step}</label>
      </div>
      <div>
        <button onClick={handleCountDecrease}>-</button>
        <input
          id="count"
          type="number"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        ></input>
        <button onClick={handleCountIncrease}>+</button>
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
              ? `${count} from today is `
              : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
      {count !== 0 || step !== 1 ? (
        <button
          onClick={() => {
            setCount(0);
            setStep(1);
          }}
        >
          Reset
        </button>
      ) : null}
    </div>
  );
}
