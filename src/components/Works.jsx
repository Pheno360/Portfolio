import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useState } from 'react'
import DecayCard from './DecayCard'
import nike from '../assets/nike.jpg'
import pureAura from '../assets/pureAura.jpg';
import Microsoft from '../assets/Microsoft.jpg';

const Works = () => {

  const tl=gsap.timeline();

  useGSAP(()=>{
    tl.to(".work-c",{
            scrollTrigger:{
              trigger:".work-c",
              start:"top top",
              end:"bottom bottom",
              scrub:6,
              pin:".work-text"
            }
    })
  })
  return (
    <div className='work-c overflow-hidden'>
  
    <div className='work-container h-screen overflow-y-hidden'>
      <h1 className=' work-text  md:text-[71vh] text-[18vh] md:mt-0 mt-52 text-white'>
      {"WORK".split('').map((item,index)=>(<span key={index} className='work-animation'>
        {item}
      </span>))}</h1>
     
    </div>

    <div className='work '>

    <div className=' md:px-52 px-0 md:-ml-0 -ml-20 md:scale-100 scale-75 '>
    <a target="_blank" href="https://team-eternals-reimagine-round2-dn5i.vercel.app/">
    <DecayCard width={500} height={600} image={nike}>
  <h2 className=''>Nike<br/>Redesigned</h2>
</DecayCard></a>
</div>

<div className='md:flex inline-block justify-end mt-[50vh] md:px-52 px-0 md:scale-100 scale-75 md:-ml-0 -ml-20'>
 <a target="_blank"  href="https://pure-aura-m7gs.vercel.app/">
<DecayCard width={500} height={600} image={pureAura}>
  <h2>Pure<br/>Aura</h2>
</DecayCard>
</a>
</div>

<div className='mt-[50vh] md:px-52 px-0 md:-ml-0 -ml-24 md:scale-100 scale-75 mb-[10vh] '>
<a target="_blank"  href="https://microsoft-ap-3.vercel.app/">
<DecayCard width={550} height={500} image={Microsoft}>
  <h2>Microsoft<br/>Redesigned</h2>
</DecayCard>
</a>

<div className='h-[20vh] '></div>

</div>

</div>

   
    </div>
  )
}

export default Works
