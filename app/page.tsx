"use client";
import Button from "./components/ui/button";
import Card from "./components/ui/card";
import WaterWveWrapper from "./components/visualEffects/water-wave-wrapper";
import { GoHomeFill } from "react-icons/go";
import { FaUser } from "react-icons/fa";
export default function Home() {
  return (
    <WaterWveWrapper
      imageUrl=""
      dropRadius={10}
      perturbance={30}
      resolution={2048}
    >
      {() => (
        <div className="w-full p-10">
          <div className="max-w-2xl mx-auto">
            <Card title="Ui components">
              <div className="grid grid-cols-4">
                <Button>basic button</Button>
                <Button isIcon>
                  <GoHomeFill />
                </Button>
                <Button isIcon>
                  <FaUser />
                </Button>
              </div>
            </Card>
          </div>
        </div>
      )}
    </WaterWveWrapper>
  );
}
