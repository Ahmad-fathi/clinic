import React, { useState } from 'react';
import { 
  Check, 
  Plus, 
  Minus, 
  CheckCircle2, 
  Phone, 
  MapPin, 
  Clock, 
  Mail, 
  ShieldCheck, 
  ArrowLeft,
  ChevronDown,
  Menu
} from 'lucide-react';
import { HeaderNavbar } from './HeaderNavbar';
import { CosmodermLogo } from './CosmodermLogo';
import { FooterSection } from './FooterSection';

import heroBotoxImg from '../assets/images/optimized/pexels-hannah-barata-776560167-27925593.webp';
import fullFaceImg from '../assets/images/optimized/pexels-sum-sum-2159674381-38796266.webp';
import doctorCareImg from '../assets/images/optimized/pexels-cottonbro-7581590.webp';

interface BotoxServicePageProps {
  onBackToHome: () => void;
  setActiveNav: (nav: string) => void;
}

export const BotoxServicePage: React.FC<BotoxServicePageProps> = ({ onBackToHome, setActiveNav }) => {
  const [openLocationAccordion, setOpenLocationAccordion] = useState<number | null>(0); // 0 open by default
  const [openFaqAccordion, setOpenFaqAccordion] = useState<number | null>(0); // 0 open by default

  // Form State
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: 'Botox Treatment',
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  // Treatment locations accordion items
  const treatmentLocations = [
    {
      id: 0,
      title: 'Upper Face & Eye Rejuvenation',
      content: [
        'Glabellar Lines (Frown): The wrinkles that form between the eyebrows, which resemble the number "11", are known as Glabellar lines (Frown). Botox eyebrow lift gently elevates the brows by relaxing specific forehead muscles, creating a more youthful and refreshed appearance.',
        'Brow Lift: Using precise injection sites and dose-appropriate therapy, this unique method improves hooded eyes and softly raises the eyebrow.',
        'Forehead Wrinkles: Smooths horizontal worry lines across the upper forehead without freezing natural facial expressions.'
      ]
    },
    {
      id: 1,
      title: 'Eye Area',
      content: ['Crow’s Feet: Softens laughter lines around the outer corners of the eyes for a brighter, well-rested look.']
    },
    {
      id: 2,
      title: 'Nose Area',
      content: ['Bunny Lines: Minimizes small diagonal wrinkles that form on the sides of the bridge of the nose when smiling or scrunching.']
    },
    {
      id: 3,
      title: 'Mouth & Lip Area',
      content: ['Lip Flip & Marionette Lines: Relaxes upper lip muscles for a fuller lip appearance without fillers and reduces downward mouth corner pull.']
    },
    {
      id: 4,
      title: 'Chin & Jawline',
      content: ['Masseter Slimming & Dimpled Chin: Relaxes jaw muscles for a slimmer lower face contour and smooths pebbled chin texture.']
    },
    {
      id: 5,
      title: 'Head & Neck',
      content: ['Nefertiti Lift & Migraine Relief: Smooths neck bands, defines the jawline, and provides clinical relief for chronic tension headaches.']
    },
    {
      id: 6,
      title: 'Underarm & Hand Area',
      content: ['Hyperhidrosis Control: FDA-cleared treatment to dramatically block sweat gland activity in underarms and palms for 6–9 months.']
    },
    {
      id: 7,
      title: 'Legs',
      content: ['Calf Contouring: Gently relaxes overdeveloped calf muscles for a smoother, more elegant leg silhouette.']
    }
  ];

  // FAQ Items
  const faqItems = [
    {
      q: 'How does Botox for migraines work?',
      a: 'Botox for migraines works by injecting it into the migraine treatment region to reduce its symptoms. Botox for migraines offers relief by blocking pain signals and relaxing muscles to prevent migraine attacks. The Food and Drug Administration (FDA) in the United States has authorized Botox injections for the treatment of persistent migraines.'
    },
    {
      q: 'Does Botox hurt?',
      a: 'Botox injections use ultra-fine needles. Most patients describe the sensation as a minor, momentary pinch. Topically applied numbing cream is available prior to treatment for maximum comfort.'
    },
    {
      q: 'Can you get Botox while pregnant?',
      a: 'As a safety precaution, Botox treatments are not recommended during pregnancy or while breastfeeding.'
    },
    {
      q: 'Can you get Botox while breastfeeding?',
      a: 'It is recommended to postpone cosmetic injectable treatments until after you have finished breastfeeding.'
    },
    {
      q: 'Are there other types of botulinum toxins?',
      a: 'Yes, other FDA-approved formulations include Dysport and Xeomin. Our specialist doctors will guide you on the ideal option for your specific goals.'
    },
    {
      q: 'What should I know about Dysport vs. Botox?',
      a: 'Dysport tends to spread slightly more, making it ideal for larger areas like the forehead, while Botox offers targeted precision for finer lines.'
    },
    {
      q: 'How many Botox sessions are required?',
      a: 'A single session yields visible results within 3 to 7 days, lasting approximately 3 to 6 months before a maintenance session is scheduled.'
    },
    {
      q: 'When can I see the Botox results?',
      a: 'Initial smoothing begins within 48 to 72 hours, with full peak refinement appearing at day 10 to 14 post-procedure.'
    },
    {
      q: 'Is there any social downtime required for Botox?',
      a: 'There is zero required downtime. You can return to work and daily activities immediately following your appointment.'
    },
    {
      q: 'What cosmetic conditions can be treated with Botox?',
      a: 'Botox effectively treats forehead lines, frown lines, crow’s feet, neck bands, jaw slimming, gummy smiles, and excessive sweating.'
    }
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-[#eee9df] via-[#e2ddd2] to-[#eae5da] text-[#24342c] font-avenir selection:bg-[#24342c] selection:text-white pb-16">
      
      {/* Hero Section with Standard Homepage HeaderNavbar */}
      <section className="relative w-full h-[460px] sm:h-[540px] md:h-[600px] overflow-hidden bg-stone-950 flex flex-col justify-between">
        
        {/* Hero Background Image */}
        <img 
          src={heroBotoxImg} 
          alt="Botox Treatment at Cosmoderm" 
          className="absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.82] contrast-[1.02]"
        />

        {/* Gradient overlays for legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/70" />

        {/* Overlaid Standard Header Navigation from Homepage */}
        <div className="relative z-30 w-full">
          <HeaderNavbar 
            activeNav="treatments" 
            setActiveNav={(nav) => {
              if (nav === 'about') {
                setActiveNav(nav);
              } else if (nav === 'home') {
                onBackToHome();
              } else {
                setActiveNav(nav);
                onBackToHome();
              }
            }} 
          />
        </div>

        {/* Hero Content Overlay (Bottom Left) */}
        <div className="relative z-20 pb-10 sm:pb-16 px-6 sm:px-14 md:px-20 max-w-xl text-white">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extralight font-avenir tracking-tight leading-tight mb-3 drop-shadow-lg text-white">
            Botox
          </h1>
          <p className="text-sm sm:text-base md:text-lg font-light leading-relaxed text-stone-100 drop-shadow-md font-avenir">
            Smooth wrinkles. Relax lines.<br />
            Reveal a fresher, younger-looking you with Botox.
          </p>
        </div>

      </section>

      {/* Section 1: What is Botox treatment ? */}
      <section className="w-full max-w-[1300px] mx-auto px-6 py-12 sm:py-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extralight text-[#24342c] text-center font-avenir tracking-tight mb-8 sm:mb-12">
          What is Botox treatment ?
        </h2>

        {/* 2-Column Text Explanation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 text-sm sm:text-base leading-relaxed text-stone-800 font-light mb-10">
          <div className="space-y-4">
            <p>
              Botox treatment is becoming common in Dubai & Jeddah. Botox injections are an aesthetic procedure used to lessen facial wrinkles and small lines brought on by repetitive muscle movements, including frowning, smiling, and furrowing the brows. Preventive measures are the best approach. Botox prevents wrinkles and deep lines from appearing on your face sooner.
            </p>
            <p>
              Best Botox treatment at Cosmoderm Clinics provides an effective non-surgical cosmetic solution for addressing wrinkles and fine lines. As a popular injectable containing small doses of purified botulinum toxin, it temporarily relaxes the muscles that create wrinkles, crow’s feet, and forehead lines when injected into targeted locations. Non-surgical Botox treatment aids in making your skin look smoother and younger.
            </p>
          </div>
          <div className="space-y-4">
            <p>
              By relaxing the muscles that generate wrinkles, Botox® injections enhance attractiveness. Botox meaning reflects that these injections are used to treat eye issues, migraines, hyperhidrosis, and overactive bladder. Botox for wrinkle reduction should be repeated every three to six months to sustain optimum results.
            </p>
            <p>
              Botox® is one of the most well-known brands of injections of botulinum toxin. Botulinum toxins, a type of neurotoxin, weaken muscles by blocking nerve signals to them. For medical or cosmetic purposes, small doses of botulinum toxin are injected into particular muscles by medical professionals to treat various ailments, including wrinkles and migraines.
            </p>
          </div>
        </div>

        {/* Wide Treatment Image Banner */}
        {/* ↕ Change h-[420px] to adjust visible height of the container */}
        {/* ↔ Change object-[50%_25%] to scroll the crop: 0% = top, 50% = center, 100% = bottom */}
        <div className="w-full h-[260px] sm:h-[360px] md:h-[420px] rounded-3xl overflow-hidden shadow-lg border border-[#d8d2c4]">
          <img
            src={fullFaceImg}
            alt="Botox Procedure Patient Care"
            className="w-full h-full object-cover object-[50%_30%]"
          />
        </div>
      </section>

      {/* Section 2: What are the benefits of Botox Treatments? */}
      <section className="w-full bg-[#eae4d8]/80 py-12 sm:py-16 my-8 border-y border-[#d8d2c4]">
        <div className="max-w-[1300px] mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          
          {/* Left Title */}
          <div className="md:col-span-7">
            <h2 className="text-3xl sm:text-4xl md:text-[42px] font-extralight text-[#24342c] leading-tight font-avenir tracking-tight">
              What are the benefits of<br className="hidden sm:inline" /> Botox Treatments?
            </h2>
          </div>

          {/* Right Benefits List */}
          <div className="md:col-span-5 space-y-3.5 text-sm sm:text-base text-stone-800 font-light">
            {[
              'Botox treatment is not a surgical procedure.',
              'Cosmetic Botox produces fast and tangible outcomes.',
              'A tried-and-true remedy for common aging symptoms.',
              'No downtime is necessary.',
              'Only ten minutes are needed for the therapy.',
              'Provided with little discomfort.'
            ].map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full border border-[#24342c] text-[#24342c] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                <span>{benefit}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Section 3: Botox Care at Cosmoderm */}
      <section className="w-full max-w-[1300px] mx-auto px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          
          <div className="md:col-span-7 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extralight text-[#24342c] font-avenir tracking-tight">
              Botox Care at Cosmoderm
            </h2>
            <p className="text-sm sm:text-base text-stone-800 leading-relaxed font-light">
              Botox care at Cosmoderm Clinics is our main aim. Your appearance might have an impact on your emotions. Near me at Cosmoderm Clinic, professionals can guide you through the realm of cosmetic injectables if you’re concerned about wrinkles and lines. Botox for forehead wrinkles helps smooth fine lines and deep creases, giving you a refreshed and youthful appearance.
            </p>
          </div>

          <div className="md:col-span-5">
            <div className="w-full h-[260px] sm:h-[320px] rounded-3xl overflow-hidden shadow-lg border border-[#d8d2c4]">
              <img 
                src={doctorCareImg} 
                alt="Botox Care Consultation" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Section 4: Botox full face */}
      <section className="w-full max-w-[1300px] mx-auto px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          
          <div className="md:col-span-5 order-2 md:order-1">
            <div className="w-full h-[260px] sm:h-[320px] rounded-3xl overflow-hidden shadow-lg border border-[#d8d2c4]">
              <img 
                src={fullFaceImg} 
                alt="Botox Full Face" 
                className="w-full h-full object-cover object-[50%_25%]"
              />
            </div>
          </div>

          <div className="md:col-span-7 order-1 md:order-2 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extralight text-[#24342c] font-avenir tracking-tight">
              Botox full face
            </h2>
            <p className="text-sm sm:text-base text-stone-800 leading-relaxed font-light">
              Botox full face is the treatment of three upper facial regions. Crow’s feet, frown lines, and forehead lines are typical locations. Botox treatment for frown lines helps relax the muscles between the eyebrows, reducing the appearance of wrinkles and creating a smoother, youthful look. Full face Botox is a treatment that helps reduce wrinkles and fine lines across the entire face, providing a rejuvenated and refreshed appearance.
            </p>
          </div>

        </div>
      </section>

      {/* Section 5: Typical Botox Treatment Locations (Accordion) */}
      <section className="w-full bg-[#eae4d8]/60 py-12 sm:py-16 border-y border-[#d8d2c4]">
        <div className="max-w-[1300px] mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Left Title */}
          <div className="md:col-span-5">
            <h2 className="text-3xl sm:text-4xl md:text-[42px] font-extralight text-[#24342c] leading-tight font-avenir tracking-tight sticky top-24">
              Typical Botox<br className="hidden sm:inline" /> Treatment Locations
            </h2>
          </div>

          {/* Right Accordion List */}
          <div className="md:col-span-7 divide-y divide-[#c8c2b4]">
            {treatmentLocations.map((item) => {
              const isOpen = openLocationAccordion === item.id;
              return (
                <div key={item.id} className="py-4">
                  <button
                    onClick={() => setOpenLocationAccordion(isOpen ? null : item.id)}
                    className="w-full flex items-center justify-between text-left py-2 focus:outline-none group cursor-pointer"
                  >
                    <span className="text-lg sm:text-xl font-light text-[#24342c] group-hover:opacity-80 transition-opacity">
                      {item.title}
                    </span>
                    <div className="w-7 h-7 rounded-full border border-[#24342c]/40 flex items-center justify-center text-[#24342c] flex-shrink-0 ml-4">
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="pt-3 pb-2 text-sm sm:text-base text-stone-700 font-light space-y-2.5 leading-relaxed animate-fadeIn">
                      {item.content.map((text, idx) => (
                        <p key={idx}>{text}</p>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Section 6: Schedule An Appointment Form Block */}
      <section className="w-full max-w-[1000px] mx-auto px-4 sm:px-6 my-16 sm:my-20">
        <div className="w-full bg-[#24342c] text-white rounded-3xl p-8 sm:p-12 md:p-16 shadow-2xl relative overflow-hidden">

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extralight text-center font-avenir tracking-wide mb-8 sm:mb-10 text-stone-100">
            Schedule An Appointment
          </h2>

          {formSubmitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 bg-white/20 text-white rounded-full flex items-center justify-center mx-auto border border-white/30">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-light tracking-wide text-white">
                Appointment Requested Successfully
              </h3>
              <p className="text-stone-300 text-sm max-w-md mx-auto leading-relaxed">
                Thank you, <span className="font-normal text-white">{formData.fullName}</span>. Our clinic concierge will reach out to you within 24 hours to confirm your Botox appointment.
              </p>
              <button
                onClick={() => {
                  setFormSubmitted(false);
                  setFormData({ fullName: '', email: '', phone: '', service: 'Botox Treatment' });
                }}
                className="mt-4 px-6 py-2.5 bg-white text-[#24342c] font-medium text-xs uppercase tracking-widest rounded-full hover:bg-stone-200 transition-all cursor-pointer"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="max-w-xl mx-auto space-y-6 text-stone-200 font-avenir">
              <div>
                <input
                  type="text"
                  required
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full bg-transparent border-b border-stone-400/60 py-3 text-white placeholder:text-stone-400 text-sm sm:text-base focus:outline-none focus:border-white transition-colors"
                />
              </div>

              <div>
                <input
                  type="email"
                  required
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-transparent border-b border-stone-400/60 py-3 text-white placeholder:text-stone-400 text-sm sm:text-base focus:outline-none focus:border-white transition-colors"
                />
              </div>

              <div>
                <input
                  type="tel"
                  required
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-transparent border-b border-stone-400/60 py-3 text-white placeholder:text-stone-400 text-sm sm:text-base focus:outline-none focus:border-white transition-colors"
                />
              </div>

              <div>
                <input
                  type="text"
                  readOnly
                  value={formData.service}
                  className="w-full bg-transparent border-b border-stone-400/60 py-3 text-white text-sm sm:text-base focus:outline-none cursor-default"
                />
              </div>

              <div className="text-center pt-4">
                <button
                  type="submit"
                  className="px-10 py-3 bg-[#18251f] hover:bg-[#111b16] border border-white/30 text-white text-xs uppercase tracking-[0.2em] font-light rounded-full transition-all duration-300 active:scale-95 cursor-pointer shadow-lg"
                >
                  SUBMIT
                </button>
              </div>
            </form>
          )}

        </div>
      </section>

      {/* Section 7: Frequently Asked Questions */}
      <section className="w-full max-w-[1100px] mx-auto px-6 py-12 sm:py-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extralight text-[#24342c] text-center font-avenir tracking-tight mb-10 sm:mb-14">
          Frequently Asked Questions
        </h2>

        <div className="divide-y divide-[#c8c2b4] border-y border-[#c8c2b4]">
          {faqItems.map((faq, index) => {
            const isOpen = openFaqAccordion === index;
            return (
              <div key={index} className="py-4">
                <button
                  onClick={() => setOpenFaqAccordion(isOpen ? null : index)}
                  className="w-full flex items-center justify-between text-left py-2 focus:outline-none group cursor-pointer"
                >
                  <span className="text-base sm:text-lg md:text-xl font-light text-[#24342c] group-hover:opacity-80 transition-opacity">
                    {faq.q}
                  </span>
                  <div className="w-7 h-7 rounded-full border border-[#24342c]/40 flex items-center justify-center text-[#24342c] flex-shrink-0 ml-4">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="pt-2 pb-3 text-sm sm:text-base text-stone-700 font-light leading-relaxed animate-fadeIn">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Luxury Footer Section */}
      <FooterSection 
        onNavigate={onBackToHome} 
        onOpenConsultation={() => window.location.href = 'tel:+966****0000'} 
      />

    </div>
  );
};
