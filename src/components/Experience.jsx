import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const experiences = [
  {
    role: "AI Developer Intern",
    company: "Turtil – The AI Company",
    period: "Jun 2025 – Jul 2025",
    description: "Developed a Smart Quiz Generator using FastAPI, TF-IDF, Transformer models, and T5-small. Built hybrid AI pipelines for generating domain-specific quiz content while improving scalability and performance.",
    github: "https://github.com/Dammala-Bhanu-Durgesh/Smart-Quiz-Generator-Using-AI",
  },
  {
    role: "Research Intern",
    company: "Society for Data Science",
    period: "Apr 2024 – Oct 2024",
    description: "Designed AI-powered subjective answer evaluation systems integrating OCR, Gemini 1.5 Pro, and NLP pipelines to automate grading and improve evaluation accuracy.",
    github: "https://github.com/Dammala-Bhanu-Durgesh/Answer-Sheet-Evaluation-and-Ranking-System",
  },
  {
    role: "Data Analyst Intern",
    company: "Edunet Foundation",
    period: "Dec 2024 – Jan 2025",
    description: "Performed customer behavior analysis, trend identification, and business intelligence reporting using data analytics and visualization techniques.",
    github: "https://github.com/Dammala-Bhanu-Durgesh/shopping-trends-analysis",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="text-xs tracking-widest uppercase mb-2" style={{ color: "#6daa88" }}>My journey</p>
          <h2 className="text-4xl md:text-5xl font-black mb-16">
            EXPERI<span style={{ color: "#4d9968" }}>ENCE</span>
          </h2>
        </motion.div>

        <div className="relative border-l-2 ml-4" style={{ borderColor: "rgba(15,107,48,0.3)" }}>
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.15 }} viewport={{ once: true }}
              className="mb-10 ml-8 relative"
            >
              <div className="timeline-dot absolute w-3.5 h-3.5 rounded-full -left-[43px] top-3"
                style={{ background: "#0f6b30", border: "2px solid rgba(15,107,48,0.2)" }} />

              <div className="card-hover rounded-xl p-6 border"
                style={{ background: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.07)" }}>
                <div className="flex flex-wrap justify-between items-start gap-2 mb-1">
                  <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  <span className="text-xs px-2 py-1 rounded" style={{ background: "rgba(15,107,48,0.09)", color: "#6daa88" }}>{exp.period}</span>
                </div>
                <p className="font-semibold mb-3 text-sm" style={{ color: "#4d9968" }}>{exp.company}</p>
                <p className="text-gray-400 leading-7 text-sm mb-4">{exp.description}</p>
                {exp.github !== "#" && (
                  <a href={exp.github} target="_blank" rel="noreferrer"
                    className="btn-ghost inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold">
                    <FaGithub /> GitHub Repo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
