import clsx from "clsx";
import { GmLogo } from "../GmLogo/GmLogo";
import { SocialLinks } from "../SocialLinks/SocialLinks";
import styles from "./MobileNav.module.css";
import { useNav } from "../../hooks/useNav";

export const MobileNav = () => {
  const { navItems, show, handleToggleNav, magnifyEvents } = useNav();

  return (
    <nav
      className={clsx(styles.nav, show && styles.open)}
      id="toggle-menu"
      aria-label="Mobile navigation"
    >
      {show && (
        <>
          <div className={styles.logoHeader}>
            <a href="#header" onClick={handleToggleNav} {...magnifyEvents}>
              <GmLogo />
            </a>

            <button
              className={styles.closeIcon}
              onClick={handleToggleNav}
              {...magnifyEvents}
              aria-expanded={show}
              aria-label="Open menu"
            >
              &times;
            </button>
          </div>
          <div className={styles.navSocialsBox}>
            <ul>
              {navItems.map((i) => (
                <li key={i.label}>
                  <a href={i.link} onClick={handleToggleNav} {...magnifyEvents}>
                    {i.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className={styles.socialLinksBox}>
              <SocialLinks />
            </div>
          </div>
        </>
      )}

      {!show && (
        <button
          className={styles.hamburger}
          onClick={handleToggleNav}
          {...magnifyEvents}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      )}
    </nav>
  );
};
