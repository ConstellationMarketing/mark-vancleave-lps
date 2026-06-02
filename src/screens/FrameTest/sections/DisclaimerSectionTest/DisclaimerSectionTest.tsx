import React from "react";

export const DisclaimerSectionTest = (): JSX.Element => {
  return (
    <section className="w-full bg-gray-100 py-12 md:py-16">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="bg-white rounded-lg p-6 md:p-8 shadow-sm">
          <h2 className="font-bold text-xl md:text-2xl text-[#091626] mb-6 font-['Montserrat',Helvetica] text-center md:text-left">
            Disclosures & Disclaimers
          </h2>

          <div className="space-y-6 text-sm md:text-base font-['Roboto',Helvetica] text-[#222125] leading-[20px] md:leading-[24px] text-center md:text-left">
            <div>
              <h3 className="font-bold text-lg text-[#091626] mb-2 text-center md:text-left">Legal Professional Responsibility</h3>
              <p>
                Law Offices of Mark D. VanCleave, PLLC is a personal injury law firm located in Baytown, Texas. Attorney Mark VanCleave is the attorney responsible for the content of this landing page advertisement.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg text-[#091626] mb-2 text-center md:text-left">*Contingency Fee Disclosure</h3>
              <p>
                Attorney's fees are calculated before expenses are deducted. While the firm charges no upfront attorney fees and handles cases on a contingency fee basis, clients may still be responsible for certain court costs, filing fees, and litigation expenses depending on the specific terms of their written representation agreement.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg text-[#091626] mb-2 text-center md:text-left">No Guarantee of Results</h3>
              <p>
                Content provided on this website is for informational purposes only and does not constitute formal legal advice or create an attorney-client relationship. Past client reviews, testimonials, or mentions of prior case traits do not guarantee a similar outcome in future legal matters.
              </p>
            </div>

            <div className="pt-4 border-t border-gray-200">
              <p className="text-xs md:text-sm text-gray-600">
                By using this website, you acknowledge that you have read and understood these disclaimers and that you agree to be bound by them.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
