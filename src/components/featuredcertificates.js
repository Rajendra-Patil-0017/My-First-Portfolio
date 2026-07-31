import { useNavigate } from "react-router-dom";
import "../Pages/featuredcertificates.css";
import { FaFilePdf, FaArrowUpRightFromSquare } from "react-icons/fa6";

function FeaturedCertificates() {
  const navigate = useNavigate();

  const featured = [
    { title: "ICTDISBP 2026 International Conference", issuer: "IMS Ghaziabad", file: "certificate12.pdf" },
    { title: "Acquiring Data", issuer: "Future Skills Prime", file: "certificate11.pdf" },
    { title: "Data Analytics Job Simulation", issuer: "Deloitte", file: "certificate9.pdf" },
  ];

  const openCertificate = (file) => {
    window.open(`/Certificates/${file}`, "_blank", "noopener,noreferrer");
  };

  const handleKeyDown = (e, file) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openCertificate(file);
    }
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
            role="button"
            tabIndex="0"
            onClick={() => openCertificate(cert.file)}
            onKeyDown={(e) => handleKeyDown(e, cert.file)}
            aria-label={`View ${cert.title} issued by ${cert.issuer}`}
          >
            <div className="certificate-preview">
              {cert.thumbnail ? (
                <img
                  src={cert.thumbnail}
                  alt={cert.title}
                  className="certificate-thumb-img"
                  loading="lazy"
                />
              ) : (
                <div className="certificate-placeholder-thumb">
                  <FaFilePdf className="pdf-icon" />
                  <span className="pdf-label">VERIFIED CERTIFICATE</span>
                  <div className="preview-overlay">
                    <span>View PDF</span>
                    <FaArrowUpRightFromSquare className="open-icon" />
                  </div>
                </div>
              )}
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
