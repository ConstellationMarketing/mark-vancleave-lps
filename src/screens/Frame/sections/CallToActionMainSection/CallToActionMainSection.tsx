import React from "react";
import { Button } from "../../../../components/ui/button";

export const CallToActionMainSection = (): JSX.Element => {
  return (
    <section className="w-full bg-[#00417b] py-8 md:py-16">
      <div className="container mx-auto max-w-4xl flex flex-col items-center justify-center gap-6 md:gap-8 px-4">
        {/* Main Heading */}
        <div className="text-center">
          <h2 className="font-['Montserrat',Helvetica] font-bold text-2xl md:text-3xl lg:text-5xl text-white text-center leading-[28px] md:leading-[35px] lg:leading-[50px] mb-3 md:mb-4">
            Discuss Your Options With an Experienced Personal Injury Attorney
          </h2>
          <p className="font-['Montserrat',Helvetica] font-medium text-base md:text-lg lg:text-xl text-[#cbd5e0] text-center leading-[24px] md:leading-[27px] lg:leading-[30px] max-w-2xl mx-auto">
            Speak directly with a dedicated local legal team that treats you with respect and compassion, not as just another file number.
          </p>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <a
            href="tel:2813038800"
            className="inline-block bg-[#d44600] hover:bg-[#c23900] text-white [font-family:'Roboto',Helvetica] text-[18px] tracking-[1px] rounded-none border-2 border-solid border-[#d44600] hover:border-[#c23900] px-8 pt-[10px] pb-[10px] transition-colors duration-300"
          >
            281-303-8800
          </a>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-4 md:mt-6">
          <p className="font-['Montserrat',Helvetica] font-medium text-base md:text-lg text-white text-center leading-[24px] md:leading-[27px]">
            Free Consultation • No Upfront Fees • Work on Contingency
          </p>
          <p className="font-['Montserrat',Helvetica] font-medium text-sm md:text-base text-[#cbd5e0] text-center leading-[20px] md:leading-[24px] mt-2">
            Serving Baytown, Channelview, La Porte, Highlands, Mont Belvieu & Greater Houston Area
          </p>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 mt-6 md:mt-8 pt-6 md:pt-8 border-t border-white/20">
          <div className="text-center">
            <div className="text-xl md:text-2xl lg:text-3xl font-bold text-[#d44500] font-['Montserrat',Helvetica]">
              25+
            </div>
            <div className="text-white font-['Montserrat',Helvetica] mt-1 text-sm md:text-base">
              Years of Legal Experience
            </div>
          </div>
          <div className="text-center">
            <div className="text-xl md:text-2xl lg:text-3xl font-bold text-[#d44500] font-['Montserrat',Helvetica]">
              Local
            </div>
            <div className="text-white font-['Montserrat',Helvetica] mt-1 text-sm md:text-base">
              Baytown-Based Firm
            </div>
          </div>
          <div className="text-center">
            <div className="text-xl md:text-2xl lg:text-3xl font-bold text-[#d44500] font-['Montserrat',Helvetica]">
              Aggressive
            </div>
            <div className="text-white font-['Montserrat',Helvetica] mt-1 text-sm md:text-base">
              Advocacy for Injuries
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
