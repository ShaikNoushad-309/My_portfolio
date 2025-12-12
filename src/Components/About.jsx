// import React from 'react';
// import gsap from "gsap";
// import {useGSAP} from "@gsap/react";
// import {ScrollTrigger} from "gsap/all";
//
// gsap.registerPlugin(ScrollTrigger);
//
// const About = () => {
//
//     useGSAP(()=>{
//         const myGsapTimeline = gsap.timeline();
//
//         myGsapTimeline.from(".about-comp",{
//             y:20,
//             duration:1,
//             ease:"easeInOutExpo",
//             opacity:0,
//             stagger:0.3,
//             scrollTrigger:{
//                 trigger:"#about",
//                 // scroller:"body",
//                 start:`center center`,
//                 scrub:true,
//                 pin:true,
//             },
//         });
//
//     },[]);
//
//     return (
//         <div id="about"  className="main-about bg-teal-600 z-10 h-screen sm:h-auto min-h-[60dvh] sm:min-h-[80dvh] md:h-screen w-screen flex flex-col justify-start sm:justify-center  items-center md:flex-row ">
//            <div  className="about1 h-[50%] md:h-full w-[40dvw]  flex justify-center items-center">
//
//                {/*<div className="myPic h-[80%] min-w-[260px] min-h-[250px] sm:w-[42%]  md:w-[52%]  lg:w-[58%]   z-10 ">*/}
//
//                <div className="myAboutPic about-comp md:block hidden h-[80%] min-w-[260px] min-h-[250px] sm:w-[42%]  md:w-[52%]  lg:w-[58%]   z-10 ">
//                    {/*<img src="/src/assets/IMG_20251128_123625-removebg-preview.png" alt="myPic" className="z-0 bg-cover bg-center bg-transparent h-full w-full rounded-full"/>*/}
//                    <div className="hero-img z-0 bg-cover bg-center bg-black border-5  h-full w-full rounded-bl-full">
//                        {/*<img src="/src/assets/IMG_20251128_123625-removebg-preview.png" alt="myPic" className="rounded-bl-full"/>*/}
//                    </div>
//                </div>
//            </div>
//
//             <div  className="about2  h-full pb-12 md:pb-0 md:w-[60dvw]   flex flex-col  sm:justify-center items-center sm:items-start  gap-7 sm:gap-15 lg:gap-10 ">
//                 <h1 className="about-comp about-head translate-y-10  top-[10%] text-5xl xl:text-6xl  font-bold  ">About Me</h1>
//                 <div className="about-p-div translate-y-10   px-8  md:p-0 md:w-[90%] h-auto  flex flex-col w-full   min-h-fit space-x-4">
//                     <p className="about-p text-sm sm:text-[1em]  lg:text-lg ">
//                         <span className="about-comp about-p-span text-justify">Hello! I'm <span className="highlighted-text">Shaik Mohammed Noushad</span>, an aspiring Computer Science undergraduate and passionate  MERN Stack Developer.</span>
//                         <span className="about-comp about-p-span text-justify">I specialize in building responsive, user‑focused web applications using React.js, Next.js, Node.js, Express.js, and MongoDB.</span>
//                         <span className="about-comp about-p-span text-justify">With a strong grasp of Data Structures & Algorithms and additional knowledge of Java, C, and Python.</span>
//                         <span className="about-comp about-p-span text-justify">Passionate about the entire development lifecycle from designing intuitive UI/UX to implementing scalable server logic and database management.</span>
//                         <span className="about-comp about-p-span text-justify">I am deeply committed to mastering full-stack development, continuously learning to blend modern web technologies with strong engineering principles.</span>
//                     </p>
//                 </div>
//                 <button
//                     className="about-comp about-btn translate-y-10  bg-indigo-500 max-w-fit text-black p-2  px-6 min-w-fit text-lg flex flex-wrap rounded-lg md:font-semibold cursor-pointer ml-2">
//                     Projects
//                 </button>
//             </div>
//
//         </div>
//     );
// };
//
// export default About;


import React from 'react';
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import {ScrollTrigger} from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const About = () => {

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if(element){
            element.scrollIntoView({behavior: "smooth",block:"start"});
        }
    };


    const handleScrollToSection = (sectionId) => {
        // already in home page,just need to scroll
        scrollToSection(sectionId);
    };

    useGSAP(()=>{
        const myGsapTimeline = gsap.timeline();

        myGsapTimeline.from(".about-comp",{
            y:20,
            duration:1,
            ease:"easeInOutExpo",
            opacity:0,
            stagger:0.3,
            scrollTrigger:{
                trigger:"#about",
                // scroller:"body",
                start:`center center`,
                scrub:true,
                pin:true,
            },
        });

    },[]);

    return (
        <div id="about"  className="main-about  z-10 h-screen sm:h-auto min-h-[60dvh] sm:min-h-[80dvh] md:h-screen w-screen flex flex-col justify-start sm:justify-center  items-center md:flex-row ">
            <div  className="about1 h-[50%] md:h-full w-[40dvw] justify-center items-center  ">

                <div className="myAboutPic about-comp md:block  hidden h-[80%] min-w-[260px] min-h-[250px] sm:w-[42%]  md:w-[52%]  lg:w-[58%] mt-10  z-10 ">
                    {/*<img src="/src/assets/IMG_20251128_123625-removebg-preview.png" alt="myPic" className="z-0 bg-cover bg-center bg-transparent h-full w-full rounded-full"/>*/}
                    <div className="hero-img z-0 bg-cover bg-center bg-black border-5  h-full w-full rounded-bl-full">
                        <img src="/assets/temp3.jpg" alt="myPic" className="rounded-bl-full bg-center opacity-100 h-full w-full"/>
                    </div>
                </div>
            </div>

            <div  className="about2  h-full pb-12 md:pb-0 md:w-[60dvw]   flex flex-col  justify-center  sm:items-start  gap-7 sm:gap-15 lg:gap-10 ">
                <h1 className="about-comp about-head translate-y-10  top-[10%] text-5xl xl:text-6xl  font-bold  ">About Me</h1>
                <div className="about-p-div translate-y-10   px-8  md:p-0 md:w-[90%] h-auto  flex flex-col w-full   min-h-fit space-x-4">
                <p className="about-p text-sm sm:text-[1em] lg:text-lg">
                    <span className="about-comp about-p-span text-justify">
                       Hello! I'm <span className="highlighted-text">Shaik Mohammed Noushad</span>, an aspiring&nbsp;
                       <span className="highlighted-text">Computer Science Undergraduate</span> and passionate&nbsp;
                       <span className="highlighted-text">MERN Stack Developer</span>.
                    </span>

                    <span className="about-comp about-p-span text-justify">
                           I specialize in building responsive, user‑focused web applications using modern technologies like
                           <span className="highlighted-text"> React.js</span>, <span className="highlighted-text">Next.js</span>,
                        &nbsp;<span className="highlighted-text">Node.js</span>, <span className="highlighted-text"> Express.js</span>,
                            and <span className="highlighted-text"> MongoDB</span>.
                    </span>

                    <span className="about-comp about-p-span text-justify">
                            Alongside my web development skills, I have a strong foundation in&nbsp;
                            <span className="highlighted-text">Data Structures & Algorithms</span> and practical experience with
                            programming languages including <span className="highlighted-text">Java</span>,&nbsp;
                            <span className="highlighted-text">C</span>, and <span className="highlighted-text">Python</span>.
                    </span>

                    <span className="about-comp about-p-span text-justify">
                          My passion lies in the entire development lifecycle, from designing intuitive&nbsp;
                          <span className="highlighted-text">UI/UX interfaces</span> to implementing scalable server architectures
                          and efficient <span className="highlighted-text">database management</span> solutions.
                    </span>

                    <span className="about-comp about-p-span text-justify">
                         I am deeply committed to mastering <span className="highlighted-text">full‑stack development</span>
                         &nbsp;principles and continuously learning to blend cutting‑edge web technologies with robust
                         software engineering practices.
                    </span>
                </p>

                </div>
                <button onClick={()=>{handleScrollToSection("projects")}}
                    className="about-comp about-btn translate-y-10  bg-indigo-500 max-w-fit text-black p-2  px-6 min-w-fit text-lg flex flex-wrap rounded-lg md:font-semibold cursor-pointer ml-2">
                    Projects
                </button>
            </div>

        </div>
    );
};

export default About;