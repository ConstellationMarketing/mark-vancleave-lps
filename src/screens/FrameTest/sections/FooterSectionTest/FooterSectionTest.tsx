import { MapPin, Phone } from "lucide-react";
import { Button } from "../../../../components/ui/button";

export const FooterSectionTest = (): JSX.Element => {
  return (
    <section className="w-full bg-[#00417b] py-8 md:py-16">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Left - Contact Info */}
          <div className="text-white">
            <h3 className="font-['Montserrat',Helvetica] font-bold text-white text-lg mb-4">
              Law Offices of Mark D. VanCleave, PLLC
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#d44500] flex-shrink-0 mt-1" />
                <a
                  href="tel:2817642276"
                  className="font-['Roboto',Helvetica] font-bold text-[#d44500] text-base hover:text-white transition-colors"
                >
                  (281) 764-2276
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#d44500] flex-shrink-0 mt-1" />
                <p className="font-['Roboto',Helvetica] font-medium text-[#cbd5e0] text-sm leading-[20px]">
                  Suite 410, Rollingbrook Drive<br />
                  Baytown, TX 77521
                </p>
              </div>
            </div>
          </div>

          {/* Middle - Practice Areas */}
          <div className="text-white">
            <h3 className="font-['Montserrat',Helvetica] font-bold text-white text-lg mb-4">
              Practice Areas
            </h3>
            <ul className="space-y-2 font-['Roboto',Helvetica] text-[#cbd5e0] text-sm leading-[20px]">
              <li>Auto Accidents</li>
              <li>Motorcycle Accidents</li>
              <li>Commercial &amp; 18-Wheeler Accidents</li>
              <li>Drunk Driver Accidents</li>
            </ul>
          </div>

          {/* Right - CTA */}
          <div className="text-white flex flex-col items-center md:items-start">
            <h3 className="font-['Montserrat',Helvetica] font-bold text-white text-lg mb-4">
              Free Case Review
            </h3>
            <p className="font-['Roboto',Helvetica] text-[#cbd5e0] text-sm mb-4 leading-[20px]">
              No upfront fees. You only pay if we recover for you.
            </p>
            <Button
              className="h-[50px] flex items-center justify-center !px-6 !pt-0 !pb-0 bg-[#d44500] [font-family:'Roboto',Helvetica] text-white text-sm tracking-[1px] rounded-none border-2 border-solid border-[#d44500] hover:bg-[#c23900] hover:border-[#c23900] transition-colors duration-300 font-medium whitespace-nowrap"
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get My Free Case Review
            </Button>
          </div>
        </div>

        {/* Service Areas */}
        <div className="mt-8 md:mt-10 pt-6 border-t border-white/20">
          <p className="font-['Roboto',Helvetica] font-medium text-[#cbd5e0] text-sm leading-[20px] text-center">
            Serving Baytown, Channelview, La Porte, Highlands, Mont Belvieu &amp; Greater Houston Area
          </p>
        </div>

        {/* Bottom Footer */}
        <div className="mt-6 pt-6 border-t border-white/20">
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
