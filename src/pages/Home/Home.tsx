import React from "react";
import { ParticlesBackground } from "../../components/ParticlesBackground/ParticlesBackground";
import { Header } from "../../sections/header/Header";
import { CustomCursor } from "../../components/CustomCursor/CustomCursor";
import { Works } from "../../sections/Works/Works";
import { Contact } from "../../sections/Contact/Contact";
import { About } from "../../sections/About/About";
import { NavContainer } from "../../components/NavContainer/NavContainer";

const Home: React.FC = () => (
  <>
    <NavContainer />
    <CustomCursor />
    <Header />
    <About />
    <Works />
    <Contact />
    <ParticlesBackground />
  </>
);

export default Home;
