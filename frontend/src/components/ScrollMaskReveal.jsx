import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// A statement wiped into view left-to-right by a moving gold "blade" as
// the section scrolls through — a curtain-opening feel, distinct from
// the pinned zoom (ScrollRevealText) and the converging words
// (ScrollSplitReveal).
const ScrollMaskReveal = ({ text }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 80%', 'start 20%'],
  });

  const clip = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const clipPath = useTransform(clip, (v) => `inset(0 ${v}% 0 0)`);
  const bladeLeft = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const bladeOpacity = useTransform(scrollYProgress, [0, 0.05, 0.95, 1], [0, 1, 1, 0]);

  return (
    <section ref={ref} className="relative py-32 sm:py-40 bg-[#faf7f0] dark:bg-ink overflow-hidden">
      <div className="relative flex items-center justify-center px-6">
        <p className="font-display font-semibold uppercase tracking-tight leading-[0.95] text-center
          text-slate-300 dark:text-[#241f42]
          text-[10vw] sm:text-[6.5vw] lg:text-[5vw]">
          {text}
        </p>
        <motion.p
          style={{ clipPath }}
          className="absolute inset-0 flex items-center justify-center
            font-display font-semibold uppercase tracking-tight leading-[0.95] text-center
            text-ink dark:text-[#f3efe4]
            text-[10vw] sm:text-[6.5vw] lg:text-[5vw] px-6"
        >
          {text}
        </motion.p>
        <motion.div
          style={{ left: bladeLeft, opacity: bladeOpacity }}
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-[2px] h-[60%]
            bg-gold shadow-[0_0_20px_rgba(201,161,95,0.7)]"
        />
      </div>
    </section>
  );
};

export default ScrollMaskReveal;
