// import React from "react";

// import Navbar from "./Navbar";


// function IT() {
  
//   return (
//     <div className="w-full mx-auto bg-black text-white justify-center items-center">
//       <Navbar />
      
//       <div className="bg-black w-full md:h-[1400px] sm:h-[800px] justify-center items-center">



//       </div>
//     </div>
//   );
// }

// export default IT;

import React, { useState } from "react";
import Navbar from "./Navbar";
import jsPDF from "jspdf";
import walk1 from "../walk.png";
import walk2 from "../walking.png";
import walk3 from "../shoes.png";
import walk4 from "../footprint.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Newsletter from "./Newsletter.jsx";
import "slick-carousel/slick/slick-theme.css";

import "jspdf-autotable";


const logos = [walk1, walk2, walk3, walk4];
const textBelowImages = ["Step length", "Gait Speed", "Stance Time", "Step Time"];

function IT() {
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
  const [isProcessing, setIsProcessing] = useState(false);
  const [gaitParameters, setGaitParameters] = useState(null);
  const [patientInfo, setPatientInfo] = useState({
    name: '',
    gender: '',
    height: '',
    illness: ''
  });

  const handleGetGaitParameter = async () => {
    setIsProcessing(true);

    try {
      const response = await fetch('http://127.0.0.1:5000/api/gaitparameters', {
        method: 'POST'
      });

      const result = await response.json();
      if (response.ok) {
        console.log('Gait parameters calculated successfully', result);
        setGaitParameters(result);
      } else {
        console.error('Failed to calculate gait parameters', result);
      }
    } catch (error) {
      console.error('Error calculating gait parameters:', error);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPatientInfo({ ...patientInfo, [name]: value });
  };

  // const handleDownloadPDF = () => {
  //   const doc = new jsPDF();
  //   doc.setFontSize(20);
  //   doc.text("Patient Gait Report", 20, 20);

  //   doc.setFontSize(16);
  //   doc.text("Gait Guru", 20, 30);

  //   doc.setFontSize(16);
  //   doc.text(`Name: ${patientInfo.name}`, 20, 40);
  //   doc.text(`Gender: ${patientInfo.gender}`, 20, 50);
  //   doc.text(`Height: ${patientInfo.height}`, 20, 60);
  //   doc.text(`Illness: ${patientInfo.illness}`, 20, 70);

  //   doc.setFontSize(18);
  //   doc.text("Gait Parameters", 20, 90);

  //   const addGaitParameter = (title, right, left, yOffset) => {
  //     const formatParam = param => (typeof param === 'number' ? param.toFixed(2) : param);

  //     const rightValues = right.map(param => formatParam(parseFloat(param))).join(', ');
  //     const leftValues = left.map(param => formatParam(parseFloat(param))).join(', ');

  //     doc.setFontSize(16);
  //     doc.text(title, 20, yOffset);
  //     doc.setFontSize(14);
  //     doc.text(`Right: ${rightValues}`, 20, yOffset + 10);
  //     doc.text(`Left: ${leftValues}`, 20, yOffset + 20);
  //   };

  //   addGaitParameter("Step Time", gaitParameters.step_time.right, gaitParameters.step_time.left, 110);
  //   addGaitParameter("Stance Time", gaitParameters.stance_time.right, gaitParameters.stance_time.left, 150);
  //   addGaitParameter("Swing Time", gaitParameters.swing_time.right, gaitParameters.swing_time.left, 190);
  //   addGaitParameter("Double Support Time", gaitParameters.ds_time.left_to_right, gaitParameters.ds_time.right_to_left, 230);
  //   addGaitParameter("Step Length", gaitParameters.step_length.right, gaitParameters.step_length.left, 270);

  //   doc.setFontSize(16);
  //   const gaitSpeed = parseFloat(gaitParameters.gait_speed);
  //   doc.text(`Gait Speed: ${gaitSpeed.toFixed(2)}`, 20, 310);

  //   doc.setLineWidth(0.2);
  //   doc.rect(10, 10, 190, 280);  // Add a border around the page

  //   doc.save("gait_report.pdf");
  // };
 
  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(20);
    doc.text("Patient Gait Report", 20, 20);
  
    doc.setFontSize(16);
    doc.text("Gait Guru", 20, 30);
  
    doc.setFontSize(16);
    doc.text(`Name: ${patientInfo.name}`, 20, 40);
    doc.text(`Gender: ${patientInfo.gender}`, 20, 50);
    doc.text(`Height: ${patientInfo.height}`, 20, 60);
    doc.text(`Illness: ${patientInfo.illness}`, 20, 70);
  
    doc.setFontSize(18);
    doc.text("Gait Parameters", 20, 90);
  
    const roundOffValues = (values) => {
      return values.map(val => {
        if (typeof val === 'number') {
          return val.toFixed(2);
        }
        return val;
      });
    };
  
    const gaitParametersData = [
      ["Parameter", "Right", "Parameter", "Left"],
      ["Step Time", ...roundOffValues(gaitParameters.step_time.right), "Step Time", ...roundOffValues(gaitParameters.step_time.left)],
      ["Stance Time", ...roundOffValues(gaitParameters.stance_time.right), "Stance Time", ...roundOffValues(gaitParameters.stance_time.left)],
      ["Swing Time", ...roundOffValues(gaitParameters.swing_time.right), "Swing Time", ...roundOffValues(gaitParameters.swing_time.left)],
      ["Double Support Time", ...roundOffValues(gaitParameters.ds_time.left_to_right), "Double Support Time", ...roundOffValues(gaitParameters.ds_time.right_to_left)],
      ["Step Length", ...roundOffValues(gaitParameters.step_length.right), "Step Length", ...roundOffValues(gaitParameters.step_length.left)],
      ["Gait Speed", parseFloat(gaitParameters.gait_speed).toFixed(2), "", ""]
    ];
  
    doc.autoTable({
      startY: 100,
      head: false,
      body: gaitParametersData,
      columnStyles: {
        0: { cellWidth: 50 },
        1: { cellWidth: 40 },
        2: { cellWidth: 50 },
        3: { cellWidth: 40 }
      },
      margin: { top: 10 },
      styles: { lineColor: [0, 0, 0] } // add borders
    });
  
    doc.save("gait_report.pdf");
  };
  
  
  return (
    <div className="w-full mx-auto bg-black text-white justify-center items-center">
      <Navbar />
      <div className="bg-black w-full md:h-[1900px] sm:h-[800px] justify-center items-center">
        <h1 className="mt-10 mb-6 text-center text-3xl">Extracting Gait Info</h1>
        <p className="text-center mb-6 text-lg">
          After clicking on the "Get Gait Parameter" button, you need to first select the original video and then the OpenPose video, which you can get from the 3D plot service.
        </p>
        <div className="w-full md:h-[300px] sm:h-[200px] bg-white">
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

        <div className="flex flex-col justify-center items-center mt-20">
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              value={patientInfo.name}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="gender">Gender</label>
            <input
              id="gender"
              name="gender"
              type="text"
              value={patientInfo.gender}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="height">Height</label>
            <input
              id="height"
              name="height"
              type="text"
              value={patientInfo.height}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="illness">Illness</label>
            <input
              id="illness"
              name="illness"
              type="text"
              value={patientInfo.illness}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black"
            />
          </div>
          <button onClick={handleGetGaitParameter} className="px-4 py-4 bg-gray-800 text-white rounded-md mb-4">
            {isProcessing ? 'Processing...' : 'Get Gait Parameters'}
          </button>
        </div>

        {gaitParameters && (
          <div className="mx-60 mt-8 bg-gray-200 text-black p-6 rounded-md shadow-lg">
            <h2 className="text-center text-2xl mb-4 text-black font-bold">Gait Parameters</h2>

            <div className="mt-4">
              <h3 className="text-xl text-black font-bold">Step Time</h3>
              <p>Right: {gaitParameters.step_time.right.map(param => parseFloat(param).toFixed(2)).join(', ')}</p>
              <p>Left: {gaitParameters.step_time.left.map(param => parseFloat(param).toFixed(2)).join(', ')}</p>
            </div>
            <div className="mt-4">
              <h3 className="text-xl text-black font-bold">Stance Time</h3>
              <p>Right: {gaitParameters.stance_time.right.map(param => parseFloat(param).toFixed(2)).join(', ')}</p>
              <p>Left: {gaitParameters.stance_time.left.map(param => parseFloat(param).toFixed(2)).join(', ')}</p>
            </div>
            <div className="mt-4">
              <h3 className="text-xl text-black font-bold">Swing Time</h3>
              <p>Right: {gaitParameters.swing_time.right.map(param => parseFloat(param).toFixed(2)).join(', ')}</p>
              <p>Left: {gaitParameters.swing_time.left.map(param => parseFloat(param).toFixed(2)).join(', ')}</p>
            </div>
            <div className="mt-4">
              <h3 className="text-xl text-black font-bold">Double Support Time</h3>
              <p>Right: {gaitParameters.ds_time.left_to_right.map(param => parseFloat(param).toFixed(2)).join(', ')}</p>
              <p>Left: {gaitParameters.ds_time.right_to_left.map(param => parseFloat(param).toFixed(2)).join(', ')}</p>
            </div>
            <div className="mt-4">
              <h3 className="text-xl text-black font-bold">Step Length</h3>
              <p>Right: {gaitParameters.step_length.right.map(param => parseFloat(param).toFixed(2)).join(', ')}</p>
              <p>Left: {gaitParameters.step_length.left.map(param => parseFloat(param).toFixed(2)).join(', ')}</p>
            </div>
            <div className="mt-4">
              <h3 className="text-xl text-black font-bold">Gait Speed</h3>
              <p>{parseFloat(gaitParameters.gait_speed).toFixed(2)}</p>
            </div>

            


  {/* Existing gait parameters display code */}

  <div className="mt-4  flex justify-center items-center">
    <button onClick={handleDownloadPDF} className="px-4 py-4 bg-gray-800 text-white rounded-md">
      Download PDF
    </button>
  
</div>
          </div>
        )}
      </div>
      <Newsletter />
    </div>
  );
}

export default IT;



