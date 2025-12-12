import React from 'react';
import { FaJsSquare } from "react-icons/fa";
import { SiSocketdotio } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import { RiTailwindCssFill } from "react-icons/ri";
import { GrMysql } from "react-icons/gr";
import { FaGitAlt } from "react-icons/fa";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {

    useGSAP(()=>{

        const gsapTimeline = gsap.timeline();

        gsapTimeline.from(".box",{
            y:20,
            duration:1,
            ease:"easeInOutExpo",
            opacity:0,
            stagger:0.5,
            scrollTrigger:{
                trigger:"#skills",
                scroller:"body",
                start:"center center",
                scrub:true,
                pin:true,
            },
        });

    },[]);


    return (
        <div id="skills" className=" mx-auto  h-auto min-h-screen w-screen flex flex-col pt-0 sm:pt-[15dvh]  items-center gap-7 sm:gap-0 md:gap-0 z-10">
            <div className=" text-5xl xl:text-6xl  font-bold block space-x-4">
                <span className="box">My</span>
                <span className="box">Skills</span>
            </div>
            <div className=" boxes-container  container gap-7 h-[80%] w-[80%] flex  flex-wrap justify-center items-center   ">
               {/*<div className="box text-lg border-l-blue-600 border-r-blue-600  border-4 w-auto h-auto p-3 flex flex-col gap-2 justify-center items-center">*/}

               {/*<div className="box text-lg flex flex-col gap-2 justify-center items-center">*/}
               {/*    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">*/}
               {/*    <FaJsSquare className="h-20 w-20 md:hover:scale-110 cursor-pointer bg-white text-yellow-500"/>*/}
               {/*    </a>*/}
               {/*    Javascript*/}
               {/*</div>*/}

                <div className="box text-lg flex flex-col gap-2 justify-center items-center">
                    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
                        <img alt="js" loading="lazy"
                             className="rounded-lg  transition-transform duration-300 md:hover:scale-110 h-20 w-20 "
                             src="/src/assets/js_logo.png"/>
                    </a>
                    Javascript
                </div>

                <div className="box text-lg flex flex-col gap-2 justify-center items-center">
                    <a href="https://react.dev/" target="_blank">
                        <FaReact  className="h-20 w-20 md:hover:scale-110 cursor-pointer text-blue-500"/>
                    </a>
                    React
                </div>
                <div className="box text-lg flex flex-col gap-2 justify-center items-center">
                    <a href="https://nodejs.org/en" target="_blank">
                        <FaNodeJs className="h-20 w-20 md:hover:scale-110 cursor-pointer  text-green-400"/>
                    </a>
                    Node.js
                </div>
                <div className="box text-lg flex flex-col gap-2 justify-center items-center">
                    <a href="https://expressjs.com/" target="_blank">
                        <SiExpress className="h-20 w-20 md:hover:scale-110   cursor-pointer"/>
                    </a>
                    Expresss.js
                </div>
                <div className="box text-lg flex flex-col gap-2 justify-center items-center">
                    <a href="https://www.mongodb.com/" target="_blank">
                        <BiLogoMongodb  className="h-20 w-20 md:hover:scale-110  cursor-pointer text-green-900"/>
                    </a>
                    MongoDB
                </div>
                <div className="box text-lg flex flex-col gap-2 justify-center items-center">
                    <a href="https://nextjs.org/" target="_blank">
                        <img alt="next.js" loading="lazy"
                             className=" transition-transform duration-300 md:hover:scale-110 h-20 w-20"
                             src="https://sagarshah.dev/_next/static/media/icon-nextjs.3f6cd734.svg"/>
                    </a>
                    Next.js
                </div>
                <div className="box text-lg flex flex-col gap-2 justify-center items-center">

                    <a href="https://socket.io/" target="_blank">
                        <SiSocketdotio className=" h-20 w-20 md:hover:scale-110 cursor-pointer " />
                    </a>
                    Socket.io
                </div>

                <div className="box text-lg flex flex-col gap-2 justify-center items-center">
                    <a href="https://tailwindcss.com/" target="_blank">
                        <RiTailwindCssFill   className="h-20 w-20 md:hover:scale-110 cursor-pointer text-blue-400"/>
                    </a>
                    TailwindCSS
                </div>
                <div className="box text-lg flex flex-col gap-2 justify-center items-center">
                    <a href="https://www.mysql.com/" target="_blank">
                        <GrMysql    className=" h-20 w-20 md:hover:scale-110 cursor-pointer text-blue-400"/>
                    </a>
                    My SQL
                </div>
                <div className="box text-lg flex flex-col gap-2 justify-center items-center">
                    <a href="https://git-scm.com/" target="_blank">
                        <FaGitAlt  className="h-20 w-20  md:hover:scale-110 cursor-pointer text-orange-500"/>
                    </a>
                    Git & Github
                </div>
                <div className="box text-lg flex flex-col gap-2 justify-center items-center">
                        <a href="https://gsap.com/" target="_blank">
                            <img alt="gsap" loading="lazy"
                                 className="transition-transform   rounded-lg duration-300 md:hover:scale-110 h-20 w-20"
                                 // src="https://external-content.duckduckgo.com/ip3/gsap.com.ico"/>

                                 // src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.hP0q4TFRSERfy4MzjviQNQHaHa%3Fpid%3DApi%26ucfimg%3D1&f=1&ipt=58cadb84be55b868f514c9021271fe8116e2d69d134c18ba4304d3793380db36"/>
                                 src="/src/assets/gsap_logo.png"/>
                        </a>
                    GSAP
                </div>
            </div>
        </div>
    );
};

export default Skills;