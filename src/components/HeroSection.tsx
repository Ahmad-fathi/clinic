import React, { useState, useEffect, useRef } from 'react';
import { HeaderNavbar } from './HeaderNavbar';
import heroBgImage from '../assets/images/optimized/cosmoderm_hero_bg_1785937809389.webp';

interface HeroSectionProps {
  activeNav?: string;
  setActiveNav?: (nav: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  activeNav: propActiveNav,
  setActiveNav: propSetActiveNav
}) => {
  const [localActiveNav, setLocalActiveNav] = useState('home');
  const headlineRef = useRef<HTMLDivElement>(null);

  const currentNav = propActiveNav ?? localActiveNav;
  const setNav = propSetActiveNav ?? setLocalActiveNav;

  // Reveal headline on mount with a slight delay
  useEffect(() => {
    const timer = setTimeout(() => {
      headlineRef.current?.classList.add('in-view');
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-[90vh] sm:min-h-screen w-full bg-[#0d0c0b] text-stone-100 overflow-hidden flex flex-col justify-between pb-16 sm:pb-24">

      {/* Background Hero Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBgImage}
          alt="Cosmoderm Clinic dermatology hero background"
          className="w-full h-full object-cover object-center filter brightness-[0.90] contrast-[1.02]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/70 via-black/25 to-transparent z-[1]" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#0d0c0b] via-black/40 to-transparent z-[1]" />
      </div>

      {/* Header */}
      <div className="relative z-10 w-full">
        <HeaderNavbar activeNav={currentNav} setActiveNav={setNav} />
      </div>

      {/* Hero Headline — slow reveal on mount */}
      <div
        ref={headlineRef}
        className="reveal relative z-10 w-full max-w-[1200px] mx-auto px-6 text-center flex flex-col items-center justify-center my-auto pt-24 sm:pt-32 pb-12"
      >
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extralight text-white font-avenir tracking-[0.18em] uppercase leading-tight drop-shadow-lg">
          Where Science &amp; Beauty Meet
        </h1>
        <p className="mt-4 text-xs sm:text-sm md:text-base font-light text-stone-300 tracking-[0.25em] uppercase font-avenir max-w-xl">
          Advanced Clinical Dermatology &amp; Bespoke Aesthetics
        </p>
      </div>

    </div>
  );
};
