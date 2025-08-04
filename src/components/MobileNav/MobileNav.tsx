import clsx from "clsx";
import { GmLogo } from "../GmLogo/GmLogo";
import type { NavItem } from "../Nav/Nav";
import { SocialLinks } from "../SocialLinks/SocialLinks";
import styles from "./MobileNav.module.css";

type MobileNavProps = {
  items: NavItem[];
  show: boolean;
  onToggleNav: () => void;
  magnifyEvents: {
    onMouseEnter: () => void;
    onMouseLeave: () => void;
  };
};

export const MobileNav = ({
  items,
  show,
  onToggleNav,
  magnifyEvents
}: MobileNavProps) => {
  return (
    <nav className={clsx(styles.nav, show && styles.open)}>
      {show && (
        <>
          <div className={styles.logoHeader}>
            <a href="#header" onClick={onToggleNav} {...magnifyEvents}>
              <GmLogo />
            </a>

            <button
              className={styles.closeIcon}
              onClick={onToggleNav}
              {...magnifyEvents}
            >
              &times;
            </button>
          </div>
          <div className={styles.navSocialsBox}>
            <ul>
              {items.map((i) => (
                <li key={i.label}>
                  <a href={i.link} onClick={onToggleNav} {...magnifyEvents}>
                    {i.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className={styles.socialLinksBox}>
              <SocialLinks theme="dark" />
            </div>
          </div>
        </>
      )}

      {!show && (
        <button
          className={styles.hamburger}
          onClick={onToggleNav}
          {...magnifyEvents}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      )}
    </nav>
  );
};
