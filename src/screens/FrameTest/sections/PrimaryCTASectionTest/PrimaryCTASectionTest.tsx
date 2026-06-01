import React from "react";
import { Button } from "../../../../components/ui/button";

export const PrimaryCTASectionTest = (): JSX.Element => {
  return (
    <section className="w-full py-12 md:py-20 bg-white">
      <div className="container mx-auto max-w-6xl px-4 text-center">
        <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl text-[#091626] mb-6 md:mb-8 [font-family:'Montserrat',Helvetica] leading-[28px] md:leading-[35px] lg:leading-[44px]">
          Discuss Your Options With an Experienced Personal Injury Attorney
        </h2>
        
        <p className="font-medium text-base md:text-lg text-[#222125] max-w-3xl mx-auto mb-8 md:mb-12 [font-family:'Roboto',Helvetica] leading-[24px] md:leading-[27px]">
          Speak directly with a dedicated local legal team that treats you with respect and compassion, not as just another file number.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href="tel:2813038800"
            className="inline-flex items-center justify-center bg-[#d44600] hover:bg-[#c23900] text-white [font-family:'Roboto',Helvetica] text-[18px] tracking-[1px] rounded-none border-2 border-solid border-[#d44600] hover:border-[#c23900] px-8 pt-[30px] pb-[30px] transition-colors duration-300 whitespace-nowrap"
          >
            Call Today: 281-303-8800
          </a>
          <Button
            className="bg-[#d44600] hover:bg-[#c23900] text-white [font-family:'Roboto',Helvetica] text-[18px] tracking-[1px] rounded-none border-2 border-solid border-[#d44600] hover:border-[#c23900] px-8 pt-[30px] pb-[30px] transition-colors duration-300 whitespace-nowrap"
            onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Request Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};
