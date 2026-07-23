import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
const BackToTop = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const toggle = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", toggle);
    return () => window.removeEventListener("scroll", toggle);
  }, []);
  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }}
          whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          title="Back to top"
          style={{ position: "fixed", bottom: "28px", right: "28px", zIndex: 9998, width: "52px", height: "52px",
            borderRadius: "50%", background: "linear-gradient(135deg, #0f6b30, #0a5025)",
            border: "2px solid rgba(80,150,100,0.4)",
            boxShadow: "0 4px 24px rgba(15,107,48,0.4), 0 0 0 4px rgba(6,13,26,0.7)",
            display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: "18px", cursor: "pointer" }}>
          <FaArrowUp />
        </motion.button>
      )}
    </AnimatePresence>
  );
};
export default BackToTop;
