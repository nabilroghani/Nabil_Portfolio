import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Thin decorative connector line used between sections — echoes the
// reference design's recurring "wavy thread" motif that ties sections
// together, and draws itself in as it scrolls through the viewport
// instead of appearing fully-formed.
const WavyDivider = ({ flip = false, className = '' }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 90%', 'end 60%'],
  });
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={ref} className={`w-full h-10 sm:h-14 ${flip ? 'scale-x-[-1]' : ''}`}>
      <svg
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        className={`w-full h-full pointer-events-none ${className}`}
        aria-hidden="true"
      >
        <motion.path
          d="M0 30 C 240 60, 480 0, 720 30 S 1200 60, 1440 30"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className="text-slate-300/60 dark:text-violet/30"
          style={{ pathLength }}
        />
      </svg>
    </div>
  );
};

export default WavyDivider;
