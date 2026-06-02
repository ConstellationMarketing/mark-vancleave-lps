import React from "react";

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

  return (
    <div style={{ maxWidth: '1280px', margin: '0 auto', overflow: 'hidden', padding: '40px 0' }}>
      <style>{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .logo-ticker {
          display: flex;
          align-items: center;
          gap: 64px;
          width: max-content;
          animation: ticker 25s linear infinite;
        }
        .logo-ticker:hover {
          animation-play-state: paused;
        }
      `}</style>
      <div className="logo-ticker">
        {[...logos, ...logos].map((logo, i) => (
          <img
            key={i}
            src={logo.url}
            alt={logo.name}
            style={{
              height: '80px',
              width: 'auto',
              objectFit: 'contain',
              flexShrink: 0
            }}
          />
        ))}
      </div>
    </div>
  );
};
