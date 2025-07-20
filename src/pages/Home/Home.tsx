import React from "react";
import styles from "./Home.module.css";
import { ParticlesBackground } from "../../components/ParticlesBackground/ParticlesBackground";
import { Header } from "../../sections/header/Header";
import { CustomCursor } from "../../components/CustomCursor/CustomCursor";
import { Nav } from "../../components/Nav/Nav";
import { Works } from "../../sections/Works/Works";
import { SayHi } from "../../sections/SayHi/SayHi";
import { Contact } from "../../sections/Contact/Contact";
import { About } from "../../sections/about/About";

const Home: React.FC = () => (
  <>
    <div className={styles.container}>
      <Nav />
      <CustomCursor />
      <Header />
      <About />
      <Works />
    </div>

    <div className={styles.parallax}>
      <SayHi />
      <Contact />
    </div>

    <ParticlesBackground />
  </>
);

export default Home;
