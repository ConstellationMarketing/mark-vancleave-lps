import React from "react";
import { MapPin, Phone } from "lucide-react";

export const FooterSectionTest = (): JSX.Element => {
  return (
    <section className="w-full bg-[#00417b] py-8 md:py-16">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Left Side - Contact Info */}
          <div className="text-white order-2 md:order-1">
            <h2 className="font-bold text-white text-2xl md:text-3xl font-['Montserrat',Helvetica] leading-[30px] md:leading-[39px] mb-6 md:mb-8">
              CONNECT WITH US
            </h2>
            <div className="w-12 md:w-16 h-1 bg-[#d44500] mb-6 md:mb-8"></div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#d44500] rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-['Montserrat',Helvetica] font-bold text-white text-lg mb-2">
                    Office Location
                  </h4>
                  <p className="font-['Roboto',Helvetica] font-medium text-[#cbd5e0] text-base leading-[24px]">
                    1300 Rollingbrook Drive<br />
                    Suite 410, Baytown, TX 77521
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#d44500] rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-['Montserrat',Helvetica] font-bold text-white text-lg mb-2">
                    Call Now
                  </h4>
                  <a
                    href="tel:2813038800"
                    className="font-['Roboto',Helvetica] font-bold text-[#d44500] text-xl hover:text-white transition-colors"
                  >
                    281-303-8800
                  </a>
                </div>
              </div>
            </div>

            {/* Service Areas */}
            <div className="mt-8 pt-8 border-t border-white/20">
              <h4 className="font-['Montserrat',Helvetica] font-bold text-white text-lg mb-4">
                Serving Areas
              </h4>
              <p className="font-['Roboto',Helvetica] font-medium text-[#cbd5e0] text-sm leading-[20px]">
                Baytown, Channelview, La Porte, Highlands, Mont Belvieu & Greater Houston Area
              </p>
            </div>
          </div>

          {/* Right Side - Map */}
          <div className="order-1 md:order-2">
            <div className="w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-lg">
              <iframe
                width="100%"
                height="100%"
                frameBorder="0"
                title="The Law Offices of Mark D. VanCleave, PLLC"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3463.5491691741668!2d-94.98064672380622!3d29.761758131907886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x863f5e9e4c7ac047%3A0x64fc9d9e5d577619!2sThe%20Law%20Offices%20of%20Mark%20D.%20VanCleave%2C%20PLLC!5e0!3m2!1sen!2srs!4v1772182611473!5m2!1sen!2srs"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-8 md:mt-16 pt-6 md:pt-8 border-t border-white/20">
          <div className="text-center">
            <p className="font-['Roboto',Helvetica] font-medium text-[#cbd5e0] text-xs md:text-sm leading-[18px] md:leading-[20px] mb-3 md:mb-4">
              © 2026 Law Offices of Mark D. VanCleave, PLLC. All rights reserved.
            </p>
            <p className="font-['Roboto',Helvetica] text-[#cbd5e0] text-xs leading-[14px] md:leading-[16px]">
              The information on this website is for general information purposes only. Nothing on this site should be taken as legal advice for any individual case or situation. This information is not intended to create, and receipt or viewing does not constitute, an attorney-client relationship.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
