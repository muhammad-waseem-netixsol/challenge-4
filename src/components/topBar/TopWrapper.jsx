import React from 'react';
import Address from '../main/Address';
import Logos from '../main/Logos';
import Navbar from '../Navbar/Navbar';

const TopWrapper = ({open}) => {
  console.log(open)
    return (
        <div className={`md:h-screen max-w-screen w-full rounded-3xl z-10 bg-black ${!open ? "transition-all duration-1000 ease absolute top-[-400%] left-0 h-screen" : "transition-all duration-300 ease absolute top-0 z-40 left-0"}`}>
        <div className='h-[100px] transition duration-1000 ease'></div>
      <div className="black text-white p-3 max-w-screen">
        <div className='flex w-full flex-col  border-t border-b sm:flex-row'>
          <div className=' hover:bg-slate-900 cursor-pointer flex-1 p-10 text-white font-bold text-2xl sm:border-r sm:text-end border-b sm:border-b-0'>OUR WORK</div>
          <div className=' hover:bg-slate-900 cursor-pointer flex-1 p-10 text-white font-bold text-2xl '>ABOUT</div>
        </div>
        <div className='flex w-full flex-col  border-b sm:flex-row'>
          <div className=' hover:bg-slate-900 cursor-pointer flex-1 p-10 text-white font-bold text-2xl sm:border-r sm:text-end border-b sm:border-b-0'>OUR WORK</div>
          <div className=' hover:bg-slate-900 cursor-pointer flex-1 p-10 text-white font-bold text-2xl '>ABOUT</div>
        </div>
      </div>
      <Address />
      <Logos />
      </div>
    );
}

export default TopWrapper;
