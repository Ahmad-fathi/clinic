import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Phone, Menu, X } from 'lucide-react';
import { CosmodermLogo } from './CosmodermLogo';

interface HeaderNavbarProps {
  activeNav: string;
  setActiveNav: (nav: string) => void;
}

const NAV_ITEMS: { key: string; label: string }[] = [
  { key: 'home', label: 'Home' },
  { key: 'about', label: 'About' },
  { key: 'treatments', label: 'Treatments' },
  { key: 'health-condition', label: 'Health Conditions' },
];

const PHONE_HREF = 'tel:+966****0000';

export const HeaderNavbar: React.FC<HeaderNavbarProps> = ({
  activeNav,
  setActiveNav,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Weight stays constant across states so the label never changes width
  // (a bolder active item would "grow" and nudge the neighbouring links).
  // The bottom border is always present but transparent when inactive, so
  // switching tabs only changes colour — never layout.
  const navItemClass = (key: string) =>
    `transition-colors duration-200 text-white cursor-pointer tracking-wide text-[13px] lg:text-[14px] xl:text-[15px] font-extralight whitespace-nowrap border-b pb-0.5 ${
      activeNav === key
        ? 'opacity-100 border-stone-100'
        : 'opacity-75 hover:opacity-100 border-transparent'
    }`;

  // Lock body scroll while the drawer is open, and close it on Escape.
  useEffect(() => {
    if (!isMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [isMenuOpen]);

  const handleSelect = (key: string) => {
    setActiveNav(key);
    setIsMenuOpen(false);
  };

  return (
    <header className="relative z-30 w-full pt-5 sm:pt-6 md:pt-8 px-5 sm:px-8 md:px-12 lg:px-14 bg-transparent font-avenir">

      {/* ══════════ DESKTOP (lg+) ══════════
        3-zone layout:
          [LEFT flex-1 justify-end]  [CENTER logo fixed]  [RIGHT flex-1 justify-start]
        Both sides are flex-1 → equal width → logo sits dead-center.
      */}
      <div className="hidden lg:flex items-center w-full min-h-[56px]">

        {/* ── LEFT NAV ── */}
        <div className="flex-1 flex items-center justify-end">
          <nav className="flex items-center gap-5 lg:gap-7 xl:gap-9 mr-24 lg:mr-36 xl:mr-48">
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

        {/* ── RIGHT NAV ── */}
        <div className="flex-1 flex items-center justify-start">
          <nav className="flex items-center gap-5 lg:gap-7 xl:gap-9 ml-24 lg:ml-36 xl:ml-48">
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
              onClick={() => { window.location.href = PHONE_HREF; }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#24342c] hover:bg-[#1a2620] text-white text-xs font-normal rounded-full shadow-lg transition-colors duration-300 active:scale-95 cursor-pointer border border-white/10 whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 fill-white stroke-[2]" />
              <span>Call Us</span>
            </button>
          </div>
        </div>

      </div>

      {/* ══════════ MOBILE / TABLET (below lg) ══════════
        Logo left, hamburger right — no cramped inline nav.
      */}
      <div className="flex lg:hidden items-center justify-between w-full min-h-[52px]">
        <button
          onClick={() => setActiveNav('home')}
          className="focus:outline-none transition-transform active:scale-[0.98] cursor-pointer bg-transparent py-1"
          aria-label="Cosmoderm Clinics Home"
        >
          <CosmodermLogo size="sm" variant="light" />
        </button>

        <button
          onClick={() => setIsMenuOpen(true)}
          aria-label="Open menu"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-white/25 bg-black/20 text-white transition-colors duration-200 hover:bg-black/35 active:scale-95 cursor-pointer"
        >
          <Menu className="w-5 h-5 stroke-[1.5]" />
        </button>
      </div>

      {/* ══════════ MOBILE DRAWER ══════════
        Rendered in a portal on <body> so it escapes the hero's stacking
        context — otherwise the hero headline (also z-10) paints over the
        panel and swallows clicks on the lower links.
      */}
      {createPortal(
        <>
      {/* Backdrop */}
      <div
        onClick={() => setIsMenuOpen(false)}
        aria-hidden="true"
        className={`lg:hidden fixed inset-0 z-[90] bg-black/60 transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Slide-in panel */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        className={`lg:hidden fixed top-0 right-0 z-[100] h-[100dvh] w-[86%] max-w-[360px] bg-[#24342c] border-l border-white/10 shadow-2xl flex flex-col transition-transform duration-300 ease-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Panel header */}
        <div className="flex items-center justify-between px-6 pt-6 pb-5 border-b border-white/10">
          <CosmodermLogo size="sm" variant="light" />
          <button
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
            className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/20 text-white transition-colors duration-200 hover:bg-white/10 active:scale-95 cursor-pointer"
          >
            <X className="w-5 h-5 stroke-[1.5]" />
          </button>
        </div>

        {/* Links */}
        <nav className="flex-1 overflow-y-auto px-6 py-8">
          <ul className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => {
              const isActive = activeNav === item.key;
              return (
                <li key={item.key}>
                  <button
                    onClick={() => handleSelect(item.key)}
                    aria-current={isActive ? 'page' : undefined}
                    className={`w-full text-left py-4 text-[15px] tracking-[0.18em] uppercase font-extralight cursor-pointer transition-colors duration-200 border-b ${
                      isActive
                        ? 'text-white border-[#d4af37]'
                        : 'text-white/65 hover:text-white border-white/10'
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Call CTA pinned to the bottom */}
        <div className="px-6 pb-8 pt-2 border-t border-white/10">
          <button
            onClick={() => { window.location.href = PHONE_HREF; }}
            className="w-full inline-flex items-center justify-center gap-2.5 px-5 py-4 bg-white text-[#24342c] text-xs tracking-[0.2em] uppercase font-normal rounded-full shadow-lg transition-colors duration-300 hover:bg-stone-200 active:scale-[0.98] cursor-pointer"
          >
            <Phone className="w-4 h-4 fill-[#24342c] stroke-[2]" />
            <span>Call Us</span>
          </button>
          <p className="mt-4 text-center text-[10px] tracking-[0.25em] uppercase text-white/40 font-extralight">
            Jeddah · Saudi Arabia
          </p>
        </div>
      </div>
        </>,
        document.body
      )}

    </header>
  );
};
