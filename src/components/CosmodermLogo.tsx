import React, { useId } from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'light' | 'dark';
}

export const CosmodermLogo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  variant = 'light',
}) => {
  const isSm = size === 'sm';
  const isLg = size === 'lg';

  // Every logo instance needs its own gradient id. With a shared hard-coded id,
  // all instances resolve url(#id) to the FIRST match in the document — which is
  // the hidden desktop logo (0x0) on mobile, so the gold "S" stroke painted
  // nothing and appeared to be missing.
  const gradientId = `logoGoldGradient-${useId().replace(/:/g, '')}`;

  const isLight = variant === 'light';

  const titleSize = isSm ? 'text-lg sm:text-xl' : isLg ? 'text-2xl sm:text-3xl md:text-4xl' : 'text-xl sm:text-2xl';
  const subSize = isSm ? 'text-[8px] sm:text-[9px]' : isLg ? 'text-[11px] sm:text-[12px]' : 'text-[9.5px] sm:text-[10.5px]';
  const swooshH = isSm ? 'h-5 w-2.5' : isLg ? 'h-8 w-4' : 'h-6 sm:h-7 w-3 sm:w-3.5';

  const coColorClass = isLight ? 'text-stone-100 font-extralight' : 'text-[#24342c] font-extralight';

  const modermGradientClass = isLight 
    ? 'bg-gradient-to-r from-[#f3e5ab] via-[#d4af37] to-[#aa831b] bg-clip-text text-transparent font-light'
    : 'bg-gradient-to-r from-[#9e7f22] via-[#bd9626] to-[#70560e] bg-clip-text text-transparent font-light';

  const subTextColor = isLight 
    ? 'bg-gradient-to-r from-[#e3d396] via-[#c4a12f] to-[#8d6c13] bg-clip-text text-transparent font-extralight' 
    : 'text-[#82661c] font-extralight';

  return (
    <div className={`inline-flex flex-col items-center justify-center leading-none select-none bg-transparent ${className}`}>
      {/* Top line: CO + Gold Ribbon S + MODERM = COSMODERM */}
      <div className={`flex items-center font-extralight tracking-tight ${titleSize} font-avenir`}>
        {/* CO */}
        <span className={`${coColorClass} tracking-wide`}>
          CO
        </span>

        {/* Elegant Vertical Gold Ribbon S Swoosh */}
        <div className={`relative inline-flex items-center justify-center mx-[1px] ${swooshH}`}>
          <svg
            viewBox="0 0 20 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-full w-full overflow-visible"
          >
            <path
              d="M 16 3 C 16 3, 3 13, 5 25 C 7 37, 18 41, 2 47"
              stroke={`url(#${gradientId})`}
              strokeWidth="3.5"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f8ebb8" />
                <stop offset="50%" stopColor="#d4af37" />
                <stop offset="100%" stopColor="#8c6a0f" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* MODERM */}
        <span className={`${modermGradientClass} tracking-wide`}>
          MODERM
        </span>
      </div>

      {/* Bottom line: CLINICS centered underneath */}
      <div className="w-full flex justify-center mt-1 sm:mt-1.5">
        <span className={`${subTextColor} tracking-[0.45em] uppercase ${subSize} font-avenir`}>
          CLINICS
        </span>
      </div>
    </div>
  );
};



