import { ScrollTrigger } from 'gsap/all'
import './App.css'
import About from './components/About'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import 'remixicon/fonts/remixicon.css'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
import Tags from './components/Tags'
import Tech from './components/Tech'
import Works from './components/Works'
import Contact from './components/Contact'

function App() {
  gsap.registerPlugin(ScrollTrigger);

  return (
    <>
    <div className=' overflow-x-hidden text-white'>
     <Navbar />
     <Hero />
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
