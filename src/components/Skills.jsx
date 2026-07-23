import { motion } from "framer-motion";
import { FaCode, FaBrain, FaChartBar, FaTools } from "react-icons/fa";

const categories = [
  { icon: <FaCode />, title: "Languages", skills: ["Python", "Java", "SQL", "C", "R"] },
  { icon: <FaBrain />, title: "AI & ML", skills: ["Machine Learning", "Natural Language Processing", "Scikit-Learn", "TF-IDF", "T5", "Prompt Engineering"] },
  { icon: <FaChartBar />, title: "Data Science", skills: ["Pandas", "NumPy", "Data Cleaning", "Feature Engineering", "Data Visualization", "Data Analysis"] },
  { icon: <FaTools />, title: "Tools", skills: ["Git", "GitHub", "Power BI", "Tableau", "Jupyter"] },
];

const competencies = ["Generative AI","Machine Learning","Deep Learning","Natural Language Processing","Data Analysis","SQL"];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 relative overflow-hidden">
<div className="max-w-7xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="text-xs tracking-widest uppercase mb-2" style={{ color: "#6daa88" }}>What I work with</p>
          <h2 className="text-4xl md:text-5xl font-black mb-12">
            SKIL<span style={{ color: "#4d9968" }}>LS</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }} viewport={{ once: true }}
              className="card-hover rounded-xl p-6 border"
              style={{ background: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.07)" }}
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-xl p-2 rounded-lg" style={{ color: "#4d9968", background: "rgba(15,107,48,0.09)" }}>{cat.icon}</span>
                <h3 className="font-bold text-white">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span key={skill} className="text-xs px-2 py-1 rounded text-gray-400"
                    style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.07)" }}>
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <hr className="gold-divider mb-10" />

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <h3 className="text-xl font-bold mb-6">
            CORE <span style={{ color: "#4d9968" }}>COMPETENCIES</span>
          </h3>
          <div className="flex flex-wrap gap-3">
            {competencies.map((c, i) => (
              <motion.span
                key={c}
                initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.08 }} viewport={{ once: true }}
                className="px-5 py-2 rounded-full text-sm font-semibold cursor-default transition-all duration-200"
                style={{ background: "rgba(15,107,48,0.09)", border: "1px solid rgba(15,107,48,0.18)", color: "#9dbdac" }}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(15,107,48,0.18)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "rgba(15,107,48,0.09)"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                {c}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
