import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaHackerrank, FaMapMarkerAlt } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
<div className="max-w-6xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="text-xs tracking-widest uppercase mb-2" style={{ color: "#6daa88" }}>Let's work together</p>
          <h2 className="text-4xl md:text-5xl font-black mb-12">
            CONTACT <span style={{ color: "#4d9968" }}>ME</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">

          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="card-hover rounded-xl p-8 border"
            style={{ background: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.07)" }}>
            <h3 className="font-bold text-lg mb-6" style={{ color: "#6daa88" }}>Reach Me</h3>
            <div className="space-y-5 mb-8">
              {[
                { icon: <FaEnvelope />, text: "dammalabhanudurgesh@gmail.com", href: "mailto:dammalabhanudurgesh@gmail.com" },
                { icon: <FaPhone />, text: "+91 9502198534", href: "tel:+919502198534" },
                { icon: <FaMapMarkerAlt />, text: "Kakinada, India", href: "#" },
              ].map(({ icon, text, href }) => (
                <a key={text} href={href}
                  className="flex items-center gap-4 text-gray-400 text-sm hover:text-white transition-colors group">
                  <span className="text-base transition-colors" style={{ color: "#4d9968" }}>{icon}</span>
                  {text}
                </a>
              ))}
            </div>

            <hr className="gold-divider mb-6" />

            <p className="text-xs uppercase tracking-widest text-gray-600 mb-4">Find me on</p>
            <div className="flex gap-5 text-2xl" style={{ color: "#6b7280" }}>
              {[
                { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/bhanu-durgesh-dammala-b3312625a/" },
                { icon: <FaGithub />, href: "https://github.com/Dammala-Bhanu-Durgesh" },
                { icon: <SiLeetcode />, href: "https://leetcode.com/u/Bhanu_Durgesh_Dammala/" },
                { icon: <FaHackerrank />, href: "https://www.hackerrank.com/profile/dammalabhanudur1" },
              ].map(({ icon, href }, i) => (
                <a key={i} href={href} target="_blank" rel="noreferrer" className="social-icon" style={{ color: "#6b7280" }}>
                  {icon}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="card-hover rounded-xl p-8 border"
            style={{ background: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.07)" }}>
            <h3 className="font-bold text-lg mb-6" style={{ color: "#6daa88" }}>Send a Message</h3>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <input type="text" placeholder="Your Name"
                className="form-input col-span-1 rounded-lg px-4 py-3 text-sm w-full" />
              <input type="email" placeholder="Your Email"
                className="form-input col-span-1 rounded-lg px-4 py-3 text-sm w-full" />
            </div>
            <input type="text" placeholder="Subject"
              className="form-input w-full rounded-lg px-4 py-3 text-sm mb-4" />
            <textarea rows={4} placeholder="Your Message"
              className="form-input w-full rounded-lg px-4 py-3 text-sm mb-4 resize-none" />
            <button className="btn-primary w-full py-3 rounded-lg font-bold text-sm">
              Send Message
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
