import React from 'react'

const Tags = () => {
  return (
    <div>
      
      <div className=' blur-sm hover:blur-0 transition-[2s] h-20 rotate-[8deg] w-[102vw] -ml-4 bg-red-700 text-5xl font-[700] flex gap-10 items-center justify-center '>
        <h1 className=' '>WEB DEVELOPER</h1>
        <h1 className=' '>*</h1>
        <h1>FRONTEND DEVELOPER</h1>
        <h1 className=' '>*</h1>
        <h1>REACT JS DEV</h1>
        
      </div>

      <div className=' blur-sm hover:blur-0 h-20 rotate-[-8deg] w-[104vw] -ml-4 bg-purple-700  text-5xl font-[700] flex gap-10 justify-center items-center -mt-14'>
      <h1 className=' '>3D DESIGN</h1>
        <h1 className=' '>*</h1>
        <h1>ANIMATIONS</h1>
        <h1 className=' '>*</h1>
        <h1>VISUAL DESIGN</h1>
      </div>
    </div>
  )
}

export default Tags
