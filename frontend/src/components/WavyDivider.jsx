import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const PATH_D = 'M0 30 C 240 60, 480 0, 720 30 S 1200 60, 1440 30';

// Thin decorative connector line used between sections — echoes the
// reference design's recurring "wavy thread" motif that ties sections
// together. The line draws itself in as it scrolls through the viewport,
// with a glowing ball riding the drawing tip like a pen.
const WavyDivider = ({ flip = false, className = '' }) => {
  const ref = useRef(null);
  const pathRef = useRef(null);
  const [pathLen, setPathLen] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 90%', 'end 60%'],
  });
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    if (pathRef.current) setPathLen(pathRef.current.getTotalLength());
  }, []);

  const point = (v) => {
    if (!pathRef.current || !pathLen) return { x: 0, y: 30 };
    return pathRef.current.getPointAtLength(Math.max(0, Math.min(1, v)) * pathLen);
  };
  const ballCx = useTransform(scrollYProgress, (v) => point(v).x);
  const ballCy = useTransform(scrollYProgress, (v) => point(v).y);
  const ballOpacity = useTransform(scrollYProgress, [0, 0.03, 0.97, 1], [0, 1, 1, 0]);

  return (
    <div ref={ref} className={`w-full h-10 sm:h-14 ${flip ? 'scale-x-[-1]' : ''}`}>
      <svg
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        className={`w-full h-full overflow-visible pointer-events-none ${className}`}
        aria-hidden="true"
      >
        <motion.path
          ref={pathRef}
          d={PATH_D}
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className="text-slate-300/60 dark:text-violet/30"
          style={{ pathLength }}
        />
        <motion.circle
          r="5"
          cx={ballCx}
          cy={ballCy}
          style={{ opacity: ballOpacity }}
          className="fill-gold"
        />
        <motion.circle
          r="9"
          cx={ballCx}
          cy={ballCy}
          style={{ opacity: ballOpacity }}
          className="fill-gold/25"
        />
      </svg>
    </div>
  );
};

export default WavyDivider;
