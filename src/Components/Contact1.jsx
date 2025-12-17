import React,{useContext} from 'react';
import {BiCopy} from "react-icons/bi";
import { IoMailOutline ,IoLocationOutline  } from "react-icons/io5";
import { BsTelephone  } from "react-icons/bs";
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {RiTwitterXLine} from "react-icons/ri";
import {AppContext} from "../Context.jsx";

const Contact1 = () => {

 const items = ["shaiknoushad1024@gmail.com","+91 6304991905","Kurnool,AP"];

 const {darkMode} = useContext(AppContext);

 const handleCopy = async (item) => {
     await navigator.clipboard.writeText(item);
 }

    return (
        <>
            <div className={`cbp11 ${darkMode ? "text-white":"text-black"}  h-auto  min-h-fit w-screen min-w-fit xl:h-[60%] xl:w-[60%]  flex flex-col justify-center items-center  xl:items-start gap-4 `}>
                <span className="heading mt-14 xl:mt-0 mb-7 ">Contact Info</span>

                <div className="email h-fit w-fit underline simple-center gap-3 text-[0.5em] sm:text-xl">
                    <IoMailOutline   className="info-before h-5 w-5 sm:h-8  sm:w-8  " />
                    shaiknoushad1024@gmail.com
                    <BiCopy onClick={()=>(handleCopy(items[0]))} className="cursor-pointer h-5 w-5 sm:h-8  sm:w-8 text-xl " />
                </div>
                {/*<div className="phone-no  h-fit w-fit underline simple-center gap-3 text-[0.5em] sm:text-xl">*/}
                {/*    <BsTelephone    className="info-before h-5 w-5 sm:h-8  sm:w-8  " />*/}
                {/*    +91 6304991905*/}
                {/*    <BiCopy onClick={()=>(handleCopy(items[1]))} className="cursor-pointer h-5 w-5 sm:h-8  sm:w-8 text-xl " />*/}
                {/*</div>*/}
                <div className="address  h-fit w-fit underline simple-center gap-3 text-[0.5em] sm:text-xl">
                    <IoLocationOutline   className="info-before h-5 w-5 sm:h-8  sm:w-8  " />
                     Kurnool,AP
                    <BiCopy onClick={()=>(handleCopy(items[2]))} className="cursor-pointer h-5 w-5 sm:h-8  sm:w-8 text-xl " />
                </div>
                <div className="cbp12 h-auto w-full flex flex-col justify-start items-center py-4 xl:items-start  gap-4">
                    <p className="text-sm sm:text-lg">Or you can find me on below platforms</p>
                    <div className="btns h-9 w-[50%] flex justify-center gap-5  ">
                        <a href="https://www.linkedin.com/in/smdnoushad/" target="_blank"  className="hover:text-indigo-500">
                            <FaLinkedin className="hero-img h-[1.3em] w-[1.3em] " />
                        </a>
                        <a href="https://github.com/ShaikNoushad-309/" target="_blank" className="hover:text-indigo-500">
                            <FaGithub className="hero-img h-[1.3em] w-[1.3em] " />
                        </a>
                        <a href="https://x.com/home?lang=en-in" target="_blank" className="hover:text-indigo-500">
                            <RiTwitterXLine  className="hero-img h-[1.3em] w-[1.3em] " />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact1;