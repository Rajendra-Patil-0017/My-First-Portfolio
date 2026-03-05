import "../Pages/contact.css";
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa6";

function Contact() {
  return (
    <section className="contact" id="contact">
      <p className="contact-tag">— CONTACT</p>

      <h2 className="contact-title">
        Let's <span>Connect</span>
      </h2>

      <div className="contact-desc">
        <p>I'm always open to meaningful conversations. Whether you have an idea, a project in mind, or just want to talk about tech, learning, or growth — feel free to reach out.</p>
        <p>I'm actively exploring opportunities to learn, collaborate, and contribute to impactful projects. If my work resonates with you, let's connect.</p>
      </div>

      <div className="contact-socials">
        <a href="https://linkedin.com/in/rajendra-anil-patil" target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Rajendra-Patil-0017" target="_blank" rel="noreferrer" aria-label="GitHub">
          <FaGithub />
        </a>
        <a href="mailto:rjpatil0017@gmail.com" aria-label="Email">
          <FaEnvelope />
        </a>
        <a href="https://wa.me/9313411657" target="_blank" rel="noreferrer" aria-label="WhatsApp">
          <FaWhatsapp />
        </a>
      </div>

      <p className="contact-footer">
        Or email me directly at{" "}
        <a href="mailto:rjpatil0017@gmail.com">rjpatil0017@gmail.com</a>
      </p>
    </section>
  );
}

export default Contact;