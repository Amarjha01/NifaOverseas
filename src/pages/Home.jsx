import React from 'react'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
const Home = () => {

  return (
    <div className=' container px-0 mx-auto'>
       <Navbar />
       <HeroSection />
    </div>
  )
}

export default Home