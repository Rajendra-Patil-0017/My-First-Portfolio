import "../Pages/skills.css";

const skills = [
  { label: "React", icon: "devicon-react-original-wordmark colored" },
  { label: "Javascript", icon: "devicon-javascript-plain colored" },
  { label: "Java", icon: "devicon-java-plain-wordmark colored" },
  { label: "Node.js", icon: "devicon-nodejs-plain-wordmark colored" },
  { label: "Python", icon: "devicon-python-plain-wordmark colored" },
  { label: "HTML", icon: "devicon-html5-plain-wordmark colored" },
  { label: "CSS", icon: "devicon-css3-plain-wordmark colored" },
  { label: "Vercel", icon: "devicon-vercel-original-wordmark" },
  { label: "MongoDB", icon: "devicon-mongodb-plain-wordmark colored" },
  { label: "MySQL", icon: "devicon-mysql-plain-wordmark colored" },
  { label: "GitHub", icon: "devicon-github-original-wordmark" },
];

function Skills() {
  return (
    <section className="skills-section">
      <p className="skills-tag">- My Skills & Technologies</p>
      <h2 className="skills-title">Technologies & Skills</h2>
      <p className="skills-subtitle">
        A versatile stack for building scalable applications and data-driven solutions.
      </p>

      <div className="skills-grid">
        {skills.map(({ icon, label }) => (
          <div className="skill-card" key={label}>
            <i className={`${icon} skill-icon`}></i>
            <span className="skill-label">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;