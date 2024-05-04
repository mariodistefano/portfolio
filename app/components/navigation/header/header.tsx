import Profile from "../../ui/profile";
import MagnerticWrapper from "../../visualEffects/magnetic-wrapper";
import FancyButton from "../../ui/fancy-button";
import { FaArrowRight } from "react-icons/fa";
export default function Header() {
  return (
    <div className="w-full flex items-center justify-center md:justify-between">
      <Profile/>
      <div className="hidden md:inline">
        <MagnerticWrapper> 
          <FancyButton text="Let's talk"icon={<FaArrowRight />} />
        </MagnerticWrapper>
      </div>
    </div>
  );
}
