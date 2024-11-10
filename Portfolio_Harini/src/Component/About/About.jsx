import React from "react";
import AboutImg from "../../assets/7358653-removebg-preview.png";
import { IoArrowForward } from "react-icons/io5";
const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">About</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          <img className="md:h-80" src={AboutImg} alt="About img" />

          <ul>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  HI This is Harini M
                </h1>
                <p className="text-sm md:text-md leading-tight">
                "I am Harini, a final-year Computer Science Engineering student at GRT Institute of Engineering and Technology. My skill set includes Python, Java, React, HTML, CSS, Bootstrap, Tailwind CSS, SQL, and Data Structures. I have completed an internship with TNSDC's virtual program on Python programming and another with DLK Career Development on Java programming. Currently, I am pursuing full-stack Java development."
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;