
// import { useGSAP } from "@gsap/react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Project from "./Project.jsx";
//
// gsap.registerPlugin(ScrollTrigger);
//
// function Projects() {
//
//     useGSAP(() => {
//
//         let sections = gsap.utils.toArray(".project-box");
//         gsap.to(sections, {
//             xPercent: -100 * (sections.length - 1),
//             ease: "none",
//             scrollTrigger: {
//                 trigger: ".projects-container", // Changed from .projects-scroll-container
//                 scrub: 1,
//                 pin: true,
//                 snap: 1 / (sections.length - 1),
//                 start: "top top", // Changed from "bottom bottom"
//                 end: () => "+=" + document.querySelector(".projects-scroll-container").offsetWidth,
//                 markers: true,
//             }
//         })
//     }, { scope: "#projects" });
//
//     return (
//         <div id="projects" className="h-screen w-screen flex flex-col justify-start pt-9 items-center gap-7 sm:gap-0 md:gap-10 z-10 relative">
//             <div className="hero-text-comp text-5xl xl:text-6xl font-bold">
//                 Projects
//             </div>
//             {/* Container with proper positioning */}
//             <div className="projects-container relative w-full h-[70vh] overflow-hidden">
//                 <div className="projects-scroll-container flex h-full items-center gap-14 pl-10"
//                      style={{ width: "max-content" }}>
//                     <div className="project-box h-[80%] w-[50vw] min-w-[50vw] rounded-lg bg-zinc-600 flex shadow-xl">
//                         <Project />
//                     </div>
//                     <div className="project-box h-[80%] w-[50vw] min-w-[50vw] rounded-lg bg-zinc-600 flex shadow-xl">
//                         <Project />
//                     </div>
//                     <div className="project-box h-[80%] w-[50vw] min-w-[50vw] rounded-lg bg-zinc-600 flex shadow-xl">
//                         <Project />
//                     </div>
//                     <div className="project-box h-[80%] w-[50vw] min-w-[50vw] rounded-lg bg-zinc-600 flex shadow-xl">
//                         <Project />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }
//
// export default Projects;