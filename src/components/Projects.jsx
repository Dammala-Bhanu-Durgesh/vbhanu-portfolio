import { motion } from "framer-motion";
import { FaGithub, FaArrowRight, FaCode, FaRobot, FaChartLine, FaGlobe, FaChartBar } from "react-icons/fa";

const projects = [
  {
    icon: <FaCode />,
    title: "Smart Quiz Generator",
    description: "AI-powered quiz generator using NLP, TF-IDF, T5-small and FastAPI. Generates 50+ domain-specific questions per request.",
    tech: ["Python", "FastAPI", "T5", "TF-IDF", "NLP"],
    github: "https://github.com/Dammala-Bhanu-Durgesh/Smart-Quiz-Generator-Using-AI",
  },
  {
    icon: <FaRobot />,
    title: "Automated Evaluation System",
    description: "AI system for subjective answer evaluation using OCR, Gemini 1.5 Pro and NLP. Processed 1000+ student responses.",
    tech: ["Python", "OCR", "Gemini 1.5", "NLP"],
    github: "https://github.com/Dammala-Bhanu-Durgesh/Answer-Sheet-Evaluation-and-Ranking-System",
  },
    {
    icon: <FaChartBar />,
    title: "Trader-Sentiment-Analysis",
    description: "A data analytics project that explores the relationship between Bitcoin market sentiment and trader performance using Hyperliquid trading data.",
    tech: ["Python", "Pandas", "Matplotlib","SciPy"],
    github: "https://github.com/Dammala-Bhanu-Durgesh/Trader-Sentiment-Analysis",
  },
  {
    icon: <FaChartLine />,
    title: "Customer Behavior Analysis",
    description: "Data analytics project on 3,900 transactions to identify trends, customer segments and business insights.",
    tech: ["Python", "Pandas", "EDA", "Visualization"],
    github: "https://github.com/Dammala-Bhanu-Durgesh/shopping-trends-analysis",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 relative overflow-hidden">
<div className="max-w-7xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="text-xs tracking-widest uppercase mb-2" style={{ color: "#6daa88" }}>Things I've built</p>
          <h2 className="text-4xl md:text-5xl font-black mb-12">
            FEATURED <span style={{ color: "#4d9968" }}>PROJECTS</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }} viewport={{ once: true }}
              className="card-hover rounded-xl p-6 border flex flex-col"
              style={{ background: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.07)" }}
            >
              <div className="text-2xl mb-4 p-3 rounded-lg w-fit" style={{ color: "#4d9968", background: "rgba(15,107,48,0.09)" }}>
                {project.icon}
              </div>
              <h3 className="text-base font-bold mb-2 text-white">{project.title}</h3>
              <p className="text-gray-400 text-sm leading-6 flex-1">{project.description}</p>
              <div className="flex flex-wrap gap-1 mt-4 mb-4">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs px-2 py-0.5 rounded text-gray-500"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}>
                    {t}
                  </span>
                ))}
              </div>
              <a href={project.github} target="_blank" rel="noreferrer"
                className="btn-ghost flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold w-full justify-center">
                <FaGithub /> {project.github === "#" ? "Coming Soon" : "View Project"} <FaArrowRight className="text-xs" />
              </a>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <a href="https://github.com/Dammala-Bhanu-Durgesh" target="_blank" rel="noreferrer"
            className="btn-outline inline-flex items-center gap-2 px-8 py-3 rounded-lg font-bold text-sm">
            <FaGithub /> View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
