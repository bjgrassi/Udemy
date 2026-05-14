import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <div>
      <Steps />
      <Steps />
    </div>
  );
}

function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  // const [test, setTest] = useState({ name: "Jonas" });

  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
  }

  function handleNext() {
    if (step < 3) {
      setStep((s) => s + 1);
      // setStep((s) => s + 1); // Just to ilustrate that using callback will update the state twice. The step will be 3, not 2.

      // BAD PRACTICE. The step won't update twice. Use callback
      // setStep(step + 1);
      // setStep(step + 1);

      // Use callback
      // setStep((s) => s + 1);
      // setStep((s) => s + 1);
    }
  }

  // BAD PRACTICE
  // test.name = "Fred";
  // setTest({ name: "Fred" });

  return (
    <div>
      {/* <button className="close" onClick={() => setIsOpen(!isOpen)}> */}
      {/* USE CALLBACK */}
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <p className="message">{messages[step - 1]}</p>

          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
