import React, { useRef, useState, useEffect } from 'react';
import { ArrowUpRight, X, Sparkles } from 'lucide-react';

import doc1 from '../assets/images/1.png';
import doc2 from '../assets/images/2.png';
import doc3 from '../assets/images/3.png';
// import doc4 from '../assets/images/pexels-ivan-s-4989148.jpg';
// import doc5 from '../assets/images/mohamad-azaam-1O8CJy1A7Wo-unsplash.jpg';
// import doc6 from '../assets/images/pexels-anntarazevich-7904416.jpg';

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

// Double array for continuous seamless infinite loop
const doubleSpecialists = [...specialists, ...specialists];

export const MeetSpecialists: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [selectedSpecialist, setSelectedSpecialist] = useState<Specialist | null>(null);
  const [isPaused, setIsPaused] = useState(false);
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

  // Smooth continuous auto-scroll logic
  useEffect(() => {
    let animationFrameId: number;
    let lastTime = performance.now();

    const scrollStep = (currentTime: number) => {
      const deltaTime = currentTime - lastTime;
      lastTime = currentTime;

      if (!isPaused && scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        // Slow smooth scroll: ~35px per second
        const scrollSpeed = 0.035;
        container.scrollLeft += deltaTime * scrollSpeed;

        // Seamless infinite reset when reached halfway
        const halfWidth = container.scrollWidth / 2;
        if (halfWidth > 0 && container.scrollLeft >= halfWidth) {
          container.scrollLeft -= halfWidth;
        }
      }

      animationFrameId = requestAnimationFrame(scrollStep);
    };

    animationFrameId = requestAnimationFrame(scrollStep);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isPaused]);

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
              onClick={() => window.location.href = 'tel:+966126000000'}
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
          className="flex items-center gap-8 sm:gap-10 md:gap-12 overflow-x-auto no-scrollbar px-6 sm:px-12 md:px-16 py-10 cursor-grab active:cursor-grabbing"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {doubleSpecialists.map((spec, index) => (
            <div
              key={`${spec.id}-${index}`}
              onClick={() => setSelectedSpecialist(spec)}
              className="flex-none group cursor-pointer select-none transition-all duration-500 ease-out"
            >
              <div className="flex items-center">

                {/* Circular Portrait Image (Always visible, z-20) */}
                <div className="relative z-20 w-[190px] h-[190px] sm:w-[220px] sm:h-[220px] md:w-[240px] md:h-[240px] flex-shrink-0 rounded-full p-1.5 transition-transform duration-500 group-hover:scale-102">
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
                <div className="z-10 -ml-[95px] sm:-ml-[110px] md:-ml-[120px] h-[170px] sm:h-[195px] md:h-[210px] bg-white/95 border border-stone-200/90 rounded-r-[32px] sm:rounded-r-[40px] shadow-lg pl-[105px] sm:pl-[120px] md:pl-[130px] pr-6 sm:pr-8 py-4 flex flex-col justify-center text-left transition-all duration-500 ease-out overflow-hidden max-w-0 opacity-0 group-hover:max-w-[300px] sm:group-hover:max-w-[340px] md:group-hover:max-w-[380px] group-hover:opacity-100 group-hover:shadow-2xl">
                  <div className="min-w-[170px] sm:min-w-[200px] md:min-w-[230px]">
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

          {/* Padding element at end of carousel */}
          <div className="flex-none w-12 sm:w-20" />
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
                    window.location.href = 'tel:+966126000000';
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
