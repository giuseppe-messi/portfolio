import { AnimatedText } from "../../components/AnimatedText/AnimatedText";
// import styles from "./Works.module.css";

export const Works = () => {
  return (
    <section className="section">
      <h2>
        <AnimatedText text="Works" />
      </h2>
      <div>
        <p>You can find my works: Lorem Iprum</p>
      </div>
      <a href="/Giuseppe-Messina-CV.pdf" download>
        Download my CV
      </a>
    </section>
  );
};
