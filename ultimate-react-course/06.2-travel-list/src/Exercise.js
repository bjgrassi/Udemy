import { useState } from "react";
import "./exercise.css";

export default function App() {
  return (
    <div className="App">
      <FlashCards />
    </div>
  );
}

const questions = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook",
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element",
  },
];

function FlashCards() {
  const [selectedId, setSelectedId] = useState(null);

  // function handleClick(id) {
  //   setSelectedId(id !== selectedId ? q.id : null);
  // }

  return (
    <div className="flashcards">
      {questions.map((q) => (
        <div
          key={q.id}
          className={q.id === selectedId ? "selected" : ""}
          //When passing an argument, we need to wrap the function in an anonymous function, otherwise it will be called immediately when the component renders, instead of when the button is clicked.
          onClick={() => setSelectedId(q.id !== selectedId ? q.id : null)}
          // onClick={() => handleClick(q.id)}
        >
          <p>{q.id === selectedId ? q.answer : q.question}</p>
        </div>
      ))}
    </div>
  );
}
