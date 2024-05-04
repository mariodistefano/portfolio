import Header from "@/app/components/navigation/header/header";
import FancyButton from "@/app/components/ui/fancy-button";
import LiveClock from "@/app/components/ui/live-clock";
import ScrollDown from "@/app/components/ui/scroll-down";
import MagnerticWrapper from "@/app/components/visualEffects/magnetic-wrapper";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

export default function LandingSection() {
  return (
  <div className="relative h-screen overflow-hidden p-8">
      {/* Header */}
      <Header />
      {/* Show magnetic fancy button on smoll screens and hide it on md screen */}
      <div className="absolute bottom-36 left-10 z-20 md:hidden">
        <MagnerticWrapper> 
          <FancyButton text="Let's talk"icon={<FaArrowRight />} />
        </MagnerticWrapper>
      </div>
      {/* live clock */}
      <div className="absolute right-10 bottom-10">
        <LiveClock timeZone={"Europa/Catania"}/>
      </div>
      {/* slogan */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-8 leading-[14vw] lg:leading-[10vw] 2xl:leading-[9rem] font-medium h-[40rem] tracking-[0.3rem]">
          <div className="flex flex-col justify-center items-center text-primary-foreground text-[18vw] lg:text-[14vw] 2xl:text-[12rem] uppercase">
              <div>
                <span>Code</span>
              </div>
            <div>
              <span>Crafting</span>
            </div>
            <div className="relative ">
                <span>Brilliance</span>
                <div className="text-[1rem] leading-[1.4rem] traking-[-0.07rem] absolute top-[14vw] lg:top-[10vw] 2xl:top-[9rem] left-0 2xl:left-[57rem] w-[30rem] uppercase font-normal">
                <span>Empowring innovation</span>
                <br />
                <span>through inspired design</span>
                <br />
                <span>where challenges spark creativity</span>
                <br />
                <span>and solutions redefine possibilities.</span>
                </div>
            </div>
        </div>
        {/*Magentic scroll down*/}
        <MagnerticWrapper className="absolute left-1/2 bottom-[8rem] md:bottom-[4rem] 2xl:-bottom-10">
          <ScrollDown/>
        </MagnerticWrapper>
    </div>  
</div>
      

  );
}
