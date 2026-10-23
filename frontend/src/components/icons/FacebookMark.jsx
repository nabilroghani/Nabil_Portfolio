// Small inline SVG for the Facebook logo mark — same reasoning as
// GithubMark: avoids pulling in a whole icon-set bundle for one brand mark.
const FacebookMark = ({ size = 16, className = '' }) => (
  <svg
    viewBox="0 0 16 16"
    width={size}
    height={size}
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M16 8.05C16 3.6 12.42 0 8 0S0 3.6 0 8.05c0 4.02 2.93 7.35 6.75 7.95v-5.62H4.72V8.05h2.03V6.28c0-2.01 1.2-3.13 3.02-3.13.87 0 1.79.16 1.79.16v1.97H10.6c-.99 0-1.3.62-1.3 1.26v1.51h2.22l-.35 2.33H9.3V16c3.82-.6 6.75-3.93 6.75-7.95Z" />
  </svg>
);

export default FacebookMark;
