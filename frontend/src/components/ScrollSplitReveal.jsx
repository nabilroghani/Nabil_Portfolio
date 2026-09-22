import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Two words glide in from opposite edges and converge at center as the
// section scrolls into view — a different feel from ScrollRevealText's
// pinned zoom: this one tracks scroll position directly, no sticky pin.
const ScrollSplitReveal = ({ left, right }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 85%', 'start 25%'],
  });

  const leftX = useTransform(scrollYProgress, [0, 1], [-260, 0]);
  const rightX = useTransform(scrollYProgress, [0, 1], [260, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [0, 1]);
  const leftRotate = useTransform(scrollYProgress, [0, 1], [-6, 0]);
  const rightRotate = useTransform(scrollYProgress, [0, 1], [6, 0]);

  return (
    <section ref={ref} className="relative py-32 sm:py-40 bg-[#faf7f0] dark:bg-ink overflow-hidden">
      <div className="flex flex-col items-center justify-center gap-2 sm:gap-3 px-6">
        <motion.h2
          style={{ x: leftX, opacity, rotate: leftRotate }}
          className="font-display font-semibold uppercase tracking-tight leading-[0.95]
            text-ink dark:text-[#f3efe4]
            text-[11vw] sm:text-[7vw] lg:text-[5.5vw]"
        >
          {left}
        </motion.h2>
        <motion.h2
          style={{ x: rightX, opacity, rotate: rightRotate }}
          className="font-display italic font-semibold tracking-tight leading-[0.95]
            text-gold
            text-[11vw] sm:text-[7vw] lg:text-[5.5vw]"
        >
          {right}
        </motion.h2>
      </div>
    </section>
  );
};

export default ScrollSplitReveal;
