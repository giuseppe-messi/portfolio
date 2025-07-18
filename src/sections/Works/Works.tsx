import styles from "./Works.module.css";

export const Works = () => {
  return (
    <section className={styles.works}>
      {/* <h2>Works</h2> */}
      <div>
        <p>You can find my works: Lorem Iprum</p>
      </div>
      <a href="/Giuseppe-Messina-CV.pdf" download>
        Download my CV
      </a>
    </section>
  );
};
