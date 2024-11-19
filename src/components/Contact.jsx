import React from 'react'
import Aniket from '../assets/Aniketpng.png'
import './Contact.css'

const Contact = () => {



  return (
    <div className=' contact-container h-screen bg-gradient-to-b  '
    style={{
        backgroundImage: 'linear-gradient(to bottom, black 20%, darkOrchid 80%, black 100%)',
      }}
      >

      <h1 className=' absolute md:text-[20vh] text-[12vh] ml-[28vw]' > LETS TALK</h1>

      
      <div className=' z-10  image absolute flex justify-center w-full md:mt-20 mt-64 md:-ml-[20vh] ml-0' >
        <img className='' src={Aniket} alt="" />
      </div>

<div className='md:p-20 p-5 socials md:inline-block flex md:absolute static z-20 gap-40'>

<div className='flex gap-[45vw] '>
      <div className=' flex flex-col gap-2 md:mt-32 mt-64 font-medium '>
       <h1 className=' text-xl font-medium'>Socials</h1>
        <a
      href="https://x.com/ANIKETP52265686"
      target="_blank"
      rel="noopener noreferrer"
    ><h1 className=' md:text-purple-500 text-purple-400'>Twitter/X</h1></a>

<a
      href="https://www.facebook.com/profile.php?id=100011156595396"
      target="_blank"
      rel="noopener noreferrer"
    >
       <h1 className=' md:text-purple-500 text-purple-400'>Facebook</h1></a>

       <a
      href="https://www.instagram.com/phenomenal__ap_5/profilecard/?igsh=MXY5b3RjNm5sMWo1dw== "
      target="_blank"
      rel="noopener noreferrer"
    >
       <h1 className=' md:text-purple-500 text-purple-400'>Instagram</h1>
       </a>
      </div>

      </div>
      
      <div className='flex gap-[45vw]'>
      <div className=' flex flex-col md:mt-8 mt-64 gap-2 w-72 font-medium'>
       <h1 className=' text-xl font-medium'>Contact me</h1>
       <a href="https://mail.google.com/mail/?view=cm&fs=1&to=avinashpatil98672@gmail.com&su=Subject&body=BodyContent"
          target="_blank"
           rel="noopener noreferrer">
       <h1 className=' md:text-purple-500 text-purple-400'>Email</h1>
       </a>
       <a
      href="https://wa.me/qr/U26IR66NFI36B1"
      target="_blank"
      rel="noopener noreferrer"
    ><h1 className=' md:text-purple-500 text-purple-400'>Whatsapp</h1>
       </a>
      </div>

      

      </div>

      <div className=' flex gap-[42vw]'>

     
      <div className=' mt-4 text-2xl text-[#ffffffda] w-[35vw] '>
      <hr />
      <h1 className='mt-5 text-sm font-medium text-[#bbbbbb]'>Got an project idea?</h1>
  Let's make <br /> something <br />happen together
</div>

<div className=' text-[#ffffffca] text-2xl -mt-32 md:inline-block hidden '>
<h1>As a frontend developer, I believe in crafting with purpose.</h1>
 <h1 className=' mt-10 tracking-wider'>It’s about serving 
users through thoughtful design and dedicating myself to building seamless digital experiences. 
</h1>
</div>
</div>

</div>



      <div className="scroll-container  text-white md:mt-0 mt-44">
      <div className="scroll-text md:text-[8vh] text-[7vh] h-20 mb-2 md:mt-[88vh] mt-[0]  tracking-widest font-semibold text-[#2f2f2f">
        aniketpatil9096230241@gmail.com
      </div>
    </div>
    </div>
  )
}

export default Contact
