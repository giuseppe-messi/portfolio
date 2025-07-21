import { SayHi } from "../SayHi/SayHi";
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      <SayHi />
      <form className={styles.contactForm}>
        <input name="name" type="text" placeholder="Your name" required />
        <input name="email" type="email" placeholder="Your email" required />
        <textarea name="message" placeholder="Say hi..." required></textarea>

        <div className={styles.formActions}>
          <button type="submit">Send</button>
          <button type="reset">Cancel</button>
        </div>
      </form>
    </section>
  );
};
