import React from "react";
import { Button } from "../../../../components/ui/button";

export const WhyUsSection = (): JSX.Element => {
  return (
    <section className="w-full py-8 md:py-12 bg-white">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8 items-center">
          <div
            className="w-full lg:w-[415px] h-[200px] md:h-[277px] bg-[url(https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg)] bg-cover bg-center rounded-md shadow-lg"
            aria-hidden="true"
          />

          <div className="w-full lg:w-[653px] space-y-4 md:space-y-6 text-center lg:text-left">
            <h2 className="font-medium text-2xl md:text-3xl lg:text-4xl text-[#091626] leading-[28px] md:leading-[35px] lg:leading-[39.6px] [font-family:'Montserrat',Helvetica]">
              Meet Attorney Mark VanCleave
            </h2>

            <p className="font-medium text-base md:text-lg text-[#222125] leading-[24px] md:leading-[27px] [font-family:'Roboto',Helvetica]">
              Mark VanCleave is the founding attorney of the Law Offices of Mark D. VanCleave, PLLC. With over 25 years of legal experience, Mark has dedicated his career to guiding individuals through the overwhelming aftermath of severe accidents.
            </p>

            <p className="font-medium text-base md:text-lg text-[#222125] leading-[24px] md:leading-[27px] [font-family:'Roboto',Helvetica]">
              Mark's reputation for aggressive, effective advocacy in tough personal injury cases is well-established throughout Baytown. He understands the many ways that an injury can affect you and your loved ones, and he brings a fierce determination to prevail for his clients against massive insurance companies and corporate legal teams.
            </p>

            <p className="font-medium text-base md:text-lg text-[#222125] leading-[24px] md:leading-[27px] [font-family:'Roboto',Helvetica]">
              While he is tough in negotiations and in court, Mark treats his clients with respect and compassion. He ensures that every client understands their rights and is never taken advantage of by the legal system.
            </p>

            <Button
              className="bg-[#d44500] hover:bg-[#c23900] text-white rounded-[100px] border-2 border-solid px-6 md:px-12 py-3 md:py-6 h-auto shadow-lg transform hover:scale-105 transition-all duration-200 w-full lg:w-auto"
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="font-['Montserrat',Helvetica] font-bold text-base md:text-lg lg:text-xl text-center leading-[24px] md:leading-[27px] lg:leading-[30.6px]">
                Schedule Your Free Consultation
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
