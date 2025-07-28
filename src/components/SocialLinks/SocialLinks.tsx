import styles from "./SocialLinks.module.css";
import shortWhatsAppLogo from "../../assets/short-whatsapp-black.png";
import shortInLogo from "../../assets/short-in-black.png";
import { useCursorMagnify } from "../../stores/useCursorMagnify";

const links = [
  {
    icon: <img src={shortWhatsAppLogo} alt="whatsApp logo" />,
    url: "https://wa.me/447586474058",
    label: "Chat on WhatsApp"
  },
  {
    icon: <img src={shortInLogo} alt="linkedIn logo" />,
    url: "https://www.linkedin.com/in/giuseppe-messina/",
    label: "Connect on LinkedIn"
  }
];

export const SocialLinks = () => {
  const { setMagnify } = useCursorMagnify();

  return (
    <section className={styles.socialSection}>
      <h2>Let's connect!</h2>
      <div className={styles.socialLinks}>
        {links.map(({ icon, url, label }) => (
          <a
            key={url}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className={styles.socialLink}
            onMouseEnter={() => setMagnify(true)}
            onMouseLeave={() => setMagnify(false)}
          >
            {icon}
          </a>
        ))}
      </div>
    </section>
  );
};
