import React from "react";

interface TrafficSignSvgProps {
  type: "no-entry" | "stop" | "speed-50" | "no-honking" | "one-way" | "turn-right" | "u-turn-prohibited" | "height-limit" | "steep-hill" | "narrow-bridge" | "school-ahead" | "parking" | "hospital" | "first-aid";
  className?: string;
}

export const TrafficSignSvg: React.FC<TrafficSignSvgProps> = ({ type, className = "w-28 h-28" }) => {
  switch (type) {
    case "stop":
      return (
        <svg viewBox="0 0 100 100" className={className}>
          {/* Octagon outer frame */}
          <polygon
            points="30,5 70,5 95,30 95,70 70,95 30,95 5,70 5,30"
            fill="#dc2626"
            stroke="#ffffff"
            strokeWidth="3"
          />
          {/* Inner polygon line */}
          <polygon
            points="31,9 69,9 91,31 91,69 69,91 31,91 9,69 9,31"
            fill="none"
            stroke="#ffffff"
            strokeWidth="2.5"
          />
          {/* Bold STOP Text */}
          <text
            x="50"
            y="58"
            fill="#ffffff"
            fontFamily="Arial Black, Helvetica, sans-serif"
            fontSize="22"
            fontWeight="900"
            textAnchor="middle"
            letterSpacing="-0.5"
          >
            STOP
          </text>
        </svg>
      );

    case "no-entry":
      return (
        <svg viewBox="0 0 100 100" className={className}>
          {/* Red circle */}
          <circle cx="50" cy="50" r="45" fill="#e11d48" stroke="#ffffff" strokeWidth="3" />
          {/* Wide white horizontal bar */}
          <rect x="15" y="42" width="70" height="16" rx="2" fill="#ffffff" />
        </svg>
      );

    case "speed-50":
      return (
        <svg viewBox="0 0 100 100" className={className}>
          {/* Red circle ring with white interior */}
          <circle cx="50" cy="50" r="45" fill="#ffffff" stroke="#dc2626" strokeWidth="8" />
          {/* 50 text inside */}
          <text
            x="50"
            y="59"
            fill="#111827"
            fontFamily="Impact, Arial Black, sans-serif"
            fontSize="28"
            fontWeight="bold"
            textAnchor="middle"
          >
            50
          </text>
        </svg>
      );

    case "no-honking":
      return (
        <svg viewBox="0 0 100 100" className={className}>
          {/* Red circular ban ring */}
          <circle cx="50" cy="50" r="45" fill="#ffffff" stroke="#dc2626" strokeWidth="6" />
          {/* Horn glyph silhouette inside */}
          <g fill="#1f2937">
            {/* Horn bell and tube */}
            <path d="M28,45 L35,45 L40,40 L45,40 L45,60 L40,60 L35,55 L28,55 Z" />
            <path d="M45,43 L60,35 L60,65 L45,57 Z" />
            {/* Sound wave with air blow */}
            <path d="M22,48 C20,48 18,52 22,52 Z" />
            <path d="M64,44 C67,46 67,54 64,56" stroke="#1f2937" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            <path d="M69,38 C74,42 74,58 69,62" stroke="#1f2937" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          </g>
          {/* Ban red diagonal line */}
          <line x1="20" y1="20" x2="80" y2="80" stroke="#dc2626" strokeWidth="7" strokeLinecap="round" />
        </svg>
      );

    case "u-turn-prohibited":
      return (
        <svg viewBox="0 0 100 100" className={className}>
          {/* Outer red ring with white background */}
          <circle cx="50" cy="50" r="45" fill="#ffffff" stroke="#dc2626" strokeWidth="6" />
          {/* U-Turn Arrow representation */}
          <path
            d="M32,65 L32,45 C32,32 58,32 58,45 L58,62"
            fill="none"
            stroke="#1f2937"
            strokeWidth="7"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
          {/* Arrow head */}
          <polygon points="52,60 58,69 64,60" fill="#1f2937" />
          {/* Ban red diagonal slash */}
          <line x1="22" y1="22" x2="78" y2="78" stroke="#dc2626" strokeWidth="6.5" />
        </svg>
      );

    case "turn-right":
      return (
        <svg viewBox="0 0 100 100" className={className}>
          {/* Blue circle */}
          <circle cx="50" cy="50" r="45" fill="#2563eb" stroke="#ffffff" strokeWidth="3.5" />
          {/* White arrow turning right */}
          <g stroke="#ffffff" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none">
            <path d="M30,55 A20,20 0 0,1 65,38 L65,38" />
          </g>
          <polygon points="56,31 69,38 56,45" fill="#ffffff" />
        </svg>
      );

    case "school-ahead":
      return (
        <svg viewBox="0 0 100 100" className={className}>
          {/* Alert Triangle (warning orange-red border, yellow/white bg) */}
          <polygon points="50,5 95,85 5,85" fill="#fffbeb" stroke="#f97316" strokeWidth="7" strokeLinejoin="round" />
          {/* Inner warning design with figures */}
          <g transform="translate(25, 42)" fill="#374151">
            {/* Figure 1 - Bigger child */}
            <circle cx="15" cy="10" r="4" />
            <path d="M10,17 C10,14 20,14 20,17 L19,35 L16,35 L15,26 L14,26 L13,35 L10,35 Z" />
            <path d="M9,17 L6,25" stroke="#374151" strokeWidth="2.5" strokeLinecap="round" />
            {/* Figure 2 - Smaller child holding hands */}
            <circle cx="32" cy="15" r="3" />
            <path d="M28,20 C28,18 36,18 36,20 L35,35 L33,35 L32,27 L31,27 L30,35 L28,35 Z" />
            {/* Joining line for hand-hold */}
            <path d="M19,21 H29" stroke="#374151" strokeWidth="2" strokeLinecap="round" />
          </g>
        </svg>
      );

    case "narrow-bridge":
      return (
        <svg viewBox="0 0 100 100" className={className}>
          {/* Warning Triangle */}
          <polygon points="50,5 95,85 5,85" fill="#fffbeb" stroke="#f97316" strokeWidth="7" strokeLinejoin="round" />
          {/* Road narrowing shape inside */}
          <g fill="#1f2937">
            {/* Left side bottleneck */}
            <path d="M30,75 L38,75 L38,40 L30,40 L30,48 Z" />
            <path d="M38,40 L45,48 L45,75 Z" />
            {/* Right side bottleneck */}
            <path d="M70,75 L62,75 L62,40 L70,40 L70,48 Z" />
            <path d="M62,40 L55,48 L55,75 Z" />
            {/* Two warning strips inside */}
            <rect x="48" y="45" width="4" height="25" fill="#f59e0b" />
          </g>
        </svg>
      );

    case "hospital":
      return (
        <svg viewBox="0 0 100 100" className={className}>
          {/* Blue rectangle */}
          <rect x="5" y="5" width="90" height="90" rx="10" fill="#1e3a8a" stroke="#ffffff" strokeWidth="3" />
          {/* White inner frame */}
          <rect x="11" y="11" width="78" height="78" rx="6" fill="none" stroke="#ffffff" strokeWidth="2" />
          {/* H letter or physical bed graphic */}
          <g transform="translate(25, 25)">
            {/* Simple graphical ambulance bed */}
            <rect x="5" y="24" width="40" height="14" rx="2" fill="#ffffff" />
            {/* Pillow */}
            <rect x="34" y="17" width="9" height="7" rx="1" fill="#ffffff" />
            {/* Legs */}
            <rect x="10" y="38" width="4" height="12" fill="#ffffff" />
            <rect x="36" y="38" width="4" height="12" fill="#ffffff" />
            {/* Cross insignia above the bed */}
            <rect x="21" y="0" width="8" height="22" fill="#ef4444" rx="1" />
            <rect x="14" y="7" width="22" height="8" fill="#ef4444" rx="1" />
          </g>
        </svg>
      );

    default:
      return (
        <svg viewBox="0 0 100 100" className={className}>
          <circle cx="50" cy="50" r="45" fill="#2563eb" stroke="#ffffff" strokeWidth="4" />
          <text x="50" y="60" fill="#ffffff" fontSize="30" fontWeight="bold" textAnchor="middle">?</text>
        </svg>
      );
  }
};
