import styles from "./SayHi.module.css";

export const SayHi = () => (
  <svg
    className={styles.sayhi}
    viewBox="0 0 800 200"
    preserveAspectRatio="xMidYMid meet"
  >
    <defs>
      <mask id="cutout-text">
        <rect width="100%" height="100%" fill="white" />
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dy=".35em"
          fontSize="80"
          fontWeight="bold"
          fill="var(--color-primary)"
          className={styles.text}
        >
          Get in Touch
        </text>
      </mask>
    </defs>
    <rect
      width="100%"
      height="100%"
      fill="var(--color-primary)"
      mask="url(#cutout-text)"
    />
  </svg>
);
