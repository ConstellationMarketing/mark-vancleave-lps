import React from "react";
import { HeroSectionTest } from "./sections/HeroSectionTest/HeroSectionTest";
import { LogoSliderSectionTest } from "./sections/LogoSliderSectionTest/LogoSliderSectionTest";
import { WhyRecoverySectionTest } from "./sections/WhyRecoverySectionTest/WhyRecoverySectionTest";
import { PracticeAreasSectionTest } from "./sections/PracticeAreasSectionTest/PracticeAreasSectionTest";
import { PrimaryCTASectionTest } from "./sections/PrimaryCTASectionTest/PrimaryCTASectionTest";
import { AboutUsSectionTest } from "./sections/AboutUsSectionTest/AboutUsSectionTest";
import { MeetAttorneySectionTest } from "./sections/MeetAttorneySectionTest/MeetAttorneySectionTest";
import { WhyChooseUsSectionTest } from "./sections/WhyChooseUsSectionTest/WhyChooseUsSectionTest";
import { FooterSectionTest } from "./sections/FooterSectionTest/FooterSectionTest";
import { DisclaimerSectionTest } from "./sections/DisclaimerSectionTest/DisclaimerSectionTest";

export const FrameTest = (): JSX.Element => {
  return (
    <div className="w-full bg-white">
      <div className="flex flex-col">
        <HeroSectionTest />
        <LogoSliderSectionTest />
        <WhyRecoverySectionTest />
        <PracticeAreasSectionTest />
        <PrimaryCTASectionTest />
        <AboutUsSectionTest />
        <MeetAttorneySectionTest />
        <WhyChooseUsSectionTest />
        <FooterSectionTest />
        <DisclaimerSectionTest />
      </div>
    </div>
  );
};
