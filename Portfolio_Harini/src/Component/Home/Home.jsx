import React from "react";
import avatarImg from "../../assets/7358602-removebg-preview.png";
import TextChange from "../TextChange";

const Home = () => {
  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10 ">
        <h1 className="text-xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          <TextChange />
        </h1 >
      
        <h1 className="text-sm md:text-2xl tracking-tight  ">
         I AM FULL STACK DEVELOPER
<h2>
  <p >"Innovative full-stack developer skilled in HTML, CSS, JavaScript, React, Node.js, MongoDB, SQL, delivering responsive, high-performance applications with seamless front-end and back-end integration."</p>

</h2>
</h1>
        <button className="mt-5 md:md-10 text-white py02 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
        <a href="#Footer">
          <div className="text-md transition-all duration-300 p-1 md:p-0">
            Contact Me
            </div>
        </a>
        </button>
        
      </div>
      <div>
        <img className="" src={avatarImg} alt="" />
      </div>
    </div>
  );
};

export default Home;