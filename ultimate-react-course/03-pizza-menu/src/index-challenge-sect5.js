import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

const data = {
  image:
    "https://ichef.bbci.co.uk/news/1024/cpsprodpb/197d/live/62057290-fa95-11ef-a24f-f97f794e18ea.jpg.webp",
  intro: "This is me, I'm super awesome!",
  name: "Lady Gaga",
  skills: [
    {
      id: 1,
      name: "JavaScript",
      level: "Advanced",
      background: "blue",
    },
    {
      id: 2,
      name: "Jest",
      level: "Intermediate",
      background: "pink",
    },
    {
      id: 3,
      name: "Svelte",
      level: "Beginner",
      background: "green",
    },
  ],
};

function App() {
  return (
    <div className="card">
      <Avatar image={data.image} name={data.name} />
      <div className="data">
        <Intro name={data.name} intro={data.intro} />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList skills={data.skills} />
      </div>
    </div>
  );
}

function Avatar({ image, name }) {
  return <img className="avatar" src={image} alt={name} />;
}

function Intro({ name, intro }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{intro}</p>
    </div>
  );
}

function SkillList({ skills }) {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skill={skill} key={skill.id} />
      ))}
    </div>
  );
}

function Skill({ skill }) {
  // const skillLevel =
  // skill.level.toLowerCase() === "advanced"
  //   ? ":D"
  //   : skill.level.toLowerCase() === "intermediate"
  //     ? ":|"
  //     : ":(";
  return (
    <div className="skill" style={{ backgroundColor: skill.background }}>
      <p>
        <span>{skill.name}</span>
        <span>
          {skill.level === "Advanced" && ":D"}{" "}
          {skill.level === "Intermediate" && ":|"}{" "}
          {skill.level === "Beginner" && ":("}
        </span>
      </p>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
