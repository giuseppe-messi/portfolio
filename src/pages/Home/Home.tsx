import React from "react";
import styles from "./Home.module.css";
import { ParticlesBackground } from "../../components/ParticlesBackground/ParticlesBackground";
import { Header } from "../../sections/header/Header";
import { CustomCursor } from "../../components/CustomCursor/CustomCursor";
import { Works } from "../../sections/Works/Works";
import { Contact } from "../../sections/Contact/Contact";
import { About } from "../../sections/About/About";
import { NavContainer } from "../../NavContainer/NavContainer";

const Home: React.FC = () => (
  <>
    <NavContainer />
    <CustomCursor />
    <Header />
    <About />
    <div className={styles.container}>
      <Works />
    </div>

    <Contact />

    <ParticlesBackground />
  </>
);

export default Home;
