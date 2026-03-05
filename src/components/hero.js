import "../Pages/hero.css";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-inner">
        <p className="hero-tag">-- WELCOME TO MY PORTFOLIO</p>

        <h1 className="hero-heading">
          I'm <span>Rajendra</span>, <br />
          building digital <span className="muted">experiences.</span>
        </h1>

        <p className="hero-subtext">
          Hello, I'm Rajendra, a third-year Bachelor of Computer Applications (BCA)
          student with a strong passion for technology. I'm deeply motivated to
          build a solid foundation in computer science while continuously
          expanding my technical skill set.
        </p>

        <div className="hero-actions">
          <a href="/Resume.pdf" target="_blank" rel="noreferrer" className="btn primary">
            View Resume
          </a>
          <Link to="/projects" className="btn ghost">
            View my work <span>→</span>
          </Link>
        </div>

        <div className="hero-socials">
          <a href="https://github.com/Rajendra-Patil-0017" target="_blank" rel="noreferrer" className="social-icon" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/rajendra-anil-patil" target="_blank" rel="noreferrer" className="social-icon" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://wa.me/9313411657" target="_blank" rel="noreferrer" className="social-icon" aria-label="WhatsApp">
            <FaWhatsapp />
          </a>
          <a href="mailto:rjpatil0017@gmail.com" className="social-icon" aria-label="Email">
            <FaEnvelope />
          </a>
        </div>
      </div>

      <div className="hero-right">
        <div className="hero-image-card">
          <img src="/hero-image.png" alt="Rajendra" />
          <span className="location-badge">BASED IN<br />Surat, India</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;