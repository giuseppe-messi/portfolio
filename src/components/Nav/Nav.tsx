import { useCursorMagnify } from "../../stores/useCursorMagnify";
import styles from "./Nav.module.css";
import type { NavItem } from "../NavContainer/NavContainer";
import { useMemo } from "react";

type NavProps = {
  navItems: NavItem[];
};

export const Nav = ({ navItems }: NavProps) => {
  const { setMagnify } = useCursorMagnify();

  const magnifyEvents = useMemo(
    () => ({
      onMouseEnter: () => setMagnify(true),
      onMouseLeave: () => setMagnify(false)
    }),
    [setMagnify]
  );

  return (
    <nav className={styles.nav}>
      <a href="#header" {...magnifyEvents}>
        <span className={styles.logo}>Gm</span>
      </a>
      <ul>
        {navItems.map((i) => (
          <li {...magnifyEvents}>
            <a href={i.link}>{i.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
