import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import Certificates from "./components/certificates";
import Projects from "./components/projects";
import Contact from "./components/contact";
import ScrollToTop from "./components/ScrollToTop";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </>
  );
}

export default App;