import { useNavigate } from "react-router-dom";
import "../Pages/featuredcertificates.css";

function FeaturedCertificates() {
  const navigate = useNavigate();

  const featured = [
    { title: "ICTDISBP 2026 Internation Conference", issuer: "IMS Ghaziabad", file: "certificate12.pdf" },
    { title: "Acquiring Data", issuer: "Future Skills Prime", file: "certificate11.pdf" },
    { title: "Data Analytics Job Simulation", issuer: "Deloitte", file: "certificate9.pdf" },
  ];

  const openCertificate = (file) => {
    window.open(`/Certificates/${file}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="featured-certificates" className="certificates featured-certificates">
      <p className="certificates-tag">— FEATURED CERTIFICATES</p>

      <h2 className="certificates-title">
        Featured <span>Certificates</span>
      </h2>

      <div className="certificates-grid">
        {featured.map((cert, index) => (
          <div
            key={index}
            className="certificate-card"
            onClick={() => openCertificate(cert.file)}
          >
            <div className="certificate-preview">
              <iframe
                src={`/Certificates/${cert.file}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                title={cert.title}
                className="certificate-iframe"
                scrolling="no"
                tabIndex="-1"
              ></iframe>
            </div>
            <div className="certificate-info">
              <h3>{cert.title}</h3>
              <p className="certificate-issuer">
                <span className="issuer-icon">★</span> {cert.issuer}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="view-all-container">
        <button className="view-all-btn" onClick={() => navigate("/certificates")}>
          View All Certificates
        </button>
      </div>
    </section>
  );
}

export default FeaturedCertificates;
