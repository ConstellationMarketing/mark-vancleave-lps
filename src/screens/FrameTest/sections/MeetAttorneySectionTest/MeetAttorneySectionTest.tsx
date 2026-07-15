import React from "react";
import { Button } from "../../../../components/ui/button";

export const MeetAttorneySectionTest = (): JSX.Element => {
  return (
    <section className="w-full bg-[#00417b] py-12 md:py-20">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-stretch">
          {/* Left Column - Image */}
          <div className="w-full lg:w-[40%] flex items-center justify-center">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fc8a7b33c1f3e4309983e45cabed92535%2Ff4c1429b437c4e039596bad7d0c4d1e6?format=webp&width=800&height=1200"
              alt="Attorney Mark VanCleave"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Right Column - Content */}
          <div className="w-full lg:w-[60%] flex flex-col justify-start items-center lg:items-start text-center lg:text-left">
            <h2 className="font-['Montserrat',Helvetica] font-bold text-2xl md:text-3xl lg:text-4xl text-white leading-[28px] md:leading-[35px] lg:leading-[44px] mb-4 md:mb-6 text-center lg:text-left">
              Meet Attorney Mark VanCleave
            </h2>

            <p className="font-['Roboto',Helvetica] font-medium text-base md:text-lg text-[#cbd5e0] leading-[24px] md:leading-[27px] mb-6 md:mb-8 text-center lg:text-left">
              Mark VanCleave is the founding attorney of the Law Offices of Mark D. VanCleave, PLLC. With over 25 years of legal experience, Mark has guided individuals through the aftermath of severe accidents, and his reputation for aggressive, effective advocacy in tough personal injury cases is well-established throughout Baytown. He is tough in negotiations and in court, while treating every client with respect and compassion — making sure they understand their rights every step of the way.
            </p>

            {/* Call to Action Button */}
            <div className="flex justify-center lg:justify-start w-full">
              <Button
                className="h-[90px] md:h-[70px] flex items-center justify-center !px-8 !pt-0 !pb-0 bg-[#d44600] [font-family:'Roboto',Helvetica] text-white text-[18px] tracking-[1px] rounded-none border-2 border-solid border-[#d44600] hover:bg-[#c23900] hover:border-[#c23900] transition-colors duration-300"
                onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get My Free Case Review
              </Button>
            </div>
          </div>
        </div>

        {/* Centered Info Section */}
        <div className="text-center mt-12 md:mt-16 pt-8 md:pt-12 border-t border-white/20">
          <p className="font-['Roboto',Helvetica] font-medium text-base md:text-lg text-white leading-[24px] md:leading-[27px] mb-3 md:mb-4">
            Free Consultation • No Upfront Fees • Work on Contingency
          </p>
          <p className="font-['Roboto',Helvetica] font-medium text-sm md:text-base text-[#cbd5e0] leading-[20px] md:leading-[24px]">
            Serving Baytown, Channelview, La Porte, Highlands, Mont Belvieu & Greater Houston Area
          </p>
        </div>
      </div>
    </section>
  );
};
