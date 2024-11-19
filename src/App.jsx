import { ScrollTrigger } from 'gsap/all'
import './App.css'
import About from './components/About'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import 'remixicon/fonts/remixicon.css'
import gsap from 'gsap'
import Tags from './components/Tags'
import Tech from './components/Tech'
import Works from './components/Works'
import Contact from './components/Contact'
import LocomotiveScroll from 'locomotive-scroll'
import './components/locomotive-scroll.css'
import GradientText from './components/GradientText'
import CountUp from './components/CountUp'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger);

function App() {

  const locomotiveScroll = new LocomotiveScroll();

  const tl=gsap.timeline();

  useGSAP(()=>{

    gsap.from('.name',{
      y:200,
      duration:1
    })
   tl.to('.loader',{
    transform:'translateX(0%)',
    duration:4
   })

   tl.to('.preloader',{
    y:-1000,
    duration:1

   })
  })
  

  return (
    <>
    <div className=' preloader absolute z-[60] h-screen w-full bg-[#e5e5e5]'>

    
<div className=' mt-52'>
<GradientText
  colors={["#9d00ff", "#0d0d0d", "#ae00fe", "#4079ff", "#000000"]} // Custom gradient colors
  animationSpeed={3} // Custom animation speed in seconds
  showBorder={false} // Show or hide border
  className="custom-class text-[20vh]  " // Add one or more custom classes
>
 <CountUp
  from={0}
  to={100}
  separator=","
  direction="up"
  duration={1}
  className="count-up-text"
/>
</GradientText>
</div>

<div className=' p-6 mt-[27vh] text-3xl font-semibold h-26 overflow-hidden'>
  <h1 className=' name text-[#1f1f1f]'>Aniket  <span className=' text-[#686868]'>Patil</span></h1>
</div>

<div className='loader md:mt-2 -mt-5 h-[3vh] bg-black tranform translate-x-[-100%]'></div>


</div>

    <div className=' overflow-y-hidden overflow-x-hidden text-white'>

    <div className=' h-screen'>
     <Navbar />
     <Hero />
     </div>
     <About />
     <Tags />
     <Tech />
     <Works />
     <Contact />
     </div>
    </>
  )
}

export default App
