import React from "react";
import { Users, Award, Shield, Heart } from "lucide-react";

export const AboutFirmSection = (): JSX.Element => {
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
    <section className="w-full py-16 md:py-20 bg-gradient-to-b from-neutral-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
      </div>
    </section>
  );
};
