import React from 'react';
import { HeaderNavbar } from './HeaderNavbar';
import { FooterSection } from './FooterSection';
import { Search, ArrowRight } from 'lucide-react';
import clinicLounge from '../assets/images/optimized/pexels-cristian-rojas-8459996.webp';
import imgAcne from '../assets/images/optimized/imageAcne.webp';
import imgAcneScars from '../assets/images/optimized/AcneScars.webp';
import imgDull from '../assets/images/optimized/Dull.webp';
import imgMelasma from '../assets/images/optimized/pexels-cottonbro-4812653.webp';
import imgFineLines from '../assets/images/optimized/fineLines.webp';
import imgLoose from '../assets/images/optimized/pexels-ron-lach-9253761.webp';
import imgPores from '../assets/images/optimized/pores.webp';
import imgThinning from '../assets/images/optimized/thinninghair.webp';
import imgHairLoss from '../assets/images/optimized/hairlose.webp';
import imgDry from '../assets/images/optimized/dry.webp';
import imgRosacea from '../assets/images/optimized/pexels-anna-nekrashevich-6476083.webp';

const PHONE_HREF = 'tel:+966****0000';

const CONDITIONS_FILTERS = [
  'All',
  'Acne & Scarring',
  'Pigmentation',
  'Signs of Aging',
  'Hair & Scalp',
  'Sensitivity & Dryness',
];

const ConditionsFilterBar: React.FC<{
  active: string;
  onChange: (tab: string) => void;
}> = ({ active, onChange }) => {
  return (
    <div className="sticky top-0 z-40 w-full border-b border-[#e7e2d6] bg-white/95 backdrop-blur-sm shadow-[0_1px_0_rgba(0,0,0,0.04)] py-3">
      <div className="mx-auto flex max-w-[1200px] gap-2.5 overflow-x-auto px-5 py-2 no-scrollbar sm:justify-center sm:px-8 sm:py-3">
        {CONDITIONS_FILTERS.map((tab) => {
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

/* All Conditions grid — filters by the active category tab above. */
interface Condition {
  name: string;
  desc: string;
  category: string;
  img: string;
  imgClassName?: string;
}

const CONDITIONS: Condition[] = [
  { name: 'Thinning Hair', desc: 'Reduced density and shedding', category: 'Hair & Scalp', img: imgThinning },
  { name: 'Acne', desc: 'Breakouts, blackheads and inflamed spots', category: 'Acne & Scarring', img: imgAcne },
  { name: 'Acne Scars', desc: 'Textural marks left after breakouts', category: 'Acne & Scarring', img: imgAcneScars },
  { name: 'Melasma & Hyperpigmentation', desc: 'Patchy brown discolouration', category: 'Pigmentation', img: imgMelasma },
  { name: 'Dull Skin', desc: 'Uneven tone and lack of radiance', category: 'Pigmentation', img: imgDull },
  { name: 'Fine Lines & Wrinkles', desc: 'Early wrinkles and creases', category: 'Signs of Aging', img: imgFineLines },
  { name: 'Loose Skin', desc: 'Sagging and reduced elasticity', category: 'Signs of Aging', img: imgLoose },
  { name: 'Enlarged Pores', desc: 'Visible, congested pores', category: 'Signs of Aging', img: imgPores },
  { name: 'Dark Circles', desc: 'Tired, shadowed under-eyes', category: 'Signs of Aging', img: imgFineLines },
  { name: 'Hair Loss', desc: 'Receding or diffuse hair fall', category: 'Hair & Scalp', img: imgHairLoss },
  { name: 'Dry Skin', desc: 'Tight, flaky or dehydrated skin', category: 'Sensitivity & Dryness', img: imgDry },
  { name: 'Rosacea', desc: 'Redness, flushing and sensitivity', category: 'Sensitivity & Dryness', img: imgRosacea },
];

/** Observe every `.reveal` element inside the given container and add
 *  `in-view` when it enters the viewport. Mirrors the home-page reveal. */
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

const ConditionsGrid: React.FC<{
  activeFilter: string;
  search: string;
  onSelect: () => void;
}> = ({ activeFilter, search, onSelect }) => {
  const q = search.trim().toLowerCase();
  const visible = CONDITIONS.filter(
    (c) =>
      (activeFilter === 'All' || c.category === activeFilter) &&
      (q === '' || c.name.toLowerCase().includes(q) || c.desc.toLowerCase().includes(q))
  );

  const sectionRef = React.useRef<HTMLElement>(null);
  useRevealContainer(sectionRef);

  return (
    <section ref={sectionRef} className="w-full bg-white py-20 md:py-24">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <h2 className="reveal font-avenir text-[28px] font-extralight leading-[1.1] text-[#24241f] sm:text-[32px]">
          All Conditions
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-7 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-8">
          {visible.map((c) => (
            <button
              key={c.name}
              type="button"
              onClick={onSelect}
              className="reveal group flex flex-col text-left transition-opacity duration-200 hover:opacity-90"
            >
              <div className="aspect-[4/5] w-full overflow-hidden rounded-[8px]">
                <img
                  src={c.img}
                  alt={c.name}
                  className={`h-full w-full object-cover ${c.imgClassName ?? 'object-center'}`}
                />
              </div>
              <h3 className="font-mulish mt-5 text-center text-[19px] font-medium leading-[1.2] text-[#24342c]">
                {c.name}
              </h3>
              <p className="font-mulish-light mt-1 text-center text-[13px] font-light leading-[1.4] text-[#8a8f8a] sm:text-[14px]">
                {c.desc}
              </p>
              <span className="font-mulish mt-2 flex items-center justify-center gap-1 text-[13px] font-medium text-[#24342c]">
                See Solutions
                <ArrowRight className="h-3.5 w-3.5 stroke-[1.6] transition-transform duration-200 group-hover:translate-x-1" />
              </span>
            </button>
          ))}
        </div>

        {visible.length === 0 && (
          <p className="font-mulish-light mt-10 text-center text-[14px] text-[#8a8f8a]">
            No conditions match your search yet.
          </p>
        )}
      </div>
    </section>
  );
};

export const HealthConditionsPage: React.FC<{ setActiveNav: (nav: string) => void }> = ({ setActiveNav }) => {
  const [activeFilter, setActiveFilter] = React.useState('All');

  const [search, setSearch] = React.useState('');

  return (
    <div className="font-body relative w-full bg-white text-[#3A3A3A]">

      {/* ═══ HERO (full-bleed, no section padding) ═══ */}
      <section className="relative w-full overflow-hidden">
        {/* Header overlays the hero */}
        <div className="absolute inset-x-0 top-0 z-30">
          <HeaderNavbar activeNav="health-condition" setActiveNav={setActiveNav} />
        </div>

        {/* Full-bleed background — calm clinic / consultation setting */}
        <img
          src={clinicLounge}
          alt="Cosmoderm Clinic consultation lounge"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        {/* Dark gradient overlay: left semi-opaque → right transparent */}
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(15,27,44,0.78)] via-[rgba(15,27,44,0.45)] to-transparent" />

        {/* Hero box: 420px desktop, scaled down on smaller screens.
            Text vertically centered, left-aligned. */}
        <div className="relative z-10 flex h-[340px] w-full items-center sm:h-[380px] md:h-[420px]">
          <div className="absolute left-[6%] w-[88%] sm:left-[5.26%] sm:w-[560px]">
            <h1 className="font-avenir text-[40px] font-extralight leading-[1.1] text-white sm:text-[48px] md:text-[54px]">
              Skin Conditions
            </h1>
            <p className="font-mulish-light mt-3 max-w-[440px] text-[15px] font-light leading-[22px] text-white/90 sm:text-[16px]">
              Understand your condition and discover the right solution for it.
            </p>

            {/* Rounded search input */}
            <div className="mt-6 flex w-full max-w-[420px] items-center rounded-full bg-white px-5 py-3.5 shadow-[0_4px_18px_rgba(0,0,0,0.18)]">
              <Search className="h-[18px] w-[18px] flex-shrink-0 text-[#24342c]/60" strokeWidth={1.6} />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search for your condition..."
                className="font-mulish w-full bg-transparent pl-3 text-[14px] text-[#24342c] placeholder:text-[#9a9a92] focus:outline-none"
              />
            </div>
          </div>
        </div>
      </section>

      <ConditionsFilterBar active={activeFilter} onChange={setActiveFilter} />

      <ConditionsGrid activeFilter={activeFilter} search={search} onSelect={() => setActiveNav('treatments')} />

      <FooterSection
        onNavigate={() => setActiveNav('home')}
        onOpenConsultation={() => window.location.href = PHONE_HREF}
      />
    </div>
  );
};
