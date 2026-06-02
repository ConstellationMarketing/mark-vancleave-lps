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
          <div className="w-full lg:w-[60%] flex flex-col justify-start">
            <h2 className="font-['Montserrat',Helvetica] font-bold text-2xl md:text-3xl lg:text-4xl text-white leading-[28px] md:leading-[35px] lg:leading-[44px] mb-4 md:mb-6 text-left">
              Meet Attorney Mark VanCleave
            </h2>

            <p className="font-['Roboto',Helvetica] font-medium text-base md:text-lg text-[#cbd5e0] leading-[24px] md:leading-[27px] mb-4 text-left">
              Mark VanCleave is the founding attorney of the Law Offices of Mark D. VanCleave, PLLC. With over 25 years of legal experience, Mark has dedicated his career to guiding individuals through the overwhelming aftermath of severe accidents. Mark's reputation for aggressive, effective advocacy in tough personal injury cases is well-established throughout Baytown.
            </p>

            <p className="font-['Roboto',Helvetica] font-medium text-base md:text-lg text-[#cbd5e0] leading-[24px] md:leading-[27px] mb-6 md:mb-8 text-left">
              He understands the many ways that an injury can affect you and your loved ones, and he brings a fierce determination to prevail for his clients against massive insurance companies and corporate legal teams. While he is tough in negotiations and in court, Mark treats his clients with respect and compassion. He ensures that every client understands their rights and is never taken advantage of by the legal system.
            </p>

            {/* Call to Action Button */}
            <div className="flex justify-center lg:justify-start">
              <Button
                className="px-8 pt-[30px] pb-[30px] bg-[#d44600] [font-family:'Roboto',Helvetica] text-white text-[18px] tracking-[1px] rounded-none border-2 border-solid border-[#d44600] hover:bg-[#c23900] hover:border-[#c23900] transition-colors duration-300"
                onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Schedule Your Free Consultation
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
