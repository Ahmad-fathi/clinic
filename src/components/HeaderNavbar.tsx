import React from 'react';
import { Phone } from 'lucide-react';
import { CosmodermLogo } from './CosmodermLogo';

interface HeaderNavbarProps {
  activeNav: string;
  setActiveNav: (nav: string) => void;
}

export const HeaderNavbar: React.FC<HeaderNavbarProps> = ({
  activeNav,
  setActiveNav,
}) => {
  const navItemClass = (key: string) =>
    `transition-all duration-200 text-white cursor-pointer tracking-wide text-[13px] sm:text-[14px] md:text-[15px] font-extralight whitespace-nowrap ${
      activeNav === key
        ? 'opacity-100 font-normal border-b border-stone-100 pb-0.5'
        : 'opacity-75 hover:opacity-100'
    }`;

  return (
    <header className="relative z-30 w-full pt-6 sm:pt-8 px-6 sm:px-10 md:px-14 bg-transparent font-avenir">

      {/*
        3-zone layout:
          [LEFT flex-1 justify-end]  [CENTER logo fixed]  [RIGHT flex-1 justify-start]
        Both sides are flex-1 → equal width → logo sits dead-center.
        Call Us button lives inside RIGHT zone so it doesn't break symmetry.
      */}
      <div className="flex items-center w-full min-h-[56px]">

        {/* ── LEFT NAV ─ flex-1 pushes items toward center ── */}
        <div className="flex-1 flex items-center justify-end">
          <nav className="flex items-center gap-5 sm:gap-7 md:gap-9 mr-24 sm:mr-36 md:mr-48">
            <button onClick={() => setActiveNav('home')} className={navItemClass('home')}>
              Home
            </button>
            <span className="text-white/30 select-none text-[10px]">•</span>
            <button onClick={() => setActiveNav('about')} className={navItemClass('about')}>
              About
            </button>
          </nav>
        </div>

        {/* ── CENTER LOGO ── absolute so it doesn't affect flex children widths ── */}
        <div className="absolute left-1/2 -translate-x-1/2 z-10 flex-shrink-0 px-4 sm:px-6 md:px-8">
          <button
            onClick={() => setActiveNav('home')}
            className="focus:outline-none transition-transform active:scale-[0.98] cursor-pointer bg-transparent py-1 px-4 sm:px-6"
            aria-label="Cosmoderm Clinics Home"
          >
            <CosmodermLogo size="md" variant="light" />
          </button>
        </div>

        {/* ── RIGHT NAV ─ flex-1 pushes items toward center ── */}
        <div className="flex-1 flex items-center justify-start">
          <nav className="flex items-center gap-5 sm:gap-7 md:gap-9 ml-24 sm:ml-36 md:ml-48">
            <button onClick={() => setActiveNav('treatments')} className={navItemClass('treatments')}>
              Treatments
            </button>
            <span className="text-white/30 select-none text-[10px]">•</span>
            <button onClick={() => setActiveNav('health-condition')} className={navItemClass('health-condition')}>
              Health Conditions
            </button>
          </nav>

          {/* Call Us — lives in right zone, far right edge */}
          <div className="hidden xl:flex items-center ml-auto pl-6">
            <button
              onClick={() => window.location.href = 'tel:+966126000000'}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#24342c] hover:bg-[#1a2620] text-white text-xs font-normal rounded-full shadow-lg transition-all duration-300 active:scale-95 cursor-pointer border border-white/10 whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 fill-white stroke-[2]" />
              <span>Call Us</span>
            </button>
          </div>
        </div>

      </div>
    </header>
  );
};
