import React, { useRef, useState, useEffect } from 'react';
import { ArrowUpRight, X, Sparkles } from 'lucide-react';

import doc1 from '../assets/images/optimized/1.webp';
import doc2 from '../assets/images/optimized/2.webp';
import doc3 from '../assets/images/optimized/3.webp';
// import doc4 from '../assets/images/optimized/pexels-ivan-s-4989148.webp';
// import doc5 from '../assets/images/mohamad-azaam-1O8CJy1A7Wo-unsplash.jpg';
// import doc6 from '../assets/images/optimized/pexels-anntarazevich-7904416.webp';

interface Specialist {
  id: string;
  name: string;
  title: string;
  specialty: string;
  experience: string;
  bio: string;
  image: string;
}

const specialists: Specialist[] = [
  {
    id: '1',
    name: 'Dr. Mohammed Qashmar',
    title: 'Consultant Dermatologist',
    specialty: 'Medical Dermatology & Laser Therapeutics',
    experience: '14+ Years Experience',
    bio: 'Board-certified dermatologist specializing in advanced laser rejuvenation, complex skin conditions, and bespoke anti-aging protocols tailored for all skin types.',
    image: doc1,
  },
  {
    id: '2',
    name: 'Dr. Mohammed Dahak',
    title: 'Aesthetic Physician',
    specialty: 'Facial Sculpting & Injectables',
    experience: '11+ Years Experience',
    bio: 'Renowned expert in natural facial harmonisation, precision Botox, dermal fillers, and non-surgical aesthetic transformations.',
    image: doc2,
  },
  {
    id: '3',
    name: 'Dr. Khalid Musa',
    title: 'Senior Dermatologist',
    specialty: 'Clinical Dermatology & Skin Oncology',
    experience: '16+ Years Experience',
    bio: 'Pioneer in evidence-based clinical dermatology, specializing in targeted acne treatments, pigmentation correction, and preventive skin health.',
    image: doc3,
  },
  // {
  //   id: '4',
  //   name: 'Dr. Kareem Nader',
  //   title: 'Facial Aesthetic Surgeon',
  //   specialty: 'Rhinoplasty & Endolift Precision',
  //   experience: '12+ Years Experience',
  //   bio: 'Specialist in minimally invasive facial surgical procedures, rhinoplasty consultations, and advanced radiofrequency skin tightening.',
  //   image: doc4,
  // },
  // {
  //   id: '5',
  //   name: 'Dr. ahmed hamed',
  //   title: 'Regenerative Specialist',
  //   specialty: 'Stem Cell & PRP Skin Therapies',
  //   experience: '9+ Years Experience',
  //   bio: 'Leading physician in cellular skin restoration, microneedling innovations, and personalized regenerative bio-stimulator treatments.',
  //   image: doc5,
  // },
  // {
  //   id: '6',
  //   name: 'Dr. Lilly Farooq',
  //   title: 'Hair Restoration Expert',
  //   specialty: 'Trichology & Hair Transplantation',
  //   experience: '15+ Years Experience',
  //   bio: 'International authority in Follicular Unit Extraction (FUE), scalp rejuvenation therapies, and comprehensive hair density restoration.',
  //   image: doc6,
  // },
];

export const MeetSpecialists: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const groupRef = useRef<HTMLDivElement>(null);
  const [selectedSpecialist, setSelectedSpecialist] = useState<Specialist | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isOnScreen, setIsOnScreen] = useState(false);
  const [copies, setCopies] = useState(2);
  const headingRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Scroll-triggered animations — new reveal / in-view system
  useEffect(() => {
    const targets = [headingRef.current, carouselRef.current];
    const observers = targets.map((el) => {
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.classList.add('in-view');
            obs.unobserve(el);
          }
        },
        { threshold: 0.08, rootMargin: '0px 0px -60px 0px' }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  // Pause the marquee whenever the section is offscreen or the tab is hidden,
  // so no work happens on frames the user cannot see.
  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => setIsOnScreen(entry.isIntersecting && !document.hidden),
      { threshold: 0 }
    );
    obs.observe(el);

    const onVisibility = () => {
      if (document.hidden) setIsOnScreen(false);
    };
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      obs.disconnect();
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

  // Render enough copies of the group that scrollLeft can always advance a full
  // group width before hitting the browser's max scroll position. With few
  // specialists on a wide screen, two copies are not enough and the marquee
  // would clamp and stall.
  useEffect(() => {
    const container = scrollContainerRef.current;
    const group = groupRef.current;
    if (!container || !group) return;

    const recalc = () => {
      const groupWidth = group.scrollWidth;
      if (!groupWidth) return;
      // Need: totalWidth - clientWidth >= groupWidth  =>  copies >= clientWidth/groupWidth + 1
      const needed = Math.ceil(container.clientWidth / groupWidth) + 2;
      setCopies((prev) => (prev === needed ? prev : needed));
    };

    recalc();
    const ro = new ResizeObserver(recalc);
    ro.observe(container);
    ro.observe(group);
    return () => ro.disconnect();
  }, []);

  // Seamless infinite marquee.
  // The track renders the specialist list N times; we measure the FIRST group and
  // wrap on its exact width, so the loop point is invisible instead of snapping
  // back to the initial image.
  useEffect(() => {
    if (isPaused || !isOnScreen) return;

    const container = scrollContainerRef.current;
    const group = groupRef.current;
    if (!container || !group) return;

    // Respect users who asked for reduced motion.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let animationFrameId = 0;
    let lastTime = performance.now();
    const SPEED = 0.035; // px per ms (~35 px/s)

    const step = (now: number) => {
      const delta = now - lastTime;
      lastTime = now;

      const groupWidth = group.scrollWidth;
      if (groupWidth > 0) {
        let next = container.scrollLeft + delta * SPEED;
        // Wrap by exactly one group so the second copy lines up pixel-for-pixel.
        if (next >= groupWidth) next -= groupWidth;
        container.scrollLeft = next;
      }

      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused, isOnScreen]);

  return (
    <section className="w-full bg-gradient-to-b from-[#e8e3d8] via-[#e2ddd2] to-[#eee9df] text-[#24342c] py-20 sm:py-28 overflow-hidden font-avenir border-t border-[#d8d2c4]">

      {/* Header Container: Title Left, Pill CTA Right */}
      <div
        ref={headingRef}
        className="reveal max-w-[1400px] mx-auto px-6 sm:px-12 mb-12 sm:mb-16"
      >
        <div className="flex items-center justify-between gap-6 pb-6 border-b border-[#24342c]/20">

          {/* Top Left: Title only */}
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extralight text-[#24342c] tracking-[0.05em] font-avenir leading-tight">
              Meet Our Specialists
            </h2>
          </div>

          {/* Top Right: Book Now Pill CTA Button in secondary green */}
          <div>
            <button
              onClick={() => window.location.href = 'tel:+966****0000'}
              className="group flex items-center gap-2.5 pl-5 pr-2 py-2 bg-[#24342c] text-white text-xs sm:text-sm font-light rounded-full border border-[#24342c] shadow-md hover:bg-[#1a2620] transition-all duration-300 active:scale-98 tracking-wider uppercase cursor-pointer"
            >
              <span>Book Now</span>
              <div className="w-7 h-7 rounded-full bg-white/20 text-white flex items-center justify-center transition-transform group-hover:rotate-45 group-hover:bg-white/30">
                <ArrowUpRight className="w-4 h-4 stroke-[2]" />
              </div>
            </button>
          </div>

        </div>
      </div>

      {/* Horizontal Slow-Scrolling Carousel with Hover Pause & Side Card Expansion */}
      <div ref={carouselRef} className="reveal reveal-d1 w-full relative">
        <div
          ref={scrollContainerRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
          className="flex items-center overflow-x-auto no-scrollbar py-10 cursor-grab active:cursor-grabbing"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {Array.from({ length: copies }, (_, copy) => (
          <div
            key={copy}
            ref={copy === 0 ? groupRef : undefined}
            aria-hidden={copy === 1}
            className="flex items-center flex-none gap-5 sm:gap-8 md:gap-12 pl-5 sm:pl-8 md:pl-12"
          >
          {specialists.map((spec, index) => (
            <div
              key={`${spec.id}-${index}`}
              onClick={() => setSelectedSpecialist(spec)}
              className="flex-none group cursor-pointer select-none"
            >
              <div className="flex items-center">

                {/* Circular Portrait Image (Always visible, z-20) */}
                <div className="relative z-20 w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[240px] md:h-[240px] flex-shrink-0 rounded-full p-1.5 transition-transform duration-500 group-hover:scale-102">
                  {/* Secondary Green / Gold Border */}
                  <div className="absolute inset-0 rounded-full border-2 border-[#24342c]/60 shadow-md transition-colors duration-300 group-hover:border-[#24342c]" />

                  {/* Image Crop */}
                  <div className="w-full h-full rounded-full overflow-hidden bg-stone-200">
                    <img
                      src={spec.image}
                      alt={spec.name}
                      className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-108 filter brightness-[0.98] contrast-[1.02]"
                    />
                  </div>
                </div>

                {/* Expanding White Card Body (z-10, sits behind circle, rounded on the right, shifts adjacent cards) */}
                <div className="z-10 -ml-[75px] sm:-ml-[100px] md:-ml-[120px] h-[140px] sm:h-[180px] md:h-[210px] bg-white/95 border border-stone-200/90 rounded-r-[32px] sm:rounded-r-[40px] shadow-lg pl-[85px] sm:pl-[110px] md:pl-[130px] pr-5 sm:pr-8 py-4 flex flex-col justify-center text-left transition-all duration-500 ease-out overflow-hidden max-w-0 opacity-0 group-hover:max-w-[240px] sm:group-hover:max-w-[340px] md:group-hover:max-w-[380px] group-hover:opacity-100 group-hover:shadow-2xl">
                  <div className="w-[190px] sm:w-[210px] md:w-[230px] max-w-[55vw]">
                    <h3 className="text-base sm:text-lg md:text-xl font-normal text-stone-900 tracking-tight leading-snug font-avenir whitespace-nowrap">
                      {spec.name}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-[#24342c] tracking-wide mt-1 mb-2 font-avenir whitespace-nowrap">
                      {spec.title}
                    </p>
                    <p className="text-[11px] sm:text-xs text-stone-600 font-light leading-relaxed font-avenir line-clamp-3">
                      {spec.bio}
                    </p>
                  </div>
                </div>

              </div>
            </div>
          ))}
          </div>
          ))}
        </div>
      </div>

      {/* Specialist Detail Modal */}
      {selectedSpecialist && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-lg bg-[#f4efe4] border border-[#d8d2c4] rounded-3xl p-6 sm:p-8 shadow-2xl text-stone-900 font-avenir">

            {/* Close Button */}
            <button
              onClick={() => setSelectedSpecialist(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-stone-600 hover:text-stone-900 hover:bg-stone-300/60 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Body */}
            <div className="flex flex-col items-center text-center space-y-4 pt-2">
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full p-1 border-2 border-[#24342c] overflow-hidden bg-stone-100 shadow-md">
                <img
                  src={selectedSpecialist.image}
                  alt={selectedSpecialist.name}
                  className="w-full h-full object-cover object-top rounded-full"
                />
              </div>

              <div>
                <h3 className="text-2xl font-normal text-stone-900 tracking-wide">
                  {selectedSpecialist.name}
                </h3>
                <p className="text-sm text-[#24342c] font-medium mt-0.5">
                  {selectedSpecialist.title}
                </p>
                <span className="inline-block mt-2 px-3.5 py-1 bg-[#24342c]/10 text-[#24342c] border border-[#24342c]/20 rounded-full text-xs font-medium">
                  {selectedSpecialist.experience}
                </span>
              </div>

              <div className="w-full pt-2 border-t border-[#d8d2c4]">
                <p className="text-xs font-light text-stone-600 uppercase tracking-widest text-center mb-1">
                  Primary Specialty
                </p>
                <p className="text-sm font-normal text-stone-800">
                  {selectedSpecialist.specialty}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light pt-1">
                {selectedSpecialist.bio}
              </p>

              <div className="w-full pt-4 flex gap-3">
                <button
                  onClick={() => {
                    setSelectedSpecialist(null);
                    window.location.href = 'tel:+966****0000';
                  }}
                  className="flex-1 py-3.5 bg-[#24342c] hover:bg-[#1a2620] text-white rounded-full text-xs uppercase tracking-wider font-light transition-all shadow-md cursor-pointer"
                >
                  Call to Book Consultation
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
