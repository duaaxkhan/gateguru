// import React from "react";
// import Navbar from "./Navbar";

// function TrainingServices() {
//   return (
//     <div className="w-full mx-auto bg-black text-white justify-center items-center">
//       <Navbar />
//       <div className="bg-black w-full md:h-[1100px] sm:h-[800px]  justify-center items-center">
//         <h1 className="mt-10 mb-6 text-center">Extracting Gait Info</h1>

//         <div className=" flex flex-col justify-center items-center">
//         <form onSubmit={(e) => e.preventDefault()} className="flex flex-row mb-4">
//           <label htmlFor="video1" className="mr-4">
//             <input type="file" id="video1" accept="video/*" className="hidden" />
//             <button className="px-4 py-2 bg-gray-800 text-white rounded-md" type="submit">Select Video 1</button>
//           </label>
//         </form>
//         <form onSubmit={(e) => e.preventDefault()} className="flex flex-row mb-4">
//           <label htmlFor="video2" className="mr-4">
//             <input type="file" id="video2" accept="video/*" className="hidden" />
//             <button className="px-4 py-2 bg-gray-800 text-white rounded-md" type="submit">Select Video 2</button>
//           </label>
//         </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default TrainingServices;

// import React, { useState } from "react";
// import Navbar from "./Navbar";

// function TrainingServices() {
//   const [video1, setVideo1] = useState(null);
//   const [video2, setVideo2] = useState(null);
//   const [isUploading, setIsUploading] = useState(false);

//   const handleVideoUpload = async () => {
//     if (!video1 || !video2) {
//       alert("Please select both videos");
//       return;
//     }
  
//     setIsUploading(true);
  
//     const formData = new FormData();
//     formData.append('video1', video1);
//     formData.append('video2', video2);
  
//     try {
//       console.log('Uploading videos...');
//       const response = await fetch('http://127.0.0.1:5000/api/gaitparameters', {
//         method: 'POST',
//         body: formData
//       });
//       const result = await response.json();
//       if (response.ok) {
//         console.log('Videos uploaded successfully', result);
//       } else {
//         console.error('Failed to upload videos', result);
//       }
//     } catch (error) {
//       console.error('Error uploading videos:', error);
//     } finally {
//       setIsUploading(false);
//     }
//   };
  
//   const handleFileChange = (event, setter) => {
//     const file = event.target.files[0];
//     setter(file);
//   };

//   return (
//     <div className="w-full mx-auto bg-black text-white justify-center items-center">
//       <Navbar />
//       <div className="bg-black w-full md:h-[1100px] sm:h-[800px] justify-center items-center">
//         <h1 className="mt-10 mb-6 text-center">Extracting Gait Info</h1>

//         <div className="flex flex-col justify-center items-center">
//           <div className="mb-4">
//             <label htmlFor="video1" className="mr-4">
//               Select Video 1
//               <input
//                 type="file"
//                 id="video1"
//                 accept="video/*"
//                 onChange={(e) => handleFileChange(e, setVideo1)}
//               />
//             </label>
//           </div>
//           <div className="mb-4">
//             <label htmlFor="video2" className="mr-4">
//               Select Video 2
//               <input
//                 type="file"
//                 id="video2"
//                 accept="video/*"
//                 onChange={(e) => handleFileChange(e, setVideo2)}
//               />
//             </label>
//           </div>
//           <button onClick={handleVideoUpload} className="px-4 py-2 bg-gray-800 text-white rounded-md">
//             {isUploading ? 'Uploading...' : 'Upload Videos'}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default TrainingServices;




// import React, { useState } from "react";
// import Navbar from "./Navbar";

// function TrainingServices() {
//   const [isProcessing, setIsProcessing] = useState(false);

//   const handleGetGaitParameter = async () => {
//     setIsProcessing(true);

//     try {
//       const response = await fetch('http://127.0.0.1:5000/api/gaitparameters', {
//         method: 'POST'
//       });

//       const result = await response.json();
//       if (response.ok) {
//         console.log('Gait parameters calculated successfully', result);
//       } else {
//         console.error('Failed to calculate gait parameters', result);
//       }
//     } catch (error) {
//       console.error('Error calculating gait parameters:', error);
//     } finally {
//       setIsProcessing(false);
//     }
//   };

//   return (
//     <div className="w-full mx-auto bg-black text-white justify-center items-center">
//       <Navbar />
//       <div className="bg-black w-full md:h-[1100px] sm:h-[800px] justify-center items-center">
//         <h1 className="mt-10 mb-6 text-center">Extracting Gait Info</h1>

//         <div className="flex flex-col justify-center items-center">
//           <button onClick={handleGetGaitParameter} className="px-4 py-2 bg-gray-800 text-white rounded-md">
//             {isProcessing ? 'Processing...' : 'Get Gait Parameter'}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default TrainingServices;

// import React, { useState } from "react";
// import Navbar from "./Navbar";
// import walk1 from "/Users/duaashahid/Desktop/gateguru/client/src/shoes.png";
// import walk2 from "/Users/duaashahid/Desktop/gateguru/client/src/walk.png";
// import walk3 from "/Users/duaashahid/Desktop/gateguru/client/src/walking.png";
// import walk4 from "/Users/duaashahid/Desktop/gateguru/client/src/footprint.png";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const logos = [walk1, walk2, walk3, walk4];
// const textBelowImages = ["Step length", "Gait Speed", "Stance Time", "Step Time"];

// function TrainingServices() {
//   const settings = {
//     infinite: true,
//     speed: 6000,
//     slidesToShow: logos.length - 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 0,
//     centerMode: true,
//     centerPadding: "0",
//     swipeToSlide: false,
//   };

//   const [isProcessing, setIsProcessing] = useState(false);
//   const [gaitParameters, setGaitParameters] = useState(null);

//   const handleGetGaitParameter = async () => {
//     setIsProcessing(true);

//     try {
//       const response = await fetch('http://127.0.0.1:5000/api/gaitparameters', {
//         method: 'POST'
//       });

//       const result = await response.json();
//       if (response.ok) {
//         console.log('Gait parameters calculated successfully', result);
//         setGaitParameters(result);
//       } else {
//         console.error('Failed to calculate gait parameters', result);
//       }
//     } catch (error) {
//       console.error('Error calculating gait parameters:', error);
//     } finally {
//       setIsProcessing(false);
//     }
//   };

//   return (
//     <div className="w-full mx-auto bg-black text-white justify-center items-center">
//       <Navbar />
//       <div className="bg-black w-full md:h-[1400px] sm:h-[800px] justify-center items-center">
//         <h1 className="mt-10 mb-6 text-center text-3xl">Extracting Gait Info</h1>
//         <p className="text-center mb-6 text-lg">
//           After clicking on the "Get Gait Parameter" button, you need to first select the original video and then the OpenPose video, which you can get from the 3D plot service.
//         </p>

//         <div className="w-full md:h-[350px] sm:h-[200px] bg-white">
//           <h1 className="text-center text-2xl pt-10">Key Offerings</h1>
//           <Slider {...settings} className="pt-10 pb-10">
//             {logos.map((logo, index) => (
//               <div key={index} className="text-center">
//                 <img src={logo} alt={`Logo ${index}`} className="mx-auto w-20" />
//                 <p className="mt-2 text-black">{textBelowImages[index]}</p>
//               </div>
//             ))}
//           </Slider>
//         </div>

//         <div className="flex flex-col justify-center items-center pt-20">
//           <button onClick={handleGetGaitParameter} className="px-4 py-4 bg-gray-800 text-white rounded-md">
//             {isProcessing ? 'Processing...' : 'Get Gait Parameters'}
//           </button>
//         </div>

//         {gaitParameters && (
//           <div className="mx-60 mt-8 bg-gray-200 text-black p-6 rounded-md shadow-lg">
//             <h2 className="text-center text-2xl mb-4 text-black font-bold">Gait Parameters</h2>

//             <div className="mt-4">
//               <h3 className="text-xl text-black font-bold">Step Time</h3>
//               <p>Right: {gaitParameters.step_time.right.join(', ')}</p>
//               <p>Left: {gaitParameters.step_time.left.join(', ')}</p>
//             </div>
//             <div className="mt-4">
//               <h3 className="text-xl text-black font-bold">Stance Time</h3>
//               <p>Right: {gaitParameters.stance_time.right.join(', ')}</p>
//               <p>Left: {gaitParameters.stance_time.left.join(', ')}</p>
//             </div>
//             <div className="mt-4">
//               <h3 className="text-xl text-black font-bold">Swing Time</h3>
//               <p>Right: {gaitParameters.swing_time.right.join(', ')}</p>
//               <p>Left: {gaitParameters.swing_time.left.join(', ')}</p>
//             </div>
//             <div className="mt-4">
//               <h3 className="text-xl text-black font-bold">Double Support Time</h3>
//               <p>Left to Right: {gaitParameters.ds_time.left_to_right.join(', ')}</p>
//               <p>Right to Left: {gaitParameters.ds_time.right_to_left.join(', ')}</p>
//             </div>
//             <div className="mt-4">
//               <h3 className="text-xl text-black font-bold">Step Length</h3>
//               <p>Right: {gaitParameters.step_length.right.join(', ')}</p>
//               <p>Left: {gaitParameters.step_length.left.join(', ')}</p>
//             </div>
//             <div className="mt-4">
//               <h3 className="text-xl text-black font-bold">Gait Speed</h3>
//               <p>{gaitParameters.gait_speed}</p>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default TrainingServices;


//hiiiii
import React, { useState } from "react";
import Navbar from "./Navbar";
import walk1 from "../walk.png";
import walk2 from "../walking.png";
import walk3 from "../shoes.png";
import walk4 from "../footprint.png";
import walk5 from"../foot.png";
import walk6 from "../parkinson.png"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Newsletter from "./Newsletter.jsx";

const logos = [walk1, walk2, walk3, walk4,walk5,walk6];
const textBelowImages = ["Step Length", "Gait Speed", "Stance Time", "Step Time","Swing Time","Double Stance Time"];
const descriptions = [
  "The distance measured from the heel print of one foot to the heel print of the other foot.",
  "The speed at which a person walks, typically measured in meters per second.",
  "The amount of time that a foot remains in contact with the ground during walking.",
  "The duration of time between two successive steps.",
  "Swing time is the amount of time the foot spends off the ground in the gait cycle,",
  "Double support time is the proportion of time that both feet are touching the ground during walking. "
];

function TrainingServices() {
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

  return (
    <div className="w-full mx-auto bg-black md:h-[1900px] sm:h-[200px] text-white justify-center items-center">
      <Navbar />
      <div className="bg-black w-full md:h-[1400px] sm:h-[800px] justify-center items-center">
        <h1 className="mt-10 mb-6 text-center text-3xl">Extracting Gait Info</h1>
        <p className="text-center mb-6 text-lg">
          After clicking on the "Get Gait Parameter" button, you need to first select the original video and then the OpenPose video, which you can get from the 3D plot service.
        </p>

        <div className="w-full md:h-[350px] sm:h-[200px] bg-white">
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

        <div className="container w-full md:h-[850px] sm:h-[200px] bg-white my-10">
          <h1 className="text-center text-3xl pt-10 text-black">Gait Parameters</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-10">
            {logos.map((logo, index) => (
              <div key={index} className="flex flex-col items-center">
                <img src={logo} alt={`Service ${index}`} className="w-[80px] pt-10" />
                <h2 className="font-bold text-black pt-10">{textBelowImages[index]}</h2>
                <p className="pt-2 text-black text-center">{descriptions[index]}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-center items-center pt-20">
          <button onClick={handleGetGaitParameter} className="px-4 py-4 bg-gray-800 text-white rounded-md">
            {isProcessing ? 'Processing...' : 'Get Gait Parameters'}
          </button>
        </div>

        {gaitParameters && (
          <div className="mx-60 mt-8 bg-gray-200 text-black p-6 rounded-md shadow-lg">
            <h2 className="text-center text-2xl mb-4 text-black font-bold">Gait Parameters</h2>

            <div className="mt-4">
              <h3 className="text-xl text-black font-bold">Step Time</h3>
              <p>Right: {gaitParameters.step_time.right.join(', ')}</p>
              <p>Left: {gaitParameters.step_time.left.join(', ')}</p>
            </div>
            <div className="mt-4">
              <h3 className="text-xl text-black font-bold">Stance Time</h3>
              <p>Right: {gaitParameters.stance_time.right.join(', ')}</p>
              <p>Left: {gaitParameters.stance_time.left.join(', ')}</p>
            </div>
            <div className="mt-4">
              <h3 className="text-xl text-black font-bold">Swing Time</h3>
              <p>Right: {gaitParameters.swing_time.right.join(', ')}</p>
              <p>Left: {gaitParameters.swing_time.left.join(', ')}</p>
            </div>
            <div className="mt-4">
              <h3 className="text-xl text-black font-bold">Double Support Time</h3>
              <p>Left to Right: {gaitParameters.ds_time.left_to_right.join(', ')}</p>
              <p>Right to Left: {gaitParameters.ds_time.right_to_left.join(', ')}</p>
            </div>
            <div className="mt-4">
              <h3 className="text-xl text-black font-bold">Step Length</h3>
              <p>Right: {gaitParameters.step_length.right.join(', ')}</p>
              <p>Left: {gaitParameters.step_length.left.join(', ')}</p>
            </div>
            <div className="mt-4">
              <h3 className="text-xl text-black font-bold">Gait Speed</h3>
              <p>{gaitParameters.gait_speed}</p>
            </div>
          </div>
        )}
        <Newsletter/>
      </div>
    </div>
  );
}

export default TrainingServices;
