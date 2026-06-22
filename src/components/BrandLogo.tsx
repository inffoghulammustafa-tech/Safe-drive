import React from "react";

interface BrandLogoProps {
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ className = "h-14" }) => {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Custom Designed High-Fidelity Circular Vehicle/Road Shield */}
      <svg
        viewBox="0 0 100 100"
        className="w-11 h-11 shrink-0"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer Circular Ring (Road Asphalt Theme) */}
        <circle cx="50" cy="50" r="44" fill="#0c2340" stroke="#ff6a00" strokeWidth="2.5" />
        
        {/* Road Lanes Dashed Ring */}
        <circle
          cx="50"
          cy="50"
          r="36"
          fill="none"
          stroke="#ffffff"
          strokeWidth="3.5"
          strokeDasharray="8 6"
        />

        {/* Inner Core Blue fill */}
        <circle cx="50" cy="50" r="29" fill="#0f2b5c" />

        {/* Car Silhouette (Frontal View modeled elegant and precise) */}
        <g transform="translate(26, 32)">
          {/* Windshield */}
          <path
            d="M11,5 L37,5 C39,5 41,7 41.5,10 L44,19 L4,19 L6.5,10 C7,7 9,5 11,5 Z"
            fill="#38bdf8"
          />
          {/* Main grill/body */}
          <path
            d="M1,19 L47,19 C48,19 49,20 49,21.5 L47,33 C47,35 45,36 43,36 L5,36 C3,36 1,35 1,33 L-1,21.5 C-1,20 0,19 1,19 Z"
            fill="#ffffff"
          />
          {/* Headlights */}
          <circle cx="6" cy="24" r="3.5" fill="#facc15" />
          <circle cx="42" cy="24" r="3.5" fill="#facc15" />
          {/* Grille lines */}
          <rect x="14" y="23" width="20" height="2" rx="1" fill="#94a3b8" />
          <rect x="16" y="27" width="16" height="2" rx="1" fill="#94a3b8" />
          {/* Wheels/Tyres under car */}
          <rect x="4" y="36" width="7" height="4" rx="1" fill="#000000" />
          <rect x="37" y="36" width="7" height="4" rx="1" fill="#000000" />
        </g>

        {/* Dynamic Curved Pathway Base */}
        <path
          d="M20,84 C35,76 65,76 80,84"
          fill="none"
          stroke="#ff6a00"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>

      {/* Typography Stack */}
      <div className="flex flex-col justify-center text-left">
        {/* Main Brand Title */}
        <span className="text-2xl font-extrabold tracking-tight text-[#0c2340] leading-none select-none">
          Go<span className="text-[#ff6a00]">Driveify</span>
        </span>
        {/* Subtitle with accent lines */}
        <span className="text-[9.5px] font-black tracking-[0.14em] text-[#0a2050] mt-1 leading-none select-none flex items-center gap-1">
          <span className="h-[1px] w-3 bg-[#ff6a00]/80"></span>
          LEARNING CENTER
          <span className="h-[1px] w-3 bg-[#ff6a00]/80"></span>
        </span>
      </div>
    </div>
  );
};
