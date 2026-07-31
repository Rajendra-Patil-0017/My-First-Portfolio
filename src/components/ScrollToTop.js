import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const routeTitles = {
  "/": "Rajendra Patil | Portfolio",
  "/about": "About Me | Rajendra Patil",
  "/certificates": "Certificates & Achievements | Rajendra Patil",
  "/projects": "Projects & Work | Rajendra Patil",
  "/contact": "Contact Me | Rajendra Patil",
};

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = routeTitles[pathname] || "Rajendra Patil | Portfolio";
  }, [pathname]);

  return null;
}
