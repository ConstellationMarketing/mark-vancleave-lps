import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Quote, Star, MapPin, Phone, Clock } from "lucide-react";

export const FooterSection = (): JSX.Element => {
  return (
    <section className="w-full bg-[#00417b] py-8 md:py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Left Side - Contact Form */}
            <div className="bg-white rounded-lg p-6 md:p-8 shadow-xl order-2 lg:order-1">
              <div className="mb-6 md:mb-8">
                <h3 className="font-['Montserrat',Helvetica] font-bold text-[#091626] text-xl md:text-2xl mb-3 md:mb-4">
                  Arrange A Free Initial Consultation
                </h3>
                <p className="font-['Roboto',Helvetica] text-[#222125] text-sm md:text-base leading-[20px] md:leading-[24px]">
                  You do not have to handle the insurance companies alone. We are ready to help. Submit the form below and we'll contact you shortly.
                </p>
              </div>

              <form
                method="POST"
                className="space-y-4 md:space-y-6"
                id="contact-form"
                name="injury-form"
                data-netlify="true"
              >
                <input type="hidden" name="form-name" value="injury-form" />
                <input type="hidden" name="redirect" value="/thank-you.html" />

                {/* Current UTM Parameters */}
                <input type="hidden" name="utm_source" id="utm_source" />
                <input type="hidden" name="utm_medium" id="utm_medium" />
                <input type="hidden" name="utm_campaign" id="utm_campaign" />
                <input type="hidden" name="utm_term" id="utm_term" />
                <input type="hidden" name="utm_content" id="utm_content" />

                {/* Paid Ad Click IDs */}
                <input type="hidden" name="gclid" id="gclid" />
                <input type="hidden" name="fbclid" id="fbclid" />
                <input type="hidden" name="msclkid" id="msclkid" />

                {/* First-Touch Attribution */}
                <input type="hidden" name="first_utm_source" id="first_utm_source" />
                <input type="hidden" name="first_utm_medium" id="first_utm_medium" />
                <input type="hidden" name="first_utm_campaign" id="first_utm_campaign" />
                <input type="hidden" name="first_utm_term" id="first_utm_term" />
                <input type="hidden" name="first_utm_content" id="first_utm_content" />
                <input type="hidden" name="first_referrer" id="first_referrer" />
                <input type="hidden" name="first_landing_page" id="first_landing_page" />
                <input type="hidden" name="first_visit_timestamp" id="first_visit_timestamp" />

                {/* Referrer Information */}
                <input type="hidden" name="referrer" id="referrer" />
                <input type="hidden" name="referrer_domain" id="referrer_domain" />
                <input type="hidden" name="search_engine" id="search_engine" />
                <input type="hidden" name="social_platform" id="social_platform" />

                {/* Traffic Classification */}
                <input type="hidden" name="traffic_source_category" id="traffic_source_category" />
                <input type="hidden" name="is_paid_traffic" id="is_paid_traffic" />
                <input type="hidden" name="is_returning_visitor" id="is_returning_visitor" />

                {/* WhatConverts Compatible Fields */}
                <input type="hidden" name="lead_source" id="lead_source" />
                <input type="hidden" name="lead_medium" id="lead_medium" />
                <input type="hidden" name="lead_campaign" id="lead_campaign" />
                <input type="hidden" name="lead_keyword" id="lead_keyword" />
                <input type="hidden" name="lead_content" id="lead_content" />
                <input type="hidden" name="landing_url" id="landing_url" />

                {/* Session Information */}
                <input type="hidden" name="landing_page" id="landing_page" />
                <input type="hidden" name="current_page_url" id="current_page_url" />
                <input type="hidden" name="session_id" id="session_id" />
                <input type="hidden" name="session_count" id="session_count" />
                <input type="hidden" name="pages_visited" id="pages_visited" />
                <input type="hidden" name="time_on_page" id="time_on_page" />

                {/* Technical Information */}
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
                  className="w-full bg-[#d44600] hover:bg-[#c23900] text-white [font-family:'Roboto',Helvetica] text-[18px] tracking-[1px] rounded-none border-2 border-solid border-[#d44600] hover:border-[#c23900] py-3 md:pt-[30px] md:pb-[30px] px-6 transition-colors duration-300"
                >
                  REQUEST A CONSULTATION
                </button>

                <p className="text-xs text-gray-500 text-center font-['Roboto',Helvetica] leading-[14px] md:leading-[16px]">
                  By submitting this form, you agree to be contacted by Constellation Law regarding your case. All information is confidential.
                </p>
              </form>
            </div>

            {/* Right Side - Contact Info */}
            <div className="bg-black rounded-lg p-6 md:p-8 order-1 lg:order-2">
              <div className="text-center mb-6 md:mb-8">
                <h2 className="font-bold text-white text-xl md:text-2xl lg:text-[33px] font-['Montserrat',Helvetica] leading-[24px] md:leading-[30px] lg:leading-[46.2px] mb-3 md:mb-4">
                  CONNECT WITH US
                </h2>
                <div className="w-12 md:w-16 h-1 bg-[#d44500] mx-auto"></div>
              </div>

              {/* Contact Details */}
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-12 h-12 bg-[#d44500] rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-['Montserrat',Helvetica] font-bold text-white text-base md:text-lg mb-1 md:mb-2">
                      Office Location
                    </h4>
                    <p className="font-['Roboto',Helvetica] font-medium text-[#cbd5e0] text-sm md:text-base leading-[20px] md:leading-[24px]">
                      1300 Rollingbrook Drive<br />
                      Suite 410 Baytown, TX 77521
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-12 h-12 bg-[#d44500] rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-['Montserrat',Helvetica] font-bold text-white text-base md:text-lg mb-1 md:mb-2">
                      Call Now
                    </h4>
                    <a
                      href="tel:2813038800"
                      className="font-['Roboto',Helvetica] font-bold text-[#d44500] text-lg md:text-xl hover:text-white transition-colors duration-300"
                    >
                      281-303-8800
                    </a>
                  </div>
                </div>

              </div>

              {/* Service Areas */}
              <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-white/20">
                <h4 className="font-['Montserrat',Helvetica] font-bold text-white text-base md:text-lg mb-3 md:mb-4">
                  Serving Areas
                </h4>
                <p className="font-['Roboto',Helvetica] font-medium text-[#cbd5e0] text-xs md:text-sm leading-[18px] md:leading-[20px] mb-4">
                  Baytown, Channelview, La Porte, Highlands, Mont Belvieu & Greater Houston Area
                </p>

                {/* Google Map */}
                <div className="w-full h-[300px] md:h-[350px] rounded-lg overflow-hidden shadow-lg">
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
