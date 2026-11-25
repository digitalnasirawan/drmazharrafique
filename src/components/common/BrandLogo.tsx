import React from 'react';
import { Link } from 'react-router-dom';

interface BrandLogoProps {
  className?: string;
  variant?: 'header' | 'footer' | 'compact';
  showSubheading?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = "",
  variant = 'header',
  showSubheading = true
}) => {
  const isFooter = variant === 'footer';
  const isCompact = variant === 'compact';

  return (
    <Link 
      to="/" 
      className={`inline-flex items-center gap-3 group text-left focus-visible:outline-2 focus-visible:outline-[#BE8C1D] rounded-lg transition-transform ${className}`}
      aria-label="Dr. Mazhar Rafique - Consultant Orthopedic Surgeon Homepage"
    >
      {/* Orthopedic Services Emblem (Anatomical Bone & Joint Reconstruction) */}
      <div 
        className={`relative shrink-0 rounded-xl flex items-center justify-center transition-all duration-200 ${
          isFooter 
            ? 'w-11 h-11 bg-white/10 border border-[#BE8C1D]/40 text-[#BE8C1D] group-hover:bg-[#BE8C1D] group-hover:text-black' 
            : isCompact
              ? 'w-9 h-9 bg-[#FAF8F2] border border-[#E8E5DE] text-[#BE8C1D] group-hover:border-[#BE8C1D]'
              : 'w-11 h-11 sm:w-12 sm:h-12 bg-gradient-to-br from-[#FAF8F2] via-white to-[#FAF8F2] border border-[#BE8C1D]/50 text-[#BE8C1D] shadow-xs group-hover:border-[#BE8C1D] group-hover:shadow-md'
        }`}
      >
        <svg 
          viewBox="0 0 48 48" 
          className="w-7 h-7 sm:w-8 sm:h-8" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* Subtle Circular Shield Ring */}
          <circle cx="24" cy="24" r="21" stroke="#BE8C1D" strokeWidth="1.5" strokeOpacity="0.35" strokeDasharray="3 2" />

          {/* Upper Femur / Condyles (Orthopedic Joint Head) */}
          <path 
            d="M21 7C21 5.34315 22.3431 4 24 4C25.6569 4 27 5.34315 27 7V13.5C27 15.5 28.5 17 30.5 17C32.433 17 34 18.567 34 20.5C34 22 32.5 23 30.5 23C27.5 23 26 21 24 21C22 21 20.5 23 17.5 23C15.5 23 14 22 14 20.5C14 18.567 15.567 17 17.5 17C19.5 17 21 15.5 21 13.5V7Z" 
            fill="#111111" 
            stroke="#BE8C1D" 
            strokeWidth="1.8" 
            strokeLinejoin="round"
          />

          {/* Articular Meniscus / Joint Space (Signature Gold Mobility Glide Arc) */}
          <path 
            d="M13 25.5C16 23.8 20 23.5 24 23.5C28 23.5 32 23.8 35 25.5" 
            stroke="#BE8C1D" 
            strokeWidth="3.2" 
            strokeLinecap="round" 
          />

          {/* Lower Tibial Plateau & Shaft (Lower Orthopedic Bone) */}
          <path 
            d="M15 28C17.5 28 19 29.5 21 29.5V41C21 42.6569 22.3431 44 24 44C25.6569 44 27 42.6569 27 41V29.5C29 29.5 30.5 28 33 28C34.5 28 35 29 35 30.2C35 32 33.5 33 31.5 33C29.5 33 29 34.5 29 36V41C29 42.6569 27.6569 44 26 44H22C20.3431 44 19 42.6569 19 41V36C19 34.5 18.5 33 16.5 33C14.5 33 13 32 13 30.2C13 29 13.5 28 15 28Z" 
            fill="#111111" 
            stroke="#BE8C1D" 
            strokeWidth="1.8" 
            strokeLinejoin="round"
          />

          {/* Dynamic Motion & Joint Mobility Swoop (Restoration of Movement) */}
          <path 
            d="M8 28C8 17 15 8 28 7" 
            stroke="#BE8C1D" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeDasharray="1 3"
          />
          <path 
            d="M40 20C40 31 33 40 20 41" 
            stroke="#BE8C1D" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeDasharray="1 3"
          />

          {/* Precision Alignment Center Dot */}
          <circle cx="24" cy="24" r="1.5" fill="#BE8C1D" />
        </svg>
      </div>

      {/* Main Text & Subheading (FCPS Removed per User Request) */}
      <div className="flex flex-col">
        <span 
          className={`font-bold tracking-tight transition-colors leading-tight ${
            isFooter 
              ? 'text-white text-lg sm:text-xl group-hover:text-[#BE8C1D]' 
              : isCompact
                ? 'text-[#111111] text-base group-hover:text-[#936A12]'
                : 'text-[#111111] text-lg sm:text-xl lg:text-[22px] group-hover:text-[#936A12]'
          }`}
          style={{ fontFamily: "'Maven Pro', sans-serif" }}
        >
          Dr. Mazhar Rafique
        </span>

        {showSubheading && (
          <span 
            className={`font-medium tracking-normal transition-colors ${
              isFooter 
                ? 'text-gray-400 text-xs sm:text-[13px] group-hover:text-gray-300' 
                : 'text-[#475569] text-xs sm:text-[13px] mt-0.5'
            }`}
            style={{ fontFamily: "'Raleway', sans-serif" }}
          >
            Consultant Orthopedic Surgeon
          </span>
        )}
      </div>
    </Link>
  );
};
