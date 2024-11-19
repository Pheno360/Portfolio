import React from 'react'
import Spline from '@splinetool/react-spline';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
const Hero = () => {

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/cv.pdf"; // Path to your CV in the public folder
    link.download = "Aniket_Patil_CV.pdf"; // Desired file name when downloaded
    link.click();
  };

 
  return (
    <div className=' text-white md:flex inline-block '>

    <div className=' absolute z-30 top-60 md:left-44 left-2 flex gap-[42vw]'>

    <div className=' leading-normal'>
    <h1  className=' text-lg text-[#e3e3e3]'>Hi there! this is</h1>
    <h1 className='text-3xl font-semibold'>Aniket <span className=' text-[#abaaaa]'>Patil</span></h1>
    <h1 className='md:text-[9vh] text-[8vh] font-bold leading-snug '>I'm a <span className=' text-[#8839ff]  frontend'>FRONTEND</span></h1>
    <h1 className='md:text-[9vh] text-[8vh] font-bold -mt-6'> DEVELOPER</h1>
    <div className='md:hidden text-[#6e2cd0] flex gap-10 mt-4 text-3xl justify-center'>
    <i className="ri-github-fill"></i>
<i className="ri-linkedin-box-fill"></i>
<i className="ri-twitter-x-line"></i>
</div>
    <button onClick={handleDownload} className='md:ml-10 ml-20 md:mt-10 mt-5 text-xl font-semibold border py-3 tracking-wider hover:bg-[#5f2bae] px-6 rounded-full border-purple-600 md:inline-block'>Download CV</button>
</div>

<div className='md:flex hidden flex-col gap-7 text-3xl text-[#6e2cd0]'>
<h1 className='text-[#c2c2c2] text-2xl'>Socials</h1>


<a    href="https://github.com/Pheno360"
      target="_blank"
      rel="noopener noreferrer"
    >
<i className="ri-github-fill"></i> 
</a>

<a    href="https://www.linkedin.com/in/aniket-patil-411a79259"
      target="_blank"
      rel="noopener noreferrer"
    >
<i className="ri-linkedin-box-fill"></i>
</a>

<a
      href="https://x.com/ANIKETP52265686"
      target="_blank"
      rel="noopener noreferrer"
    >
<i className="ri-twitter-x-line"></i>
</a>

</div>
   
    </div>

    <div className=' md:ml-72 ml-0 md:mt-16 -mt-20 md:opacity-100 opacity-80  md:h-auto h-screen md:w-auto w-full '>
     <Spline scene="https://prod.spline.design/O46WN2Uz9k8FyoEn/scene.splinecode" />
    </div>

    <div>
    
    </div>

    </div>
  )
}

export default Hero
