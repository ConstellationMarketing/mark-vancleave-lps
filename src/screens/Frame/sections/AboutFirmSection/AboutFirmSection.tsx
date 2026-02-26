import React from "react";
import { Users, Award, Shield, Heart } from "lucide-react";

export const AboutFirmSection = (): JSX.Element => {
  // Data for paragraphs to enable mapping
  const paragraphs = [
    "The Law Offices of Mark D. VanCleave, PLLC is a Baytown, TX-based law firm dedicated to standing up for those harmed by the negligence of others. We understand that people facing a severe injury need more than just legal advice—they need a steadfast advocate.",
    "Our firm was built on a simple philosophy: your victory is our victory. When you work with us, you partner with a lawyer who takes your case personally. We leverage over 25 years of experience to evaluate the facts, negotiate with insurance companies, and fight for your rights. We offer clear, honest advice so that you are empowered to make the best decisions regarding your recovery and your future.",
    "Located on Rollingbrook Drive in Baytown, we proudly serve injured clients throughout the greater Houston area's eastern suburbs, focusing closely on our immediate neighbors. We handle personal injury cases on a contingency fee basis—meaning you pay nothing upfront and no attorney fees unless we help you recover damages.",
  ];

  const highlights = [
    {
      icon: Shield,
      title: "25+ Years",
      description: "Extensive personal injury and auto accident experience"
    },
    {
      icon: Award,
      title: "Local Presence",
      description: "Baytown office serving the immediate community"
    },
    {
      icon: Heart,
      title: "Compassionate",
      description: "Straightforward legal guidance with respect"
    },
    {
      icon: Users,
      title: "No Upfront Fees",
      description: "Only pay if we win your case"
    }
  ];

  return (
    <section className="w-full py-20 bg-gradient-to-b from-neutral-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-[24px] md:text-5xl font-bold text-[#091626] text-center mb-6 font-['Montserrat',Helvetica] leading-[28px] md:leading-[50px]">
            About Law Offices of Mark D. VanCleave, PLLC
          </h2>
          <div className="w-24 h-1 bg-[#d44500] mx-auto mb-8"></div>
          <h3 className="text-[16px] md:text-2xl font-bold text-[#00417b] mb-8 font-['Montserrat',Helvetica] leading-[20px] md:leading-[32px]">
            Standing up for those harmed by the negligence of others
          </h3>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {highlights.map((highlight, index) => {
            const IconComponent = highlight.icon;
            return (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-[#d44500] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#c23900] transition-colors duration-300">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-bold text-[#091626] mb-2 font-['Montserrat',Helvetica]">
                  {highlight.title}
                </h4>
                <p className="text-sm text-gray-600 font-['Roboto',Helvetica]">
                  {highlight.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          {paragraphs.map((paragraph, index) => (
            <div key={`paragraph-${index}`} className="mb-8">
              <div className="bg-white rounded-lg shadow-sm border-l-4 border-[#d44500] p-6 hover:shadow-md transition-shadow duration-300">
                <p className="text-lg font-medium text-[#222125] font-['Roboto',Helvetica] leading-[28.8px]">
                  {paragraph}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 bg-[#00417b] rounded-2xl p-12">
          <h3 className="text-3xl font-bold text-white mb-4 font-['Roboto',Helvetica]">
            Schedule Your Free Consultation
          </h3>
          <p className="text-xl text-[#cbd5e0] mb-8 font-['Roboto',Helvetica] max-w-2xl mx-auto">
            The phone call is free. Our Baytown law firm would love to hear your story and use our 25+ years of experience to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:2813038800"
              className="bg-[#d44600] hover:bg-[#c23900] text-white [font-family:'Roboto',Helvetica] text-[18px] tracking-[1px] rounded-none border-2 border-solid border-[#d44600] hover:border-[#c23900] px-8 pt-[30px] pb-[30px] transition-colors duration-300"
            >
              Call Now: 281-303-8800
            </a>
            <button
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#d44600] hover:bg-[#c23900] text-white [font-family:'Roboto',Helvetica] text-[18px] tracking-[1px] rounded-none border-2 border-solid border-[#d44600] hover:border-[#c23900] px-8 pt-[30px] pb-[30px] transition-colors duration-300"
            >
              Request Consultation
            </button>
            <span className="text-[#cbd5e0] font-['Roboto',Helvetica]">
              Free Consultation • No Upfront Fees
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
