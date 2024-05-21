"use client";
import Button from "./components/ui/button";
import Card from "./components/ui/card";
import WaterWveWrapper from "./components/visualEffects/water-wave-wrapper";
import { GoHomeFill } from "react-icons/go";
import { FaArrowRight, FaUser } from "react-icons/fa";
import Input from "./components/ui/input";
import TextArea from "./components/ui/text-area";
import Profile from "./components/ui/profile";
import FancyButton from "./components/ui/fancy-button";
import LiveClock from "./components/ui/live-clock";
import MagnerticWrapper from "./components/visualEffects/magnetic-wrapper";
import ScrollDown from "./components/ui/scroll-down";
import { DiVim } from "react-icons/di";
import LandingSection from "@/sections/landing";
import FeaturedSection from "@/sections/featured";
export default function Home() {
  return (
    <WaterWveWrapper
      imageUrl=""
      dropRadius={10}
      perturbance={30}
      resolution={2048}
    >
      {() => (
      <div>

        <LandingSection />
        <FeaturedSection/>
      </div>
      )}
    </WaterWveWrapper>
  );
}
