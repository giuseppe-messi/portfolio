import { MobileNav } from "../components/MobileNav/MobileNav";
import { Nav } from "../components/Nav/Nav";
import styles from "./NavContainer.module.css";

export type NavItem = {
  label: string;
  link: string;
};

const navItems: NavItem[] = [
  { label: "About", link: "#about" },
  { label: "Works", link: "#works" },
  { label: "Contact", link: "#contact" }
];

export const NavContainer = () => {
  return (
    <>
      <div className={styles.nav}>
        <Nav navItems={navItems} />
      </div>

      <div className={styles.mobileNav}>
        <MobileNav navItems={navItems} />
      </div>
    </>
  );
};
