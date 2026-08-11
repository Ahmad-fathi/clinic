import React, { useRef, useEffect } from 'react';
import { CosmodermLogo } from './CosmodermLogo';

interface FooterSectionProps {
  onNavigate?: (page: string) => void;
  onOpenConsultation?: () => void;
}

export const FooterSection: React.FC<FooterSectionProps> = ({ onNavigate, onOpenConsultation }) => {
  const footerRef = useRef<HTMLElement>(null);

  // Animate footer in when it enters viewport
  useEffect(() => {
    const el = footerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('in-view');
          observer.unobserve(el);
        }
      },
      { threshold: 0.05, rootMargin: '0px 0px -30px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="reveal w-full bg-[#18261f] text-[#eee9df] pt-16 pb-8 font-avenir border-t border-[#24342c]"
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10">

        {/* ── MOBILE LOGO ── top-left, current position (desktop/tablet use the centered logo in the grid below) ──── */}
        <div className="md:hidden flex justify-start pb-10">
          <CosmodermLogo size="md" variant="light" />
        </div>

        {/* ── Main Row: 3-col grid (left zone / centered logo / right zone) ── */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-10 md:gap-16 lg:gap-24 pb-16 items-start">

          {/* ── LEFT ZONE ─────────────────────────────────────────────── */}
          <div className="flex flex-col sm:flex-row items-start gap-10 sm:gap-14">

            {/* Clinic Info & Accreditation */}
            <div className="space-y-4 min-w-[160px]">
              <h4 className="text-sm font-light tracking-[0.18em] uppercase text-stone-100">
                COSMODERM CLINIC
              </h4>

              <div className="text-xs font-extralight text-[#d4cebd] leading-relaxed space-y-1">
                <p>Prince Sultan St, Al Shati</p>
                <p>Jeddah 23514</p>
                <p>Kingdom of Saudi Arabia</p>
              </div>

              <div className="text-xs font-extralight text-[#d4cebd] space-y-1">
                <p>+966 12 600 0000</p>
                <p>care@cosmodermclinics.com</p>
              </div>

              {/* Accreditation Seals */}
              <div className="flex items-center gap-3 pt-2">
                {/* Medical Association Seal */}
                <div
                  className="w-11 h-11 rounded-full border border-[#8ea899]/40 bg-[#121d17] p-1 flex items-center justify-center shadow-md hover:border-[#8ea899] transition-colors"
                  title="Medical Association Accredited"
                >
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <circle cx="50" cy="50" r="46" fill="none" stroke="#8ea899" strokeWidth="2.5" />
                    <circle cx="50" cy="50" r="40" fill="none" stroke="#8ea899" strokeWidth="1" strokeDasharray="2 2" />
                    <path d="M50 20 L50 80 M44 32 Q56 36 50 44 Q44 52 56 58 Q44 66 50 72 M43 23 L57 23" fill="none" stroke="#8ea899" strokeWidth="2.5" strokeLinecap="round" />
                    <circle cx="50" cy="20" r="3" fill="#8ea899" />
                    <text x="50" y="93" textAnchor="middle" fill="#8ea899" fontSize="9" fontWeight="bold" letterSpacing="1">ACCREDITED</text>
                  </svg>
                </div>

                {/* Licensed Healthcare Seal */}
                <div
                  className="w-11 h-11 rounded-full border border-[#c4b595]/50 bg-[#121d17] p-1 flex items-center justify-center shadow-md hover:border-[#c4b595] transition-colors"
                  title="Licensed Healthcare Practice"
                >
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <circle cx="50" cy="50" r="46" fill="none" stroke="#c4b595" strokeWidth="2.5" />
                    <circle cx="50" cy="50" r="39" fill="none" stroke="#c4b595" strokeWidth="1" />
                    <path d="M50 22 L50 72 M30 72 L70 72 M50 30 L25 42 M50 30 L75 42 M25 42 L18 58 Q25 64 32 58 Z M75 42 L68 58 Q75 64 82 58 Z" fill="none" stroke="#c4b595" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
                    <polygon points="50,18 45,26 55,26" fill="#c4b595" />
                  </svg>
                </div>
              </div>
            </div>

            {/* ── FOLLOW US ON ── */}
            <div className="space-y-4">
              <h4 className="text-xs font-light tracking-[0.18em] uppercase text-stone-100">
                FOLLOW US ON
              </h4>

              <div className="flex items-center gap-3">
                {/* Facebook */}
                <a href="#facebook" aria-label="Facebook"
                  className="w-8 h-8 rounded-full border border-stone-400/50 flex items-center justify-center text-stone-200 hover:text-white hover:border-white hover:bg-white/10 transition-all">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>

                {/* X / Twitter */}
                <a href="#x" aria-label="X Twitter"
                  className="w-8 h-8 rounded-full border border-stone-400/50 flex items-center justify-center text-stone-200 hover:text-white hover:border-white hover:bg-white/10 transition-all">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a href="#instagram" aria-label="Instagram"
                  className="w-8 h-8 rounded-full border border-stone-400/50 flex items-center justify-center text-stone-200 hover:text-white hover:border-white hover:bg-white/10 transition-all">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-4.919.07-3.584.012-4.85-.07-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.849 0-3.205.012-3.584-.069-4.849-.148-3.225-1.664-4.771-4.919-4.919-1.266-.058-1.644-.07-4.85-.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>

          </div>

          {/* ── CENTER LOGO ── middle grid column, centered between the two zones (desktop/tablet) ── */}
          <div className="hidden md:flex items-start justify-center pt-1">
            <CosmodermLogo size="lg" variant="light" />
          </div>

          {/* ── RIGHT ZONE ────────────────────────────────────────────── */}
          <div className="flex flex-col sm:flex-row items-start justify-start gap-10 sm:gap-14 self-start">

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-xs font-light tracking-[0.18em] uppercase text-stone-100">
                QUICK LINKS
              </h4>
              <ul className="space-y-2.5 text-xs font-extralight text-[#d4cebd]">
                <li>
                  <button onClick={() => onNavigate && onNavigate('home')}
                    className="hover:text-white transition-colors cursor-pointer text-left">
                    About Us
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate && onNavigate('home')}
                    className="hover:text-white transition-colors cursor-pointer text-left">
                    Our Team
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate && onNavigate('home')}
                    className="hover:text-white transition-colors cursor-pointer text-left">
                    Before &amp; After
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate && onNavigate('home')}
                    className="hover:text-white transition-colors cursor-pointer text-left">
                    Blog
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onOpenConsultation ? onOpenConsultation() : (onNavigate && onNavigate('home'))}
                    className="hover:text-white transition-colors cursor-pointer text-left">
                    Contact Us
                  </button>
                </li>
              </ul>
            </div>

            {/* Patient Resources */}
            <div className="space-y-4">
              <h4 className="text-xs font-light tracking-[0.18em] uppercase text-stone-100">
                PATIENT RESOURCES
              </h4>
              <ul className="space-y-2.5 text-xs font-extralight text-[#d4cebd]">
                <li>
                  <button onClick={() => onOpenConsultation && onOpenConsultation()}
                    className="hover:text-white transition-colors cursor-pointer text-left">
                    Concierge Services
                  </button>
                </li>
                <li>
                  <button onClick={() => onOpenConsultation && onOpenConsultation()}
                    className="hover:text-white transition-colors cursor-pointer text-left">
                    Clinic Policy
                  </button>
                </li>
              </ul>

              <div className="pt-4 text-[11px] font-extralight text-[#9ea8a0] leading-tight">
                MOH Advertising License No:<br />HWU9POTW-270825
              </div>
            </div>
          </div>

        </div>
        {/* ── End Main Row ─────────────────────────────────────────────── */}

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-[#2a3d32] flex flex-col sm:flex-row items-center justify-between text-xs font-extralight text-[#a0aa9f] gap-4">
          <div>
            © {new Date().getFullYear()} Cosmoderm Clinics. All Rights Reserved.
          </div>

          <div className="flex gap-4">
            <span className="hover:text-stone-200 transition-colors cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-stone-200 transition-colors cursor-pointer">Terms of Use</span>
          </div>
        </div>

      </div>
    </footer>
  );
};