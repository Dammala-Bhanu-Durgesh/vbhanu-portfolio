import { FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-10 px-6 border-t" style={{ borderColor: "rgba(15,107,48,0.12)" }}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm font-black">
          <span style={{ color: "#4d9968" }}>Bhanu</span>
          <span className="text-white"> Durgesh</span>
        </p>
        <p className="text-xs text-gray-600 flex items-center gap-1">
          © 2026 Bhanu Durgesh Dammala · Built using React &amp; Tailwind CSS
        </p>
        <div className="flex gap-4 text-lg text-gray-600">
          <a href="https://github.com/Dammala-Bhanu-Durgesh" target="_blank" rel="noreferrer" className="social-icon" style={{ color: "#6b7280" }}>
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/bhanu-durgesh-dammala-b3312625a/" target="_blank" rel="noreferrer" className="social-icon" style={{ color: "#6b7280" }}>
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
