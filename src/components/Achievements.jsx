import { motion } from "framer-motion";
import { useState } from "react";
import { FaTrophy, FaMedal, FaStar, FaUsers, FaNewspaper, FaLeaf, FaFilePdf, FaTimes, FaExternalLinkAlt } from "react-icons/fa";
import { AnimatePresence } from "framer-motion";

/* ── PDF Modal (self-contained) ── */
const PDFModal = ({ cert, onClose }) => (
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
              <p className="font-bold text-white text-base">{cert.title}</p>
              <p className="text-xs mt-0.5" style={{ color: "#6daa88" }}>{cert.subtitle}</p>
            </div>
            <div className="flex items-center gap-3">
              {cert.pdfs.length === 1 && (
                <a href={cert.pdfs[0]} target="_blank" rel="noreferrer"
                  className="btn-outline flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold">
                  <FaExternalLinkAlt /> Open in Tab
                </a>
              )}
              <button onClick={onClose}
                className="w-9 h-9 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                style={{ background: "rgba(255,255,255,0.06)" }}>
                <FaTimes />
              </button>
            </div>
          </div>

          {/* Single PDF */}
          {cert.pdfs.length === 1 && (
            <div className="flex-1" style={{ minHeight: "65vh" }}>
              <iframe src={cert.pdfs[0]} title={cert.title}
                className="w-full h-full" style={{ minHeight: "65vh", border: "none", background: "#fff" }} />
            </div>
          )}

          {/* Multiple PDFs – tab switcher */}
          {cert.pdfs.length > 1 && (
            <MultiPDFViewer pdfs={cert.pdfs} title={cert.title} />
          )}
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

const MultiPDFViewer = ({ pdfs, title }) => {
  const [active, setActive] = useState(0);
  return (
    <div className="flex flex-col flex-1" style={{ minHeight: "65vh" }}>
      {/* Tab bar */}
      <div className="flex gap-2 px-6 py-3 border-b flex-wrap" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
        {pdfs.map((_, i) => (
          <button key={i} onClick={() => setActive(i)}
            className="px-4 py-1.5 rounded-lg text-xs font-bold transition-all"
            style={active === i
              ? { background: "#0f6b30", color: "white" }
              : { background: "rgba(255,255,255,0.06)", color: "#9ca3af" }}>
            Document {i + 1}
          </button>
        ))}
        <a href={pdfs[active]} target="_blank" rel="noreferrer"
          className="btn-outline flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold ml-auto">
          <FaExternalLinkAlt /> Open in Tab
        </a>
      </div>
      <div className="flex-1" style={{ minHeight: "55vh" }}>
        <iframe src={pdfs[active]} title={`${title} - ${active + 1}`}
          className="w-full h-full" style={{ minHeight: "55vh", border: "none", background: "#fff" }} />
      </div>
    </div>
  );
};

/* ── Achievement data ── */
const achievements = [
  {
    icon: <FaTrophy />,
    title: "Unstop Campus Ambassador",
    subtitle: "1 Year Term",
    description: "Served as Campus Ambassador for Unstop (formerly Dare2Compete) for a full year, organizing competitions and driving student engagement.",
    pdfs: ["/certificates/achievements/unstop-ambassador.pdf",
      "/certificates/achievements/offer-unstop-ambassador.pdf",
    ],
  },
  {
    icon: <FaStar />,
    title: "Ashna AI Campus Ambassador",
    subtitle: "Ashna AI",
    description: "Represented Ashna AI on campus, promoting AI awareness and connecting students with AI-driven opportunities.",
    pdfs: ["/certificates/achievements/ashna-ai-ambassador.pdf"],
  },
  {
    icon: <FaMedal />,
    title: "Semester Topper",
    subtitle: "4 Semesters",
    description: "Achieved Class First position in three semesters (1-1, 3-1, and 4-1) and Class Second position in one semester (2-2). Graduated with 3rd position in the CSE (Data Science) department and secured 8th position across the entire college.",
    pdfs: [
      "/certificates/achievements/semester-topper-1.pdf",
      "/certificates/achievements/semester-topper-2.pdf",
      "/certificates/achievements/semester-topper-3.pdf",
      "/certificates/achievements/semester-topper-4.pdf",
    ],
  },
  {
    icon: <FaUsers />,
    title: "NSS Department Coordinator",
    subtitle: "Republic Day 2024 · RBK Survey 2024 · Blood Donation Camp 2023",
    description: "Served as NSS Department Coordinator, leading the Republic Day 2024 celebrations and the Raithu Bharosa Kendhram (RBK) Survey Initiative, while actively contributing to the NSS Blood Donation Camp on 03 November 2023.",
    pdfs: [
      "/certificates/achievements/nss-republic-day.pdf",
      "/certificates/achievements/nss-rbk-survey.pdf",
      "/certificates/achievements/nss-blood-donation.pdf",
    ],
  },
  {
    icon: <FaNewspaper />,
    title: "Pragati Press Club Member",
    subtitle: "Strides-2024 Coordinator",
    description: "Active member of Pragati Engineering College Press Club; served as coordinator for the Strides-2024 edition.",
    pdfs: ["/certificates/achievements/press-club-strides-2024.pdf"],
  },
  {
    icon: <FaUsers />,
    title: "Society for Data Science (S4DS) Membership",
    subtitle: "S4DS",
    description: "Recognised member of the Society for Data Science, participating in research events and data science community activities.",
    pdfs: ["/certificates/achievements/s4ds-membership.pdf"],
  },
  {
    icon: <FaTrophy />,
    title: "1st Position – Engineers Day Quiz",
    subtitle: "Department Quiz Competition",
    description: "Secured 1st place in the Engineers Day quiz competition held at the department level.",
    pdfs: ["/certificates/achievements/engineers-day-quiz.pdf"],
  },
  {
    icon: <FaStar />,
    title: "Canva Designing Milestones",
    subtitle: "2 Certificates",
    description: "Achieved design milestones on Canva, demonstrating proficiency in visual content creation and graphic design.",
    pdfs: [
      "/certificates/achievements/canva-milestone-1.pdf",
      "/certificates/achievements/canva-milestone-2.pdf",
    ],
  },
  {
    icon: <FaLeaf />,
    title: "Igen Green Day",
    subtitle: "UN SDG Contribution · 22 Oct 2022",
    description: "Actively contributed towards the United Nations Sustainable Development Goals on Igen Green Day, promoting environmental awareness.",
    pdfs: ["/certificates/achievements/igen-green-day.pdf"],
  },
  {
    icon: <FaNewspaper />,
    title: "Data Pravachan Coordinator – EDATUM 2k25",
    subtitle: "Strides-2025 · Dept. of Data Science",
    description: "Served as coordinator for Data Pravachan at Pragati Engineering College's EDATUM-2k25 event, organised by the Department of Data Science.",
    pdfs: ["/certificates/achievements/data-pravachan-2025.pdf"],
  },
];

const Achievements = () => {
  const [activeCert, setActiveCert] = useState(null);

  return (
    <>
      <PDFModal cert={activeCert} onClose={() => setActiveCert(null)} />

      <section id="achievements" className="py-24 px-6 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-xs tracking-widest uppercase mb-2" style={{ color: "#6daa88" }}>Milestones</p>
            <h2 className="text-4xl md:text-5xl font-black mb-12">
              ACHIEVE<span style={{ color: "#4d9968" }}>MENTS</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-5">
            {achievements.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -24 : 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.07 }}
                viewport={{ once: true }}
                className="card-hover flex gap-4 rounded-xl p-5 border"
                style={{ background: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.07)" }}
              >
                {/* Icon */}
                <div className="w-11 h-11 rounded-xl flex items-center justify-center text-lg flex-shrink-0 self-start mt-0.5"
                  style={{ background: "rgba(15,107,48,0.1)", color: "#6daa88", border: "1px solid rgba(15,107,48,0.13)" }}>
                  {item.icon}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-white text-sm leading-snug">{item.title}</h3>
                  <p className="text-xs mt-0.5 mb-2" style={{ color: "#4d9968" }}>{item.subtitle}</p>
                  <p className="text-gray-400 text-xs leading-5 mb-3">{item.description}</p>
                  <button
                    onClick={() => setActiveCert(item)}
                    className="btn-primary flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold"
                  >
                    <FaFilePdf />
                    {item.pdfs.length > 1 ? `View ${item.pdfs.length} Certificates` : "View Certificate"}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default Achievements;
