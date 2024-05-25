import React,{useState} from 'react'

import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import {  useNavigate } from 'react-router-dom';
function Navbar() {
    const [nav,setnav]= useState(true)
    const hanleNav=()=>{
        setnav(!nav)
    }
    const navigate= useNavigate();
  return (

<>
<div>
      <div className='flex justify-between items-center h-30 max-w-[2000px] mx-10 px-100 text-white py-20 bg-black'>
        <button className=' p-10 md:w-[250px] sm:w-[60px] text-5xl font-extrabold' alt="logo name gate guru" style={{fontFamily: 'Roboto '}}>Gait.Guru</button>
        <ul className=' hidden md:flex '>
            <button className='p-4 hover:bg-[#F1F8FF] hover:scale-110 rounded-full hover:text-black 'onClick={()=>navigate('/Home')}>Home</button>
            <button className='p-4 hover:bg-[#F1F8FF] hover:scale-110 rounded-full  hover:text-black'onClick={()=>navigate('/Services')}>Services</button>
            <button className='p-4 hover:bg-[#F1F8FF] hover:scale-110 rounded-full  hover:text-black'onClick={()=>navigate('/About')}>About</button>
            <button className='p-4 hover:bg-[#F1F8FF] hover:scale-110 rounded-full  hover:text-black' >Settings</button>
        </ul>
        <div onClick={hanleNav} className='block md:hidden  sm:mx-90'>
            {!nav? <AiOutlineClose size={30}/>:<AiOutlineMenu size={30}/>}
        </div>
        <div className={!nav? 'fixed left-0 top-0 w-[40%]  h-full border-r-white ease-in-out mr-100 bg-black duration-150  text-white':'fixed left-[-100%] text-white'}>
        <ul className='pt-5   text-white m-4 overflow-auto'>
        {/* <img className='p-6'src={logo} alt=""/> */}
        <h1>Gait.Guru</h1>
            <button className='p-7 m-4 border-b border-white-600'onClick={()=>navigate('/Home')}>Home</button>
            <button className='p-7  m-4 border-b border-white-600'onClick={()=>navigate('/Services')}>Services</button>
            <button className='p-7  m-4  border-b border-white-600'onClick={()=>navigate('/About')}>About</button>
        </ul>

        </div>
      </div>
      </div>
      </>

  )
}

export default Navbar
