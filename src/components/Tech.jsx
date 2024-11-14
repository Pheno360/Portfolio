import React from 'react'
import Star from '../assets/star.png'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
const Tech = () => {

    useGSAP(()=>{
        gsap.to(".star",{
            rotate:"180deg",
            yoyo:true,
            duration:3,
            repeat:-1
        })
    })
  return (
    <>
    <div className=' mt-52 font-[600] text-[18vh] px-52'>
      <h1 className=' '>WHAT I AM </h1>
      <h1 className='flex items-center justify-end'><img className='h-32 w-32 animate-spins star' src={Star} alt="" /> GOOD AT</h1>
    </div>

    <div className='px-32 mt-10 flex flex-col gap-10'>
        <h1 className='flex gap-20 text-5xl font-[500] rounded-full bg-[#1e013e] p-6 hover:bg-[url("https://cdn.prod.website-files.com/60ef088dd8fef99352abb434/650d715703204e7241295dea_html%20codes%20list.webp")] bg-opacity-80 transition ease-in-out bg-center '><span className=''>01</span> HTML</h1>
        <h1 className='flex gap-20 text-5xl font-[500] rounded-full bg-[#1e013e] p-6 hover:bg-[url("https://lookupgrade.com/wp-content/uploads/2023/12/concept-art-of-css.jpg")] bg-opacity-80 transition ease-in-out bg-center '><span className=''>02</span> CSS</h1>
        <h1 className='flex gap-20 text-5xl font-[500] rounded-full bg-[#1e013e] p-6 hover:bg-[url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBufIjchEXe3OgB9FRMmIW9RhpP6QPGtLLSQ&s")] bg-opacity-80 transition ease-in-out bg-center '><span className=''>03</span>JAVASCRIPT</h1>
        <h1 className='flex gap-20 text-5xl font-[500] rounded-full bg-[#1e013e] p-6 hover:bg-[url("https://images.ctfassets.net/fo9twyrwpveg/jwJUXdjJFE9QrBewwYgnG/7b9d7d184ff99be78f27697d76e8a9ee/Tailwind_vs._Bootstrap__Comparing_CSS_frameworks_8.11.24__1_.png?fm=webp&w=3840&q=100")] bg-opacity-80 transition ease-in-out bg-left '><span className=''>04</span>TAILWIND CSS</h1>
        <h1 className='flex gap-20 text-5xl font-[500] rounded-full bg-[#1e013e] p-6 hover:bg-[url("https://qualitythought.in/wp-content/uploads/2024/08/the_future_of_web_development_reactjs.webp")] bg-opacity-80 transition ease-in-out bg-center '><span className=''>05</span> REACT JS</h1>
        <h1 className='flex gap-20 text-5xl font-[500] rounded-full bg-[#1e013e] p-6 hover:bg-[url("https://pbs.twimg.com/ext_tw_video_thumb/1737493435211243520/pu/img/Ik9uP-sdK8Jp127o.jpg:large")] bg-opacity-80 transition ease-in-out bg-center '><span className=''>06</span> GSAP (ANIMATION)</h1>
    </div>
    </>
  )
}

export default Tech
