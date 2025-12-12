// import React from 'react';
//
// const Project = () => {
//
//     // const [projects, setProjects] = useState()
//     const projects = [{
//         id:1,
//         title:"Recurring Date Picker",
//         img:"/src/assets/recc_date_picker.png",
//         desc:"A customizable React component for scheduling repeating events and tasks with flexible recurrence rules (daily, weekly, monthly, custom).",
//         techStack:["React","Next.js","mongoDB","mongoose","jwt","Tailwind CSS","Next.js","Rest API"]
//     },
//         {
//             id:3,
//             title:"Web Password Manager",
//             img:"/src/assets/pass_man_2.png",
//             desc:" Perform all CRUD operations—add, view, edit, and delete entries containing URLs, usernames, and encrypted passwords within a clean, responsive interface.",
//             techStack:["React","Node.js","Express.js","MongoDB","Mongoose","jwt","Tailwind CSS","Rest API"]
//         },
//         {
//             id:2,
//             title:"iPhone Webpage Clone",
//             img:"/src/assets/iPhone_pic.png",
//             desc:"Built using Three.js for the 3D model rendering and GSAP for fluid, timeline-based animations to replicate Apple’s signature aesthetic.",
//             techStack:["React","Three.js","GSAP","Tailwind CSS"]
//         }, {
//             id:4,
//             title:"Basic Todo List",
//             img:"/src/assets/todo.png",
//             desc:"A lightweight web app for daily task management. Create, view, edit, and delete tasks with an intuitive interface. Built for simplicity and focus.",
//             techStack:["HTML","CSS","Javascript"]
//         }
//     ];
//
//
//
//     return (
//         <>
//             <div className="project-part1 h-[60%] sm:h-full w-full sm:w-[45%] bg-slate-700 rounded-t-lg sm:rounded-t-none sm:rounded-l-lg flex justify-center items-center py-1 sm:py-1 px-4 sm:px-2">
//               <img src="/src/assets/todo.png" className="h-full w-full object-contain rounded-xl sm:rounded-md" alt="Project" />
//             </div>
//             {/*<div className="project-part2 p-6 h-full w-[55%] bg-cyan-800 rounded-r-lg flex justify-center items-center text-white">*/}
//             <div className="project-part2 p-3 md:p-6 lg:py-2 xl:py-10 h-[40%] sm:h-full w-full sm:w-[55%] bg-slate-800 rounded-b-lg sm:rounded-b-none sm:rounded-r-lg flex flex-col justify-start items-start gap-3 md:gap-4">
//                <h1 className="text-2xl font-bold">React Date Picker</h1>
//                <p className="block project-p text-sm sm:text-lg ">A simple and customizable date picker component for React.A simple and customizable date picker component for React.</p>
//                <div className="tech-stack flex gap-2 flex-wrap">
//                    <span className="h-fit w-fit py-1 px-2 sm:px-3 text-sm rounded-md bg-[#293556]">React</span>
//                    <span className="h-fit w-fit py-1 px-2 sm:px-3 text-sm rounded-md bg-[#293556]">Next.js</span>
//                    <span className="h-fit w-fit py-1 px-2 sm:px-3 text-sm rounded-md bg-[#293556]">Next.js</span>
//                    <span className="h-fit w-fit py-1 px-2 sm:px-3 text-sm rounded-md bg-[#293556]">Next.js</span>
//                    <span className="h-fit w-fit py-1 px-2 sm:px-3 text-sm rounded-md bg-[#293556]">Next.js</span>
//                    <span className="h-fit w-fit py-1 px-2 sm:px-3 text-sm rounded-md bg-[#293556]">Next.js</span>
//                    <span className="h-fit w-fit py-1 px-2 sm:px-3 text-sm rounded-md bg-[#293556]">Next.js</span>
//                </div>
//                 <a href="#" className="sm:px-3 sm:py-2 px-2 py-1 bg-indigo-500 text-black text-lg font-medium rounded-sm flex gap-3 justify-center items-center">View Code</a>
//             </div>
//         </>
//     );
//
// };
//
// export default Project;

import React from 'react';

const Project = (props) => {
    const myProject = props.myProject;
    // console.log("My Project: ",myProject);
    // console.log("Title: ", myProject.title, "Desc: ", myProject.desc, "Tech Stack: ", myProject.techStack, "Img: ", myProject.img, "");

    return (
        <>
            <div className="project-part1 h-[60%] sm:h-full w-full sm:w-[45%] bg-slate-700 rounded-t-lg sm:rounded-t-none sm:rounded-l-lg flex justify-center items-center py-1 sm:py-1 px-4 sm:px-2">
                <img src={myProject.img} className="h-full w-full object-contain rounded-xl sm:rounded-md" alt="Project" />
            </div>
            <div className="project-part2 p-3 md:p-6 lg:py-2 xl:py-10 h-[50%] sm:h-full w-full sm:w-[55%] bg-slate-800 rounded-b-lg sm:rounded-b-none sm:rounded-r-lg flex flex-col justify-start items-start gap-3 md:gap-4 text-white">
                <h1 className="text-2xl font-bold">{myProject.title}</h1>
                <p className="block project-p text-sm sm:text-lg ">{myProject.desc}</p>
                <div className="tech-stack flex gap-2 flex-wrap">
                    {myProject.techStack.map((tech,index)=>(
                        <span key={index} className="h-fit w-fit py-1 px-2 sm:px-3 text-sm rounded-md bg-[#293556]">{tech}</span>
                    ))}
                </div>
                <a href={myProject.vc_link} target="_blank" className="sm:px-3 sm:py-2 px-2 py-1 bg-indigo-500 text-black text-lg font-medium rounded-sm flex gap-3 justify-center items-center">View Code</a>
            </div>
        </>
    );

};

export default Project;