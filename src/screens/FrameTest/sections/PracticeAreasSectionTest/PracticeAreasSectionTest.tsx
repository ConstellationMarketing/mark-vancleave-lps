import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Car, Truck, AlertCircle, Bike } from "lucide-react";

export const PracticeAreasSectionTest = (): JSX.Element => {
  const services = [
    {
      icon: Car,
      title: "Auto Accidents",
      description: "Clear, strategic guidance for victims of severe car crashes, focusing on helping you recover the compensation you deserve."
    },
    {
      icon: Truck,
      title: "18-Wheeler & Commercial Truck Accidents",
      description: "Meticulous investigation into trucking logs, corporate negligence, and complex insurance policies to hold commercial companies accountable."
    },
    {
      icon: AlertCircle,
      title: "Accidents Caused By Drunk Drivers",
      description: "Aggressive legal representation for those harmed by the reckless and negligent choices of intoxicated drivers."
    },
    {
      icon: Bike,
      title: "Motorcycle Accidents",
      description: "Compassionate advocacy for riders facing catastrophic injuries and biased insurance adjusters."
    }
  ];

  return (
    <section className="relative w-full py-12 md:py-20 bg-blend-darken [background:url(https://cdn.builder.io/api/v1/image/assets%2Fc8a7b33c1f3e4309983e45cabed92535%2Fde5539f813b34ff08ba4c025067ef7af?format=webp&width=800&height=1200)_50%_50%_/_cover,linear-gradient(0deg,rgba(0,0,0,0.85)_0%,rgba(0,0,0,0.85)_100%)]">
      <div className="flex flex-col items-center max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-16">
          <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl text-white mb-4 md:mb-6 [font-family:'Montserrat',Helvetica] tracking-[0] leading-[28px] md:leading-[35px] lg:leading-[39.6px] text-center">
            Focused Auto Accident & Personal Injury Representation
          </h2>
          <p className="font-medium text-base md:text-lg lg:text-xl text-white [font-family:'Roboto',Helvetica] [text-shadow:0px_0px_6px_#00000066] tracking-[0] leading-6 md:leading-7 lg:leading-8 max-w-4xl text-center mx-auto">
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
                      <h3 className="font-bold text-lg md:text-xl lg:text-[25px] text-white mb-1 [font-family:'Montserrat',Helvetica] tracking-[0] leading-[22px] md:leading-[26px] lg:leading-[30px]">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                  
                  <div className="ml-0 md:ml-16">
                    <p className="font-medium text-sm md:text-base lg:text-lg text-white [font-family:'Roboto',Helvetica] tracking-[0] leading-[20px] md:leading-[24px] lg:leading-[27.2px]">
                      {service.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
