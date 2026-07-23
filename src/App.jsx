import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Internships from "./components/Internships";
import ProfessionalPrograms from "./components/ProfessionalPrograms";
import ResearchPaper from "./components/ResearchPaper";
import Achievements from "./components/Achievements";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import BackToTop from "./components/BackToTop";

function App() {
  return (
    <div className="text-white overflow-x-hidden" style={{ background: "#060d1a" }}>

      {/* ── Global background: navy dominant, green accent at edges ── */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }}>
        {/* Deep navy base — fills 75% of the feel */}
        <div className="absolute inset-0" style={{
          background: "linear-gradient(175deg, #060d1a 0%, #080f1e 45%, #091409 75%, #060d0a 100%)"
        }} />
        {/* Strong navy top-left (collar area of jersey) */}
        <div className="absolute top-0 left-0 w-[80vw] h-[70vh]" style={{
          background: "radial-gradient(ellipse at top left, rgba(10,25,70,0.7) 0%, transparent 65%)"
        }} />
        {/* Very subtle green bottom-right — keeps navy dominant */}
        <div className="absolute bottom-0 right-0 w-[60vw] h-[60vh]" style={{
          background: "radial-gradient(ellipse at bottom right, rgba(10,60,25,0.35) 0%, transparent 65%)"
        }} />
        {/* Faint green mid-left breath */}
        <div className="absolute top-[50%] left-0 w-[45vw] h-[40vh]" style={{
          background: "radial-gradient(ellipse at left, rgba(10,50,20,0.12) 0%, transparent 70%)"
        }} />
        {/* Diagonal stripe — very subtle, jersey-like */}
        <div className="absolute inset-0 opacity-[0.025]" style={{
          backgroundImage: "repeating-linear-gradient(135deg, #3d7a55 0px, #3d7a55 1px, transparent 1px, transparent 44px)"
        }} />
      </div>

      <div className="relative" style={{ zIndex: 1 }}>
        <ScrollProgress />
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Internships />
        <ProfessionalPrograms />
        <ResearchPaper />
        <Achievements />
        <Certifications />
        <Contact />
        <Footer />
        <BackToTop />
      </div>
    </div>
  );
}

export default App;
