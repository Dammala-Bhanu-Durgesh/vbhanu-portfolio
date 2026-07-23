import { motion, AnimatePresence } from "framer-motion";
import { FaGraduationCap, FaFilePdf, FaTimes, FaExternalLinkAlt } from "react-icons/fa";
import { useState } from "react";

const programs = [
  {
    name: "Pre-Training Program",
    org: "Revature",
    year: "2023",
    description: "Industry-focused pre-training covering Python, SQL, and data fundamentals.",
    certificate: "/certificates/programs/revature.pdf",
  },
  {
    name: "Smart Bridge Last Mile Program",
    org: "Smart Bridge",
    year: "2024",
    description: "Bridging academic knowledge with industry-ready skills through hands-on project work.",
    certificate: "/certificates/programs/smart-bridge.pdf",
  },
  {
    name: "Aspire Leaders Program",
    org: "Aspire Leaders",
    year: "2024",
    description: "Leadership development program focused on professional growth and global perspectives.",
    certificate: "/certificates/programs/aspire-leaders.pdf",
  },
  {
    name: "McKinsey Forward Learners Program",
    org: "McKinsey & Company",
    year: "2024",
    description: "Skill-building program by McKinsey covering problem-solving, communication and leadership.",
    certificate: "/certificates/programs/mckinsey-forward.pdf",
  },
  {
    name: "Wadhwani 21st Century Employability Skills – Advanced",
    org: "Wadhwani Foundation",
    year: "Feb 2024",
    description: "Advanced employability skills program covering communication, critical thinking and workplace readiness.",
    certificate: "/certificates/programs/wadhwani.pdf",
  },
];

/* ── Shared PDF Modal ── */
export const PDFModal = ({ cert, onClose }) => (
  <AnimatePresence>
    {cert && (
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        className="fixed inset-0 flex items-center justify-center p-4"
        style={{ zIndex: 9999, background: "rgba(0,0,0,0.88)", backdropFilter: "blur(10px)" }}
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.88, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.88, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 28 }}
          className="w-full max-w-4xl rounded-2xl overflow-hidden border flex flex-col"
          style={{ background: "#0d1330", borderColor: "rgba(15,107,48,0.25)", maxHeight: "90vh" }}
          onClick={e => e.stopPropagation()}
        >
          <div className="flex items-center justify-between px-6 py-4 border-b flex-shrink-0"
            style={{ borderColor: "rgba(15,107,48,0.12)" }}>
            <div>
              <p className="font-bold text-white text-base">{cert.name}</p>
              <p className="text-xs mt-0.5" style={{ color: "#6daa88" }}>{cert.org} · {cert.year}</p>
            </div>
            <div className="flex items-center gap-3">
              <a href={cert.certificate} target="_blank" rel="noreferrer"
                className="btn-outline flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold">
                <FaExternalLinkAlt /> Open in Tab
              </a>
              <button onClick={onClose}
                className="w-9 h-9 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                style={{ background: "rgba(255,255,255,0.06)" }}>
                <FaTimes />
              </button>
            </div>
          </div>
          <div className="flex-1" style={{ minHeight: "65vh" }}>
            <iframe src={cert.certificate} title={cert.name}
              className="w-full h-full" style={{ minHeight: "65vh", border: "none", background: "#fff" }} />
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

const ProfessionalPrograms = () => {
  const [activeCert, setActiveCert] = useState(null);

  return (
    <>
      <PDFModal cert={activeCert} onClose={() => setActiveCert(null)} />

      <section id="programs" className="py-24 px-6 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-xs tracking-widest uppercase mb-2" style={{ color: "#6daa88" }}>Extra mile</p>
            <h2 className="text-4xl md:text-5xl font-black mb-12">
              PROFESSIONAL <span style={{ color: "#4d9968" }}>PROGRAMS</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-5">
            {programs.map((prog, index) => (
              <motion.div
                key={prog.name}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.09 }} viewport={{ once: true }}
                className="card-hover rounded-xl p-6 border flex flex-col gap-3"
                style={{ background: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.07)" }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(15,107,48,0.09)", border: "1px solid rgba(15,107,48,0.14)" }}>
                    <FaGraduationCap className="text-lg" style={{ color: "#4d9968" }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap justify-between items-start gap-2">
                      <h3 className="font-bold text-white text-sm leading-snug">{prog.name}</h3>
                      <span className="text-xs px-2 py-0.5 rounded-full flex-shrink-0"
                        style={{ background: "rgba(15,107,48,0.09)", color: "#6daa88", border: "1px solid rgba(15,107,48,0.13)" }}>
                        {prog.year}
                      </span>
                    </div>
                    <p className="text-xs mt-0.5 font-semibold" style={{ color: "#4d9968" }}>{prog.org}</p>
                    <p className="text-gray-400 text-xs leading-5 mt-2">{prog.description}</p>
                  </div>
                </div>

                <button
                  onClick={() => setActiveCert(prog)}
                  className="btn-primary self-start flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold mt-1"
                >
                  <FaFilePdf /> View Certificate
                </button>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default ProfessionalPrograms;
