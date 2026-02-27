import React from "react";
import { Button } from "../../../../components/ui/button";

export const HeroSection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-blend-darken [background:url(https://cdn.builder.io/api/v1/image/assets%2Fc8a7b33c1f3e4309983e45cabed92535%2F3dbdcf2e6efd470b824436ceb2b1f49c?format=webp&width=800&height=1200)_50%_50%_/_cover,linear-gradient(0deg,rgba(0,0,0,0.75)_0%,rgba(0,0,0,0.75)_100%)]">
      {/* Navigation Bar */}
      <div className="relative w-full flex flex-col md:flex-row md:h-[83px] bg-white">
        {/* Logo Section */}
        <div className="w-full md:w-auto md:flex-1 h-[60px] md:h-[83px] bg-white flex items-center justify-center md:justify-start md:pl-24">
          <div className="w-[180px] md:w-[250px] h-6 md:h-9">
            <img
              src="/logo.webp"
              alt="Law Offices of Mark D. VanCleave, PLLC"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* CTA Section */}
        <div className="w-full md:w-auto h-[60px] md:h-[83px] bg-[#00417b] flex items-center justify-center px-2">
          <div className="flex flex-col items-center justify-center">
            <a
              href="tel:2813038800"
              className="text-sm md:text-[21px] text-center tracking-[1px] md:tracking-[3.00px] leading-[16px] md:leading-[23.1px] [font-family:'Roboto',Helvetica] font-bold text-white hover:text-[#d44500] transition-colors duration-300"
            >
              (281) 303-8800
            </a>
            <p className="mt-1 [font-family:'Roboto',Helvetica] font-medium text-white text-[9px] md:text-[12px] text-center tracking-[1.5px] md:tracking-[2px] leading-[12px] md:leading-[16px]">
              CALL YOUR ATTORNEY
            </p>
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative w-full max-w-[1130px] mx-auto mt-8 md:mt-[74px] pb-8 md:pb-[74px] px-4 md:px-8">
        <h1 className="[text-shadow:0px_0px_6.9px_#00000066] [font-family:'Poppins',sans-serif] font-bold text-white text-[30px] md:text-[70px] tracking-[0.5px] leading-[1.1] text-center md:text-left">
          Injured in a Baytown Auto Accident? We Can Help You Seek Fair Compensation.
        </h1>

        <p className="mt-4 md:mt-6 [text-shadow:0px_0px_6.9px_#00000066] [font-family:'Montserrat',Helvetica] font-bold md:font-semibold text-[#d44500] text-[18px] md:text-[24px] leading-[1.2] text-center md:text-left">
          With over 25 years of experience, we provide empathetic, clear, and reassuring legal support for victims of auto and 18-wheeler accidents in our local community.
        </p>

        <p className="mt-4 md:mt-6 [text-shadow:0px_0px_6.9px_#00000066] [font-family:'Roboto',Helvetica] text-white text-[18px] leading-[28px] text-center md:text-left">
          Suffering a serious injury can turn your life upside down. Between physical pain, mounting medical bills, and lost wages, the process can feel overwhelming. You do not have to navigate this alone. At the Law Offices of Mark D. VanCleave, PLLC, our priority is your recovery. We focus on fairness and guiding you through the legal process so you can focus on healing.
        </p>

        <Button
          className="mt-6 md:mt-[38px] w-full md:w-auto px-8 pt-[30px] pb-[30px] bg-[#d44600] [font-family:'Roboto',Helvetica] text-white text-[18px] tracking-[1px] rounded-none border-2 border-solid border-[#d44600] hover:bg-[#c23900] hover:border-[#c23900] transition-colors duration-300"
          onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Request a Free Case Evaluation
        </Button>

        <p className="mt-4 [font-family:'Roboto',Helvetica] text-white text-[18px] text-center md:text-left">
          Or call 281-303-8800
        </p>
      </div>
    </section>
  );
};
