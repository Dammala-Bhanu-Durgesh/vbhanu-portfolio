import { motion, useScroll } from "framer-motion";
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div className="fixed top-0 left-0 right-0 h-[3px] origin-left z-[999]"
      style={{ scaleX: scrollYProgress, background: "linear-gradient(90deg, #0a2550, #0f6b30, #6daa88)" }} />
  );
};
export default ScrollProgress;
