import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { MessageCircle, Users, Settings } from "lucide-react";

export const ServicesSection = (): JSX.Element => {
  const services = [
    {
      icon: MessageCircle,
      title: "Honesty",
      description: `You can trust you will receive candid answers to your questions and an explanation of options that is easy to understand. We know you have options for Illinois attorneys and we promise clients honest legal advice.`,
      features: [
        "Transparent communication",
        "Clear explanation of options",
        "No false promises",
        "Honest case assessments"
      ]
    },
    {
      icon: Users,
      title: "Responsive Communication",
      description: `Our law firm is dedicated to providing our clients with amazing customer service. Check our reviews. Our team is available to clients by phone, email, and face-to-face in our local office on West Pike Street.`,
      features: [
        "Available by phone & email",
        "Face-to-face consultations",
        "Quick response times",
        "Regular case updates"
      ]
    },
    {
      icon: Settings,
      title: "Tailored Services",
      description: `Our law office delivers effective solutions to you and your family. We encourage prospective clients to take a look at our client reviews where you'll see consistently high marks for defense representation.`,
      features: [
        "Personalized defense strategies",
        "Family-focused approach",
        "Proven track record",
        "High client satisfaction"
      ]
    },
  ];

  return (
    <section className="w-full py-20 bg-gradient-to-b from-white to-neutral-50">
      <div className="container mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-[#434343] text-center mb-6 font-['Playfair_Display',Helvetica] leading-[50px]">
            Why Choose Constellation Law?
          </h2>
          <div className="w-24 h-1 bg-[#ff8a00] mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 font-['Montserrat',Helvetica] max-w-3xl mx-auto leading-[30px]">
            When your freedom and future are on the line, you need more than just any lawyer. You need a dedicated advocate who combines experience, integrity, and results.
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
                  <div className="w-20 h-20 bg-gradient-to-br from-[#ff8a00] to-[#e67d00] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="font-['Playfair_Display',Helvetica] font-bold text-[#434343] text-2xl text-center tracking-[0] leading-[32px] mb-4">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="font-['Montserrat',Helvetica] font-medium text-[#434343] text-base text-center tracking-[0] leading-[24px] mb-6 flex-grow">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="mt-auto">
                    <div className="border-t border-gray-200 pt-6">
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center justify-center text-sm">
                            <span className="w-2 h-2 bg-[#ff8a00] rounded-full mr-3 flex-shrink-0"></span>
                            <span className="text-gray-700 font-['Montserrat',Helvetica]">{feature}</span>
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
        <div className="text-center bg-[#182246] rounded-2xl p-12">
          <h3 className="text-3xl font-bold text-white mb-4 font-['Playfair_Display',Helvetica]">
            Experience the Difference
          </h3>
          <p className="text-xl text-[#cbd5e0] mb-8 font-['Montserrat',Helvetica] max-w-2xl mx-auto">
            Don't settle for less when your future is at stake. Choose a law firm that puts your needs first and fights tirelessly for your rights.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a 
              href="tel:5551234567"
              className="bg-[#ff8a00] hover:bg-[#e67d00] text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Call Now: (555) 123-4567
            </a>
            <button 
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white hover:bg-gray-100 text-[#182246] font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg border-2 border-white"
            >
              Request Consultation
            </button>
            <div className="text-center">
              <p className="text-[#cbd5e0] font-['Montserrat',Helvetica] text-lg">
                (555) 123-4567
              </p>
              <p className="text-[#cbd5e0] font-['Montserrat',Helvetica] text-sm">
                Available 24/7 • No Obligation
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};