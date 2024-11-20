import React from "react"; // Import React
import { createRoot } from "react-dom/client"; // Import createRoot from react-dom
import "./styles.css"; // Assuming you have a styles.css file for styling
const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA"
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D"
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF"
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33"
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB"
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00"
  }
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img src="MU.png" alt="EURAUD" className="avatar" />; // Use <img> instead of <image>
}

function Intro() {
  return <div>

    <h1>Mustaf Ahmed Jirow</h1>
    <p>Lorem ipsum dolor sit amet, consectetur anim id est laborum.</p>
  </div>
 
}



// Create a SkillList component
function SkillList() {
  return (
    <div className="skill-list">
    
      {skills.map(skill => <Skill skill={ skill.skill} color={skill.color} level={skill.level} />)}
    </div>
  )
  
}
function Skill({skill,color,level}) {
  return <div className="skill" style={{backgroundColor:color}}>
    <span>{skill} </span>
    <span>{
      level === 'beginner' && "🤨"}
      {level === 'intermediate' && "👍"}
     { level=== 'advanced' && "🙏"
    }</span>
  </div>
}

const rootElement = document.getElementById("root"); // Get the root element
const root = createRoot(rootElement); // Create root
root.render(
  <React.StrictMode>
    <App /> {/* Render the App component */}
  </React.StrictMode>
);
