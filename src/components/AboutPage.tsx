import React from 'react';
import { HeaderNavbar } from './HeaderNavbar';
import { FooterSection } from './FooterSection';
import { Phone, MapPin, Mail } from 'lucide-react';
import heroInterior from '../assets/images/optimized/pexels-thien-nhan-2155814122-36894415.webp';
import clinicLounge from '../assets/images/optimized/pexels-cristian-rojas-8459996.webp';
import teamGroup from '../assets/images/optimized/team-group-cristian-rojas.webp';

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

/* ------------------------------------------------------------------
   ABOUT PAGE — HERO (section 1) + INTRO (section 2).

   Section 2 is built to match biolitedubai.com/about reference:
     • White intro block, max-width 1200px, centred.
     • 2-column split: heading LEFT (~38%) / body RIGHT (~62%).
     • Full-width clinic-interior image below, rounded 24px corners.
     • Floating "Call Us" (bottom-left) + WhatsApp (bottom-right),
       shown only on the About page view.

   Heading uses serif (reference) — swap to font-avenir to match the
   home page like the hero. Body stays Avenir (home page font).

   IMAGE SLOTS ARE LEFT EMPTY ON PURPOSE — insert manually:
     Section 1 hero:  drop an <img> as the first child of the hero
                      <section>, before the overlay div.
     Section 2 photo: replace the placeholder <div> inside the rounded
                      container with
                        <img src={clinicInterior}
                             alt="Cosmoderm Clinic lounge"
                             className="h-full w-full object-cover" />
|------------------------------------------------------------------- */

const PHONE_HREF = 'tel:+966****0000';

export const AboutPage: React.FC<{ setActiveNav: (nav: string) => void }> = ({ setActiveNav }) => {
  const pageRef = React.useRef<HTMLDivElement>(null);
  useRevealContainer(pageRef);

  return (
    <div ref={pageRef} className="font-body relative w-full bg-white text-[#3A3A3A]">

      {/* ═══ SECTION 1: ABOUT HERO ═══ */}
      <section className="relative w-full overflow-hidden">
        {/* Header overlays the hero */}
        <div className="absolute inset-x-0 top-0 z-30">
          <HeaderNavbar activeNav="about" setActiveNav={setActiveNav} />
        </div>

        {/* Full-bleed background — clinic interior (manual insert) */}
        <img
          src={heroInterior}
          alt="Cosmoderm Clinic reception"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        {/* Flat warm-brown tint across the whole image, exactly as the
            reference does it (not a directional fade). */}
        <div className="absolute inset-0 bg-[rgba(44,23,15,0.5)]" />

        {/* Hero box: 440px on desktop, scaled down on smaller screens.
            Text sits just below centre and stays left-aligned. */}
        <div className="relative z-10 h-[320px] w-full sm:h-[380px] md:h-[440px]">
          <div className="absolute left-[6%] top-[47.6%] w-[86%] sm:left-[5.26%] sm:w-[500px]">
            <h1 className="font-avenir text-[30px] font-medium leading-[1.15] text-white sm:text-[39px]">
              About
            </h1>
            <p className="font-avenir mt-0 max-w-[500px] text-[15px] font-extralight leading-[22px] text-white sm:text-[16px]">
              Where personalised care meets advanced aesthetic
              <br className="hidden sm:inline" /> and wellness solutions to help
              you look and feel your best.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 2: INTRO (heading + body + clinic image) ═══ */}
      <section className="w-full bg-white">
        <div className="mx-auto max-w-[960px] px-5 py-2 sm:px-8 sm:py-4 md:py-6">
          {/* TOP MARGIN: 40px = mt-10 */}
          <div className="mt-10">
            {/* Text row — title left, body right (aligned with container below) */}
            <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
              <h2 className="reveal font-serif-display text-[22px] font-extralight leading-[1.1] text-[#5a6b5c] sm:text-[26px] md:text-[30px]">
                Cosmoderm Clinics
              </h2>
              <div className="font-mulish-light text-[15px] font-light leading-[1.8] text-[#4a5a52] sm:text-[16px] md:max-w-[520px]">
                <p className="mb-5">
                  Cosmoderm is not a clinic you pass through. It is a place designed around you.
                </p>
                <p>
                  Founded on the belief that advanced dermatology should feel personal, Cosmoderm Clinics is one of the region's leading medical aesthetics and dermatology destinations. A boutique, licensed space in Jeddah where advanced medicine meets genuine hospitality, and where every journey begins with one question: what does your skin actually need?
                </p>
              </div>
            </div>
          </div>
          {/* FULL-WIDTH CLINIC IMAGE - simple overlay, no gradient */}
          <div className="mt-12 w-full sm:mt-16">
            <div className="relative overflow-hidden rounded-[8px]">
              <img
                src={clinicLounge}
                alt="Cosmoderm Clinic lounge"
                className="h-[240px] w-full object-cover sm:h-[320px] md:h-[360px]"
              />
              <div className="absolute inset-0 bg-black/30" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 3: STORY + APPROACH (two side-by-side columns) ═══ */}
      <section className="w-full bg-white">
        <div className="mx-auto max-w-[960px] px-5 pt-2 pb-2 sm:px-8 sm:pt-4 sm:pb-4 md:pt-6 md:pb-6">

          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">

            {/* Our Story */}
            <div>
              <h2 className="reveal font-serif-display text-[22px] font-extralight leading-[1.1] text-[#5a6b5c] sm:text-[26px] md:text-[30px]">
                Our Story
              </h2>
              <div className="font-mulish-light mt-6 text-[15px] font-light leading-[1.8] text-[#4a5a52] sm:text-[16px]">
                <p className="mb-5">
                  Cosmoderm began with a simple conviction: that exceptional dermatology should never feel clinical or impersonal. Our founding physician was among the first licensed laser and IPL practitioners in the region, opening a boutique practice built around precision, discretion, and genuine care.
                </p>
                <p>
                  What started as a focused skin clinic evolved into a destination for beauty, health, and longevity. We believe how you look is inseparable from how you live, recover, and age — so we treat the person, not just the concern. Cosmoderm was among the first clinics in the region to offer advanced regenerative protocols, and our focus has always remained on the individual rather than the technology.
                </p>
              </div>
            </div>

            {/* The Cosmoderm Approach */}
            <div>
              <h2 className="reveal font-serif-display text-[22px] font-extralight leading-[1.1] text-[#5a6b5c] sm:text-[26px] md:text-[30px]">
                The Cosmoderm Approach
              </h2>
              <div className="font-mulish-light mt-6 text-[15px] font-light leading-[1.8] text-[#4a5a52] sm:text-[16px]">
                <p className="mb-5">
                  Our approach is holistic, regenerative, and entirely individual. A multidisciplinary team cares for your face, skin, hair, and overall health — so every plan is built around you, not a template.
                </p>
                <p className="mb-5">
                  We offer aesthetic medicine, surgery by accredited specialists, advanced hair restoration, and signature facials — alongside precision longevity medicine including stem cell therapies, therapeutic plasma filtration, medical ozone, and advanced diagnostics.
                </p>
                <p>
                  This is precision without overwhelm. Results that are visible, measurable, and built to last.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══ SECTION 4: THE TEAM (text left + team photo right) ═══ */}
      <section className="w-full bg-[#DCD9C6]">
        <div className="mx-auto max-w-[960px] px-5 py-2 sm:px-8 md:py-6">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-20">

            {/* Left column: heading + body + outlined pill button */}
            <div>
              <h2 className="reveal font-serif-display text-[32px] font-extralight leading-[1.1] text-[#24241f] sm:text-[34px] md:text-[36px]">
                The Cosmoderm Team
              </h2>
              <div className="font-mulish-light mt-7 text-[15px] font-light leading-[1.6] text-[#4a4a44] sm:text-[16px]">
                <p>
                  At Cosmoderm Clinics, our team is built on expertise, care and results. Every doctor, therapist and specialist brings years of international experience and a commitment to personalised treatment. We blend advanced techniques with thoughtful consultation to ensure every patient feels confident, informed and supported through their aesthetic journey. Together, we strive to deliver outcomes that look natural and make you feel your best.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setActiveNav('team')}
                className="font-avenir mt-8 inline-flex items-center rounded-full border border-[#24241f] px-8 py-3 text-xs tracking-[0.15em] uppercase text-[#24241f] transition-colors duration-300 hover:bg-[#24241f] hover:text-[#DCD9C6]"
              >
                Our Team
              </button>
            </div>

            {/* Right column: team photo, rounded 8px */}
            <div className="overflow-hidden rounded-[8px]">
              <img
                src={teamGroup}
                alt="The Cosmoderm team"
                className="aspect-[4/3] w-full object-cover object-center"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ═══ MAP LOCATION SECTION (imported from home page style) ═══ */}
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

      {/* ═══ Floating CTAs (About page view only) ═══ */}
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