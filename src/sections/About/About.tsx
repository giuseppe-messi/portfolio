import clsx from "clsx";
import { AnimatedText } from "../../components/AnimatedText/AnimatedText";
import { useCursorMagnify } from "../../stores/useCursorMagnify";
import styles from "./About.module.css";
export const About = () => {
  const { setMagnify } = useCursorMagnify();

  return (
    <section
      id="about"
      className={clsx("section lightSection", styles.aboutSection)}
    >
      <div className="sectionBox">
        <h2>
          <AnimatedText text="About" />
        </h2>
        <div className={styles.aboutBox}>
          <div>
            <p>
              I’m <strong>Giuseppe Messina</strong>, a{" "}
              <strong>Senior Front-End Engineer</strong> based in London, with
              over eight years of experience building high-performance React
              applications for commercial clients. I care about writing clear,
              maintainable code and building user interfaces that feel smooth
              and reliable. This space is where I share my approach to front-end
              development through open-source projects and practical demos.
              While most of my professional projects are under NDAs and
              copyright restrictions, I’ve put together a{" "}
              <strong>GitHub showcase</strong> where I share my approach to
              modern front-end development.
            </p>

            <br />

            <p>
              The core of the showcase is a <strong>single monorepo</strong>{" "}
              that reflects how I like to work day-to-day. It focuses on{" "}
              <strong>React</strong> and <strong>TypeScript</strong>, with a
              strong emphasis on <strong>type safety</strong>,{" "}
              <strong>scalable component design</strong>, and{" "}
              <strong>clean, maintainable code</strong>. You’ll see examples of
              testing with <strong>Jest</strong> and{" "}
              <strong>React Testing Library</strong>, code consistency enforced
              with <strong>ESLint</strong>, and automated accessibility checks
              using <strong>jest-axe</strong>.
            </p>
          </div>

          <div>
            <p>
              I’ve included patterns like <strong>optimistic UI updates</strong>
              , <strong>authentication flows</strong>,{" "}
              <strong>permission-based routes</strong>, <strong>theming</strong>
              , <strong>state management strategies</strong>, and{" "}
              <strong>performance optimizations</strong>. The monorepo is a{" "}
              <strong>continuous work in progress</strong>, with updates and
              improvements added regularly as I explore new tools and
              techniques.
            </p>

            <br />

            <p>
              If you’re curious about how I approach building modern front-end
              applications, you can explore it all on{" "}
              <a
                href="https://github.com/giuseppe-messi"
                onMouseEnter={() => setMagnify(true)}
                onMouseLeave={() => setMagnify(false)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <strong>my GitHub page</strong>
              </a>
              . Feel free to get in touch using the form below.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
