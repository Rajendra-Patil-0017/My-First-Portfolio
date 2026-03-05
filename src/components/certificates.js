import "../Pages/certificates.css";

function Certificates() {
  const certificates = [
    { title: "Become Job Ready in Coding (Basics)", issuer: "Simplilearn", file: "certificate1.pdf" },
    { title: "Introduction to PHP", issuer: "Simplilearn", file: "certificate2.pdf" },
    { title: "Introduction to Computer Components", issuer: "Simplilearn", file: "certificate3.pdf" },
    { title: "Java Programming for Beginners", issuer: "Simplilearn", file: "certificate4.pdf" },
    { title: "OOPs in Java", issuer: "Simplilearn", file: "certificate5.pdf" },
    { title: "PMP Basics", issuer: "Simplilearn", file: "certificate6.pdf" },
    { title: "Power BI for Beginners", issuer: "Simplilearn", file: "certificate7.pdf" },
    { title: "AI for Beginners", issuer: "HP LIFE online course", file: "certificate8.pdf" },
    { title: "Data Analytics Job Simulation", issuer: "Deloitte", file: "certificate9.pdf" },
    { title: "Introduction to Digital Transformation with Google Cloud", issuer: "Google Cloud", file: "certificate10.pdf" },
    { title: "Acquiring Data", issuer: "Future Skills Prime", file: "certificate11.pdf" },
  ];

  const openCertificate = (file) => {
    window.open(`/Certificates/${file}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="certificates" className="certificates">
      <p className="certificates-tag">— CERTIFICATES</p>

      <h2 className="certificates-title">
        My <span>Certificates</span>
      </h2>

      <div className="certificates-grid">
        {certificates.map((cert, index) => (
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
    </section>
  );
}

export default Certificates;
