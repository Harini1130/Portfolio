import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { AiOutlineLinkedin ,AiOutlineGithub,AiOutlinePhone} from "react-icons/ai";

const Footer = () => {
  return (
    <div
      id="Footer"
      className="flex justify-around bg-[#465697] text-white p-10 md:p-12 items-center"
    >
      <div>
        <h1 className="text-2xl md:text-6xl font-bold">Contact</h1>
        <h3 className="text-sm md:text-2xl font-normal">
          Feel Free To reach out!
        </h3>
      </div>

      <ul className="text-sm md:text-xl">
        <li className="flex py-5">
        
          <MdOutlineEmail size={30} />
          harinimani30112004@gmail.com
          </li>
          
        <li className="flex py-5">
          <AiOutlinePhone size={30}/>
          9440735945

        </li>
        <div className='flex py-5'>

        <a href='https://www.linkedin.com/in/harini-m-7201b6269/'  className='pr-5 hover:text-white'><AiOutlineLinkedin size={30}  /></a>Linkedin
        </div>
        <div className='flex py-5' >
        <a href='https://github.com/Harini1130' className='pr-5 hover:text-white'><AiOutlineGithub size={30}/></a>github
        </div>
      </ul>
    </div>
  );
};

export default Footer;