import React from 'react';
import TNstartup from '../assets/TNstartup.jpg';
import dice from '../assets/dice.jpg';
import react from '../assets/react.png';

function Project() {
  return (
    <div id="Project" className="flex flex-col py-20 px-5 justify-center bg-secondary text-white">
      <div className="w-full">
        <div className="flex flex-col px-10 py-5">
          <h1 className="text-4xl text-white border-b-4 mb-5 w-[170px] font-bold">Project</h1>
          <p>These are some of my projects. I have built these with HTML, CSS, JS, Bootstrap, React, and more.</p>
        </div>
      </div>
      <div className="w-full">
        <div className="flex md:flex-row flex-col px-10 gap-10">
          <div className="relative">
            <img className="h-[200px] w-[400px]" src={TNstartup} alt="Startup" />
            <div className="absolute left-0 right-0 bottom-0 top-0 bg-primary opacity-0 duration-500 hover:opacity-100">
              <p className="text-center px-5 py-5">Develop a React-based startup application that utilizes data stored in a MongoDB database</p>
              <button className="bg-blue-500 text-white py-2 px-4 rounded" onClick={() => window.open('https://github.com/Harini1130/StartupTN_Reg')}>View Project</button>
            </div>
          </div>
          <div className="relative">
            <img className="h-[200px] w-[400px]" src={dice} alt="Dice Project" />
            <div className="absolute left-0 right-0 bottom-0 top-0 bg-primary opacity-0 duration-500 hover:opacity-100">
              <p className="text-center px-5 py-5">This JS dice project features images of 6 dice. When the submit button is clicked, it reveals whether Player 1 or Player 2 wins.</p>
              <button className="bg-blue-500 text-white py-2 px-4 rounded" onClick={() => window.open('https://github.com/Harini1130/Dice-project')}>View Project</button>
            </div>
          </div>
          <div className="relative">
            <img className="h-[200px] w-[400px]" src={react} alt="React Project" />
            <div className="absolute left-0 right-0 bottom-0 top-0 bg-primary opacity-0 duration-500 hover:opacity-100">
              <p className="text-center px-5 py-5">Develop a React-based sign-up page and implement a MongoDB cluster for secure user data storage.</p>
              <button className="bg-blue-500 text-white py-2 px-4 rounded" onClick={() => window.open('https://github.com/Harini1130/Form')}>View Project</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;