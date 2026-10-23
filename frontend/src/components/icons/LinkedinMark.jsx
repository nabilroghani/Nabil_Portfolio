// Small inline SVG for the LinkedIn logo mark — same reasoning as
// GithubMark: avoids pulling in a whole icon-set bundle for one brand mark.
const LinkedinMark = ({ size = 16, className = '' }) => (
  <svg
    viewBox="0 0 16 16"
    width={size}
    height={size}
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M13.5 0h-11A2.5 2.5 0 0 0 0 2.5v11A2.5 2.5 0 0 0 2.5 16h11a2.5 2.5 0 0 0 2.5-2.5v-11A2.5 2.5 0 0 0 13.5 0ZM4.94 13.44H2.4V6.02h2.54v7.42ZM3.67 4.97a1.47 1.47 0 1 1 0-2.94 1.47 1.47 0 0 1 0 2.94Zm9.77 8.47h-2.53V9.84c0-.86-.02-1.96-1.2-1.96-1.2 0-1.39.94-1.39 1.9v3.66H5.8V6.02h2.43v1.01h.03c.34-.64 1.17-1.31 2.4-1.31 2.56 0 3.03 1.69 3.03 3.88v3.84Z" />
  </svg>
);

export default LinkedinMark;
