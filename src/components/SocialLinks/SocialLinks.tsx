import styles from "./SocialLinks.module.css";
import whatsAppBlackLogo from "../../assets/whatsapp-black.png";
import inBlackLogo from "../../assets/in-black.png";
import whatsAppWhiteLogo from "../../assets/whatsapp-white.png";
import inWhiteLogo from "../../assets/in-white.png";
import { useCursorMagnify } from "../../stores/useCursorMagnify";

type SocialLinksProps = {
  theme?: "dark" | "light";
};

const logoMap = {
  light: {
    whatsApp: whatsAppBlackLogo,
    linkedin: inBlackLogo
  },
  dark: {
    whatsApp: whatsAppWhiteLogo,
    linkedin: inWhiteLogo
  }
};

export const SocialLinks = ({ theme = "light" }: SocialLinksProps) => {
  const { setMagnify } = useCursorMagnify();
  const { whatsApp, linkedin } = logoMap[theme];

  const links = [
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
    <section className={styles.socialSection}>
      <h3>Let's connect!</h3>
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
