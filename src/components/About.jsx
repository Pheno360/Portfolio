import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import Squares from './Squares'

const About = () => {

    useGSAP(()=>{
        gsap.to('.text',{
            opacity:0.8,
            duration:1,
            stagger:1,
            
            scrollTrigger:{
                trigger:'.text',
                start: 'top 50%',
                end: 'bottom 5%',
                scrub: 4,
                ease: 'power4.inOut'
            }
        

        })
    })
  return (
    <>
    <div className=' h-screen absolute '>
    <Squares 
  speed={0.5} 
  size={40} //pixels
  direction='diagonal' // up, down, left, right, diagonal
  borderColor='#353535'
  hoverFillColor='#222'
/>
</div>
    <div className=' flex justify-center md:mt-32 mt-10 h-screen'>
    <div className=' absolute md:text-4xl text-sm font-[500] md:leading-6 leading-2 italic text-center '>
      <h1 className='text opacity-10'>"Hello! I’m a passionate frontend web developer</h1> <br />
      <h1 className='text opacity-10'>dedicated to creating visually captivating websites</h1> <br />
      <h1 className='text opacity-10'>that not only attract attention but also engage users in meaningful ways.</h1><br /> <br />
      <h1 className='text opacity-10'> My goal is to blend functionality with an enjoyable user experience,</h1><br /> 
      <h1 className='text opacity-10'>ensuring that each website I design is not only efficient but also memorable.</h1><br /> <br />
      <h1 className='text opacity-10'>I believe that a well-designed site is the key to connecting with people</h1> <br />
      <h1 className='text opacity-10'>and leaving a lasting impression. Whether it's through striking visuals,</h1><br />
      <h1 className='text opacity-10'> smooth interactions, or intuitive layouts, I'm here to build websites</h1> <br />
      <h1 className='text opacity-10'>that are both beautiful and effective."</h1>
    </div>
    


   

    </div>
    </>
  )
}

export default About
