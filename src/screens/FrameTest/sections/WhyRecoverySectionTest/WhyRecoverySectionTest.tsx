import React from "react";
import { Button } from "../../../../components/ui/button";

export const WhyRecoverySectionTest = (): JSX.Element => {
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget;
    
    // Submit the form to Netlify
    const formData = new FormData(form);
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData as any).toString()
    })
    .then(() => {
      console.log('✅ Form submitted successfully');
      // Redirect to thank you page
      window.location.href = '/thank-you';
    })
    .catch((error) => {
      console.error('❌ Form submission error:', error);
      // Still redirect to thank you page even if there's an error
      window.location.href = '/thank-you';
    });
  };

  return (
    <section className="w-full py-8 md:py-12 bg-white">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8 items-center lg:items-stretch">
          {/* Left Column - Why Recovery Content */}
          <div className="w-full lg:w-[50%] space-y-4 md:space-y-6 text-center flex flex-col justify-center items-center lg:items-start lg:text-left">
            <h2 className="font-bold text-[24px] md:text-3xl lg:text-4xl text-[#091626] leading-[28px] md:leading-[35px] lg:leading-[39.6px] [font-family:'Montserrat',Helvetica] text-center lg:text-left">
              Why Your Recovery is Our Priority
            </h2>

            <p className="font-medium text-base md:text-lg text-[#222125] leading-[24px] md:leading-[27px] [font-family:'Roboto',Helvetica] text-center lg:text-left">
              Suffering a serious injury can turn your life upside down. Between physical pain, mounting medical bills, and lost wages, the process can feel overwhelming.
            </p>

            <p className="font-medium text-base md:text-lg text-[#222125] leading-[24px] md:leading-[27px] [font-family:'Roboto',Helvetica] text-center lg:text-left">
              You do not have to navigate this alone. At the Law Offices of Mark D. VanCleave, PLLC, our priority is your recovery. We focus on fairness and guiding you through the legal process so you can focus on healing.
            </p>

            <ul className="space-y-3 mt-6 w-full">
              <li className="flex items-start gap-3 justify-center lg:justify-start">
                <span className="text-[#d44500] font-bold flex-shrink-0">✓</span>
                <span className="font-medium text-base md:text-lg text-[#222125] [font-family:'Roboto',Helvetica]">Over 25 years of personal injury and auto accident experience.</span>
              </li>
              <li className="flex items-start gap-3 justify-center lg:justify-start">
                <span className="text-[#d44500] font-bold flex-shrink-0">✓</span>
                <span className="font-medium text-base md:text-lg text-[#222125] [font-family:'Roboto',Helvetica]">Local Baytown office serving the immediate community.</span>
              </li>
              <li className="flex items-start gap-3 justify-center lg:justify-start">
                <span className="text-[#d44500] font-bold flex-shrink-0">✓</span>
                <span className="font-medium text-base md:text-lg text-[#222125] [font-family:'Roboto',Helvetica]">Handled on a contingency fee basis—no upfront fees and you pay no attorney fees unless we help you recover damages.*</span>
              </li>
            </ul>
          </div>

          {/* Right Column - Contact Form */}
          <div className="w-full lg:w-[50%] bg-white rounded-lg p-6 md:p-8 shadow-xl">
            <div className="mb-6 md:mb-8">
              <h3 className="font-['Montserrat',Helvetica] font-bold text-[#091626] text-xl md:text-2xl mb-3 md:mb-4">
                Arrange A Free Initial Consultation
              </h3>
              <p className="font-['Roboto',Helvetica] text-[#222125] text-sm md:text-base leading-[20px] md:leading-[24px]">
                Tell us about your case. We'll review your situation and contact you shortly.
              </p>
            </div>

            <form
              method="POST"
              className="space-y-4 md:space-y-6"
              id="contact-form"
              name="injury-form"
              data-netlify="true"
              encType="application/x-www-form-urlencoded"
              onSubmit={handleFormSubmit}
            >
              <input type="hidden" name="form-name" value="injury-form" />

              {/* Tracking Fields */}
              <input type="hidden" name="utm_source" id="utm_source" />
              <input type="hidden" name="utm_medium" id="utm_medium" />
              <input type="hidden" name="utm_campaign" id="utm_campaign" />
              <input type="hidden" name="utm_term" id="utm_term" />
              <input type="hidden" name="utm_content" id="utm_content" />
              <input type="hidden" name="gclid" id="gclid" />
              <input type="hidden" name="fbclid" id="fbclid" />
              <input type="hidden" name="msclkid" id="msclkid" />
              <input type="hidden" name="first_utm_source" id="first_utm_source" />
              <input type="hidden" name="first_utm_medium" id="first_utm_medium" />
              <input type="hidden" name="first_utm_campaign" id="first_utm_campaign" />
              <input type="hidden" name="first_utm_term" id="first_utm_term" />
              <input type="hidden" name="first_utm_content" id="first_utm_content" />
              <input type="hidden" name="first_referrer" id="first_referrer" />
              <input type="hidden" name="first_landing_page" id="first_landing_page" />
              <input type="hidden" name="first_visit_timestamp" id="first_visit_timestamp" />
              <input type="hidden" name="referrer" id="referrer" />
              <input type="hidden" name="referrer_domain" id="referrer_domain" />
              <input type="hidden" name="search_engine" id="search_engine" />
              <input type="hidden" name="social_platform" id="social_platform" />
              <input type="hidden" name="traffic_source_category" id="traffic_source_category" />
              <input type="hidden" name="is_paid_traffic" id="is_paid_traffic" />
              <input type="hidden" name="is_returning_visitor" id="is_returning_visitor" />
              <input type="hidden" name="lead_source" id="lead_source" />
              <input type="hidden" name="lead_medium" id="lead_medium" />
              <input type="hidden" name="lead_campaign" id="lead_campaign" />
              <input type="hidden" name="lead_keyword" id="lead_keyword" />
              <input type="hidden" name="lead_content" id="lead_content" />
              <input type="hidden" name="landing_url" id="landing_url" />
              <input type="hidden" name="landing_page" id="landing_page" />
              <input type="hidden" name="current_page_url" id="current_page_url" />
              <input type="hidden" name="session_id" id="session_id" />
              <input type="hidden" name="session_count" id="session_count" />
              <input type="hidden" name="pages_visited" id="pages_visited" />
              <input type="hidden" name="time_on_page" id="time_on_page" />
              <input type="hidden" name="user_agent" id="user_agent" />
              <input type="hidden" name="device_type" id="device_type" />
              <input type="hidden" name="browser" id="browser" />
              <input type="hidden" name="os" id="os" />
              <input type="hidden" name="screen_resolution" id="screen_resolution" />
              <input type="hidden" name="timestamp" id="timestamp" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                <div>
                  <label className="block font-['Roboto',Helvetica] font-medium text-[#091626] text-xs md:text-sm mb-1 md:mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    required
                    name="firstName"
                    className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d44500] focus:border-transparent transition-all duration-300 font-['Roboto',Helvetica] text-sm md:text-base"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label className="block font-['Roboto',Helvetica] font-medium text-[#091626] text-xs md:text-sm mb-1 md:mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    required
                    name="lastName"
                    className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d44500] focus:border-transparent transition-all duration-300 font-['Roboto',Helvetica] text-sm md:text-base"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                <div>
                  <label className="block font-['Roboto',Helvetica] font-medium text-[#091626] text-xs md:text-sm mb-1 md:mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    name="phone"
                    className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d44500] focus:border-transparent transition-all duration-300 font-['Roboto',Helvetica] text-sm md:text-base"
                    placeholder="(281) 303-8800"
                  />
                </div>
                <div>
                  <label className="block font-['Roboto',Helvetica] font-medium text-[#091626] text-xs md:text-sm mb-1 md:mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    name="email"
                    className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d44500] focus:border-transparent transition-all duration-300 font-['Roboto',Helvetica] text-sm md:text-base"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block font-['Roboto',Helvetica] font-medium text-[#091626] text-xs md:text-sm mb-1 md:mb-2">
                  Describe Your Accident *
                </label>
                <textarea
                  required
                  rows={3}
                  name="caseDescription"
                  className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d44500] focus:border-transparent transition-all duration-300 font-['Roboto',Helvetica] resize-vertical text-sm md:text-base"
                  placeholder="Please describe what happened in your accident..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="flex items-center justify-center w-full h-[90px] md:h-[70px] px-8 bg-[#d44600] [font-family:'Roboto',Helvetica] text-white text-[18px] tracking-[1px] rounded-none border-2 border-solid border-[#d44600] hover:bg-[#c23900] hover:border-[#c23900] transition-colors duration-300"
              >
                REQUEST A CONSULTATION
              </button>

              <p className="text-xs text-gray-500 text-center font-['Roboto',Helvetica] leading-[14px] md:leading-[16px]">
                By submitting this form, you agree to be contacted regarding your case. All information is confidential.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
