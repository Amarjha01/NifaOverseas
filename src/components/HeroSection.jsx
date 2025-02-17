import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import heroImg from "../assets/stand.png"
import bel from '../assets/bel.png'
import './custome.css'
function HeroSection() {
  const container = useRef(null);
  const heroimg = useRef(null);
  const text1 = useRef(null);
  const text2 = useRef(null);

  // Use GSAP animation correctly inside useGSAP
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      container.current,
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 2, ease: "power2.out" }
    ).fromTo(
      text1.current,
      { x: -50, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.6 },
      "-=0.5"
    ).fromTo(
      text2.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 },
      "-=0.3"
    ).fromTo(heroimg.current,
      {opacity:0,scale:0, x:-100 },
      {opacity:1, scale:1 ,x:0 ,duration: 2, }
    );
  }, []);

  return (
   <>
    <div className="container flex justify-center items-center md:h-[100vh] lg:h-[100vh] h-[70vh] w-full lg:pt-10 ">
      
      <div ref={container} className="md:h-[80%] h-[60%] w-[95%] bg-[#e69a16ba] rounded-4xl z-20 flex flex-col justify-center  shadow-2xl">
      <div  className="absolute w-full h-[90%] z-10">
  <div className="relative w-16 md:w-20 lg:w-24 ">
  <img ref={heroimg} src={bel} alt="" className="dropShadow " />
  </div>
</div>

        <p ref={text1} className="uppercase text-3xl md:pl-36 lg:pl-28 pl-16 pb-6">Best of</p>
        <p ref={text2} className="uppercase text-5xl md:text-7xl lg:text-9xl font-extrabold text-center text-white [text-shadow:0px_10px_20px_rgba(0,0,0,0.6)] ">Handicrafts</p>
      </div>
    </div>
    <div className="" id="About">
    <img src={bel} alt="" />
    </div>
   </>
  );
}

export default HeroSection;
