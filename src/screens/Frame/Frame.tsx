import React from "react";
import { CallToActionMainSection } from "./sections/CallToActionMainSection";
import { ContactSection } from "./sections/ContactSection";
import { AboutFirmSection } from "./sections/AboutFirmSection";
import { FooterSection } from "./sections/FooterSection";
import { HeroSection } from "./sections/HeroSection";
import { ClientTestimonialsSection } from "./sections/ClientTestimonialsSection";
import { WhyChooseUsSection } from "./sections/WhyChooseUsSection";
import { CriminalDefenseServicesSection } from "./sections/CriminalDefenseServicesSection";
import { WhyUsSection } from "./sections/WhyUsSection";

export const Frame = (): JSX.Element => {
  return (
    <div className="w-full bg-white">
      <div className="flex flex-col">
        <HeroSection />
        <ClientTestimonialsSection />
        <WhyUsSection />
        <CallToActionMainSection />
        <CriminalDefenseServicesSection />
        <AboutFirmSection />
        <WhyChooseUsSection />
        <ContactSection />
        <FooterSection />
      </div>
    </div>
  );
};
