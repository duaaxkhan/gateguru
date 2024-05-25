import React from 'react';
import Navbar from './Navbar';
import person from"../gf.jpg";
import person1 from"../bf.jpg";
import person2 from"../me.JPG";
import Newsletter from "./Newsletter.jsx";

function About() {
  return (
    <>
      <div className='bg-black md:h-[1150px] sm:h-[200px] text-white h-full'>
        <Navbar />
        
        <div className='w-[1500px] h-auto mx-auto bg-black justify-items-center' style={{ textAlign: "left" }}>
          <h1 className='text-4xl font-semibold mt-10'>About Us</h1>
          <h2 className='text-xl py-8'>
            Our project utilizes RGB camera videos and computer vision algorithms to analyze gait parameters by extracting skeletal information. We measure stride times, knee flexion angles, and gait speed etc. This data assists physicians in diagnosing and assessing gait-related diseases, offering valuable decision support. The system provides a non-invasive, efficient method for gait analysis, enhancing early detection and treatment of mobility-related conditions.
          </h2>
          
          <div className='flex justify-between py-20'>
            <div className='text-center'>
              <img src={person} alt='Malaika Maqsood' className='mx-auto rounded-full w-48 h-48 object-cover' />
              <h3 className='text-2xl font-semibold pt-4'>Malaika Maqsood</h3>
              <p className='text-lg pt-2'>
                I am a computer scientist focused on ML and AI. I was in charge of the MediaPipe integration and MATLAB usage in the project.
              </p>
            </div>
            
            <div className='text-center'>
              <img src={person1} alt='Daniyal Zahid' className='mx-auto rounded-full w-48 h-48 object-cover' />
              <h3 className='text-2xl font-semibold pt-4'>Daniyal Zahid</h3>
              <p className='text-lg pt-2'>
                I am a computer scientist who contributed to the development and optimization of the project's algorithms and was in charge of data analysis.
              </p>
            </div>
            
            <div className='text-center'>
              <img src={person2} alt='Duaa Shahid' className='mx-auto rounded-full w-48 h-48 object-cover' />
              <h3 className='text-2xl font-semibold pt-4'>Duaa Shahid</h3>
              <p className='text-lg pt-2'>
                I am the web developer responsible for the website's development  and the User Interface.
              </p>
            </div>
          </div>
        
        </div>
        <Newsletter/>
      </div>
    </>
  );
}

export default About;

