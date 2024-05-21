import { FC } from "react";
import SvgCurve from "../visualEffects/svg-curve";
import { HeadingAnimatedSvg } from "./heading-animated-svg";

interface HeadingProps {
    number: string;
    title_1: string;
    title_2: string;
}

const Heading: FC<HeadingProps> = ({ number, title_1, title_2 }) => {
    return (
        <div className="relative my-10 px-8 z-20">
            <div className="outline-none flex flex-column justify-start shrink-0 opacity-5 transform -top-32 2xl:-top-24 w-[71px] flex-none h-auto left-4 lg:left-12 absolute whitespace-pre">
                <h2 className="font-pixel text-[180px] text-center text-primary-foreground relative">
                    <span className="bottom_fade bg-clip-text text-transparent p-4">{number}</span>
                </h2>
            </div>
            <div className="flex items-center flex-nowrap min-h-min overflow-hidden p-0 w-full font-oswald">
                <p className="text-[18vw] lg:text-[12vw] leading-[100%] text-primary-background mr-3" style={{ color: 'white' }}>
                    {title_1}
                </p>
                <HeadingAnimatedSvg text={"Learn more about my project"}/>
                <p className="text-[18vw] lg:text-[12vw] leading-[100%] text-primary-background italic" style={{ color: 'white' }}>
                    {title_2}
                </p>
            </div>
            <SvgCurve/>
        </div>
    );
};

export default Heading;
