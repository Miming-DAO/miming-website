import { HomeSection } from "@/components/sections/home";
import { OurStorySection } from "@/components/sections/our-story";
import { RoadmapSection } from "@/components/sections/roadmap";
import { TokenomicsSection } from "@/components/sections/tokenomics";
import { UtilitySection } from "@/components/sections/utility";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HomeSection />
      <OurStorySection />
      <TokenomicsSection />
      <UtilitySection />
      <RoadmapSection />
    </div>
  );
}
