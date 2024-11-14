import React, { useEffect, useRef, useState } from 'react'
import AniketLogo from '../assets/AniketLogo2.png'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Navbar = () => {

  const menu=useRef();

  const tl=gsap.timeline();

  useGSAP(()=>{
    tl.to(menu.current,{
     transform:"translateX(0%)",
     duration:1
    })

    tl.to('.home',{
      y:-90,
      stagger:0.05
    })

    tl.pause();
  },)

    const [greeting, setGreeting] = useState('');

    const handleClick=()=>{ 
      tl.play();
    }

    const handleExit=()=>{
      tl.reverse();
    }

    useEffect(() => {
    const updateGreeting = () => {
      const currentHour = new Date().getHours();

      if (currentHour >= 5 && currentHour < 12) {
        setGreeting('Good morning!');
      } else if (currentHour >= 12 && currentHour < 17) {
        setGreeting('Good afternoon!');
      } else if (currentHour >= 17 && currentHour < 21) {
        setGreeting('Good evening!');
      } else {
        setGreeting('Good night!');
      }
    };

    // Call it once when the component mounts
    updateGreeting();

    // Update the greeting every hour
    const interval = setInterval(updateGreeting, 3600000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);
  return (
    <>
<div className=' relative z-50'>
    <div ref={menu} className='menu-bar md:hidden inline-block transform translate-x-[100%]  absolute h-screen w-full overflow-x-hidden  bg-black z-40'>

    <div onClick={handleExit}  className='close-icon px-2'>
    <h1 className='flex md:hidden absolute z-50 gap-4 items-center w-full font-normal text-[#d9d9d9] text-sm'><img src={AniketLogo} alt='Aniket Patil' className='w-9 h-9 -mt-2' />{greeting}</h1>
    <i className="ri-close-circle-fill text-white flex justify-end  text-3xl"></i>
    </div>

    <div className=' p-4'>

    <div className=' text-[10vh] font-bold leading-tight '>
    <div className=' h-20 overflow-hidden'>
      <h1 className='home text-[#cfcfcf]'>HOME</h1>
      <h1 className='home text-[#cfcfcf] '>HOME</h1>
      </div>

      <div className=' h-20 overflow-hidden'>
      <h1 className='home text-[#cfcfcf]'>ABOUT</h1>
      <h1 className='home text-[#cfcfcf] '>ABOUT</h1>
      </div>

      <div className=' h-20 overflow-hidden'>
      <h1 className='home text-[#cfcfcf]'>WORK</h1>
      <h1 className='home text-[#cfcfcf] '>WORK</h1>
      </div>

      <div className=' h-20 overflow-hidden'>
      <h1 className='home text-[#cfcfcf]'>CONTACT</h1>
      <h1 className='home text-[#cfcfcf] '>CONTACT</h1>
      </div>
      </div>

      <hr />

      <div className=' text-white mt-10 text-xl'>
      <h1 className=' font-semibold text-xl'>Socials</h1>
      <div className='flex gap-6 mt-4 text-purple-500 font-semibold'>
        <h1>LinkedIn</h1>
        <h1>GitHub</h1>
        <h1>Twitter/X</h1>
      </div>

      <h1 className='font-semibold text-xl mt-6'>Text me</h1>
      <h1 className=' text-purple-500 font-semibold mt-2'>WhatsApp</h1>
      </div>

    </div>

    </div>

    <div  className=' tracking-wide flex md:px-14 px-2 md:mt-8 mt-5 font-semibold text-lg text-white w-full '>
      <h1 className='flex gap-4  items-center w-full font-normal text-[#d9d9d9] text-sm'><img src={AniketLogo} alt='Aniket Patil' className='w-9 h-9 -mt-2' />{greeting}</h1>

      <div onClick={handleClick} className='menu-icon md:hidden flex '>
      <i  className="ri-menu-3-line text-3xl "></i>
      </div>

      <div className='md:flex hidden justify-end w-full gap-6 text-[#e1dfdf] '>
      <h1>Home</h1>
      <h1>About</h1>
      <h1>Work</h1>
      <h1>Contact</h1>
      </div>

    </div>

    </div>
    </>
  )
}

export default Navbar
