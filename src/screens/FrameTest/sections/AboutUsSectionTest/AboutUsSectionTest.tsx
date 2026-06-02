import React from "react";

export const AboutUsSectionTest = (): JSX.Element => {
  return (
    <section className="w-full py-8 md:py-12 bg-white">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8 items-stretch">
          <div className="w-full lg:w-[50%] h-[300px] lg:h-auto bg-[url(https://cdn.builder.io/api/v1/image/assets%2Fc8a7b33c1f3e4309983e45cabed92535%2F2289664be5be4b8b85cbffef0b372ea5?format=webp&width=800&height=1200)] bg-cover bg-[75%_center] rounded-md shadow-lg" aria-hidden="true" />

          <div className="w-full lg:w-[50%] space-y-4 md:space-y-6 text-center lg:text-left flex flex-col justify-center items-center lg:items-start">
            <h2 className="font-bold text-[24px] md:text-3xl lg:text-4xl text-[#091626] leading-[28px] md:leading-[35px] lg:leading-[39.6px] [font-family:'Montserrat',Helvetica] text-center lg:text-left">
              About Law Offices of Mark D. VanCleave, PLLC
            </h2>

            <p className="font-medium text-base md:text-lg text-[#222125] leading-[24px] md:leading-[27px] [font-family:'Roboto',Helvetica]">
              The Law Offices of Mark D. VanCleave, PLLC is a Baytown, TX-based law firm dedicated to standing up for those harmed by the negligence of others. We understand that people facing a severe injury need more than just legal advice—they need a steadfast advocate.
            </p>

            <p className="font-medium text-base md:text-lg text-[#222125] leading-[24px] md:leading-[27px] [font-family:'Roboto',Helvetica]">
              Our firm was built on a simple philosophy: your victory is our victory. When you work with us, you partner with a lawyer who takes your case personally. We leverage over 25 years of experience to evaluate the facts, negotiate with insurance companies, and fight for your rights. We offer clear, honest advice so that you are empowered to make the best decisions regarding your recovery and your future. Located on Rollingbrook Drive in Baytown, we proudly serve injured clients throughout the greater Houston area's eastern suburbs, focusing closely on our immediate neighbors.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
