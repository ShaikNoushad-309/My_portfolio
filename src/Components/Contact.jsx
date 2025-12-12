// import React from 'react';
// import { BiCopy } from "react-icons/bi";
//
// const Contact = () => {
//     return (
//         <div id="contact" className="h-screen w-screen bg-teal-600 flex flex-col justify-center items-center text-white font-bold text-3xl">
//             <div className="contact-head h-[20%] w-fit text-5xl xl:text-6xl font-bold  flex justify-center items-end">
//                 Contact Me
//             </div>
//           <div className="contact-body flex h-[80%] w-full flex-col sm:flex-row justify-center items-center">
//              <div className="contact-body-part1 h-full w-[40%] bg-slate-700  flex flex-col justify-center items-center gap-3">
//                  <div className="cbp11 h-[70%] w-[60%] flex flex-col justify-center items-start bg-black">
//                      <div className="email relative text-lg h-fit w-fit underline ">shaiknoushad1024@gmail.com
//                          <BiCopy className="absolute top-0 right-[-35px] h-7 w-7 text-xl text-white" />
//                      </div>
//                      <div className="email relative text-lg h-fit w-fit underline ">+91 9966202818
//                          <BiCopy className="absolute top-0 right-[-35px] h-7 w-7 text-xl text-white" />
//                      </div>
//                      <div className="email relative text-lg h-fit w-fit underline ">shaiknoushad1024@gmail.com
//                          <BiCopy className="absolute top-0 right-[-35px] h-7 w-7 text-xl text-white" />
//                      </div>
//                  </div>
//                  <div className="cbp11 h-[20%] w-[80%] flex flex-col justify-start items-center bg-black">
//
//                  </div>
//              </div>
//               <div className="contact-body-part2 h-full w-[60%] bg-slate-800  flex justify-center items-center">
//                   Contact form
//               </div>
//           </div>
//
//         </div>
//     );
// };
//
// export default Contact;

import React from 'react';
import Contact1 from "./Contact1.jsx";
import ContactForm from "./ContactForm.jsx";

const Contact = () => {
    return (
        <div id="contact" className="min-h-screen h-auto w-screen  flex flex-col justify-center items-center  font-bold text-3xl">
            <div className="contact-head h-[20%] w-fit text-5xl xl:text-6xl font-bold  flex justify-center items-end">
                Get In Touch
            </div>
            <div className="contact-body  flex h-auto xl:h-[80%] w-full flex-col xl:flex-row justify-center items-center">
                <div className="contact-body-part1  h-full w-[40%] flex flex-col justify-center items-center gap-3">
                    <Contact1/>

                    {/*<div className="cbp12 h-[20%] w-[60%] flex flex-col justify-start items-start bg-zinc-600 gap-4">*/}
                    {/*    <p className="text-sm sm:text-lg">Or you can contact me directly at:</p>*/}
                    {/*    <div className="btns h-9 w-[50%] flex justify-center gap-5  ">*/}
                    {/*        <a href="https://www.linkedin.com/in/smdnoushad/" target="_blank"  className="hover:text-indigo-500">*/}
                    {/*            <FaLinkedin className="hero-img h-[2em] w-[2em] xl:w-[1.3em] xl:h-[1.3em] " />*/}
                    {/*        </a>*/}
                    {/*        <a href="https://github.com/ShaikNoushad-309/" target="_blank" className="hover:text-indigo-500">*/}
                    {/*            <FaGithub className="hero-img h-[2em] w-[2em] xl:w-[1.3em] xl:h-[1.3em] " />*/}
                    {/*        </a>*/}
                    {/*        <a href="https://x.com/home?lang=en-in" target="_blank" className="hover:text-indigo-500">*/}
                    {/*            <RiTwitterXLine  className="hero-img h-[2em] w-[2em] xl:w-[1.3em] xl:h-[1.3em] " />*/}
                    {/*        </a>*/}
                    {/*    </div>*/}
                    {/*</div>*/}


                </div>
                <div className="contact-body-part2  h-auto xl:h-full w-full xl:w-[60%] flex justify-center items-center">
                    <ContactForm/>
                </div>
            </div>

        </div>
    );
};

export default Contact;