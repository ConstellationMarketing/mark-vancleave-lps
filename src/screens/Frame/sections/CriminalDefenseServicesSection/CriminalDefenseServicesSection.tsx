import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Shield, Pill, Car, FileText } from "lucide-react";

export const CriminalDefenseServicesSection = (): JSX.Element => {
  // Services data for mapping with icons
  const services = [
    {
      icon: Shield,
      title: "Criminal Defense",
      subtitle: "(Misdemeanors & Felonies)",
      description: "We defend clients against all types of criminal charges, including:",
      bulletPoints: [
        "Misdemeanors: Theft, disorderly conduct, trespassing, simple assault, and more",
        "Felonies: Aggravated assault, burglary, robbery, firearm offenses, and other high-stakes charges"
      ],
      footer: "No matter the charge, we build a personalized defense strategy focused on minimizing consequences or beating the charges entirely."
    },
    {
      icon: Pill,
      title: "Drug Charges",
      subtitle: "",
      description: "Whether you're accused of possession, distribution, trafficking, or manufacturing, we know how to challenge evidence and fight illegal searches. We'll work to protect your freedom and keep your record clean.",
      bulletPoints: [],
      footer: ""
    },
    {
      icon: Car,
      title: "DUI Defense",
      subtitle: "",
      description: "A DUI arrest doesn't have to lead to a conviction. We defend against:",
      bulletPoints: [
        "First-time and repeat DUI offenses",
        "Refusal to submit to testing",
        "Underage DUI"
      ],
      footer: "We investigate every detail to fight license suspension, reduce charges, or seek full dismissal."
    },
    {
      icon: FileText,
      title: "Traffic Violations",
      subtitle: "",
      description: "Even a simple traffic ticket can affect your license and insurance. We help with:",
      bulletPoints: [
        "Speeding and reckless driving",
        "Driving without a license or insurance",
        "CDL-related violations"
      ],
      footer: "Let us help you avoid points, fines, and long-term consequences."
    },
  ];

  return (
    <section className="relative w-full py-12 md:py-20 bg-blend-darken [background:url(https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg)_50%_50%_/_cover,linear-gradient(0deg,rgba(0,0,0,0.85)_0%,rgba(0,0,0,0.85)_100%)]">
      <div className="flex flex-col items-center max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-16">
          <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl text-white mb-4 md:mb-6 [font-family:'Playfair_Display',Helvetica] tracking-[0] leading-[28px] md:leading-[35px] lg:leading-[39.6px]">
            Our Criminal Defense Services
          </h2>
          <h3 className="font-medium text-lg md:text-xl lg:text-2xl text-white mb-3 md:mb-4 [font-family:'Playfair_Display',Helvetica] tracking-[0] leading-6 md:leading-7 lg:leading-8">
            Aggressive, Experienced, and Always in Your Corner
          </h3>
          <p className="font-medium text-base md:text-lg lg:text-xl text-white [font-family:'Montserrat',Helvetica] [text-shadow:0px_0px_6px_#00000066] tracking-[0] leading-6 md:leading-7 lg:leading-8 max-w-4xl">
            At Constellation Law, we provide skilled legal representation across a wide range of criminal matters in Sangamon County. We're here to protect your rights, guide you through the legal system, and fight for your future.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 w-full max-w-5xl mb-8 md:mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="bg-black/30 border border-white/20 backdrop-blur-sm">
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-start gap-3 md:gap-4 mb-3 md:mb-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#ff8a00] rounded-lg flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-lg md:text-xl lg:text-[25px] text-white mb-1 [font-family:'Playfair_Display',Helvetica] tracking-[0] leading-[22px] md:leading-[26px] lg:leading-[30px]">
                        {service.title}
                      </h3>
                      {service.subtitle && (
                        <span className="block text-sm md:text-base lg:text-[18px] text-[#cbd5e0] mb-2 md:mb-3 [font-family:'Playfair_Display',Helvetica]">
                          {service.subtitle}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="ml-0 md:ml-16">
                    <p className="font-medium text-sm md:text-base lg:text-lg text-white [font-family:'Montserrat',Helvetica] tracking-[0] leading-[20px] md:leading-[24px] lg:leading-[27.2px] mb-2 md:mb-3">
                      {service.description}
                    </p>
                    
                    {service.bulletPoints.length > 0 && (
                      <ul className="space-y-1 md:space-y-2 mb-2 md:mb-3">
                        {service.bulletPoints.map((point, pointIndex) => (
                          <li key={pointIndex} className="flex items-start gap-2">
                            <span className="text-[#ff8a00] mt-2 flex-shrink-0">•</span>
                            <span className="font-medium text-sm md:text-base text-white [font-family:'Montserrat',Helvetica] leading-[20px] md:leading-[24px]">
                              {point}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}
                    
                    {service.footer && (
                      <p className="font-medium text-sm md:text-base text-[#cbd5e0] [font-family:'Montserrat',Helvetica] tracking-[0] leading-[20px] md:leading-[24px] mt-2 md:mt-3">
                        {service.footer}
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center max-w-4xl">
          <p className="font-medium text-base md:text-lg lg:text-xl text-white mb-6 md:mb-8 [font-family:'Montserrat',Helvetica] [text-shadow:0px_0px_6px_#00000066] tracking-[0] leading-6 md:leading-7 lg:leading-8">
            No matter what charges you're facing, we'll stand by your side, explain your options clearly, and fight for the best possible outcome. You don't have to face the legal system alone.
          </p>
          <Button className="bg-[#ff8a00] hover:bg-[#e67d00] text-white font-medium text-base md:text-lg rounded-[100px] h-12 md:h-[59px] px-6 md:px-10 border-2 border-solid [font-family:'Montserrat',Helvetica] tracking-[0] leading-[24px] md:leading-[30.6px] shadow-lg transform hover:scale-105 transition-all duration-200 w-full md:w-auto">
            <span onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}>
              Schedule your free consultation today!
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};