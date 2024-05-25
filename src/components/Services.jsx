import React from 'react'
import Navbar from './Navbar'

import ml from '../../src/pictures-olive/code.jpg'
import cam from '../../src/pictures-olive/cam.jpg'
import report from '../../src/pictures-olive/report.jpg'
import { useNavigate } from "react-router-dom";
import Newsletter from "./Newsletter.jsx";


function Services() {
    const navigate = useNavigate();
  return (
    <>
    <div className='bg-black'>
        <Navbar/>
                            
                    <div className='w-full py-20 md:h-[840px] mx-auto justify-center sm:h-[800px] '>


                    <div className='text-left   justify-center mx-auto  grid md:grid-cols-2  '>
                            <h1 className='text-4xl text-white font-semibold py-10 md:mx-40'>Our Services</h1>
                            
                    </div>

                    <div className='text-left  font-bold font-xl justify-center grid md:grid-cols-3  text-white'>

                        <div className='w-[600px] mx-auto justify-centerflex-col mx-500 my-6 px-20 text-white'>
                        <img src={ml} alt=''/>
                        {/* <h1 className='py-6 text-xl'>Plant Maintenance services </h1> */}
                         <button className=' font-medium texl-xl justify-left hover:scale-110 my-10 mx-5 p-4 hover:bg-[#F1F8FF] hover:scale-110 rounded-full hover:text-black  'onClick={() => navigate("/Dplot")}>3D Plots</button>
                        </div>

                        <div className='w-[600px] mx-auto justify-center flex-col mx-500 my-6 px-20'>
                        <img  className=' 'src={cam} alt=''/>
                        {/* <h1 className='py-6 text-xl'>Training Services</h1>
                                    <h3 className='py-2'>Our SAP Integration service seamlessly connects your SAP system with other applications to streamline processes and increase efficiency.</h3> */}
                      <button className=' font-medium  justify-left hover:scale-110 pt-10 my-10 mx-5 p-4 hover:bg-[#F1F8FF] hover:scale-110 rounded-full hover:text-black' onClick={() => navigate("/TrainingServices")}>Gait Parameters</button>
                        </div>


                        <div className='w-[600px] mx-auto justify-center flex-col mx-500 my-6 px-20'>
                        <img src={report} alt=''/>
                                {/* <h1 className='py-6 text-xl'>IT and SAP Services</h1>
                                    <h3 className='py-2'>Our IT Solutions service offers comprehensive and reliable support for all your technology needs, ensuring optimal performance and security.</h3> */}
                                    <button className=' font-medium  justify-left hover:scale-110 pt-10 my-10 mx-5 p-4 hover:bg-[#F1F8FF] hover:scale-110 rounded-full hover:text-black' onClick={() => navigate("/ITServices")}>Report Generation</button>
                        </div>
                

                    </div>
                    <Newsletter/>
                    </div>


    </div>
    </>
  )
}

export default Services
