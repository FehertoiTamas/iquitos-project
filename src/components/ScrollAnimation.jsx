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

  // Y pozíció: középen 0, felül és alul eltolódik
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [yOffset, 0, -yOffset]);

  // Opacity: középen 1, széleken 0
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  // Scale: középen 1, széleken 0.8
  const scale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0.8, 1, 1, 0.8]
  );

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
