import "../Pages/projects.css";
import { FaGithub } from "react-icons/fa";

function Projects() {
  return (
    <section id="projects" className="projects">
      {/* SECTION HEADER */}
      <p className="projects-tag">— PROJECTS</p>

      <h2 className="projects-title">
        Featured <span>Work</span>
      </h2>

      <p className="projects-desc">
        A selection of projects where I transformed ideas into working
        applications. These projects reflect my growth in full-stack
        development, problem-solving, and real-world application design.
      </p>

      {/* PROJECT CARDS */}
      <div className="projects-grid">
        {/* SNAPCART */}
        <div className="project-card featured">
          <h3>SnapCart — E-Commerce Platform</h3>

          <p className="project-summary">
            A full-stack online shopping platform inspired by real-world
            applications like Amazon and Flipkart. Built to understand
            end-to-end workflows including authentication, product management,
            cart handling, and order processing.
          </p>

          <ul className="project-points">
            <li>Implemented user authentication & authorization</li>
            <li>Designed REST APIs for products, cart, and orders</li>
            <li>Persistent data storage with structured backend logic</li>
            <li>Focused on scalable architecture and clean UI flows</li>
          </ul>

          <div className="project-tech">
            <span>HTML</span>
            <span>CSS</span>
            <span>React</span>
            <span>node.js</span>
          </div>

          <div className="project-links">
            <a
              href="https://github.com/Rajendra-Patil-0017/SnapCart"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub /> View on GitHub
            </a>
          </div>

          <p className="project-future">
            <strong>Future Scope:</strong> Product recommendations, analytics
            dashboard, payment gateway integration, and performance optimization.
          </p>
        </div>

        {/* PLACEHOLDER FOR NEXT PROJECT */}
        <div className="project-card secondary">
          <h3>Upcoming Projects</h3>
          <p className="project-summary">
            Currently working on smaller applications to strengthen core
            concepts such as APIs, UI state management, and data handling.
          </p>
          <p className="coming-soon">More projects coming soon 🚀</p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
