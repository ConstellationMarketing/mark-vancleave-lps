import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../components/ui/avatar";
import { Card, CardContent } from "../../../../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../../../components/ui/carousel";
import { Quote, Star } from "lucide-react";

export const ClientTestimonialsSection = (): JSX.Element => {
  // Client testimonials data
  const testimonials = [
    {
      text: "He was awesome, his staff were amazing. He took calls late at night/weekends. Never steered me wrong, very transparent and honest. He gained a life long client, if ever i need help.",
      author: "Dave Marshall",
      timeframe: "11 months ago",
    },
    {
      text: "Mark was amazing and made our accident claim less stressful for us. He was open and honest, no hidden agenda. Made the process easy and I would highly recommend his services.",
      author: "Debra Byrd",
      timeframe: "1 year ago",
    },
    {
      text: "highly recommend for any personal injury! Mark & his team have helped me & my family for severals years now and has always been a big help & great communication with and keeping me updated with what was going on & looking out for my best interest and his staff is so nice and would help me out & keep me updated as well😊",
      author: "Leticia Pesina",
      timeframe: "1 year ago",
    }
  ];

  return (
    <section className="w-full bg-white py-8">
      <div className="max-w-[1130px] mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-[#091626] mb-4 font-['Montserrat',Helvetica]">
            What Our Clients Say
          </h2>
          <div className="w-16 h-1 bg-[#d44500] mx-auto mb-4"></div>

          {/* Star Rating Display */}
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="text-2xl font-bold text-[#434343] ml-2">5.0</span>
            <span className="text-gray-600 font-['Montserrat',Helvetica]">Google Reviews</span>
          </div>
        </div>
        
        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white relative overflow-hidden">
              <CardContent className="p-8 h-full flex flex-col">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 opacity-10">
                  <Quote className="w-12 h-12 text-[#ff8a00]" />
                </div>
                
                {/* Stars */}
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <div className="flex-grow mb-6">
                  <p className="font-['Roboto',Helvetica] font-normal text-gray-700 text-lg leading-[27px] italic">
                    "{testimonial.text}"
                  </p>
                </div>

                {/* Author */}
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-['Montserrat',Helvetica] font-bold text-[#434343] text-lg">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-gray-500 font-['Montserrat',Helvetica]">
                    {testimonial.timeframe && `${testimonial.timeframe} • `}Verified Google Review
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
