import { useCursorMagnify } from "../../stores/useCursorMagnify";
import styles from "./Nav.module.css";
import type { NavItem } from "../../NavContainer/NavContainer";

// const navitems = [
//   { label: "About", link: "#about" },
//   { label: "Works", link: "#works" },
//   { label: "Contact", link: "#contact" }
// ];

type NavProps = {
  navItems: NavItem[];
};

export const Nav = ({ navItems }: NavProps) => {
  const { setMagnify } = useCursorMagnify();
  // const [show, setShow] = useState(false);

  return (
    <>
      <nav className={styles.nav}>
        <a
          href="#"
          onMouseEnter={() => setMagnify(true)}
          onMouseLeave={() => setMagnify(false)}
        >
          <span className={styles.logo}>Gm</span>
        </a>
        <ul>
          {navItems.map((i) => (
            <li
              onMouseEnter={() => setMagnify(true)}
              onMouseLeave={() => setMagnify(false)}
            >
              <a href={i.link}>{i.label}</a>
            </li>
          ))}
        </ul>
      </nav>

      {/* {show ? (
        <nav className={styles.mobileNav}>
          <div className={styles.logoHeader}>
            <a
              href="#"
              onMouseEnter={() => setMagnify(true)}
              onMouseLeave={() => setMagnify(false)}
            >
              <span className={styles.logo}>Gm</span>
            </a>

            <span className={styles.closeIcon}>X</span>
          </div>
          <ul>
            {navitems.map((i) => (
              <li
                onMouseEnter={() => setMagnify(true)}
                onMouseLeave={() => setMagnify(false)}
              >
                <a href={i.link}>{i.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      ) : (
        <button className={styles.hamburger} aria-label="Menu">☰</button>
      )} */}
    </>
  );
};
