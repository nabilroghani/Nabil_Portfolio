import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// A single statement that starts tiny and explodes to fill the screen as
// the user scrolls through it — the "how did they do that" scroll moment,
// not just another fade-in-on-view card.
const ScrollRevealText = ({ lines }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.35, 1, 1.6]);
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.55, 0.85, 1], [0, 1, 1, 1, 0]);
  const blur = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [12, 0, 0, 14]);
  const filter = useTransform(blur, (v) => `blur(${v}px)`);
  const rotate = useTransform(scrollYProgress, [0, 1], [-4, 4]);

  return (
    <section ref={ref} className="relative h-[140vh] bg-[#faf7f0] dark:bg-ink overflow-hidden">
      <div className="sticky top-0 h-screen flex items-center justify-center px-6">
        <motion.div
          style={{ scale, opacity, filter, rotate }}
          className="text-center"
        >
          {lines.map((line, i) => (
            <h2
              key={i}
              className="font-display font-semibold uppercase tracking-tight leading-[0.95]
                text-ink dark:text-[#f3efe4]
                text-[12vw] sm:text-[9vw] lg:text-[7vw]"
            >
              {i === lines.length - 1 ? <span className="italic text-gold">{line}</span> : line}
            </h2>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ScrollRevealText;
