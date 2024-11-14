import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useState } from 'react'
import DecayCard from './DecayCard'
import nike from '../assets/nike.jpg'
import { ScrollTrigger } from 'gsap/all'
import pureAura from '../assets/pureAura.jpg';
import Microsoft from '../assets/Microsoft.jpg';

const Works = () => {

  gsap.registerPlugin(ScrollTrigger);

  const tl=gsap.timeline();

  useGSAP(()=>{


    tl.to('.work-c',{
            scrollTrigger:{
              trigger:".work-c",
              start:"top top",
              end:"bottom bottom",
              pin:".work-text"
            }
    })


    // gsap.to('.work',{
    //   y:-900,
    //   scrollTrigger:{
    //     trigger:".work-container",
    //     scroller:"body",
    //     start:"top top",
    //     end:"bottom bottom",
     
    //     scrub:3
    //   }
    // })
  })
  return (
    <div className='work-c'>
  
    <div className='work-container h-screen overflow-y-hidden'>
      <h1 className=' work-text  text-[73vh] text-white'>
      {"WORK".split('').map((item)=>(<span className='work-animation'>
        {item}
      </span>))}</h1>
     
    </div>

    <div className='work '>

    <div className=' px-52 '>
    <a target="_blank" href="https://team-eternals-reimagine-round2-dn5i.vercel.app/">
    <DecayCard width={500} height={600} image={nike}>
  <h2 className=''>Nike<br/>Redesigned</h2>
</DecayCard></a>
</div>

<div className='flex justify-end mt-[50vh] px-52'>
 <a target="_blank"  href="https://pure-aura-m7gs.vercel.app/">
<DecayCard width={500} height={600} image={pureAura}>
  <h2>Pure<br/>Aura</h2>
</DecayCard>
</a>
</div>

<div className='mt-[50vh] px-52 mb-[10vh] '>
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
