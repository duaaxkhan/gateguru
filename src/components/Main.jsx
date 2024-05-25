import React from "react";
import Navbar from "./Navbar.jsx";
import video from "../../src/pictures-olive/gait.mp4"

import ml from '../../src/pictures-olive/code.jpg'
import cam from '../../src/pictures-olive/cam.jpg'
import report from '../../src/pictures-olive/report.jpg'

import walk1 from "../walk.png";
import walk2 from "../walking.png";
import walk3 from "../shoes.png";
import walk4 from "../footprint.png";
import walk5 from"../foot.png";
import walk6 from "../parkinson.png"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useNavigate } from "react-router-dom";
import Newsletter from "./Newsletter.jsx";

const logos = [walk1, walk2, walk3, walk4,walk5,walk6];
const textBelowImages = ["Step Length", "Gait Speed", "Stance Time", "Step Time","Swing Time","Double Stance Time"];

function Main() {
  const navigate = useNavigate();
  
  const divStyle = {
    position: "relative", 
  };

  const settings = {
    infinite: true,
    speed: 6000,
    slidesToShow: logos.length - 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    centerMode: true,
    centerPadding: "0",
    swipeToSlide: false,
  };


  return (
    <div className="w-full ">
      <div className="md:h-[500px] mx-auto  bg-black justify-center sm:h-[800px]">
        <Navbar />

        <div
          className="w-full md:h-[500px] mx-auto  bg-black justify-center sm:h-[800px]  "
          style={{
            textAlign: "center",
          }}
        >

<div className="relative w-full h-[650px]" style={divStyle}>
        <video
          autoPlay
          loop
          muted
          id="video"
          className="w-full h-full object-cover blur-video"
        >
          <source src={video} type="video/mp4" />
        </video>

        <div className="absolute top-0 left-0 w-full h-full">
          <div className="overlay"></div>
          <div className="content text-black text-center absolute inset-0 flex items-center justify-center">
            <div className="text-background bg-white bg-opacity-50 p-4">
              <h1 className="text-4xl font-bold ">
                 Gait Analysis 
              </h1>
              <h2 className="text-2xl text-black background:white text-justify pt-10 mx-40">
              
"Optimize your movement with precision using our cutting-edge gait analysis technology. Uncover gait insights for enhanced performance and injury prevention."
              </h2>
            </div>
          </div>
        </div>
      </div>
    

   
      
        </div>

<div className=' relative w-full py-20 md:h-[600px]   bg-black  justify-center sm:h-[800px] my-20 '>


<div className='text-left   bg-black justify-center mx-auto  grid md:grid-cols-2  py-20 '>
        <h1 className='text-5xl text-white font-semibold pt-20 md:mx-40 'style={{fontFamily: 'Roboto '}}> Services</h1>
        
</div>

<div className='text-left bg-black  font-bold font-xl justify-center grid md:grid-cols-3  text-white'>

    <div className='w-[600px] mx-auto justify-centerflex-col mx-500 my-6 px-20 text-white'>
    <img src={ml} alt=''/>
  
     <button className=' font-medium texl-xl justify-left hover:scale-110 my-10 mx-5 p-4 hover:bg-[#F1F8FF] hover:scale-110 rounded-full hover:text-black  'onClick={() => navigate("/Dplot")}>3D Plots</button>
    </div>

    <div className='w-[600px] mx-auto justify-center flex-col mx-500 my-6 px-20'>
    <img  className=' 'src={cam} alt=''/>

  <button className=' font-medium  justify-left hover:scale-110 pt-10 my-10 mx-5 p-4 hover:bg-[#F1F8FF] hover:scale-110 rounded-full hover:text-black' onClick={() => navigate("/TrainingServices")}>Gait Parameters</button>
    </div>


    <div className=' mx-auto justify-center flex-col my-6 px-20'>
    <img className="h-[290px]" src={report} alt=''/>
            
                <button className=' font-medium  justify-left hover:scale-110 pt-10 my-10 mx-5 p-4 hover:bg-[#F1F8FF] hover:scale-110 rounded-full hover:text-black' onClick={() => navigate("/ITServices")}>Report Generation</button>
    </div>


 


</div>



<div className="w-full md:h-[350px] sm:h-[200px] bg-[#edebe9] ">
          <h1 className="text-center text-2xl pt-10">Key Offerings</h1>
          <Slider {...settings} className="pt-10 pb-10">
            {logos.map((logo, index) => (
              <div key={index} className="text-center">
                <img src={logo} alt={`Logo ${index}`} className="mx-auto w-20" />
                <p className="mt-2 text-black">{textBelowImages[index]}</p>
              </div>
            ))}
          </Slider>
        </div>
</div>


      
      

    <div className="mt-60"> <Newsletter/></div>
      </div>
     

    </div>
  );
}

export default Main;
