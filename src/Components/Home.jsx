import React from 'react';
import About from "./About.jsx";
import Skills from "./Skills.jsx";
import Projects from "./Projects.jsx";
import Contact from "./Contact.jsx";
import Navbar from "./Navbar.jsx";
import Hero from "./Hero.jsx";
import Footer from "./Footer.jsx";
import Education from "./Education.jsx";

const Home = () => {

    return (
        <>
         <Navbar/>
            <div className="overflow-x-hidden">
               <Hero/>
               <About/>
                <Education/>
               <Skills/>
               <Projects/>
               <Contact />
               <Footer/>
            </div>
        </>
    );
};

export default Home;