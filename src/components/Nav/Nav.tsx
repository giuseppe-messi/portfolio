import { useCursorMagnify } from "../../stores/useCursorMagnify";
import styles from "./Nav.module.css";

import { memo } from "react";

const NAV_ITEMS = [
  { label: "About", linktoSection: "#about" },
  { label: "Works", linktoSection: "#works" },
  { label: "Contact", linktoSection: "#contact" }
];

export const Nav = memo(() => {
  const { setMagnify } = useCursorMagnify();

  return (
    <nav className={styles.nav}>
      <a
        href="#"
        onMouseEnter={() => setMagnify(true)}
        onMouseLeave={() => setMagnify(false)}
      >
        <span className={styles.logo}>Gm</span>
      </a>
      <ul>
        {NAV_ITEMS.map((i) => (
          <li
            onMouseEnter={() => setMagnify(true)}
            onMouseLeave={() => setMagnify(false)}
          >
            <a href={i.linktoSection}>{i.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
});
