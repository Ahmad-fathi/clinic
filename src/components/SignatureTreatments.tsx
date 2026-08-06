import React, { useEffect, useRef } from 'react';

import botoxImg from '/src/assets/images/pexels-cottonbro-7581580.jpg';
import xerfImg from '/src/assets/images/pexels-shvetsa-4586745.jpg';
import rhinoplastyImg from '/src/assets/images/Gemini_Generated_Image_4kjrv74kjrv74kjr.png';
import stemcellImg from '/src/assets/images/pexels-o3-studiio-900294148-21391399.jpg';
import hairTransplantImg from '/src/assets/images/pexels-isabella-mendes-107313-21810006.jpg';
import ivDripsImg from '/src/assets/images/pexels-shvetsa-3845115.jpg';
import endoliftImg from '/src/assets/images/treatment_endolift_1785944912634.jpg';
import laserHairImg from '/src/assets/images/pexels-orhunruzgaroz-10822254.jpg';

interface TreatmentItem {
  id: string;
  title: string;
  image: string;
}

const treatments: TreatmentItem[] = [
  { id: 'botox',        title: 'BOTOX',              image: botoxImg },
  { id: 'xerf',         title: 'XERF',               image: xerfImg },
  { id: 'rhinoplasty',  title: 'RHINOPLASTY',        image: rhinoplastyImg },
  { id: 'stemcell',     title: 'STEM CELL',          image: stemcellImg },
  { id: 'hairtransplant', title: 'HAIR TRANSPLANT',  image: hairTransplantImg },
  { id: 'ivdrips',      title: 'IV DRIPS',           image: ivDripsImg },
  { id: 'endolift',     title: 'ENDOLIFT',           image: endoliftImg },
  { id: 'laserhair',    title: 'LASER HAIR REMOVAL', image: laserHairImg },
];

interface SignatureTreatmentsProps {
  onSelectTreatment?: (id: string) => void;
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

export const SignatureTreatments: React.FC<SignatureTreatmentsProps> = ({ onSelectTreatment }) => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const cardRefs   = useRef<(HTMLDivElement | null)[]>([]);

  // Reveal heading
  useReveal([headingRef as React.RefObject<HTMLElement>]);

  // Reveal each card individually
  useEffect(() => {
    const observers = cardRefs.current.map((card) => {
      if (!card) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            card.classList.add('in-view');
            obs.unobserve(card);
          }
        },
        { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
      );
      obs.observe(card);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  return (
    <section className="w-full bg-gradient-to-b from-[#eee9df] via-[#e2ddd2] to-[#e8e3d8] text-[#24342c] py-10 sm:py-14 px-2 sm:px-4 border-t border-[#d8d2c4] font-avenir">
      <div className="max-w-[1400px] mx-auto">

        <h2
          ref={headingRef}
          className="reveal text-3xl sm:text-4xl md:text-5xl font-extralight text-[#24342c] text-center font-avenir tracking-wide mb-10 sm:mb-12"
        >
          Signature Treatments
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1.5 sm:gap-2">
          {treatments.map((treatment, index) => {
            // Stagger each card: col position drives the extra delay class
            const delayClass = ['', 'reveal-d1', 'reveal-d2', 'reveal-d3'][index % 4];

            return (
              <div
                key={treatment.id}
                ref={(el) => { cardRefs.current[index] = el; }}
                onClick={() => onSelectTreatment?.(treatment.id)}
                className={`reveal ${delayClass} group relative w-full aspect-[4/5] overflow-hidden bg-stone-900 cursor-pointer select-none rounded-[6px] shadow-md`}
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
