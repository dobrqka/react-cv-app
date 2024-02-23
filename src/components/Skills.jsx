import "../styles/Skills.css";

export function Skills({ skills }) {
  return (
    <div className="skills">
      <h1>Skills</h1>
      <ul>
        {skills.map((skill) => {
          return <li key={skill}>{skill}</li>;
        })}
      </ul>
    </div>
  );
}
