import React from 'react'
import Aniket from '../assets/Aniketpng.png'
import './Contact.css'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Contact = () => {



  return (
    <div className=' contact-container h-screen bg-gradient-to-b '
    style={{
        backgroundImage: 'linear-gradient(to bottom, black 20%, purple 80%)',
      }}
      >

      
      <div className=' z-10 image absolute flex justify-center w-full mt-20 -ml-[20vh]' >
        <img src={Aniket} alt="" />
      </div>

<div className='p-20 socials  '>

<div className='flex gap-[45vw] '>
      <div className=' flex flex-col gap-2 mt-20 '>
       <h1 className=' text-xl font-medium'>Socials</h1>
       <h1 className=' text-purple-500'>Twitter/X</h1>
       <h1 className=' text-purple-500'>Facebook</h1>
       <h1 className=' text-purple-500'>Instagram</h1>
      </div>

{/* <div className=' text-[#ffffffca] text-2xl mt-10 '>
<h1>As a frontend developer, I believe in crafting with purpose.</h1>
 <h1 className=' mt-10 tracking-wider'>It’s about serving 
users through thoughtful design and dedicating myself to building seamless digital experiences. 
</h1>
</div> */}

      </div>
      
      <div className='flex gap-[45vw]'>
      <div className=' flex flex-col mt-10 gap-2 w-72'>
       <h1 className=' text-xl font-medium'>Contact me</h1>
       <h1 className=' text-purple-500'>Email</h1>
       <h1 className=' text-purple-500'>Whatsapp</h1>
      </div>

      <div className=' text-[#ffffffca] text-2xl  '>
<h1>As a frontend developer, I believe in crafting with purpose.</h1>
 <h1 className=' mt-10 tracking-wider'>It’s about serving 
users through thoughtful design and dedicating myself to building seamless digital experiences. 
</h1>
</div>

      </div>

      <div className=' -mt-8 text-2xl text-[#ffffffda] '>
  Let's make <br /> something <br />happen together
</div>
</div>



      <div className="scroll-container bg-white">
      <div className="scroll-text text-[10vh] h-28  tracking-widest font-semibold text-[#2f2f2f]">
        aniketpatil9096230241@gmail.com
      </div>
    </div>
    </div>
  )
}

export default Contact
