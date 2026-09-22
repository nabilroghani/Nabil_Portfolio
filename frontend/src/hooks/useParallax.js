import { useScroll, useTransform } from 'framer-motion';

// Ties a value to how far a section (identified by `ref`, created with
// useRef in the calling component) has scrolled through the viewport, so
// background elements drift at a different speed than the page scroll.
export const useParallax = (ref, distance = 100) => {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  return useTransform(scrollYProgress, [0, 1], [-distance, distance]);
};
