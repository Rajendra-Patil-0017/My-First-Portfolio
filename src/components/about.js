import "../Pages/about.css";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">

        <p className="about-tag">— ABOUT ME</p>

        <h2 className="about-title">
          Passionate about building <span>beautiful web interfaces</span>
        </h2>

        <div className="about-desc">
          <p>
            I’m Rajendra, a third-year Bachelor of Computer Applications (BCA)
            student with a strong passion for technology. I’m deeply motivated
            to build a solid foundation in computer science while continuously
            expanding my technical skill set.
          </p>

          <p>
            My learning journey is centered around mastering programming
            languages and modern development practices, which I believe are
            essential for creating efficient and scalable solutions. Alongside
            this, I am specializing in Big Data Analytics.
          </p>

          <p>
            Driven by curiosity and a desire to grow, I actively seek
            opportunities to learn, experiment, and apply my knowledge to
            real-world challenges.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="about-stats">

          <div className="stat-card">
            <h3>2+</h3>
            <p>Web Projects</p>
          </div>

          <div className="stat-card">
            <h3>10+</h3>
            <p>Technologies</p>
          </div>

          <div className="stat-card">
            <h3>2+</h3>
            <p>Data Tools</p>
          </div>

        </div>

        {/* Resume Button */}
        <div className="about-buttons">
          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-btn"
          >
            View Resume
          </a>
        </div>

      </div>
    </section>
  );
}

export default About;