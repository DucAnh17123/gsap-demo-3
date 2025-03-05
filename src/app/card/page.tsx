import BorderDynamicCard from "@/components/card/BorderDynamicCard";
import BorderDynamicHoverCard from "@/components/card/BorderDynamicHoverCard";
import DirectionHoverCard from "@/components/card/DirectionHoverCard";
import DirectionImageHoverCard from "@/components/card/DirectionImageHoverCard";
import FlipCard from "@/components/card/FlipCard";
import LensCard from "@/components/card/LensCard";
import MeteorsCard from "@/components/card/MeteorsCard";
import NeonGradientCard from "@/components/card/NeonGradientCard";
import SkewCard from "@/components/card/SkewCard";
import React from "react";

export default function CardPage() {
  return (
    <div className="h-[4000px] w-full bg-black pt-[100px]">
      <div className="grid grid-cols-12 justify-items-center gap-y-[120px]">
        <div className="col-span-4">
          <NeonGradientCard />
        </div>

        <div className="col-span-4">
          <LensCard />
        </div>

        <div className="col-span-4">
          <BorderDynamicCard />
        </div>

        <div className="col-span-4">
          <BorderDynamicHoverCard />
        </div>

        <div className="col-span-4">
          <DirectionHoverCard />
        </div>

        <div className="col-span-4">
          <MeteorsCard />
        </div>

        <div className="col-span-4">
          <DirectionImageHoverCard />
        </div>

        <div className="col-span-4">
          <FlipCard />
        </div>

        <div className="col-span-4">
          <SkewCard />
        </div>
      </div>
    </div>
  );
}
