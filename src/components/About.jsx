import { motion } from "framer-motion";

const About = () => {
  const stats = [
    { number: "6", label: "Internships" },
    { number: "46", label: "GitHub Contributuions" },
    { number: "1", label: "IEEE Publication" },
    { number: "9.23", label: "CGPA" },
  ];

  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden"><div className="max-w-6xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="text-xs tracking-widest uppercase mb-2" style={{ color: "#6daa88" }}>Get to know me</p>
          <h2 className="text-4xl md:text-5xl font-black mb-10">
            ABOUT <span style={{ color: "#4d9968" }}>ME</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-7 mb-10">
          <motion.div
            initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="card-hover rounded-xl p-7 border"
            style={{ background: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.07)" }}
          >
            <h3 className="text-lg font-bold mb-4" style={{ color: "#6daa88" }}>Who I Am</h3>
            <p className="text-gray-400 leading-8">
              I'm Bhanu Durgesh Dammala, a recent Computer Science & Engineering (Data Science) graduate specializing in 
              Artificial Intelligence, Machine Learning, Natural Language Processing, Data Analytics, and Software Development.
              As an aspiring AI and Software Engineer, I am passionate about building intelligent systems that 
              solve real-world problems and developing innovative, data-driven applications that combine research, scalability, and practical impact. 
              

            </p>
            <p className="text-gray-400 leading-8 mt-3">
              I am eager to apply my technical skills, research experience, and problem-solving abilities to 
              contribute to impactful technology projects and grow as a software professional.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="card-hover rounded-xl p-7 border"
            style={{ background: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.07)" }}
          >
            <h3 className="text-lg font-bold mb-4" style={{ color: "#6daa88" }}>Career Highlights</h3>
            <ul className="space-y-3 text-gray-300">
              {[
                "B.Tech - Computer Science and Engineering (Data Science)",
                "Data Science Practitioner",
                "IEEE Conference Author",
                "AI Developer Intern",
                "Research Intern",
                "ServiceNow CSA Certified",
                "ServiceNow CAD Certified",
                "Machine Learning & NLP Enthusiast",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm">
                  <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: "#0f6b30" }} />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <hr className="gold-divider mb-10" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }} viewport={{ once: true }}
              className="card-hover rounded-xl p-6 text-center border"
              style={{ background: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.07)" }}
            >
              <p className="text-4xl font-black stat-num" style={{ color: "#4d9968" }}>{stat.number}</p>
              <p className="text-xs text-gray-400 mt-2 tracking-wide uppercase">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
