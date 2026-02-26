import React from "react";

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
            <h2 className="font-medium text-2xl md:text-3xl lg:text-4xl text-[#434343] leading-[28px] md:leading-[35px] lg:leading-[39.6px] [font-family:'Playfair_Display',Helvetica]">
              Here for You When It Matters Most
            </h2>

            <p className="font-medium text-base md:text-lg text-black leading-[24px] md:leading-[27px] [font-family:'Montserrat',Helvetica]">
              No one expects to need a criminal defense lawyer—but when you do, we're here. At Philip Kim Law, we treat every client like a person, not a case number. We'll stand with you, explain your options, and fight for your best possible outcome. You don't have to face this alone.
            </p>

            <p className="font-medium text-base md:text-lg text-black leading-[24px] md:leading-[27px] [font-family:'Montserrat',Helvetica]">
              Reach out now for a free, no-pressure consultation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
