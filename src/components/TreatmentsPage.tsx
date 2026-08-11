import React from 'react';
import { HeaderNavbar } from './HeaderNavbar';
import { FooterSection } from './FooterSection';
import { SignatureTreatments } from './SignatureTreatments';
import clinicLounge from '../assets/images/optimized/pexels-cristian-rojas-8459996.webp';
import { ClipboardCheck, ShieldCheck, Heart } from 'lucide-react';
import { BeforeAfterSection } from './BeforeAfterSection';
import { FaqSection } from './FaqSection';

/* ------------------------------------------------------------------
   TREATMENTS PAGE — HERO (section 1).

   Plan hero pattern:
     • existing site HeaderNavbar overlays the top of the hero
     • full-bleed calm clinic-interior background photo
     • dark gradient overlay fading left (semi-opaque) → right (transparent)
     • left-aligned text block, vertically centered
     • heading in light-weight serif, white, large
     • one-line subheading in lighter sans-serif, white/off-white
     • NO buttons, NO badges, minimal
------------------------------------------------------------------- */

const PHONE_HREF = 'tel:+966****0000';

const FILTERS = [
  'All',
  'Skin Treatments',
  'Laser',
  'Injectables & Fillers',
  'Hair Restoration',
  'Body Treatments',
];

/* Sticky pill filter bar. State is lifted into TreatmentsPage so the
   active tab can also drive the SignatureTreatments grid below. */
const TreatmentsFilterBar: React.FC<{
  active: string;
  onChange: (tab: string) => void;
}> = ({ active, onChange }) => {
  return (
    <div className="sticky top-0 z-40 w-full border-b border-[#e7e2d6] bg-white/95 backdrop-blur-sm shadow-[0_1px_0_rgba(0,0,0,0.04)] py-3">
      <div className="mx-auto flex max-w-[1200px] gap-2.5 overflow-x-auto px-5 py-2 no-scrollbar sm:justify-center sm:px-8 sm:py-3">
        {FILTERS.map((tab) => {
          const isActive = tab === active;
          return (
            <button
              key={tab}
              type="button"
              onClick={() => onChange(tab)}
              className={`font-avenir flex-none whitespace-nowrap rounded-full border px-5 py-2 text-[12px] font-light uppercase tracking-[0.12em] transition-colors duration-200 ${
                isActive
                  ? 'border-[#0F1B2C] bg-[#0F1B2C] text-white'
                  : 'border-[#cfccc2] bg-transparent text-[#3A3A3A] hover:border-[#0F1B2C]/40'
              }`}
            >
              {tab}
            </button>
          );
        })}
      </div>
    </div>
  );
};

/* Observe every `.reveal` element inside the given container and add
   `in-view` when it enters the viewport. Mirrors the home-page reveal. */
function useRevealContainer(containerRef: React.RefObject<HTMLElement | null>) {
  React.useEffect(() => {
    const root = containerRef.current;
    if (!root) return;
    const els = Array.from(root.querySelectorAll('.reveal')) as HTMLElement[];
    if (els.length === 0) return;
    // Stagger each element slightly so they cascade in like the home reveal.
    els.forEach((el, i) => {
      window.setTimeout(() => el.classList.add('in-view'), 80 + i * 70);
    });
    return;
  }, [containerRef]);
}

/* Section 5 — Why Choose Our Treatments (3 pillars, sage-beige). */
const PILLARS = [
  {
    no: '01',
    title: 'Personalized Assessment',
    desc: 'Every plan begins with a one-to-one consultation and a skin analysis tailored to your goals.',
    icon: 'clipboard',
  },
  {
    no: '02',
    title: 'Certified Technology',
    desc: 'We use licensed, clinically proven devices and techniques delivered by accredited specialists.',
    icon: 'shield',
  },
  {
    no: '03',
    title: 'Dedicated Follow-Up',
    desc: 'Ongoing aftercare and review appointments keep your results on track, safely and naturally.',
    icon: 'heart',
  },
];

const WhyChoose: React.FC = () => {
  const sectionRef = React.useRef<HTMLElement>(null);
  useRevealContainer(sectionRef);

  return (
    <section ref={sectionRef} className="w-full bg-[#DCD9C6] py-20 md:py-24">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <h2 className="reveal font-avenir text-[28px] font-extralight leading-[1.1] text-[#24241f] text-center sm:text-[32px]">
          Why Choose Our Treatments
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          {PILLARS.map((p) => (
            <div key={p.no} className="reveal flex flex-col items-center text-center">
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#24342c]/30 text-[#24342c]">
                {p.icon === 'clipboard' && <ClipboardCheck className="h-5 w-5" />}
                {p.icon === 'shield' && <ShieldCheck className="h-5 w-5" />}
                {p.icon === 'heart' && <Heart className="h-5 w-5" />}
              </div>
              <h3 className="font-mulish mt-4 text-[18px] font-medium leading-[1.2] text-[#24342c]">
                {p.title}
              </h3>
              <p className="font-mulish-light mt-2 max-w-[280px] text-[14px] font-light leading-[1.6] text-[#5a5a52]">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const TreatmentsPage: React.FC<{ setActiveNav: (nav: string) => void }> = ({ setActiveNav }) => {
  const [activeFilter, setActiveFilter] = React.useState('All');

  return (
    <div className="font-body relative w-full bg-white text-[#3A3A3A]">

      {/* ═══ SECTION 1: TREATMENTS HERO (full-bleed, no section padding) ═══ */}
      <section className="relative w-full overflow-hidden">
        {/* Header overlays the hero */}
        <div className="absolute inset-x-0 top-0 z-30">
          <HeaderNavbar activeNav="treatments" setActiveNav={setActiveNav} />
        </div>

        {/* Full-bleed background — calm clinic interior */}
        <img
          src={clinicLounge}
          alt="Cosmoderm Clinic lounge"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        {/* Dark gradient overlay: left semi-opaque → right transparent */}
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(15,27,44,0.78)] via-[rgba(15,27,44,0.45)] to-transparent" />

        {/* Hero box: 440px on desktop, scaled down on smaller screens.
            Text vertically centered, left-aligned. */}
        <div className="relative z-10 flex h-[320px] w-full items-center sm:h-[380px] md:h-[440px]">
          <div className="absolute left-[6%] w-[86%] sm:left-[5.26%] sm:w-[560px]">
            <h1 className="font-avenir text-[40px] font-extralight leading-[1.1] text-white sm:text-[52px] md:text-[60px]">
              Treatments
            </h1>
            <p className="font-mulish-light mt-3 max-w-[460px] text-[15px] font-light leading-[22px] text-white/90 sm:text-[16px]">
              Personalized, dermatologist-led treatments designed around you.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 2: CATEGORY FILTER BAR (sticky, under hero) ═══ */}
      <TreatmentsFilterBar active={activeFilter} onChange={setActiveFilter} />

      {/* ═══ SECTION 3: SIGNATURE TREATMENTS (reused from homepage) ═══
          The active filter tab drives which cards are shown. */}
      <SignatureTreatments activeFilter={activeFilter} />

      {/* ═══ SECTION 5: WHY CHOOSE OUR TREATMENTS (sage pillars) ═══ */}
      <WhyChoose />

      {/* ═══ SECTION 6: REAL RESULTS (reused Before/After carousel) ═══ */}
      <BeforeAfterSection />

      {/* ═══ SECTION 7: FAQ (sage accordion) ═══ */}
      <FaqSection />

      <FooterSection
        onNavigate={() => setActiveNav('home')}
        onOpenConsultation={() => window.location.href = PHONE_HREF}
      />
    </div>
  );
};
