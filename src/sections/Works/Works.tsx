import clsx from "clsx";
import { AnimatedText } from "../../components/AnimatedText/AnimatedText";
import { useCursorMagnify } from "../../stores/useCursorMagnify";
import styles from "./Works.module.css";

export const Works = () => {
  const { setMagnify } = useCursorMagnify();

  return (
    <section
      id="works"
      className={clsx("section darkSection", styles.worksSection)}
    >
      <div className="sectionBox">
        <h2>
          <AnimatedText text="Works" />
        </h2>

        <div className={styles.box}>
          <div>
            <p>
              Most of my open-source code is structured inside a single monorepo
              named:{" "}
              <a
                href="https://github.com/giuseppe-messi/react-lab-mono"
                onMouseEnter={() => setMagnify(true)}
                onMouseLeave={() => setMagnify(false)}
              >
                <strong>React Lab Mono</strong>
              </a>{" "}
              , designed to reflect how I approach building modern front-end
              applications. The repository is organized into two main areas:
            </p>
            <br />

            <ul>
              <li>
                <strong>packages/ui</strong>: a production-ready set of fully
                typed, accessible React components, built with scalability,
                theming, and testing in mind.
              </li>
              <br />
              <li>
                <strong>apps/</strong>: a set of focused, real-world demos
                showcasing practical patterns.
              </li>
              <br />
            </ul>

            <p>
              The monorepo’s{" "}
              <a
                href="https://github.com/giuseppe-messi/react-lab-mono"
                onMouseEnter={() => setMagnify(true)}
                onMouseLeave={() => setMagnify(false)}
              >
                <strong>README</strong>
              </a>{" "}
              provides a full breakdown of its structure, the technology stack,
              and where to find each feature or example. You can explore the
              directory layout and jump straight into the specific areas you’re
              interested in.
            </p>
          </div>

          <div>
            <p>
              The four featured <strong>Examples &amp; Micro-demos</strong>{" "}
              currently include:
            </p>
            <br />

            <ul>
              <li>
                <strong>Auth-Guarded Docs &amp; SSR</strong>: authentication
                flows, protected routes, and SSR/SSG patterns.
              </li>
              <li>
                <strong>State &amp; API Playground</strong>: state management
                with optimistic updates, API fetching, and testing strategies.
              </li>
              <li>
                <strong>PWA Cache Demo</strong>: progressive web app setup with
                service workers, caching, and offline support.
              </li>
              <li>
                <strong>Cross-Platform UI</strong>: shared component styling
                across web and native using React Native Web.
              </li>
            </ul>
            <br />
            <p>
              In addition, you’ll find a few smaller standalone repositories on{" "}
              <a
                href="https://github.com/giuseppe-messi/giuseppe-messi"
                onMouseEnter={() => setMagnify(true)}
                onMouseLeave={() => setMagnify(false)}
              >
                <strong>my GitHub</strong>
              </a>
              , including my portfolio and personal experiments.
            </p>

            <br />

            <p>
              You can also{" "}
              <a
                href="/Giuseppe-Messina-CV.pdf"
                download
                onMouseEnter={() => setMagnify(true)}
                onMouseLeave={() => setMagnify(false)}
              >
                <strong>download my CV</strong>
              </a>{" "}
              for a summary of my background and experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
