import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const internships = [
  {
    role: "AI Developer Intern",
    company: "Turtil – The AI Company",
    duration: "Jun 2025 – Jul 2025",
    companyUrl: "https://turtil.co/",
    github: "#",
    points: [
      "Developed a containerized Smart Quiz Generator microservice using FastAPI, Transformer-based models, and TF-IDF retrieval techniques.",
      "Built a hybrid AI pipeline combining retrieval-based and generative approaches.",
      "Generated 50+ domain-specific quiz questions per request.",
      "Designed an offline-first architecture for scalable performance.",
      "Collaborated on backend development and AI integration.",
    ],
  },
  {
    role: "Research Intern",
    company: "Society for Data Science",
    duration: "Apr 2024 – Oct 2024",
    companyUrl: "https://s4ds.org/",
    github: "#",
    points: [
      "Developed AI-powered subjective answer evaluation systems.",
      "Processed and assessed over 1,000 student responses.",
      "Built NLP preprocessing pipelines.",
      "Evaluated 500+ subjective answers using LLM-as-a-Judge frameworks.",
      "Conducted research on LLM applications in education.",
    ],
  },
  {
    role: "Data Analyst Intern",
    company: "Edunet Foundation",
    duration: "Dec 2024 – Jan 2025",
    companyUrl: "https://edunetfoundation.org",
    github: "#",
    points: [
      "Performed EDA on 3,900 customer transactions.",
      "Analyzed purchasing behavior and engagement data.",
      "Investigated customer segmentation and seasonal trends.",
      "Delivered data-driven business recommendations.",
    ],
  },
  {
    role: "Green Internship Trainee",
    company: "1M1B Green Skills Program",
    duration: "May 2025 – Jun 2025",
    companyUrl: "https://www.activate1m1b.org/",
    github: "#",
    points: [
      "Completed sustainability-focused training.",
      "Worked with Tableau dashboards.",
      "Applied sustainability concepts in a live project.",
    ],
  },
  {
    role: "Data Visualization Trainee",
    company: "Excelerate",
    duration: "Jan 2026 – Feb 2026",
    companyUrl: "https://4excelerate.org/",
    github: "#",
    points: [
      "Developed expertise in visual analytics.",
      "Created audience-focused visualizations.",
      "Applied data storytelling techniques.",
      "Learned industry best practices.",
    ],
  },
  {
    role: "Data Science Intern",
    company: "Teachnook",
    duration: "Sep 2023 – Oct 2023",
    companyUrl: "#",
    github: "#",
    points: [
      "Worked on supervised and unsupervised learning projects.",
      "Participated in model training and validation.",
      "Applied preprocessing techniques.",
      "Gained experience with ML workflows.",
    ],
  },
];

const Internships = () => {
  return (
    <section id="internships" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="text-xs tracking-widest uppercase mb-2" style={{ color: "#6daa88" }}>Hands-on experience</p>
          <h2 className="text-4xl md:text-5xl font-black mb-16">
            INTERN<span style={{ color: "#4d9968" }}>SHIPS</span>
          </h2>
        </motion.div>

        <div className="space-y-6">
          {internships.map((internship, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }} viewport={{ once: true }}
              className="card-hover rounded-xl p-7 border"
              style={{ background: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.07)" }}
            >
              <div className="flex flex-wrap justify-between items-start gap-3 mb-1">
                <div>
                  <h3 className="text-xl font-bold" style={{ color: "#4d9968" }}>{internship.role}</h3>
                  <a href={internship.companyUrl} target="_blank" rel="noreferrer"
                    className="inline-flex items-center gap-1 text-white font-semibold text-sm mt-0.5 hover:underline">
                    {internship.company}
                    {internship.companyUrl !== "#" && <FaExternalLinkAlt className="text-xs opacity-50" />}
                  </a>
                </div>
                <span className="text-xs px-3 py-1 rounded-full font-medium"
                  style={{ background: "rgba(15,107,48,0.09)", color: "#6daa88", border: "1px solid rgba(15,107,48,0.13)" }}>
                  {internship.duration}
                </span>
              </div>

              <ul className="space-y-2 mt-4 mb-5">
                {internship.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-400 text-sm leading-6">
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2.5" style={{ background: "#0f6b30" }} />
                    {point}
                  </li>
                ))}
              </ul>

              {internship.github !== "#" && (
                <div className="pt-3 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                  <a href={internship.github} target="_blank" rel="noreferrer"
                    className="btn-ghost inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold">
                    <FaGithub /> GitHub Project
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Internships;
