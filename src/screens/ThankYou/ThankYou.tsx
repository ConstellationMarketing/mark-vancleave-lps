import React from "react";
import { CheckCircle, Phone, MapPin, Clock } from "lucide-react";

export const ThankYou = (): JSX.Element => {
  return (
    <div className="w-full bg-white">
      <div className="flex flex-col">
        {/* Header Section */}
        <section className="relative w-full min-h-[150px] md:min-h-[200px] bg-[#00417b]">
          {/* Navigation Bar */}
          <div className="w-full flex flex-col md:flex-row md:h-[83px] bg-white">
            {/* Logo Section */}
            <div className="w-full md:w-auto md:flex-1 h-[60px] md:h-[83px] bg-white flex items-center justify-center md:justify-start md:pl-24">
              <div className="w-[180px] md:w-[250px] h-6 md:h-9">
                <img
                  src="/logo.webp"
                  alt="Law Offices of Mark D. VanCleave, PLLC"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* CTA Section */}
            <div className="w-full md:w-auto h-[60px] md:h-[83px] bg-[#00417b] flex items-center justify-center px-2">
              <div className="flex flex-col items-center justify-center">
                <a
                  href="tel:2813038800"
                  className="text-sm md:text-[21px] text-center tracking-[1px] md:tracking-[3.00px] leading-[16px] md:leading-[23.1px] [font-family:'Roboto',Helvetica] font-bold text-white hover:text-[#d44500] transition-colors duration-300"
                >
                  (281) 303-8800
                </a>
                <p className="mt-1 [font-family:'Roboto',Helvetica] font-medium text-white text-[9px] md:text-[12px] text-center tracking-[1.5px] md:tracking-[2px] leading-[12px] md:leading-[16px]">
                  CALL YOUR ATTORNEY
                </p>
              </div>
            </div>
          </div>

          {/* Thank You Header */}
          <div className="relative w-full max-w-[1130px] mx-auto mt-4 md:mt-[30px] px-4 text-center">
            <div className="flex items-center justify-center mb-3 md:mb-4">
              <CheckCircle className="w-12 md:w-16 h-12 md:h-16 text-[#d44500]" />
            </div>
            <h1 className="[font-family:'Montserrat',Helvetica] font-bold text-white text-2xl md:text-3xl lg:text-4xl leading-[28px] md:leading-[35px] lg:leading-[44px] mb-6 md:mb-8">
              Your Request Has Been Received
            </h1>
          </div>
        </section>

        {/* Main Thank You Content */}
        <section className="w-full py-12 md:py-20 bg-white">
          <div className="container mx-auto max-w-4xl px-4 text-center">
            <h2 className="font-['Montserrat',Helvetica] font-bold text-[#091626] text-xl md:text-2xl lg:text-3xl mb-4 md:mb-6 leading-[24px] md:leading-[30px] lg:leading-[39.6px]">
              Attorney Mark VanCleave or a member of our team will contact you shortly.
            </h2>

            <p className="font-['Roboto',Helvetica] font-medium text-base md:text-lg text-[#222125] leading-[24px] md:leading-[27px] mb-6 md:mb-8 max-w-2xl mx-auto">
              Thank you for reaching out to the Law Offices of Mark D. VanCleave, PLLC. We understand the challenges you're facing after an accident, and we're ready to help you seek the compensation you deserve.
            </p>

            <div className="bg-[#00417b] rounded-2xl p-6 md:p-8 mb-8 md:mb-12">
              <h3 className="font-['Montserrat',Helvetica] font-bold text-white text-lg md:text-xl lg:text-2xl mb-3 md:mb-4">
                Next Steps:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 text-left">
                <div className="flex items-start gap-3 text-center md:text-left">
                  <div className="w-8 h-8 bg-[#d44500] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-['Montserrat',Helvetica] font-bold text-white text-sm md:text-base mb-1 md:mb-2">
                      Watch for a call
                    </h4>
                    <p className="font-['Roboto',Helvetica] text-[#cbd5e0] text-xs md:text-sm leading-[18px] md:leading-[20px]">
                      Watch for a call from our Baytown office (281-303-8800).
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-center md:text-left">
                  <div className="w-8 h-8 bg-[#d44500] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-['Montserrat',Helvetica] font-bold text-white text-sm md:text-base mb-1 md:mb-2">
                      Avoid speaking with insurance
                    </h4>
                    <p className="font-['Roboto',Helvetica] text-[#cbd5e0] text-xs md:text-sm leading-[18px] md:leading-[20px]">
                      Avoid speaking to the other driver's insurance company until we have evaluated your case.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-center md:text-left">
                  <div className="w-8 h-8 bg-[#d44500] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-['Montserrat',Helvetica] font-bold text-white text-sm md:text-base mb-1 md:mb-2">
                      Gather documents
                    </h4>
                    <p className="font-['Roboto',Helvetica] text-[#cbd5e0] text-xs md:text-sm leading-[18px] md:leading-[20px]">
                      Gather any relevant documents (police reports, medical bills, or photos of the accident scene).
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-[#d44500] p-4 md:p-6 mb-6 md:mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="w-4 md:w-5 h-4 md:h-5 text-[#d44500] mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-2 md:ml-3">
                  <h4 className="font-['Montserrat',Helvetica] font-bold text-[#d44500] text-sm md:text-base">
                    Need to reach us before we call?
                  </h4>
                  <p className="font-['Roboto',Helvetica] text-[#222125] text-xs md:text-sm mt-1">
                    Call us anytime at <a href="tel:2813038800" className="font-bold underline">281-303-8800</a>. We're ready to help you get started.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="w-full bg-[#00417b] py-12 md:py-16">
          <div className="container mx-auto max-w-4xl px-4">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="font-['Montserrat',Helvetica] font-bold text-white text-xl md:text-2xl lg:text-3xl mb-3 md:mb-4">
                Contact Information
              </h2>
              <p className="font-['Roboto',Helvetica] text-[#cbd5e0] text-base md:text-lg">
                We're here when you need us most
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <div className="text-center">
                <div className="w-12 md:w-16 h-12 md:h-16 bg-[#d44500] rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <Phone className="w-6 md:w-8 h-6 md:h-8 text-white" />
                </div>
                <h3 className="font-['Montserrat',Helvetica] font-bold text-white text-lg md:text-xl mb-1 md:mb-2">
                  Call Now
                </h3>
                <a
                  href="tel:2813038800"
                  className="font-['Roboto',Helvetica] font-bold text-[#d44500] text-lg md:text-xl hover:text-white transition-colors duration-300"
                >
                  281-303-8800
                </a>
                <p className="font-['Roboto',Helvetica] text-[#cbd5e0] text-xs md:text-sm mt-1 md:mt-2">
                  Available to help
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 md:w-16 h-12 md:h-16 bg-[#d44500] rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <MapPin className="w-6 md:w-8 h-6 md:h-8 text-white" />
                </div>
                <h3 className="font-['Montserrat',Helvetica] font-bold text-white text-lg md:text-xl mb-1 md:mb-2">
                  Office Location
                </h3>
                <p className="font-['Roboto',Helvetica] text-[#cbd5e0] text-sm md:text-base">
                  1300 Rollingbrook Drive<br />
                  Suite 410 Baytown, TX 77521
                </p>
              </div>

            </div>

            <div className="text-center mt-8 md:mt-12 pt-6 md:pt-8 border-t border-white/20">
              <p className="font-['Roboto',Helvetica] text-[#cbd5e0] text-sm md:text-base mb-3 md:mb-4">
                Serving Baytown, Channelview, La Porte, Highlands, Mont Belvieu & Greater Houston Area
              </p>
              <a
                href="/"
                className="bg-[#d44600] hover:bg-[#c23900] text-white [font-family:'Roboto',Helvetica] text-[18px] tracking-[1px] rounded-none border-2 border-solid border-[#d44600] hover:border-[#c23900] px-8 pt-[30px] pb-[30px] transition-colors duration-300 inline-block"
              >
                Return to Homepage
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <section className="w-full bg-black py-6 md:py-8">
          <div className="container mx-auto max-w-4xl px-4 text-center">
            <p className="font-['Roboto',Helvetica] text-gray-400 text-xs md:text-sm mb-2">
              © 2026 Law Offices of Mark D. VanCleave, PLLC. All rights reserved.
            </p>
            <p className="font-['Roboto',Helvetica] text-gray-500 text-xs leading-[16px]">
              The information on this website is for general information purposes only. Nothing on this site should be taken as legal advice for any individual case or situation.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};
