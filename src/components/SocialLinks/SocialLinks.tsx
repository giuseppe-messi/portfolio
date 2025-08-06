import styles from "./SocialLinks.module.css";
import whatsAppBlackLogo from "../../assets/whatsapp-black.png";
import inBlackLogo from "../../assets/in-black.png";
import whatsAppWhiteLogo from "../../assets/whatsapp-white.png";
import inWhiteLogo from "../../assets/in-white.png";
import { useCursorMagnify } from "../../stores/useCursorMagnify";

type SocialLinksProps = {
  style?: "dark" | "light";
};

const iconsMap = {
  light: {
    whatsApp: whatsAppWhiteLogo,
    linkedin: inWhiteLogo
  },
  dark: {
    whatsApp: whatsAppBlackLogo,
    linkedin: inBlackLogo
  }
};

export const SocialLinks = ({ style = "light" }: SocialLinksProps) => {
  const { setMagnify } = useCursorMagnify();
  const { whatsApp, linkedin } = iconsMap[style];

  const icons = [
    {
      icon: <img src={whatsApp} alt="whatsApp logo" />,
      url: "https://wa.me/447586474058",
      label: "Chat on WhatsApp"
    },
    {
      icon: <img src={linkedin} alt="linkedIn logo" />,
      url: "https://www.linkedin.com/in/giuseppe-messina/",
      label: "Connect on LinkedIn"
    }
  ];

  return (
    <section className={styles.socialSection} aria-label="Social links">
      <h3>Let's connect!</h3>
      <nav className={styles.socialLinks}>
        {icons.map(({ icon, url, label }) => (
          <a
            key={url}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${label} (opens in a new tab)`}
            className={styles.socialLink}
            onMouseEnter={() => setMagnify(true)}
            onMouseLeave={() => setMagnify(false)}
          >
            {icon}
          </a>
        ))}
      </nav>
    </section>
  );
};
