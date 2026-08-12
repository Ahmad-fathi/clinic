import React from 'react';
import { HeaderNavbar } from './HeaderNavbar';
import { FooterSection } from './FooterSection';
import { Phone, MapPin, Mail } from 'lucide-react';
import heroInterior from '../assets/images/optimized/pexels-thien-nhan-2155814122-36894415.webp';
import p1 from '../assets/images/optimized/1.webp';
import p2 from '../assets/images/optimized/2.webp';
import p3 from '../assets/images/optimized/3.webp';
import p4 from '../assets/images/optimized/pexels-ivan-s-4989148.webp';
import p5 from '../assets/images/optimized/pexels-anntarazevich-7904416.webp';
import p6 from '../assets/images/optimized/pexels-pavel-danilyuk-6812436.webp';
import p7 from '../assets/images/optimized/pexels-cedric-fauntleroy-4270371.webp';
import p8 from '../assets/images/optimized/pexels-gustavo-fring-5888160.webp';
import p9 from '../assets/images/optimized/pexels-karola-g-6627919.webp';



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


const PHONE_HREF = 'tel:+966****0000';

interface TeamMember {
  name: string;
  role: string;
  img?: string;
  slug: string;
  objPos?: string;
}


const TEAM: TeamMember[] = [
  { name: 'Dr. Mohammed Qashmar', role: 'Consultant Dermatologist', img: p1, slug: 'mohammed-qashmar' },
  { name: 'Dr. Mohammed Dahak', role: 'Aesthetic Physician', img: p2, slug: 'mohammed-dahak' },
  { name: 'Dr. Khalid Musa', role: 'Senior Dermatologist', img: p3, slug: 'khalid-musa' },
  { name: 'Dr. Yasmin Haddad', role: 'Specialist Plastic Surgeon', img: p4, slug: 'yasmin-haddad' },
  { name: 'Dr. Layla Mansour', role: 'Reconstructive & Aesthetic Surgeon', img: p5, slug: 'layla-mansour' },
  { name: 'Dr. Omar Farouk', role: 'General Practitioner', img: p6, slug: 'omar-farouk' },
  { name: 'Dr. Tariq Nasser', role: 'Specialist Plastic Surgeon', img: p7, slug: 'tariq-nasser' },
  { name: 'Dr. Salma Aziz', role: 'Physician — General Practice', img: p8, slug: 'salma-aziz' },
  { name: 'Dr. Rafik Haddad', role: 'Hair Restoration & Aesthetic Physician', img: p9, slug: 'rafik-haddad', objPos: 'center' }

];

export const OurTeamPage: React.FC<{ setActiveNav: (nav: string) => void; onSelectMember?: (slug: string) => void }> = ({ setActiveNav, onSelectMember }) => {
  const pageRef = React.useRef<HTMLDivElement>(null);
  useRevealContainer(pageRef);

  return (
    <div ref={pageRef} className="font-body relative w-full bg-white text-[#3A3A3A]">

      {/* ═══ SECTION 1: HERO (identical treatment to About) ═══ */}
      <section className="relative w-full overflow-hidden">
        {/* Header overlays the hero */}
        <div className="absolute inset-x-0 top-0 z-30">
          <HeaderNavbar activeNav="team" setActiveNav={setActiveNav} />
        </div>

        {/* Full-bleed background — clinic interior */}
        <img
          src={heroInterior}
          alt="Cosmoderm Clinic reception"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        {/* Flat warm-brown tint across the whole image, exactly as the reference */}
        <div className="absolute inset-0 bg-[rgba(44,23,15,0.5)]" />

        {/* Hero box: 440px on desktop, scaled down on smaller screens.
            Text sits just below centre and stays left-aligned. */}
        <div className="relative z-10 h-[320px] w-full sm:h-[380px] md:h-[440px]">
          <div className="absolute left-[6%] top-[47.6%] w-[86%] sm:left-[5.26%] sm:w-[500px]">
            <h1 className="font-avenir text-[30px] font-medium leading-[1.15] text-white sm:text-[39px]">
              Our Team
            </h1>
            <p className="font-avenir mt-0 max-w-[500px] text-[15px] font-extralight leading-[22px] text-white sm:text-[16px]">
              Meet the doctors and specialists behind your care
            </p>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 2: TEAM GRID (main content) ═══ */}
      <section className="w-full bg-white">
        <div className="mx-auto max-w-[960px] px-5 sm:px-8">
        {/* TOP MARGIN: matches About page section rhythm (mt-10) */}
        <div className="mt-10 sm:mt-12 md:mt-16">
          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-8">

              {TEAM.map((member) => (
                <button
                  key={member.name}
                  type="button"
                  onClick={() => onSelectMember && onSelectMember(member.slug)}
                  className="reveal group flex flex-col text-left cursor-pointer bg-transparent border-0 p-0 transition-opacity duration-300 hover:opacity-90"
                  aria-label={`View profile of ${member.name}`}
                >
                  {/* Photo: shorter 4:3.2 crop, 8px rounded corners, object-cover, top-aligned */}
                  <div className="aspect-[5/4] w-full overflow-hidden rounded-[8px]">
                    <img
                      src={member.img}
                      alt={member.name}
                      className={`h-full w-full object-cover ${member.objPos ? `object-${member.objPos}` : 'object-top'}`}
                    />
                  </div>
                  <h3 className="font-mulish mt-5 text-center text-[16px] font-medium leading-[1.2] text-[#24342c] underline-offset-4 group-hover:underline sm:text-[18px]">
                    {member.name}
                  </h3>
                  <p className="font-mulish-light mt-1 text-center text-[13px] font-light leading-[1.4] text-[#8a8f8a] sm:text-[14px]">
                    {member.role}
                  </p>
                </button>
              ))}

            </div>
          </div>

          {/* bottom spacing to match section rhythm */}
          <div className="h-16 sm:h-20 md:h-24" />
        </div>
      </section>

      {/* ═══ MAP LOCATION SECTION (imported from About page style) ═══ */}
      <section className="w-full bg-white py-2 border-t border-stone-200/60">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-sm">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-6">
              <div className="space-y-1">
                <h3 className="text-lg font-medium text-[#24342c] font-avenir">Cosmoderm Clinics — Jeddah</h3>
                <p className="text-xs text-stone-600 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#24342c]" />
                  Villa 57, Al Thanya Road, Al Shati District, Jeddah, Saudi Arabia
                </p>
              </div>

              <div className="flex items-center gap-4 text-xs">
                <a href="tel:+966****6789" className="flex items-center gap-1.5 text-[#24342c] hover:underline">
                  <Phone className="w-3.5 h-3.5" />
                  +966 12 345 6789
                </a>
                <a href="mailto:info@cosmoderm.sa" className="flex items-center gap-1.5 text-[#24342c] hover:underline">
                  <Mail className="w-3.5 h-3.5" />
                  info@cosmoderm.sa
                </a>
              </div>
            </div>

            {/* Map Graphic Container */}
            <div className="w-full h-64 sm:h-80 rounded-xl overflow-hidden relative border border-stone-200 bg-stone-100">
              <iframe
                title="Cosmoderm Clinic Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3710.2311222488816!2d39.1252!3d21.5781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDM0JzQxLjIiTiAzOcKwMDcnMzAuNyJF!5e0!3m2!1sen!2ssa!4v1650000000000!5m2!1sen!2ssa"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'contrast(1.05) saturate(0.9)' }}
                allowFullScreen={false}
                loading="lazy"
              />
              <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-lg text-[11px] font-medium text-[#24342c] shadow">
                📍 Cosmoderm Clinics Jeddah
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Floating CTAs (same as About page view) ═══ */}
      <a
        href={PHONE_HREF}
        className="fixed bottom-6 left-6 z-50 inline-flex items-center gap-2 rounded-full bg-[#24342c] px-5 py-3 text-white shadow-lg transition-colors duration-300 hover:bg-[#1a2620] active:scale-95"
      >
        <Phone className="h-4 w-4 fill-white stroke-[2]" />
        <span className="font-avenir text-xs tracking-[0.15em] uppercase">Call Us</span>
      </a>

      <a
        href="https://wa.me/966120000000"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#25D366] shadow-lg transition-transform duration-300 hover:scale-105 active:scale-95"
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6 fill-white" aria-hidden="true">
          <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 018.413 3.488 11.82 11.82 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.264l-.999 3.648 3.978-1.043zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
      </a>

      {/* ═══ Footer Section (imported from home page) ═══ */}
      <FooterSection
        onNavigate={setActiveNav}
        onOpenConsultation={() => window.location.href = 'tel:+966****0000'}
      />

    </div>
  );
};
