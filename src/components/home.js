import Hero from "./hero";
import Skills from "./skills";
import AboutPreview from "./aboutpreview";
import FeaturedCertificates from "./featuredcertificates";

function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <FeaturedCertificates />
      <AboutPreview />
    </>
  );
}

export default Home;