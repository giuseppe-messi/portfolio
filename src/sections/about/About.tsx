import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.about}>
      {/* <h2>About</h2> */}
      <div>
        <p>
          I’m Giuseppe Messina, a Senior Front-End Engineer based in London,
          with over eight years of experience architecting and delivering
          high-performance React applications for commercial clients. Although
          most of my professional work lives behind NDAs and copyright
          restrictions, those projects have given me an in-depth understanding
          of scalable component design, rigorous type safety with TypeScript,
          and end-to-end testing strategies that ensure reliability in
          production. To share my approach and proficiency, I’ve built a
          comprehensive GitHub showcase where I’ve distilled the core of my
          React expertise into a single monorepo. Inside you’ll find a
          production-ready Design System demonstrating best practices in
          accessibility, theming, and performance optimization, alongside a
          collection of micro-demos that highlight patterns ranging from state
          management and routing to PWA caching and cross-platform UI. Beyond
          that, I’ve published standalone repositories—everything from Python
          algorithm implementations to a full-stack COVID-19 information
          hub—that exemplify clean code, thoughtful documentation, and robust
          build pipelines. Every repository reflects my commitment to clear,
          self-documenting code: components and hooks are named for intent,
          fully typed, and accompanied by unit and integration tests. Automated
          linting, formatting, and type-checking run in CI to keep standards
          high, while Storybook-powered documentation lives side-by-side with
          interactive examples. Whether you’re looking for a deep dive into
          React fundamentals or a glimpse at my broader programming interests,
          you’ll find it all in one place. I invite you to explore my work and
          connect with me on GitHub: 🔗 https://github.com/giuseppe-messina Feel
          free to reach out via email (giuseppe91messina@gmail.com) or LinkedIn
          if you’d like to discuss potential collaborations, open roles, or just
          geek out over the latest React features.{" "}
        </p>
      </div>
    </section>
  );
};
