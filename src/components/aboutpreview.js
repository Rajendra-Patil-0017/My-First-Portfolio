import "../Pages/aboutpreview.css";
import { Link } from "react-router-dom";

function AboutPreview() {
  return (
    <section className="about-preview">
      <div className="about-preview-container">

        <p className="about-preview-tag">— Who am I?</p>

        <h2 className="about-preview-title">
          Frontend Developer & Data Analyst
        </h2>

        <p className="about-preview-text">
          I'm a third-year BCA student at Parul University passionate about
          building modern web applications. I enjoy learning new technologies
          and creating real-world projects using React and JavaScript while
          also exploring data analysis.
        </p>

        <h3 className="why-title">Why Me?</h3>

        <div className="why-list">
          <p>✔ Frontend developer focused on building responsive web applications</p>
          <p>✔ Data analyst skilled in SQL, MongoDB, Excel, and Power BI</p>
          <p>✔ Passionate about solving real-world problems with technology</p>
          <p>✔ Always learning and improving my technical skills</p>
        </div>

        <Link to="/about" className="about-preview-btn">
          More About Me →
        </Link>

      </div>
    </section>
  );
}

export default AboutPreview;