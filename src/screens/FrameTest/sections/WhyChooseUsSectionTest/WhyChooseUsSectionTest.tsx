import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const WhyChooseUsSectionTest = (): JSX.Element => {
  const highlights = [
    {
      title: "Tailored Strategy",
      description: "No two accidents are the same, and no two injuries should be treated the same. We take the time to listen to your specific situation before formulating a strategy—whether that requires a swift settlement negotiation or an aggressive court battle."
    },
    {
      title: "True Local Knowledge",
      description: "Because we are located right here in Baytown, we understand the local roadways, industrial areas, and community."
    },
    {
      title: "100% Risk-Free*",
      description: "We believe in full transparency. We handle personal injury cases on a contingency fee basis, meaning we charge no upfront payment, and you will not pay attorney fees unless we help you recover damages."
    }
  ];

  return (
    <section className="w-full py-20 bg-gradient-to-b from-white to-neutral-50">
      <div className="container mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-[24px] md:text-5xl font-bold text-[#091626] text-center mb-6 font-['Montserrat',Helvetica] leading-[28px] md:leading-[50px]">
            Why Choose Us for Your Injury Claim
          </h2>
          <div className="w-24 h-1 bg-[#d44500] mx-auto mb-8"></div>
          
          <div className="space-y-4">
            {highlights.map((highlight, index) => (
              <div key={index} className="max-w-3xl mx-auto">
                <h3 className="text-base md:text-lg font-bold text-[#091626] mb-2 font-['Montserrat',Helvetica]">
                  {highlight.title}
                </h3>
                <p className="text-base md:text-lg text-[#222125] font-['Roboto',Helvetica] leading-[24px] md:leading-[27px]">
                  {highlight.description}
                </p>
              </div>
            ))}
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
                className="block text-center bg-[#d44600] hover:bg-[#c23900] text-white font-bold py-3 px-4 rounded transition-colors"
              >
                Call: 281-303-8800
              </a>
              <button
                onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="block w-full text-center bg-white text-[#00417b] hover:bg-gray-100 font-bold py-3 px-4 rounded transition-colors"
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
