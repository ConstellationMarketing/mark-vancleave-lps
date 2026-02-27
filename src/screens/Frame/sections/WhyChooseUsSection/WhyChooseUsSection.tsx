import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { MessageCircle, Users, Settings } from "lucide-react";

export const WhyChooseUsSection = (): JSX.Element => {
  const services = [
    {
      icon: MessageCircle,
      title: "Over 25 Years of Experience",
      description: `Over 25 years of personal injury and auto accident experience.`,
      features: [
        "Extensive litigation experience",
        "Proven negotiation skills",
        "Deep knowledge of injury law",
        "Strong case precedents"
      ]
    },
    {
      icon: Users,
      title: "Local Baytown Office",
      description: `Local Baytown office serving the immediate community. We understand the local roadways, industrial areas, and community.`,
      features: [
        "Located on Rollingbrook Drive",
        "Serves eastern Houston suburbs",
        "Local community expertise",
        "Accessible in-person meetings"
      ]
    },
    {
      icon: Settings,
      title: "No Upfront Fees",
      description: `No upfront fees—you only pay if we win your case. We handle personal injury cases on a contingency fee basis for your peace of mind.`,
      features: [
        "Contingency fee arrangement",
        "No payment unless we win",
        "Full transparency",
        "Zero financial risk to you"
      ]
    },
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
          <p className="text-xl text-[#222125] font-['Roboto',Helvetica] max-w-3xl mx-auto leading-[30px]">
            A local firm dedicated to providing aggressive representation with compassionate client care.
          </p>
          <p className="text-xl text-[#222125] font-['Roboto',Helvetica] max-w-3xl mx-auto leading-[30px] mt-4">
            No two accidents are the same, and no two injuries should be treated the same. We take the time to listen to your specific situation before formulating a strategy—whether that requires a swift settlement negotiation or an aggressive court battle.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white">
                <CardContent className="p-8 text-center h-full flex flex-col">
                  {/* Icon */}
                  <div className="w-20 h-20 bg-gradient-to-br from-[#d44500] to-[#c23900] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="font-['Montserrat',Helvetica] font-bold text-[#091626] text-2xl text-center tracking-[0] leading-[32px] mb-4">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="font-['Roboto',Helvetica] font-medium text-[#222125] text-base text-center tracking-[0] leading-[24px] mb-6 flex-grow">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="mt-auto">
                    <div className="border-t border-gray-200 pt-6">
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center justify-center text-sm">
                            <span className="w-2 h-2 bg-[#d44500] rounded-full mr-3 flex-shrink-0"></span>
                            <span className="text-[#222125] font-['Roboto',Helvetica]">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-[#00417b] rounded-2xl p-12">
          <h3 className="text-3xl font-bold text-white mb-4 font-['Montserrat',Helvetica]">
            Experience the Difference
          </h3>
          <p className="text-xl text-[#cbd5e0] mb-8 font-['Roboto',Helvetica] max-w-2xl mx-auto">
            Because we are located right here in Baytown, we understand the local roadways, industrial areas, and community. We believe in full transparency and fighting for your rights with aggressive advocacy and compassionate client care.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="tel:2813038800"
              className="bg-[#d44600] hover:bg-[#c23900] text-white [font-family:'Roboto',Helvetica] text-[18px] tracking-[1px] rounded-none border-2 border-solid border-[#d44600] hover:border-[#c23900] px-8 py-3 md:pt-[30px] md:pb-[30px] transition-colors duration-300 whitespace-nowrap"
            >
              Call Now: 281-303-8800
            </a>
            <button
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#d44600] hover:bg-[#c23900] text-white [font-family:'Roboto',Helvetica] text-[18px] tracking-[1px] rounded-none border-2 border-solid border-[#d44600] hover:border-[#c23900] px-8 py-3 md:pt-[30px] md:pb-[30px] transition-colors duration-300 whitespace-nowrap"
            >
              Request Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
