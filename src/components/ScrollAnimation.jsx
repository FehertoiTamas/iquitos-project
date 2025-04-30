import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function ScrollAnimation({
  children,
  className,
  yOffset = 100,
  opacityStart = 0.2,
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [yOffset, -yOffset]);
  const opacity = useTransform(scrollYProgress, [opacityStart, 0.8], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.8], [0.8, 1]);

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        y,
        opacity,
        scale,
      }}
    >
      {children}
    </motion.div>
  );
}

export default ScrollAnimation;
