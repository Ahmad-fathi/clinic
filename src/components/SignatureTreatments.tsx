import React, { useEffect, useRef } from 'react';

import botoxImg from '../assets/images/optimized/pexels-cottonbro-7581580.webp';
import xerfImg from '../assets/images/optimized/pexels-shvetsa-4586745.webp';
import rhinoplastyImg from '../assets/images/optimized/Gemini_Generated_Image_4kjrv74kjrv74kjr.webp';
import stemcellImg from '../assets/images/optimized/pexels-o3-studiio-900294148-21391399.webp';
import hairTransplantImg from '../assets/images/optimized/pexels-isabella-mendes-107313-21810006.webp';
import ivDripsImg from '../assets/images/optimized/pexels-shvetsa-3845115.webp';
import endoliftImg from '../assets/images/optimized/treatment_endolift_1785944912634.webp';
import laserHairImg from '../assets/images/optimized/pexels-orhunruzgaroz-10822254.webp';

interface TreatmentItem {
  id: string;
  title: string;
  image: string;
  category: string;
}

const treatments: TreatmentItem[] = [
  { id: 'botox',        title: 'BOTOX',              image: botoxImg,        category: 'Injectables & Fillers' },
  { id: 'xerf',         title: 'XERF',               image: xerfImg,         category: 'Laser' },
  { id: 'rhinoplasty',  title: 'RHINOPLASTY',        image: rhinoplastyImg,  category: 'Skin Treatments' },
  { id: 'stemcell',     title: 'STEM CELL',          image: stemcellImg,     category: 'Skin Treatments' },
  { id: 'hairtransplant', title: 'HAIR TRANSPLANT',  image: hairTransplantImg, category: 'Hair Restoration' },
  { id: 'ivdrips',      title: 'IV DRIPS',           image: ivDripsImg,      category: 'Body Treatments' },
  { id: 'endolift',     title: 'ENDOLIFT',           image: endoliftImg,     category: 'Laser' },
  { id: 'laserhair',    title: 'LASER HAIR REMOVAL', image: laserHairImg,    category: 'Laser' },
];

interface SignatureTreatmentsProps {
  onSelectTreatment?: (id: string) => void;
  activeFilter?: string;
}

/** Attach IntersectionObserver; adds "in-view" class once element enters viewport. */
function useReveal(els: React.RefObject<HTMLElement | null>[]) {
  useEffect(() => {
    const observers = els.map((ref) => {
      const el = ref.current;
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.classList.add('in-view');
            obs.unobserve(el);
          }
        },
        { threshold: 0.08, rootMargin: '0px 0px -50px 0px' }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}

export const SignatureTreatments: React.FC<SignatureTreatmentsProps> = ({ onSelectTreatment, activeFilter }) => {
  const headingRef = useRef<HTMLHeadingElement>(null);

  // Reveal heading
  useReveal([headingRef as React.RefObject<HTMLElement>]);

  return (
    <section className="w-full bg-gradient-to-b from-[#eee9df] via-[#e2ddd2] to-[#e8e3d8] text-[#24342c] pt-10 sm:pt-14 pb-10 sm:pb-14 px-2 sm:px-4 border-t border-[#d8d2c4] font-avenir">
      <div className="max-w-[1400px] mx-auto">

        <h2
          ref={headingRef}
          className="reveal text-3xl sm:text-4xl md:text-5xl font-extralight text-[#24342c] text-center font-avenir tracking-wide mb-6 sm:mb-10"
        >
          Signature Treatments
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1.5 sm:gap-2">
          {treatments
            .filter((treatment) => !activeFilter || activeFilter === 'All' || treatment.category === activeFilter)
            .map((treatment) => {
            return (
              <div
                key={treatment.id}
                onClick={() => onSelectTreatment?.(treatment.id)}
                className="group relative w-full aspect-[1/1] sm:aspect-[4/5] overflow-hidden bg-stone-900 cursor-pointer select-none rounded-[6px] shadow-md"
              >
                <img
                  src={treatment.image}
                  alt={treatment.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-[0.88] contrast-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-opacity duration-500 group-hover:opacity-0" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#14211a] via-[#24342c]/85 to-[#14211a]/30 transition-all duration-500 ease-out opacity-0 group-hover:opacity-100" />

                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 sm:p-6 text-center z-10">
                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-[22px] xl:text-[24px] font-extralight text-white tracking-[0.2em] uppercase font-avenir drop-shadow-md px-2">
                    {treatment.title}
                  </h3>
                  <div className="overflow-hidden mt-2.5 h-6">
                    <span className="inline-block text-[11px] sm:text-xs tracking-[0.25em] font-light text-stone-200 uppercase font-avenir border-b border-stone-200/50 pb-0.5 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                      EXPLORE TREATMENT
                    </span>
                  </div>
                </div>

                <div className="absolute inset-0 border border-white/0 group-hover:border-white/20 transition-colors duration-500 pointer-events-none" />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
