import { motion } from "framer-motion";
import { FaFilePdf, FaGithub, FaUniversity } from "react-icons/fa";

const ResearchPaper = () => {
  return (
    <section id="research" className="py-24 px-6 relative overflow-hidden">
<div className="max-w-7xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="text-xs tracking-widest uppercase mb-2" style={{ color: "#6daa88" }}>Academic work</p>
          <h2 className="text-4xl md:text-5xl font-black mb-12">
            RESEARCH <span style={{ color: "#4d9968" }}>PAPER</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="card-hover rounded-xl p-10 border relative overflow-hidden"
          style={{ background: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.07)" }}
        >
          {/* decorative glow */}
<div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold"
              style={{ background: "rgba(15,107,48,0.1)", color: "#6daa88", border: "1px solid rgba(15,107,48,0.18)" }}>
              <FaUniversity /> IEEE Conference Publication
            </span>
            <span className="text-xs px-3 py-1 rounded-full text-gray-400"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
              Peer Reviewed
            </span>
          </div>

          <h3 className="text-2xl md:text-3xl font-black leading-snug text-white mb-6">
            Revolutionizing the Future of Automated Subjective Answer Sheet
            Evaluation System with Machine Learning and LLMs
          </h3>

          <hr className="gold-divider mb-6" />

          <p className="text-gray-400 leading-8 text-sm mb-3">
            Human evaluation of handwritten answer sheets is often inefficient, inaccurate, and susceptible to bias.
            This research introduces an automated grading system leveraging advanced OCR technologies,
            Machine Learning, and Large Language Models.
          </p>
          <p className="text-gray-400 leading-8 text-sm mb-3">
            The system integrates Google Cloud Vision API and Gemini 1.5 Pro to process large volumes of answer
            sheets with varying handwriting styles while significantly improving grading accuracy and reliability.
          </p>
          <p className="text-gray-400 leading-8 text-sm">
            Experimental results demonstrate increased efficiency, reduced human bias, and fair assessment of student performance.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">
            <a href="/papers/ieee-paper.pdf" target="_blank" rel="noreferrer"
              className="btn-primary flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-sm">
              <FaFilePdf /> View IEEE Paper
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResearchPaper;
