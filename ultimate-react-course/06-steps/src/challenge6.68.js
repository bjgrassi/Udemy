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

  // The instructor didn't create functions. He just put the logic inside the onClick.
  function handleStepDecrease() {
    setStep((s) => s - 1);
  }

  function handleStepIncrease() {
    setStep((s) => s + 1);
  }

  function handleCountDecrease() {
    setCount((c) => c - step);
  }

  function handleCountIncrease() {
    setCount((c) => c + step);
  }

  return (
    <div>
      <div>
        <button onClick={handleStepDecrease}>-</button>
        Step: {step}
        <button onClick={handleStepIncrease}>+</button>
      </div>
      <div>
        <button onClick={handleCountDecrease}>-</button>
        Count: {count}
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
    </div>
  );
}
