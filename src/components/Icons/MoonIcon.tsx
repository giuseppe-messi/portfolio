export function MoonIcon({ size = 28, className = "", ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-label="Moon icon"
      className={className}
      fill="#f1f1f1"
      stroke="none"
      {...props}
    >
      <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
    </svg>
  );
}
