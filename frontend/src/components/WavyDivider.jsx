// Thin decorative connector line used between sections — echoes the
// reference design's recurring "wavy thread" motif that ties sections together.
const WavyDivider = ({ flip = false, className = '' }) => (
  <svg
    viewBox="0 0 1440 60"
    preserveAspectRatio="none"
    className={`w-full h-10 sm:h-14 pointer-events-none ${flip ? 'scale-x-[-1]' : ''} ${className}`}
    aria-hidden="true"
  >
    <path
      d="M0 30 C 240 60, 480 0, 720 30 S 1200 60, 1440 30"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      className="text-slate-300/60 dark:text-violet/25"
    />
  </svg>
);

export default WavyDivider;
