import "./App.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef, useState } from "react";

import Home from "./pages/Home.jsx"
// import loaderGif from "./assets/loaderGif.gif"
function App() {


  const [num, setNum] = useState(0);
  const [showHomePage, setshowHomePage] = useState(false)
  const loader = useRef();
  const hidden = useRef();
  const homePage = useRef();
  const textRoll = useRef();

  
  
  const onLoading = () => {
    const loaderTl = gsap.timeline();
    loaderTl
      .to(loader.current, {
        textContent:"Welcome",
        textTransform:"uppercase",
        fontFamily:"neue",
        width: "100vw",
        borderRadius: "0",
        delay: 1,
        duration: 2,
      })
      .to(loader.current, {
        height: "100vh",
        duration: 2,
        onComplete: () => {
          hidden.current.style.display = "none";
          setshowHomePage(true);
        },
      });
  };

  // ✅ Runs when the component mounts
  useGSAP(() => {
    gsap.to(textRoll.current, {
      x: -1500,
      delay: 1,
      duration: 10,
      ease: "none",
      repeat: -1, // Infinite loop
    });
  });

  // ✅ Run the counter and call onLoading() only when num reaches 100
  useEffect(() => {
    setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        setNum((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            onLoading(); // ✅ Call animation when num reaches 100
            return 100; // ✅ Prevents increasing beyond 100
          }
          return prev + 1;
        });
        i++;
      }, 20);
    }, 1000);
  }, []);

  

  return (
    <>

      <div
        ref={hidden}
        className="min-h-screen w-full bg-white  flex justify-center items-center neue absolute overflow-hidden"
      >
       <div>
       <div className="h-44 w-44 absolute top-2 left-4">
          <img src="https://nifaoverseas.com/wp-content/uploads/2023/04/nifa-e1681454904741.png" alt="" />
        </div>
        {/* <div className="h-44 w-44 absolute top-0 right-4">
          <img src={loaderGif} alt="" />
        </div> */}
       </div>

<div className=" w-[100%] h-48  flex items-center justify-center">
<div ref={textRoll} className=" w-[100%] uppercase  text-7xl font-bold">
<p className="  text-nowrap">NIFA OVERSEAS is a handicraft export, trading, and manufacturing company that specializes in producing and selling antique handicraft products made by skilled small artisans.</p>
</div>
<div ref={loader} className=" absolute h-[10%] w-48  z-50 bg-black text-white rounded-4xl flex justify-center items-center font-serif text-2xl">
<p><span >Loading...</span>{num}%</p>
</div>
</div>
      </div>
      { showHomePage && (
  <div ref={homePage}>
    <Home />
  </div>
)}
    </>
  );
}

export default App;
