import { motion, AnimatePresence } from "framer-motion";
import { FaCertificate, FaFilePdf, FaTimes, FaExternalLinkAlt } from "react-icons/fa";
import { useState } from "react";

const certifications = [
// ===== 2025 =====
{
name: "ServiceNow Certified System Administrator (CSA)",
org: "ServiceNow",
year: "2025",
certificate: "/certificates/certificates/servicenow-csa.pdf",
},
{
name: "ServiceNow Certified Application Developer (CAD)",
org: "ServiceNow",
year: "2025",
certificate: "/certificates/certificates/servicenow-cad.pdf",
},
{
name: "HP Life - Agile Project Management",
org: "HP Life",
year: "2025",
certificate: "/certificates/certificates/hplife-agile-project-management.pdf",
},
{
name: "HP Life - Presenting Data",
org: "HP Life",
year: "2025",
certificate: "/certificates/certificates/hplife-presenting-data.pdf",
},
{
  name: "Nestlé E-Learning Program",
  org: "Nestlé",
  year: "2025",
  certificate: "/certificates/nestle-e-learning.pdf",
},
{
name: "Infosys Springboard - Excel",
org: "Infosys Springboard",
year: "2025",
certificate: "/certificates/certificates/infosys-excel.pdf",
},
{
name: "Infosys Springboard - Introduction to Business Intelligence",
org: "Infosys Springboard",
year: "2025",
certificate: "/certificates/certificates/infosys-bi.pdf",
},
{
name: "Infosys Springboard - Learning Power BI",
org: "Infosys Springboard",
year: "2025",
certificate: "/certificates/certificates/infosys-powerbi.pdf",
},
{
name: "Oracle Cloud Infrastructure Foundations - AI Associate",
org: "Oracle",
year: "2025",
certificate: "/certificates/certificates/oci-ai-associate.pdf",
},
{
name: "Udemy - Java Programming",
org: "Udemy",
year: "2025",
certificate: "/certificates/certificates/udemy-java.pdf",
},
{
name: "Udemy - Graphic Designing Basics",
org: "Udemy",
year: "2025",
certificate: "/certificates/certificates/udemy-graphic-design.pdf",
},

// ===== 2024 =====
{
name: "NPTEL - Data Mining",
org: "NPTEL",
year: "2024",
certificate: "/certificates/certificates/nptel-data-mining.pdf",
},
{
name: "NPTEL - Data Science for Engineers (DSA)",
org: "NPTEL",
year: "2024",
certificate: "/certificates/certificates/nptel-dsa.pdf",
},
{
name: "edX - Python for Data Science",
org: "edX",
year: "2024",
certificate: "/certificates/certificates/edx-python-data-science.pdf",
},
{
name: "edX - Java Programming",
org: "edX",
year: "2024",
certificate: "/certificates/certificates/edx-java.pdf",
},
{
name: "edX - Machine Learning",
org: "edX",
year: "2024",
certificate: "/certificates/certificates/edx-machine-learning.pdf",
},
{
name: "Google Play Academy",
org: "Google",
year: "2024",
certificate: "/certificates/certificates/google-play-academy.pdf",
},
{
name: "YouTube Creator Academy",
org: "Google",
year: "2024",
certificate: "/certificates/certificates/google-youtube.pdf",
},
{
name: "HackerRank - Java (Basic)",
org: "HackerRank",
year: "2024",
certificate: "/certificates/certificates/hackerrank-java-basic.pdf",
},
{
name: "HackerRank - Python (Basic)",
org: "HackerRank",
year: "2024",
certificate: "/certificates/certificates/hackerrank-python-basic.pdf",
},
{
name: "IBM - Getting Started with Artificial Intelligence",
org: "IBM",
year: "2024",
certificate: "/certificates/certificates/ibm-ai.pdf",
},
{
  name: "Salesforce Certified AI Associate",
  org: "Salesforce",
  year: "2024",
  certificate: "/certificates/salesforce-ai-associate.pdf",
},
{
name: "Infosys Springboard - Data Modelling",
org: "Infosys Springboard",
year: "2024",
certificate: "/certificates/certificates/infosys-data-modelling.pdf",
},
{
name: "Infosys Springboard - Python for Data Science",
org: "Infosys Springboard",
year: "2024",
certificate: "/certificates/certificates/infosys-python-data-science.pdf",
},

// ===== 2023 =====
{
name: "NPTEL - Python for Data Science",
org: "NPTEL",
year: "2023",
certificate: "/certificates/certificates/nptel-python-data-science.pdf",
},
{
name: "Teachnook - Python for Data Science Course",
org: "Teachnook",
year: "2023",
certificate: "/certificates/certificates/teachnook-python-data-science.pdf",
},
];

const internshipCerts = [
  { name: "Data Visualization Certificate", org: "Excelerate", year: "2026", certificate: "/certificates/Internship certificates/excelerate.pdf" },
  { name: "Green Skills Certificate", org: "1M1B Green Skills Program", year: "2025", certificate: "/certificates/Internship certificates/green-skills.pdf" },
  { name: "AI Developer Intern Certificate", org: "Turtil – The AI Company", year: "2025", certificate: "/certificates/Internship certificates/turtil.pdf" },
  { name: "Data Analyst Intern Certificate", org: "Edunet Foundation", year: "2024", certificate: "/certificates/Internship certificates/edunet.pdf" },
  { name: "Research Intern Certificate", org: "Society for Data Science", year: "2024", certificate: "/certificates/Internship certificates/society-datascience.pdf" },
  { name: "Data Science Intern Certificate", org: "Teachnook", year: "2023", certificate: "/certificates/Internship certificates/teachnook.pdf" },
];

const PDFModal = ({ cert, onClose }) => (
  <AnimatePresence>
    {cert && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 flex items-center justify-center p-4"
        style={{ zIndex: 9999, background: "rgba(0,0,0,0.88)", backdropFilter: "blur(10px)" }}
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.88, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.88, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 28 }}
          className="w-full max-w-4xl rounded-2xl overflow-hidden border flex flex-col"
          style={{ background: "#0d1330", borderColor: "rgba(15,107,48,0.25)", maxHeight: "90vh" }}
          onClick={e => e.stopPropagation()}
        >
          {/* Header */}
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
          {/* PDF */}
          <div className="flex-1" style={{ minHeight: "65vh" }}>
            <iframe src={cert.certificate} title={cert.name}
              className="w-full h-full" style={{ minHeight: "65vh", border: "none", background: "#fff" }} />
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

const CertCard = ({ cert, index, direction = -1, onView }) => (
  <motion.div
    initial={{ opacity: 0, x: direction * 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ delay: index * 0.07 }}
    viewport={{ once: true }}
    className="card-hover flex items-center justify-between gap-4 rounded-xl p-4 border"
    style={{ background: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.07)" }}
  >
    <div className="flex items-center gap-4 min-w-0">
      <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
        style={{ background: "rgba(15,107,48,0.09)", border: "1px solid rgba(15,107,48,0.13)" }}>
        <FaCertificate className="text-base" style={{ color: "#6daa88" }} />
      </div>
      <div className="min-w-0">
        <p className="font-bold text-white text-sm leading-snug truncate">{cert.name}</p>
        <p className="text-xs text-gray-500 mt-0.5">{cert.org} · {cert.year}</p>
      </div>
    </div>

    {cert.certificate ? (
      <button onClick={() => onView(cert)}
        className="btn-primary flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-bold flex-shrink-0">
        <FaFilePdf /> View
      </button>
    ) : (
      <span className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium flex-shrink-0"
        style={{ background: "rgba(255,255,255,0.04)", color: "#6b7280", border: "1px solid rgba(255,255,255,0.06)" }}>
        Coming Soon
      </span>
    )}
  </motion.div>
);

const Certifications = () => {
  const [activeCert, setActiveCert] = useState(null);

  return (
    <>
      <PDFModal cert={activeCert} onClose={() => setActiveCert(null)} />
      <section id="certifications" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-xs tracking-widest uppercase mb-2" style={{ color: "#6daa88" }}>Credentials</p>
            <h2 className="text-4xl md:text-5xl font-black mb-10">
              CERTIFIC<span style={{ color: "#4d9968" }}>ATIONS</span>
            </h2>
          </motion.div>

          <h3 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#6daa88" }}>
            Professional Certifications
          </h3>
          <div className="grid md:grid-cols-2 gap-3 mb-10">
            {certifications.map((cert, i) => (
              <CertCard key={cert.name} cert={cert} index={i} direction={-1} onView={setActiveCert} />
            ))}
          </div>

          <hr className="gold-divider mb-8" />

          <h3 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#6daa88" }}>
            Internship Certificates
          </h3>
          <div className="grid md:grid-cols-2 gap-3">
            {internshipCerts.map((cert, i) => (
              <CertCard key={cert.name} cert={cert} index={i} direction={1} onView={setActiveCert} />
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default Certifications;
