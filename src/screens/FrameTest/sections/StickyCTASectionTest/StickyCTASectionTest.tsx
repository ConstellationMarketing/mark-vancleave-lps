import React from "react";
import { Button } from "../../../../components/ui/button";

export const StickyCTASectionTest = (): JSX.Element => {
  return (
    <div className="fixed bottom-0 left-0 right-0 w-full bg-[#00417b] shadow-lg z-50 overflow-x-hidden">
      <div className="container mx-auto max-w-6xl px-4 py-2 md:py-3">
        <div className="flex flex-col md:flex-row gap-2 md:gap-3 items-stretch md:items-center justify-center">
          <a
            href="tel:2817642276"
            className="flex items-center justify-center h-[50px] md:h-[48px] px-5 md:px-6 bg-[#d44500] [font-family:'Roboto',Helvetica] text-white text-sm md:text-base tracking-[1px] rounded-none border-2 border-solid border-[#d44500] hover:bg-[#c23900] hover:border-[#c23900] transition-colors duration-300 font-medium"
          >
            Call Now: (281) 764-2276
          </a>
          <Button
            className="h-[50px] md:h-[48px] flex items-center justify-center !px-5 md:!px-6 !pt-0 !pb-0 bg-[#d44500] [font-family:'Roboto',Helvetica] text-white text-sm md:text-base tracking-[1px] rounded-none border-2 border-solid border-[#d44500] hover:bg-[#c23900] hover:border-[#c23900] transition-colors duration-300 font-medium"
            onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get My Free Case Review
          </Button>
        </div>
      </div>
    </div>
  );
};
