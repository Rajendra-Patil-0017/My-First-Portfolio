import "../Pages/projects.css";
import { FaGithub, FaArrowUpRightFromSquare } from "react-icons/fa6";

const projectsData = [
  {
    id: "horologue",
    title: "HOROLOGUE — Luxury Watch Platform",
    tagline: "Full-Stack E-Commerce & 3D WebGL Visualizer",
    summary: "An enterprise-grade luxury chronograph platform featuring WebGL 3D watch interaction, multi-payment checkout (Razorpay, UPI, COD), VIP memberships, and an admin management panel.",
    highlights: [
      "Interactive WebGL 3D watch model canvas (Three.js & R3F)",
      "Firebase Auth & Supabase PostgreSQL relational database",
      "Automated client-side PDF invoice engine & QR verification",
      "Administrative dashboard with inventory tracking & CSV export",
    ],
    tech: ["React 19", "Three.js", "Express", "Supabase", "Razorpay"],
    github: "https://github.com/Rajendra-Patil-0017/horologue",
    liveDemo: "https://horologue-store.vercel.app",
    featured: true,
  },
  {
    id: "snapcart",
    title: "SnapCart — E-Commerce Platform",
    tagline: "Full-Stack Online Shopping App",
    summary: "A full-stack online shopping platform inspired by real-world e-commerce applications, built to understand end-to-end user workflows.",
    highlights: [
      "User authentication & role authorization",
      "RESTful APIs for products, shopping cart, and orders",
      "Persistent data storage with structured backend logic",
    ],
    tech: ["HTML5", "CSS3", "React.js", "Node.js"],
    github: "https://github.com/Rajendra-Patil-0017/SnapCart",
    liveDemo: null,
    featured: false,
  },
  {
    id: "portfolio",
    title: "My First Portfolio",
    tagline: "Personal Developer SPA",
    summary: "A modern, responsive personal developer portfolio built to showcase full-stack web applications, technical skills, and 13 verified professional certificates.",
    highlights: [
      "Responsive React 19 single-page architecture",
      "13 embedded official PDF certificate previews",
      "Dynamic route management & WCAG accessibility optimization",
    ],
    tech: ["React.js", "JavaScript", "HTML5", "CSS3"],
    github: "https://github.com/Rajendra-Patil-0017/My-First-Portfolio",
    liveDemo: "https://rajendrapatil.vercel.app",
    featured: false,
  },
];

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        {/* SECTION HEADER */}
        <p className="projects-tag">— PROJECTS</p>

        <h2 className="projects-title">
          Featured <span>Work</span>
        </h2>

        <p className="projects-desc">
          A collection of full-stack web applications, 3D WebGL visualizers, and interactive user experiences designed with scalable architecture and modern aesthetics.
        </p>

        {/* DYNAMIC PROJECT GRID */}
        <div className="projects-grid">
          {projectsData.map((project) => (
            <article
              key={project.id}
              className={`project-card ${project.featured ? "featured" : ""}`}
            >
              <div className="project-card-header">
                {project.featured && (
                  <span className="featured-badge">Featured Project</span>
                )}
                <h3>{project.title}</h3>
                <p className="project-tagline">{project.tagline}</p>
              </div>

              <p className="project-summary">{project.summary}</p>

              <ul className="project-points">
                {project.highlights.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>

              <div className="project-footer">
                <div className="project-tech">
                  {project.tech.map((t, idx) => (
                    <span key={idx}>{t}</span>
                  ))}
                </div>

                <div className="project-links">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-btn secondary"
                      aria-label={`View ${project.title} repository on GitHub`}
                    >
                      <FaGithub /> GitHub
                    </a>
                  )}
                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-btn primary"
                      aria-label={`View live demo of ${project.title}`}
                    >
                      <FaArrowUpRightFromSquare /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
