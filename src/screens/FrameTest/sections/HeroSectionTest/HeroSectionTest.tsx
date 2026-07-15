import React from "react";
import { Button } from "../../../../components/ui/button";

export const HeroSectionTest = (): JSX.Element => {
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
        <div className="w-full md:w-auto h-[60px] md:h-[83px] bg-[#00417b] flex items-center justify-center px-2 md:px-8">
          <div className="flex flex-col items-center justify-center">
            <a
              href="tel:2817642276"
              className="text-sm md:text-[21px] text-center tracking-[1px] md:tracking-[3.00px] leading-[16px] md:leading-[23.1px] [font-family:'Roboto',Helvetica] font-bold text-white hover:text-[#d44500] transition-colors duration-300"
            >
              (281) 764-2276
            </a>
            <p className="mt-1 [font-family:'Roboto',Helvetica] font-medium text-white text-[9px] md:text-[12px] text-center tracking-[1.5px] md:tracking-[2px] leading-[12px] md:leading-[16px]">
              CALL YOUR ATTORNEY
            </p>
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative w-full max-w-[1130px] mx-auto mt-4 md:mt-[74px] pb-4 md:pb-[74px] px-4 md:px-8">
        <h1 className="[text-shadow:0px_0px_6.9px_#00000066] [font-family:'Poppins',sans-serif] font-bold text-white text-[30px] md:text-[70px] tracking-[0.5px] leading-[1.1] text-center md:text-left">
          Baytown Auto Accident Lawyer — Over 25 Years of Injury Experience
        </h1>

        <p className="mt-4 md:mt-6 [text-shadow:0px_0px_6.9px_#00000066] [font-family:'Montserrat',Helvetica] font-bold md:font-semibold text-[#d44500] text-[18px] md:text-[24px] leading-[1.2] text-center md:text-left">
          Injured in a car, truck, or 18-wheeler accident? Get clear guidance from a local Baytown attorney — no upfront cost to you.
        </p>

        {/* CTA and Google Badge Row */}
        <div className="mt-4 md:mt-[38px] flex flex-col md:flex-row items-center justify-center md:justify-start gap-6 md:gap-8">
          <Button
            className="w-full md:w-auto h-[90px] md:h-[70px] flex items-center justify-center !px-8 !pt-0 !pb-0 bg-[#d44600] [font-family:'Roboto',Helvetica] text-white text-[18px] tracking-[1px] rounded-none border-2 border-solid border-[#d44600] hover:bg-[#c23900] hover:border-[#c23900] transition-colors duration-300"
            onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get My Free Case Review
          </Button>

          <div className="flex items-center gap-3">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fc8a7b33c1f3e4309983e45cabed92535%2Fd4f220a6a205468c8472cfb9e2833491?format=webp&width=800&height=1200"
              alt="Google"
              className="w-6 h-6 md:w-8 md:h-8 flex-shrink-0"
            />
            <div className="text-white text-left">
              <p className="text-sm md:text-base font-bold">4.9 ★</p>
              <p className="text-xs md:text-sm">Google Reviews</p>
            </div>
          </div>
        </div>

        {/* Trust Bullets */}
        <div className="mt-6 md:mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
          {[
            'Over 25 Years of Personal Injury Experience',
            'No Upfront Attorney Fees — Contingency Basis',
            'Local Baytown Office — Rollingbrook Drive'
          ].map((item) => (
            <div key={item} className="flex items-center gap-2 bg-white/10 rounded px-3 py-2">
              <span className="text-[#d44500] font-bold flex-shrink-0">✓</span>
              <span className="[font-family:'Roboto',Helvetica] text-white text-sm md:text-base font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
