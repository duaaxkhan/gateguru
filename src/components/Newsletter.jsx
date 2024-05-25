import React from 'react';

function Footer() {
  return (
    <div className='fixed bottom-0 w-full h-[20px] bg-black text-white flex justify-between items-center px-4'>
      <div className='text-left'>
        © Copyright GaitGuru
      </div>
      <div className='text-right'>
        All Rights Reserved
      </div>
    </div>
  );
}

export default Footer;
