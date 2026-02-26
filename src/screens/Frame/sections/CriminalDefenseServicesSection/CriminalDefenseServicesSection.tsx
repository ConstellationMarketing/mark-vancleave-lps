import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Car, Truck, AlertCircle, Bike } from "lucide-react";

export const CriminalDefenseServicesSection = (): JSX.Element => {
  // Services data for mapping with icons
  const services = [
    {
      icon: Car,
      title: "Auto Accidents",
      subtitle: "",
      description: "Clear, strategic guidance for victims of severe car crashes, focusing on helping you recover the compensation you deserve.",
      bulletPoints: [],
      footer: ""
    },
    {
      icon: Truck,
      title: "18-Wheeler & Commercial Truck Accidents",
      subtitle: "",
      description: "Meticulous investigation into trucking logs, corporate negligence, and complex insurance policies to hold commercial companies accountable.",
      bulletPoints: [],
      footer: ""
    },
    {
      icon: AlertCircle,
      title: "Accidents Caused By Drunk Drivers",
      subtitle: "",
      description: "Aggressive legal representation for those harmed by the reckless and negligent choices of intoxicated drivers.",
      bulletPoints: [],
      footer: ""
    },
    {
      icon: Bike,
      title: "Motorcycle Accidents",
      subtitle: "",
      description: "Compassionate advocacy for riders facing catastrophic injuries and biased insurance adjusters.",
      bulletPoints: [],
      footer: ""
    },
  ];

  return (
    <section className="relative w-full py-12 md:py-20 bg-blend-darken [background:url(https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg)_50%_50%_/_cover,linear-gradient(0deg,rgba(0,0,0,0.85)_0%,rgba(0,0,0,0.85)_100%)]">
      <div className="flex flex-col items-center max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-16">
          <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl text-white mb-4 md:mb-6 [font-family:'Roboto',Helvetica] tracking-[0] leading-[28px] md:leading-[35px] lg:leading-[39.6px]">
            Focused Auto Accident &amp; Personal Injury Representation
          </h2>
          <p className="font-medium text-base md:text-lg lg:text-xl text-white [font-family:'Roboto',Helvetica] [text-shadow:0px_0px_6px_#00000066] tracking-[0] leading-6 md:leading-7 lg:leading-8 max-w-4xl">
            We understand the profound impact an injury has on your life and your family. Our firm provides dedicated, one-on-one guidance to protect your rights after a crash.
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
                    <div className="flex-shrink-0 w-12 h-12 bg-[#d44500] rounded-lg flex items-center justify-center">
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
                    <p className="font-medium text-sm md:text-base lg:text-lg text-white [font-family:'Roboto',Helvetica] tracking-[0] leading-[20px] md:leading-[24px] lg:leading-[27.2px] mb-2 md:mb-3">
                      {service.description}
                    </p>
                    
                    {service.bulletPoints.length > 0 && (
                      <ul className="space-y-1 md:space-y-2 mb-2 md:mb-3">
                        {service.bulletPoints.map((point, pointIndex) => (
                          <li key={pointIndex} className="flex items-start gap-2">
                            <span className="text-[#d44500] mt-2 flex-shrink-0">•</span>
                            <span className="font-medium text-sm md:text-base text-white [font-family:'Roboto',Helvetica] leading-[20px] md:leading-[24px]">
                              {point}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}
                    
                    {service.footer && (
                      <p className="font-medium text-sm md:text-base text-[#cbd5e0] [font-family:'Roboto',Helvetica] tracking-[0] leading-[20px] md:leading-[24px] mt-2 md:mt-3">
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
          <p className="font-medium text-base md:text-lg lg:text-xl text-white mb-6 md:mb-8 [font-family:'Roboto',Helvetica] [text-shadow:0px_0px_6px_#00000066] tracking-[0] leading-6 md:leading-7 lg:leading-8">
            No two accidents are the same. We take the time to listen to your situation and build a strategy focused on your recovery.
          </p>
          <Button className="bg-[#d44600] hover:bg-[#c23900] hover:border-[#c23900] text-white [font-family:'Roboto',Helvetica] text-[18px] tracking-[1px] rounded-none border-2 border-solid border-[#d44600] px-8 pt-[30px] pb-[30px] transition-colors duration-300">
            <span onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}>
              Request Your Free Consultation
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};
