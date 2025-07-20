import styles from "./SayHi.module.css";

export const SayHi = () => (
  // <div className={styles.box}>
  <svg
    className={styles.cutout}
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
          fontSize="130"
          fontWeight="bold"
          fill="black"
        >
          Get in Touch
        </text>
      </mask>
    </defs>
    <rect width="100%" height="100%" fill="black" mask="url(#cutout-text)" />
  </svg>
  // </div>
);
