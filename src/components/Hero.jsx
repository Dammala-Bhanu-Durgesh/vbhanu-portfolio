import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaHackerrank, FaDownload, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const roles = ["AI Developer", "Data Science Practitioner", "ML Enthusiast", "NLP Researcher"];

const Hero = () => (
  <section className="min-h-screen flex items-center justify-center relative px-6 pt-20 overflow-hidden">
    <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }} className="z-10 max-w-4xl w-full">
      
      <motion.p initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}
        className="text-xs mb-3 tracking-widest uppercase" style={{ color: "#6daa88" }}>
        Hi, I'm
      </motion.p>

      <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.8 }}
        className="text-5xl md:text-7xl font-black leading-tight tracking-tight">
        BHANU DURGESH
        <br />
        {/* Name: white-to-soft-green, not bright lime */}
        <span style={{
          background: "linear-gradient(90deg, #ffffff 0%, #c8e8d5 50%, #8dbfa3 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent"
        }}>
          DAMMALA
        </span>
      </motion.h1>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className="mt-5 flex flex-wrap gap-3">
        {roles.map((role, i) => (
          <span key={role} className="text-sm px-3 py-1 rounded-full font-medium"
            style={{
              background: "rgba(15,70,35,0.25)",
              border: "1px solid rgba(80,140,100,0.3)",
              color: "#9dbdac"
            }}>
            {role}
          </span>
        ))}
      </motion.div>

      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
        className="mt-6 text-gray-400 leading-7 max-w-xl">
        Passionate about Artificial Intelligence, Machine Learning, Natural Language Processing, Data Science,
        and building scalable software solutions that create real-world impact.
      </motion.p>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.95 }} className="flex flex-wrap gap-4 mt-8">
        <a href="/resume.pdf" target="_blank" rel="noreferrer"
          className="btn-primary flex items-center gap-2 px-7 py-3 rounded-lg font-bold text-sm">
          <FaDownload /> Download Resume
        </a>
        <a href="#contact" className="btn-outline flex items-center gap-2 px-7 py-3 rounded-lg font-bold text-sm">
          <FaEnvelope /> Contact Me
        </a>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }}
        className="flex gap-5 mt-9 text-2xl" style={{ color: "#6b7280" }}>
        {[
          { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/bhanu-durgesh-dammala-b3312625a/" },
          { icon: <FaGithub />, href: "https://github.com/Dammala-Bhanu-Durgesh" },
          { icon: <SiLeetcode />, href: "https://leetcode.com/u/Bhanu_Durgesh_Dammala/" },
          { icon: <FaHackerrank />, href: "https://www.hackerrank.com/profile/dammalabhanudur1" },
        ].map(({ icon, href }, i) => (
          <a key={i} href={href} target="_blank" rel="noreferrer" className="social-icon" style={{ color: "#6b7280" }}>{icon}</a>
        ))}
      </motion.div>
    </motion.div>
  </section>
);
export default Hero;
