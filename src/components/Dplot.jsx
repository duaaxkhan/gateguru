// import React from "react";
// import axios from "axios";

// import Navbar from "./Navbar";
// import { useEffect, useState } from 'react'
// import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
// import app from '../firebase';


// import videoF from "../../src/pictures-olive/vi.mp4";




// function Dplot() {

//   const [video, setVideo] = useState(undefined);
//   const [videoPerc, setVideoPerc] = useState(0);
//   const [inputs, setInputs] = useState({});

//   useEffect(() => {
//     video && uploadFile(video);
//   }, [video]);

//   const uploadFile=(file)=>{
//     const storage= getStorage(app);
//     const fileName = new Date().getTime() + file.name;
//     const storageRef = ref(storage, fileName);
//     const uploadTask = uploadBytesResumable(storageRef, file);

//     uploadTask.on(
//       "state_changed",
//       (snapshot) => {
//         const progress =
//           (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//        setVideoPerc(Math.round(progress));
//         switch (snapshot.state) {
//           case "paused":
//             console.log("Upload is paused");
//             break;
//           case "running":
//             console.log("Upload is running");
//             break;
//           default:
//             break;
//         }
//       },
//       (error) => {
//         console.log(error);
//         switch (error.code) {
//           case "storage/unauthorized":
//             // User doesn't have permission to access the object
//             console.log(error);
//             break;
//           case "storage/canceled":
//             // User canceled the upload
//             break;
//           case "storage/unknown":
//             // Unknown error occurred, inspect error.serverResponse
//             break;
//           default:
//             break;
//         }
//       },
//       () => {
//         // Upload completed successfully, now we can get the download URL
//         getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
//           console.log('DownloadURL - ', downloadURL);

//           setInputs((prev) => {
//             return {
//               ...prev,
//                downloadURL,
//             };
//           });

//         });
//       }
//     );

//   }



//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();
//   //   try {
//   //     await axios.post(`http://127.0.0.1:5000/api/videos`, { ...inputs });
//   //     window.location.reload();
//   //   } catch (error) {
//   //     console.log(error);
//   //   }
//   // };
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//         await axios.post(`http://127.0.0.1:5000/api/videos`, { ...inputs });
//         window.location.reload();
//     } catch (error) {
//         console.log("Error:", error);
//         if (error.response) {
//             // Request was made and server responded with a status code
//             console.log("Status code:", error.response.status);
//             console.log("Response data:", error.response.data);
//         } else if (error.request) {
//             // Request was made but no response was received
//             console.log("No response received:", error.request);
//         } else {
//             // Something else went wrong
//             console.log("Error:", error.message);
//         }
//     }
// };

//   // http://localhost:5000/api/videos

//   const divStyle = {
//     position: "relative", // Make the div relative
//     // Add other CSS styles as needed
//   };

//   return (
//     <div className="bg-black h-full">
//       <Navbar />
//       <div className="relative w-full h-[950px] py-20" style={divStyle}>
//         <video
//           autoPlay
//           loop
//           muted
//           id="video"
//           className="w-full h-[700px] "
//         >
//           <source src={videoF} type="video/mp4" />
//         </video>

          
//       {/* <div className=" w-full md:h-[600px]  bg-black  sm:h-[800px] pt-5 text-white flex flex-col items-center">
//       <h1 className="text-5xl text-white font-semibold pt-20 md:mx-90"style={{fontFamily: 'Roboto ',textAlign:"center"}}> Upload your video !</h1>
      
//        <button className="font-large texl-3xl hover:scale-110 my-20  p-4 hover:bg-[#F1F8FF] hover:scale-110 rounded-full hover:text-black border-white border-3"   style={{ width: '200px' }}> Upload</button>
  
//       </div> */}

//       <div className="upload bg-black text-white mt-20 w-full md:h-[600px]  bg-black  sm:h-[800px] pt-5 text-white flex flex-col items-center" >
        
//         <form onSubmit={handleSubmit}> 
//         <label htmlFor="video">Video:</label> {videoPerc > 0 && "Uploading: " + videoPerc + "%"}
//         <br/>
//         <input
//         type="file"
//         accept="video/*"
//         id="video"       
//         onChange={(e) => setVideo((prev) => e.target.files[0])}
//          />
//         <br/>
//         <button  type="submit" className="font-large texl-3xl hover:scale-110 my-20  p-4 hover:bg-[#F1F8FF] hover:scale-110 rounded-full hover:text-black border-white border-3"   style={{ width: '200px' }}> Upload</button>

//         </form>
//       </div>

      
//       </div>

//     </div>
//   );
// }

// export default Dplot;




// import React, { useState, useEffect } from "react";
// import axios from "axios";

// import Navbar from "./Navbar";
// import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
// import app from '../firebase';
// import videoF from "../../src/pictures-olive/vi.mp4";

// function Dplot() {
//   const [video, setVideo] = useState(undefined);
//   const [videoPerc, setVideoPerc] = useState(0);
//   const [inputs, setInputs] = useState({});
//   // const [processedVideoData, setProcessedVideoData] = useState(null);
//   const [streamedBytes, setStreamedBytes] = useState(0);
//   const [totalBytes, setTotalBytes] = useState(0);

//   useEffect(() => {
//     video && uploadFile(video);
//   }, [video]);

//   const uploadFile = (file) => {
//     const storage = getStorage(app);
//     const folder =  "input_videos/";
//     const fileName = new Date().getTime() + file.name;
//     const storageRef = ref(storage,folder + fileName);
//     const uploadTask = uploadBytesResumable(storageRef, file);

//     uploadTask.on(
//       "state_changed",
//       (snapshot) => {
//         const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//         setVideoPerc(Math.round(progress));
//         console.log(`Upload progress: ${Math.round(progress)}%`);
//         setStreamedBytes(snapshot.bytesTransferred);
//         setTotalBytes(snapshot.totalBytes);
//         switch (snapshot.state) {
//           case "paused":
//             console.log("Upload is paused");
//             break;
//           case "running":
//             console.log("Upload is running");
//             break;
//           default:
//             break;
//         }
//       },
//       (error) => {
//         console.log("Upload error:", error);
//       },
//       () => {
//         getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
//           console.log('DownloadURL - ', downloadURL);
//           setInputs((prev) => {
//             return {
//               ...prev,
//               downloadURL,
//             };
//           });
//         });
//       }
//     );
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post(`http://127.0.0.1:5000/api/videos`, { ...inputs });
//       console.log('Video uploaded successfully');
//       // window.location.reload();
//     } catch (error) {
//       console.log("Error uploading video:", error);
//     }
//   };

//   // const handleFetchProcessedVideo = async () => {
//   //   try {
//   //     const response = await axios.get(`http://127.0.0.1:5000/api/output-video`, { responseType: 'arraybuffer' });
//   //     console.log("Response:", response);
  
//   //     // Create a Blob from the array buffer
//   //     const blob = new Blob([response.data], { type: 'video/mp4' });
  
//   //     // Generate a URL for the blob
//   //     const url = URL.createObjectURL(blob);
  
//   //     // Set the URL as the source for the video element
//   //     setProcessedVideoData(url);
//   //   } catch (error) {
//   //     console.log("Error fetching processed video:", error);
//   //   }
//   // };
  
//   return (
//     <div className="bg-black h-full">
//       <Navbar />
//       <div className="relative w-full h-[950px] ">
//         <video autoPlay loop muted id="video" className="w-full h-[700px] mt-40">
//           <source src={videoF} type="video/mp4" />
//         </video>

//         <div className="upload bg-black text-white  w-full md:h-[1100px] sm:h-[800px]  text-white flex flex-col items-center justify-center">
//           <form onSubmit={handleSubmit}>
//             <label htmlFor="video">Video:</label>
//             {videoPerc > 0 && `Uploading: ${videoPerc}% (${streamedBytes} bytes / ${totalBytes} bytes)`}
//             <br />
//             <input
//               type="file"
//               accept="video/*"
//               id="video"
//               onChange={(e) => setVideo(e.target.files[0])}
//             />
//             <br />

//             <button
//               type="submit"
//               className="font-large texl-3xl hover:scale-110 mt-20 p-4 hover:bg-[#F1F8FF]  rounded-full hover:text-black border-white border-3"
//               style={{ width: '250px' }}
//             >
//               Upload
//             </button>
//           </form>
          
//           <br />

//           <button
//               type="submit"
//               className="font-large texl-3xl hover:scale-110 mt-10 p-4   hover:bg-[#F1F8FF]  rounded-full hover:text-black border-white border-3"
//               style={{ width: '350px' }}
//             >
//               Download Processed Video
//             </button>

//           <br/>

//           {/* <button
//             onClick={handleFetchProcessedVideo}
//             className="font-large texl-3xl hover:scale-110 mt-1 mb-10 p-4 hover:bg-[#F1F8FF]  rounded-full hover:text-black border-white border-3 justify-center mr-20"
//             style={{ width: '200px' }}
//           >
//             Fetch Processed Video
//           </button>
//           <br />
//           {processedVideoData && (
//             <video autoPlay controls className="w-[800px] h-[800px]">
//               <source src={processedVideoData} type="video/mp4" />
//               Your browser does not support the video tag.
//             </video>
//           )} */}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Dplot;











/////////prettty pleasinnnnnn

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { getDownloadURL,uploadBytesResumable, ref, getStorage } from "firebase/storage";
// import app from '../firebase';
// import Navbar from "./Navbar";
// import videoF from "../../src/pictures-olive/vi.mp4";

// function Dplot() {
//   const [video, setVideo] = useState(undefined);
//   const [videoPerc, setVideoPerc] = useState(0);
//   const [inputs, setInputs] = useState({});
//   const [streamedBytes, setStreamedBytes] = useState(0);
//   const [totalBytes, setTotalBytes] = useState(0);

//   useEffect(() => {
//     video && uploadFile(video);
//   }, [video]);

//   const uploadFile = (file) => {
//     const storage = getStorage(app);
//     const folder = "input_videos/";
//     const fileName = new Date().getTime() + file.name;
//     const storageRef = ref(storage, folder + fileName);
//     const uploadTask = uploadBytesResumable(storageRef, file);

//     uploadTask.on(
//       "state_changed",
//       (snapshot) => {
//         const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//         setVideoPerc(Math.round(progress));
//         console.log(`Upload progress: ${Math.round(progress)}%`);
//         setStreamedBytes(snapshot.bytesTransferred);
//         setTotalBytes(snapshot.totalBytes);
//         switch (snapshot.state) {
//           case "paused":
//             console.log("Upload is paused");
//             break;
//           case "running":
//             console.log("Upload is running");
//             break;
//           default:
//             break;
//         }
//       },
//       (error) => {
//         console.log("Upload error:", error);
//       },
//       () => {
//         getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
//           console.log('DownloadURL - ', downloadURL);
//           setInputs((prev) => {
//             return {
//               ...prev,
//               downloadURL,
//             };
//           });
//         });
//       }
//     );
//   };


//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post(`http://127.0.0.1:5000/api/videos`, { ...inputs });
//       console.log('Video uploaded successfully');
//     } catch (error) {
//       console.log("Error uploading video:", error);
//     }
//   };

//   // const handleDownload = async () => {
//   //   try {
//   //     const response = await axios.get(`http://127.0.0.1:5000/api/download-video`);
//   //     const { videoURL,jsonURLs} = response.data;
      
//   //     // Log processed video URL
//   //     console.log('Processed Video URL:', videoURL);
  
//   //     // // Log JSON file URLs
//   //     // console.log('JSON File URLs:');
//   //     // jsonURLs.forEach((url, index) => {
//   //     //   console.log(`JSON File ${index + 1}:`, url);
//   //     // });
//   //   } catch (error) {
//   //     console.log("Error fetching video URLs:", error);
//   //   }
//   // };


//   //try 1 the issue was video was not playing

// //   const handleDownload = async () => {
// //     try {
// //         const response = await axios.get(`http://127.0.0.1:5000/api/download-video`, {
// //             responseType: 'blob' // Specify responseType as 'blob'
// //         });
// //         const { videoURL } = response.data;
        
// //         // Log processed video URL
// //         console.log('Processed Video URL:', videoURL);

// //         // Create a temporary URL for the blob
// //         const url = window.URL.createObjectURL(new Blob([response.data]));

// //         // Create a link element
// //         const link = document.createElement('a');
// //         link.href = url;
// //         link.setAttribute('download', 'downloaded-video.mp4');

// //         // Append the link to the body
// //         document.body.appendChild(link);

// //         // Programmatically click the link to trigger the download
// //         link.click();

// //         // Cleanup: remove the link and revoke the blob URL
// //         link.parentNode.removeChild(link);
// //         window.URL.revokeObjectURL(url);

// //     } catch (error) {
// //         console.log("Error fetching video URLs:", error);
// //     }
// // };


// //try 2
// const handleDownload = async () => {
//   try {
//       // Send a GET request to the server to fetch the video file
//       const response = await fetch('http://127.0.0.1:5000/api/download-video');
      
//       // Check if the response is successful (status code 200)
//       if (!response.ok) {
//           throw new Error('Failed to fetch video');
//       }

//       // Extract the filename from the response headers or set a default name
//       const filename = response.headers.get('content-disposition')?.split('filename=')[1] || 'downloaded-video.mp4';

//       // Convert the response to a blob
//       const blob = await response.blob();

//       // Create a temporary URL for the blob
//       const url = window.URL.createObjectURL(blob);

//       // Create a link element to trigger the download
//       const link = document.createElement('a');
//       link.href = url;
//       link.setAttribute('download', filename);

//       // Append the link to the document body and programmatically click it
//       document.body.appendChild(link);
//       link.click();

//       // Clean up by removing the link and revoking the object URL
//       link.parentNode.removeChild(link);
//       window.URL.revokeObjectURL(url);
//   } catch (error) {
//       console.error('Error downloading video:', error);
//   }
// };

// const handlePlay = () => {
//  // Replace 'path/to/your/video.mp4' with the actual path to your video file
//   const videoPath = '/Users/duaashahid/Desktop/gateguru/flask_backend/output/output_video.mp4';

//   // Create a new video element
//   const video = document.createElement('video');
//   video.src = videoPath;
//   video.controls = true; // Show controls like play, pause, etc.

//   // Append the video element to the document body
//   document.body.appendChild(video);

//   // Play the video
//   video.play();


//   // <video autoPlay loop muted id="video" className="w-full h-[700px] mt-40">
//   //         <source src={videoFo} type="video/mp4" />
//   //       </video>
// };

  
  
//   return (
//     <div className="bg-black h-full">
//       <Navbar />
//       <h1 className="mt-10 mb-6 text-center text-white text-3xl">Getting 3D Plots</h1>
//         <p className="text-center text-white mb-6 text-lg mt-10">
//           Upload your walking video to get get 3D joint point pin pointed on your body, You can download the video by clicking on the Download Processed Video
//         </p>

      
//       <div className="relative w-full h-[950px] ">
//         <video autoPlay loop muted id="video" className="w-full h-[700px] mt-40">
//           <source src={videoF} type="video/mp4" />
//         </video>

//         <div className="upload bg-black text-white  w-full md:h-[1100px] sm:h-[800px]  text-white flex flex-col items-center justify-center">
//           <form onSubmit={handleSubmit}>
//             <label htmlFor="video">Video:</label>
//             {videoPerc > 0 && `Uploading: ${videoPerc}% (${streamedBytes} bytes / ${totalBytes} bytes)`}
//             <br />
//             <input
//               type="file"
//               accept="video/*"
//               id="video"
//               onChange={(e) => setVideo(e.target.files[0])}
//             />
            
//             <br/>

//             <button
//               type="submit"
//               className="font-large texl-3xl hover:scale-110 mt-20 p-4 hover:bg-[#F1F8FF] ml-2  rounded-full hover:text-black border-white border-3"
//               style={{ width: '350px' }}
//             >
//               Upload
//             </button>
//           </form>
          
//           <br />

//           <button
//               onClick={handleDownload}
//               className="font-large texl-3xl hover:scale-110 mt-10 p-4   hover:bg-[#F1F8FF]  rounded-full hover:text-black border-white border-3"
//               style={{ width: '350px' }}
//             >
//               Download Processed Video
//             </button>
//             <br/>
//             <button
//              onClick={handlePlay}
//               className="font-large texl-3xl hover:scale-110 mt-10 p-4   hover:bg-[#F1F8FF]  rounded-full hover:text-black border-white border-3"
//               style={{ width: '350px' }}
//             >
//               Play
//             </button>

//           <br/>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Dplot;

import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { getDownloadURL, uploadBytesResumable, ref, getStorage } from "firebase/storage";
import app from '../firebase';
import Navbar from "./Navbar";
import videoF from "../../src/pictures-olive/vi.mp4";
import Newsletter from "./Newsletter.jsx";

function Dplot() {
  const [video, setVideo] = useState(undefined);
  const [videoPerc, setVideoPerc] = useState(0);
  const [inputs, setInputs] = useState({});
  const [streamedBytes, setStreamedBytes] = useState(0);
  const [totalBytes, setTotalBytes] = useState(0);
  const [downloadedVideoURL, setDownloadedVideoURL] = useState("");
  const videoRef = useRef(null);

  useEffect(() => {
    video && uploadFile(video);
  }, [video]);

  const uploadFile = (file) => {
    const storage = getStorage(app);
    const folder = "input_videos/";
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, folder + fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setVideoPerc(Math.round(progress));
        console.log(`Upload progress: ${Math.round(progress)}%`);
        setStreamedBytes(snapshot.bytesTransferred);
        setTotalBytes(snapshot.totalBytes);
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
            break;
        }
      },
      (error) => {
        console.log("Upload error:", error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('DownloadURL - ', downloadURL);
          setInputs((prev) => {
            return {
              ...prev,
              downloadURL,
            };
          });
        });
      }
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://127.0.0.1:5000/api/videos`, { ...inputs });
      console.log('Video uploaded successfully');
    } catch (error) {
      console.log("Error uploading video:", error);
    }
  };

  const handleDownloadAndPlay = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/api/download-video');

      if (!response.ok) {
        throw new Error('Failed to fetch video');
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      console.log("Downloaded video URL:", url);
      setDownloadedVideoURL(url);

      // Create a link element to trigger the download
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'downloaded_video.mp4');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading video:', error);
    }
  };

  useEffect(() => {
    if (downloadedVideoURL && videoRef.current) {
      videoRef.current.src = downloadedVideoURL;
      videoRef.current.load();
      videoRef.current.play().catch(error => console.error('Error playing video:', error));
    }
  }, [downloadedVideoURL]);

  return (
    <div className="bg-black h-full">
      <Navbar />
      <h1 className="mt-10 mb-6 text-center text-white text-3xl">Getting 3D Plots</h1>
      <p className="text-center text-white mb-6 text-lg mt-10">
        Upload your walking video to get 3D joint points pin pointed on your body. You can download the video by clicking on the Download Processed Video.
      </p>

      <div className="relative w-full h-[950px]">
        <video autoPlay loop muted id="video" className="w-full h-[700px] mt-40">
          <source src={videoF} type="video/mp4" />
        </video>

        <div className="upload bg-black text-white w-full md:h-[1100px] sm:h-[800px] text-white flex flex-col items-center justify-center">
          <form onSubmit={handleSubmit}>
            <label htmlFor="video">Video:</label>
            {videoPerc > 0 && `Uploading: ${videoPerc}% (${streamedBytes} bytes / ${totalBytes} bytes)`}
            <br />
            <input
              type="file"
              accept="video/*"
              id="video"
              onChange={(e) => setVideo(e.target.files[0])}
            />
            <br />
            <button
              type="submit"
              className="font-large texl-3xl hover:scale-110 mt-20 p-4 hover:bg-[#F1F8FF] ml-2 rounded-full hover:text-black border-white border-3"
              style={{ width: '350px' }}
            >
              Upload
            </button>
          </form>
          <br />
          <button
            onClick={handleDownloadAndPlay}
            className="font-large texl-3xl hover:scale-110 mt-10 p-4 hover:bg-[#F1F8FF] rounded-full hover:text-black border-white border-3"
            style={{ width: '350px' }}
          >
            Download and Play Processed Video
          </button>
          <br />
          {/* <div className="mt-10">
            <video controls className="w-full h-auto" ref={videoRef}>
              <source src={downloadedVideoURL}
               type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div> */}
        </div>
        <Newsletter/>
      </div>
    </div>
  );
}

export default Dplot;


//https://firebasestorage.googleapis.com/v0/b/gaitguru-backend.appspot.com/o/processed_videos%2Foutput_video.mp4?alt=media&token=429490ca-006a-499f-9116-98d726c47a00