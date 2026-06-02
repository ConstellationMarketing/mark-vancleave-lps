import React from "react";
import { Button } from "../../../../components/ui/button";

export const StickyCTASectionTest = (): JSX.Element => {
  return (
    <div className="fixed bottom-0 left-0 right-0 w-full bg-[#00417b] shadow-lg z-50 overflow-x-hidden">
      <div className="container mx-auto max-w-6xl px-4 py-3 md:py-4">
        <div className="flex flex-col md:flex-row gap-3 md:gap-4 items-stretch md:items-center justify-center md:justify-start">
          <a
            href="tel:2813038800"
            className="flex items-center justify-center h-[60px] md:h-[56px] px-6 md:px-8 bg-[#d44500] [font-family:'Roboto',Helvetica] text-white text-base md:text-[18px] tracking-[1px] rounded-none border-2 border-solid border-[#d44500] hover:bg-[#c23900] hover:border-[#c23900] transition-colors duration-300 font-bold"
          >
            Call Now: 281-303-8800
          </a>
          <Button
            className="h-[60px] md:h-[56px] flex items-center justify-center !px-6 md:!px-8 !pt-0 !pb-0 bg-[#d44500] [font-family:'Roboto',Helvetica] text-white text-base md:text-[18px] tracking-[1px] rounded-none border-2 border-solid border-[#d44500] hover:bg-[#c23900] hover:border-[#c23900] transition-colors duration-300 font-bold"
            onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Request Free Consultation
          </Button>
        </div>
      </div>
    </div>
  );
};
