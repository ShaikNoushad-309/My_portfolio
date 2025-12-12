import React from 'react';
import About from "./About.jsx";
import Skills from "./Skills.jsx";
import Projects from "./Projects.jsx";
import Contact from "./Contact.jsx";
import Navbar from "./Navbar.jsx";
import Hero from "./Hero.jsx";
import Footer from "./Footer.jsx";

const Home = () => {

    return (
        <>
         <Navbar/>
         <Hero/>
         <About/>
         <Skills/>
         <Projects/>
         <Contact />
         <Footer/>
        </>
    );
};

export default Home;