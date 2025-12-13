import React,{useRef} from 'react';
import Project from "./Project.jsx";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import {ScrollTrigger} from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
    const containerRef = useRef(null);
    const projectsRef = useRef(null);

    const projects = [{
        id:1,
        title:"Recurring Date Picker",
        img:"/assets/recc_date_picker.png",
        desc:"A customizable React component for scheduling repeating events and tasks with flexible recurrence rules (daily, weekly, monthly, custom).",
        techStack:["React","Next.js","mongoDB","mongoose","jwt","Tailwind CSS","Next.js","Rest API"],
        vc_link:"https://github.com/ShaikNoushad-309/Recurring-Date-Picker"
    },
        {
            id:2,
            title:"Web Password Manager",
            img:"/assets/pass_man_2.png",
            desc:" Perform all CRUD operations—add, view, edit, and delete entries containing URLs, usernames, and encrypted passwords within a clean, responsive interface.",
            techStack:["React","Node.js","Express.js","MongoDB","Mongoose","Tailwind CSS","Rest API"],
            vc_link:"https://github.com/ShaikNoushad-309/Password-Manager"
        },
        {
            id:3,
            title:"iPhone Webpage Clone",
            img:"/assets/iPhone_pic.png",
            desc:"Built using Three.js for the 3D model rendering and GSAP for fluid, timeline-based animations to replicate Apple’s signature aesthetic.",
            techStack:["React","Three.js","GSAP","Tailwind CSS"],
            vc_link:"https://github.com/ShaikNoushad-309/iPhone-Web"
        }, {
            id:4,
            title:"Basic Todo List",
            img:"/assets/todo.png",
            desc:"A lightweight web app for daily task management. Create, view, edit, and delete tasks with an intuitive interface. Built for simplicity and focus.",
            techStack:["HTML","CSS","Javascript"],
            vc_link:"https://github.com/ShaikNoushad-309/Basic-Todo-Web-App"
        }, {
            id:5,
            title:"Twitter UI Clone",
            img:"/assets/twitter_clone.png",
            desc:"A pixel-perfect, responsive clone of Twitter’s main interface built purely with HTML and CSS. ",
            techStack:["HTML","CSS","Javascript"],
            vc_link:"https://github.com/ShaikNoushad-309/Twitter-Clone"
        }
        ];


    useGSAP(()=>{

        let sections = gsap.utils.toArray(".project-box");

        gsap.to(sections,{
            xPercent: -100 * (sections.length - 1),
            ease:"none",
            scrollTrigger:{
                // trigger:".projects-container",
                trigger:"#projects",
                scrub:1,
                pin:true,
                snap: 1 / (sections.length - 1),
                end: () => "+=" + document.querySelector(".projects-scroll-container").offsetWidth + "+100",
            }
        })
    },[]);


    return (
        <div id="projects" className="h-auto min-h-screen w-screen flex flex-col justify-start pt-20 items-center gap-7 sm:gap-0 md:gap-10 z-10 relative">
            <div className="hero-text-comp text-5xl xl:text-6xl font-bold block">
                Projects
            </div>


            <div ref={containerRef} className="projects-container relative w-full h-[80dvh] sm:h-[65dvh]  overflow-hidden">


                <div ref={projectsRef} className="projects-scroll-container absolute left-0 flex h-full items-center gap-14 pl-10"
                     style={{ width: "max-content" }}>

                    {projects.map((project)=>{
                        return   <div key={project.id} className="project-box h-[90%] sm:h-[80%] lg:w-[65dvw] xl:w-[60dvw] sm:w-[90dvw] w-[95dvw] max-w-screen min-w-[60dvw] rounded-lg  flex flex-col sm:flex-row justify-center items-center shadow-xl">
                            <Project myProject={project} />
                        </div>
                    })}

                </div>
            </div>
        </div>
    );
};

export default Projects;
