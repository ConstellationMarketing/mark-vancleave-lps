import React, { useEffect, useState } from "react";

export const LogoSliderSectionTest = (): JSX.Element => {
  const logos = [
    {
      name: "American Association of Attorney Advocates",
      url: "https://cdn.builder.io/api/v1/image/assets%2Fc8a7b33c1f3e4309983e45cabed92535%2Fac309f167bdb40adb6da5cfbb83e32e8?format=webp&width=800&height=1200"
    },
    {
      name: "Top 10 Personal Injury Attorneys 2024",
      url: "https://cdn.builder.io/api/v1/image/assets%2Fc8a7b33c1f3e4309983e45cabed92535%2F4d95365b83af44da807e729e492d17ab?format=webp&width=800&height=1200"
    },
    {
      name: "Personal Injury Top 10 2023",
      url: "https://cdn.builder.io/api/v1/image/assets%2Fc8a7b33c1f3e4309983e45cabed92535%2Faa0232b919214d5db25b17696daf4570?format=webp&width=800&height=1200"
    },
    {
      name: "Houston Trial Lawyers Association",
      url: "https://cdn.builder.io/api/v1/image/assets%2Fc8a7b33c1f3e4309983e45cabed92535%2Ff7d41d8149284fa389f89674bdab50ad?format=webp&width=800&height=1200"
    },
    {
      name: "Texas Trial Lawyers Association",
      url: "https://cdn.builder.io/api/v1/image/assets%2Fc8a7b33c1f3e4309983e45cabed92535%2F38b0a214d5c04b53a8fe3f06d89be634?format=webp&width=800&height=1200"
    }
  ];

  // Create extended array to show 4 items with 5th one sliding in
  const extendedLogos = [...logos, ...logos];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % logos.length);
    }, 4000); // Auto-slide every 4 seconds

    return () => clearInterval(interval);
  }, [logos.length]);

  return (
    <section className="w-full py-12 md:py-16 bg-white">
      <div className="container mx-auto max-w-6xl px-4">
        {/* Logo Carousel */}
        <div className="relative overflow-hidden">
          <div className="bg-gray-50 p-8 md:p-12 rounded-lg">
            {/* Carousel Container */}
            <div className="overflow-hidden">
              <div
                className="flex gap-6 md:gap-8 transition-transform duration-700 ease-in-out"
                style={{
                  transform: `translateX(-${currentIndex * (100 / 4)}%)`,
                  width: `${(extendedLogos.length * 100) / 4}%`
                }}
              >
                {extendedLogos.map((logo, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center flex-shrink-0"
                    style={{ width: "25%" }}
                  >
                    <img
                      src={logo.url}
                      alt={logo.name}
                      className="h-[120px] md:h-[150px] w-auto object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {logos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-[#d44500] w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
