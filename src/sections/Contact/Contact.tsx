import { SayHi } from "../SayHi/SayHi";
import styles from "./Contact.module.css";

export const Contact = () => (
  <section id="contact" className={styles.contact}>
    <SayHi />
    <div className={styles.box}>
      <div></div>

      <form className={styles.contactForm}>
        <label htmlFor="name">
          Name
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Your name"
            aria-label="name"
            required
          />
        </label>

        <label htmlFor="email">
          Email
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Your email"
            aria-label="email"
            required
          />
        </label>

        <label htmlFor="message">
          Message
          <textarea
            id="message"
            name="message"
            placeholder="Say hi..."
            aria-label="message"
            required
          />
        </label>

        <div className={styles.formActions}>
          <button type="submit">Send</button>
          <button type="reset">Cancel</button>
        </div>
      </form>
      <div></div>
    </div>
  </section>
);
