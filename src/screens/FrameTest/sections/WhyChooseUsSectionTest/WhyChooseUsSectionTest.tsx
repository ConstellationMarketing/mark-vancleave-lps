import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Lightbulb, MapPin, ShieldCheck } from "lucide-react";

export const WhyChooseUsSectionTest = (): JSX.Element => {
  const highlights = [
    {
      icon: Lightbulb,
      title: "Tailored Strategy",
      description: "No two accidents are the same, and no two injuries should be treated the same. We take the time to listen to your specific situation before formulating a strategy—whether that requires a swift settlement negotiation or an aggressive court battle."
    },
    {
      icon: MapPin,
      title: "True Local Knowledge",
      description: "Because we are located right here in Baytown, we understand the local roadways, industrial areas, and community."
    },
    {
      icon: ShieldCheck,
      title: "100% Risk-Free*",
      description: "We believe in full transparency. We handle personal injury cases on a contingency fee basis, meaning we charge no upfront payment, and you will not pay attorney fees unless we help you recover damages."
    }
  ];

  return (
    <section className="w-full py-20 bg-[#f5f5f5]">
      <div className="container mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-[24px] md:text-5xl font-bold text-[#091626] text-center mb-6 font-['Montserrat',Helvetica] leading-[28px] md:leading-[50px]">
            Why Choose Us for Your Injury Claim
          </h2>
          <div className="w-24 h-1 bg-[#d44500] mx-auto mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => {
              const IconComponent = highlight.icon;
              return (
                <div key={index} className="bg-white rounded-lg p-8 text-center flex flex-col h-full shadow-sm">
                  <div className="flex justify-center mb-6">
                    <IconComponent className="w-12 h-12 md:w-14 md:h-14 text-[#d44500] flex-shrink-0" />
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-[#091626] mb-4 font-['Montserrat',Helvetica]">
                    {highlight.title}
                  </h3>
                  <p className="text-sm md:text-base text-[#222125] font-['Roboto',Helvetica] leading-[20px] md:leading-[24px] flex-grow">
                    {highlight.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Service Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div>
            <h3 className="font-bold text-xl text-[#091626] mb-4 font-['Montserrat',Helvetica]">
              Service Highlights:
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-[#d44500] font-bold flex-shrink-0">✓</span>
                <span className="font-medium text-base text-[#222125] [font-family:'Roboto',Helvetica]">Over 25 years of personal injury and auto accident experience.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#d44500] font-bold flex-shrink-0">✓</span>
                <span className="font-medium text-base text-[#222125] [font-family:'Roboto',Helvetica]">Local Baytown office serving the immediate community.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#d44500] font-bold flex-shrink-0">✓</span>
                <span className="font-medium text-base text-[#222125] [font-family:'Roboto',Helvetica]">No upfront fees—you only pay if we win your case.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#d44500] font-bold flex-shrink-0">✓</span>
                <span className="font-medium text-base text-[#222125] [font-family:'Roboto',Helvetica]">Aggressive advocacy against insurance companies.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#d44500] font-bold flex-shrink-0">✓</span>
                <span className="font-medium text-base text-[#222125] [font-family:'Roboto',Helvetica]">Compassionate, straightforward legal guidance.</span>
              </li>
            </ul>
          </div>

          <div className="bg-[#00417b] rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4 font-['Montserrat',Helvetica]">
              Ready to Move Forward?
            </h3>
            <p className="text-base md:text-lg mb-6 font-['Roboto',Helvetica] leading-[24px] md:leading-[27px]">
              Contact us today for a free, no-obligation consultation. We're here to help you get the compensation you deserve.
            </p>
            <div className="space-y-3">
              <a
                href="tel:2813038800"
                className="flex items-center justify-center h-[90px] md:h-[70px] px-8 bg-[#d44600] [font-family:'Roboto',Helvetica] text-white text-[18px] tracking-[1px] rounded-none border-2 border-solid border-[#d44600] hover:bg-[#c23900] hover:border-[#c23900] transition-colors duration-300"
              >
                Call: 281-303-8800
              </a>
              <button
                onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center justify-center w-full h-[90px] md:h-[70px] px-8 bg-[#d44600] [font-family:'Roboto',Helvetica] text-white text-[18px] tracking-[1px] rounded-none border-2 border-solid border-[#d44600] hover:bg-[#c23900] hover:border-[#c23900] transition-colors duration-300"
              >
                Request Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
