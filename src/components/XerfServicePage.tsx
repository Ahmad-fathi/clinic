import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Plus, 
  Minus, 
  Zap, 
  Layers, 
  Snowflake, 
  Activity, 
  Sliders, 
  ShieldCheck, 
  UserCheck, 
  Clock, 
  Leaf,
  Sparkles, 
  CheckCircle,
  MapPin,
  Phone,
  Mail
} from 'lucide-react';
import { HeaderNavbar } from './HeaderNavbar';
import { FooterSection } from './FooterSection';

// Images
import xerfHeroImg from '../assets/images/treatment_xerf_1785944840015.jpg';
import xerfMachineImg from '../assets/images/xerf_machine_device_1785956105027.jpg';
import xerfBeforeAfterImg1 from '../assets/images/Gemini_Generated_Image_2cglyk2cglyk2cgl.png';
import xerfBeforeAfterImg2 from '../assets/images/Gemini_Generated_Image_r9c4p9r9c4p9r9c4.png';
import xerfBeforeAfterImg3 from '../assets/images/xerf_ba_case1_1785956479519.jpg';

interface XerfServicePageProps {
  onBackToHome: () => void;
  setActiveNav: (nav: string) => void;
}

export const XerfServicePage: React.FC<XerfServicePageProps> = ({
  onBackToHome,
  setActiveNav
}) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Before / After Carousel Index & Direction
  const [baIndex, setBaIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const beforeAfterCases = [
    { 
      id: 1, 
      colorBefore: '#84796b', 
      colorAfter: '#968a7b', 
      image: xerfBeforeAfterImg1 
    },
    { 
      id: 2, 
      colorBefore: '#3d4248', 
      colorAfter: '#52575e', 
      image: xerfBeforeAfterImg2 
    },
    { 
      id: 3, 
      colorBefore: '#707c85', 
      colorAfter: '#83909a', 
      image: xerfBeforeAfterImg3 
    }
  ];

  const handleNextCase = () => {
    setDirection(1);
    setBaIndex((prev) => (prev === beforeAfterCases.length - 1 ? 0 : prev + 1));
  };

  const handlePrevCase = () => {
    setDirection(-1);
    setBaIndex((prev) => (prev === 0 ? beforeAfterCases.length - 1 : prev - 1));
  };

  const faqs = [
    {
      q: '1. Is XERF painful?',
      a: 'Most patients describe the treatment as a warming sensation accompanied by brief pulses of cooling. The integrated cryogen cooling system ensures maximum comfort throughout the session, making XERF one of the most comfortable radiofrequency skin tightening treatments available.'
    },
    {
      q: '2. How many XERF sessions will I need?',
      a: 'While many patients notice an immediate tightening effect, optimal results typically develop over 2–3 months as new collagen forms. Most custom treatment plans recommend 1 to 3 sessions spaced 4 to 6 weeks apart depending on individual skin laxity and goals.'
    },
    {
      q: '3. Will XERF cause fat loss in my face?',
      a: 'No. XERF features intelligent temperature regulation and targeted RF depths designed specifically to stimulate collagen in the dermal and subdermal layers without affecting subcutaneous facial fat pads.'
    },
    {
      q: '4. How long do XERF results last?',
      a: 'Results typically last 12 to 18 months. Annual maintenance treatments help sustain collagen stimulation and preserve your lifted, youthful contours.'
    },
    {
      q: '5. Who is XERF suitable for?',
      a: 'XERF is suitable for men and women of all skin types and tones who are experiencing mild to moderate skin laxity, loss of jawline definition, or wish to proactively prevent premature skin sagging.'
    },
    {
      q: '6. What happens at a XERF consultation at Cosmoderm Clinics?',
      a: 'During your consultation, our specialist aesthetic team will assess your skin quality, examine facial contours, discuss your aesthetic goals, and design a tailored XERF treatment protocol.'
    },
    {
      q: '7. Is XERF safe?',
      a: 'Yes. XERF is FDA-cleared and CE-marked. It incorporates real-time energy impedance feedback and inter-pulse cryogen cooling to ensure maximum safety and clinical efficacy.'
    },
    {
      q: '8. How much does XERF cost in Jeddah?',
      a: 'Pricing depends on the targeted treatment area (e.g., full face, lower face & neck, delicate eye area, or body zones) and the number of sessions. Contact our clinical concierge for detailed pricing and package options.'
    }
  ];

  return (
    <div className="w-full min-h-screen bg-white text-[#24342c] font-avenir selection:bg-[#24342c] selection:text-white pb-16">
      
      {/* 1. Hero Section with Standard Homepage HeaderNavbar */}
      <section className="relative w-full h-[480px] sm:h-[560px] md:h-[620px] overflow-hidden bg-stone-950 flex flex-col justify-between">
        
        {/* Background Hero Image */}
        <img 
          src={xerfHeroImg} 
          alt="XERF Radiofrequency Treatment at Cosmoderm" 
          className="absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.85] contrast-[1.02]"
        />

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/70 via-stone-950/20 to-stone-950/80 pointer-events-none" />

        {/* Standard Header Navigation */}
        <div className="relative z-30 w-full">
          <HeaderNavbar 
            activeNav="treatments" 
            setActiveNav={(nav) => {
              if (nav === 'home') {
                onBackToHome();
              } else {
                setActiveNav(nav);
                onBackToHome();
              }
            }} 
          />
        </div>

        {/* Hero Content Overlay */}
        <div className="relative z-20 pb-12 sm:pb-16 px-6 sm:px-14 md:px-20 max-w-2xl text-white">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extralight font-avenir tracking-wide leading-tight mb-3 drop-shadow-lg text-white uppercase">
            XERF
          </h1>
          <p className="text-sm sm:text-base md:text-lg font-light leading-relaxed text-stone-200 drop-shadow-md font-avenir max-w-xl">
            Non-surgical radiofrequency skin tightening for defined, lifted, and refreshed skin with zero downtime. Exclusively at Cosmoderm Clinics.
          </p>
        </div>
      </section>

      {/* 2. Introduction Section */}
      <section className="w-full max-w-[1100px] mx-auto px-6 py-16 sm:py-20 text-center">
        <div className="space-y-6 text-stone-800 text-sm sm:text-base md:text-[17px] font-light leading-relaxed max-w-4xl mx-auto">
          <p className="font-normal text-[#1a2821] text-base sm:text-lg">
            Cosmoderm Clinics is proud to be the first clinic in the region to introduce <span className="font-medium">XERF</span>, a next-generation radiofrequency skin tightening treatment by Cynosure Lutronic.
          </p>
          <p className="text-stone-700">
            XERF is designed for patients who want firmer, smoother and more defined skin without surgery, needles or significant downtime. Using advanced multifrequency monopolar RF technology, XERF delivers controlled energy to the shallow, middle and deeper layers of the skin, helping stimulate collagen and elastin where the skin needs support most. This makes it an ideal option for patients looking to improve skin laxity, facial definition, fine lines and overall firmness with a comfortable in-clinic treatment. It is also an ideal treatment for lax skin on the body particularly for upper arms, abdomen, knees and elbows.
          </p>
        </div>

        <div className="mt-8">
          <button
            onClick={() => window.location.href = 'tel:+966126000000'}
            className="px-8 py-3 border border-[#24342c] rounded-full text-xs font-light tracking-[0.2em] text-[#24342c] uppercase hover:bg-[#24342c] hover:text-white transition-all duration-300 shadow-sm cursor-pointer"
          >
            BOOK APPOINTMENT
          </button>
        </div>
      </section>

      {/* 3. SIX REASONS XERF STANDS APART */}
      <section className="w-full bg-white py-16 sm:py-24 px-6 border-y border-stone-200/60">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extralight text-center tracking-[0.15em] text-[#24342c] font-avenir uppercase mb-12 sm:mb-16">
            SIX REASONS XERF STANDS APART
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: <Zap className="w-5 h-5 text-[#24342c]" />,
                title: 'Faster Treatments',
                desc: 'Full-face in just 30–40 min thanks to the large-format treatment tip.'
              },
              {
                icon: <Layers className="w-5 h-5 text-[#24342c]" />,
                title: 'Three Depths',
                desc: 'Shallow, mid, and deep energy delivery for a truly complete result.'
              },
              {
                icon: <Snowflake className="w-5 h-5 text-[#24342c]" />,
                title: 'Integrated Cooling',
                desc: 'Inter-pulse cryogen cooling keeps the surface comfortable throughout.'
              },
              {
                icon: <Activity className="w-5 h-5 text-[#24342c]" />,
                title: 'Real-Time Monitoring',
                desc: 'Live energy and temperature feedback ensures safety every shot.'
              },
              {
                icon: <Sliders className="w-5 h-5 text-[#24342c]" />,
                title: 'Fully Customisable',
                desc: '10 intensity levels tailored to your skin type and anatomy.'
              },
              {
                icon: <ShieldCheck className="w-5 h-5 text-[#24342c]" />,
                title: 'Intelligent Safety',
                desc: 'Auto cut-off prevents overheating protecting fat and tissue.'
              }
            ].map((reason, idx) => (
              <div 
                key={idx}
                className="bg-[#faf9f6] p-6 sm:p-8 rounded-2xl border border-stone-200/80 shadow-sm flex flex-col items-start gap-4 hover:shadow-md transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-[#eee8dc] flex items-center justify-center flex-shrink-0">
                  {reason.icon}
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-normal text-[#24342c] mb-2 font-avenir">
                    {reason.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-light text-stone-600 leading-relaxed font-avenir">
                    {reason.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. BEFORE AND AFTER (Exact layout matching the reference screenshot) */}
      <section className="w-full py-16 sm:py-24 px-4 sm:px-8 max-w-[1100px] mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-[34px] font-extralight tracking-[0.2em] text-[#24342c] font-avenir uppercase mb-10 sm:mb-14">
          BEFORE AND AFTER
        </h2>

        <div className="relative max-w-[820px] mx-auto flex items-center justify-center px-4 sm:px-12">
          
          {/* Left Arrow Button (Simple Chevron) */}
          <button 
            onClick={handlePrevCase}
            className="absolute left-0 sm:left-1 top-1/2 -translate-y-1/2 z-20 p-2 text-[#24342c] hover:opacity-75 transition-opacity active:scale-95 cursor-pointer"
            aria-label="Previous case"
          >
            <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8 stroke-[1.8]" />
          </button>

          {/* Main Animated Rounded Container */}
          <div className="relative w-full overflow-hidden rounded-[26px] sm:rounded-[32px] shadow-lg border border-stone-300/60 bg-[#e8e2d5] aspect-[2/1]">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={baIndex}
                custom={direction}
                initial={{ opacity: 0, x: direction * 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -direction * 40 }}
                transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
                className="absolute inset-0 w-full h-full flex"
              >
                {/* Render image if available, or solid color fallback blocks */}
                {beforeAfterCases[baIndex].image ? (
                  <img 
                    src={beforeAfterCases[baIndex].image} 
                    alt={`XERF Before and After Case ${baIndex + 1}`} 
                    className="w-full h-full object-cover object-center"
                  />
                ) : (
                  <div className="w-full h-full flex">
                    <div 
                      className="w-1/2 h-full border-r border-white/20 transition-colors duration-300"
                      style={{ backgroundColor: beforeAfterCases[baIndex].colorBefore }}
                    />
                    <div 
                      className="w-1/2 h-full transition-colors duration-300"
                      style={{ backgroundColor: beforeAfterCases[baIndex].colorAfter }}
                    />
                  </div>
                )}

                {/* Container Text Overlays - On the lower left of each side */}
                <div className="absolute bottom-4 left-5 sm:bottom-6 sm:left-8 text-white font-avenir text-sm sm:text-base font-light tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.85)] pointer-events-none select-none">
                  Before
                </div>
                <div className="absolute bottom-4 left-[52%] sm:bottom-6 sm:left-[52%] text-white font-avenir text-sm sm:text-base font-light tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.85)] pointer-events-none select-none">
                  After
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Arrow Button (Simple Chevron) */}
          <button 
            onClick={handleNextCase}
            className="absolute right-0 sm:right-1 top-1/2 -translate-y-1/2 z-20 p-2 text-[#24342c] hover:opacity-75 transition-opacity active:scale-95 cursor-pointer"
            aria-label="Next case"
          >
            <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8 stroke-[1.8]" />
          </button>

        </div>
      </section>

      {/* 5. WHAT IS XERF? & HOW XERF WORKS (Dark Green Section) */}
      <section className="w-full bg-[#213127] text-white py-16 sm:py-24 px-6 sm:px-12 md:px-20 border-y border-[#18251e]">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Column 1 */}
          <div className="space-y-6">
            <h3 className="text-2xl sm:text-3xl md:text-[34px] font-extralight tracking-[0.15em] font-avenir text-white uppercase mb-4">
              WHAT IS XERF?
            </h3>
            <p className="text-base sm:text-[17px] font-light leading-relaxed text-stone-200/90">
              XERF is an advanced non-surgical skin tightening treatment that uses radiofrequency energy to gently heat targeted layers of the skin. This controlled heat encourages the skin's natural collagen remodelling process, helping the skin feel firmer and look more refreshed over time.
            </p>
            <p className="text-base sm:text-[17px] font-light leading-relaxed text-stone-200/90">
              Unlike traditional skin tightening treatments that may work at one fixed depth, XERF uses multifrequency monopolar RF technology to reach three key skin levels. This allows the treatment to support the surface, mid-layer and deeper tissues in one intelligent system.
            </p>
            <p className="text-base sm:text-[17px] font-light leading-relaxed text-stone-200/90">
              At Cosmoderm Clinics, each XERF treatment is personalised according to your skin quality, facial structure, comfort level and aesthetic goals.
            </p>
          </div>

          {/* Column 2 */}
          <div className="space-y-6">
            <h3 className="text-2xl sm:text-3xl md:text-[34px] font-extralight tracking-[0.15em] font-avenir text-white uppercase mb-4">
              HOW XERF WORKS
            </h3>
            <p className="text-base sm:text-[17px] font-light leading-relaxed text-stone-200/90">
              XERF delivers radiofrequency energy into different skin depths to stimulate collagen and elastin renewal. These two proteins play an important role in keeping the skin firm, smooth and supported.
            </p>
            <p className="text-base sm:text-[17px] font-light leading-relaxed text-stone-200/90">
              The treatment uses a large-format tip for faster full-face sessions, while smaller specialised tips can be used around the delicate eye area. During treatment, the device provides real-time energy and temperature monitoring to help maintain safety and consistency.
            </p>
            <p className="text-base sm:text-[17px] font-light leading-relaxed text-stone-200/90">
              XERF also includes inter-pulse cryogen cooling, which helps protect the skin surface and keeps the treatment more comfortable throughout the session. XERF is commonly used to treat the face and neck, especially areas where the skin begins to lose firmness or definition.
            </p>
          </div>

        </div>
      </section>

      {/* 6. XERF IS FOR ANYONE WHO WANTS TO LOOK LIFTED, DEFINED AND REFRESHED */}
      <section className="w-full bg-white py-16 sm:py-24 px-6 border-y border-stone-200/60">
        <div className="max-w-[1280px] mx-auto text-center">
          <h2 className="text-xl sm:text-2xl md:text-[30px] lg:text-[34px] font-extralight tracking-[0.10em] sm:tracking-[0.13em] md:tracking-[0.15em] text-[#2c3831] font-avenir uppercase mb-12 sm:mb-16 leading-[1.35] max-w-6xl mx-auto">
            <span className="block">XERF IS FOR ANYONE WHO WANTS TO LOOK LIFTED,</span>
            <span className="block mt-1 sm:mt-1.5">DEFINED AND REFRESHED.</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-16 sm:mb-20">
            {[
              {
                icon: <UserCheck className="w-8 h-8 text-[#213127] stroke-[1.7]" />,
                title: 'TIGHTEN & LIFT',
                desc: 'You want firmer skin, a more defined jawline, lifted cheeks, or a tighter neck without surgery.'
              },
              {
                icon: (
                  <div className="w-7 h-7 rounded-full bg-[#213127] text-[#ded8c8] flex items-center justify-center">
                    <Clock className="w-4 h-4 stroke-[2.5]" />
                  </div>
                ),
                title: 'EARLY PREVENTION',
                desc: "You don't need to wait for visible sagging. Younger patients use XERF to stay ahead of the ageing process."
              },
              {
                icon: <Leaf className="w-7 h-7 text-[#213127] fill-[#213127] stroke-[1] -rotate-12" />,
                title: 'RECENT WEIGHT LOSS',
                desc: 'Your skin needs help catching up. XERF firms and tightens skin that has loosened after weight change.'
              },
              {
                icon: (
                  <div className="w-7 h-7 rounded-full bg-[#213127] text-[#ded8c8] flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 stroke-[2.5]" />
                  </div>
                ),
                title: 'ANY SKIN, ANY AGE',
                desc: 'XERF works across all skin types and tones. Your clinician will personalise the treatment to suit you.'
              }
            ].map((card, idx) => (
              <div 
                key={idx} 
                className="bg-[#ded8c8] p-7 sm:p-9 rounded-[24px] flex flex-col items-center text-center justify-start min-h-[270px] sm:min-h-[290px] shadow-sm"
              >
                <div className="mb-6 h-9 flex items-center justify-center">
                  {card.icon}
                </div>
                <h3 className="text-[13px] sm:text-[14px] font-extralight tracking-[0.2em] text-[#6b6456] uppercase font-avenir mb-4">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-[13px] font-light text-[#4a443a] leading-[1.65] max-w-[220px]">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>

          <p className="text-[10px] sm:text-[11px] font-light tracking-[0.18em] text-[#6b6456] uppercase max-w-4xl mx-auto leading-relaxed text-center">
            JEDDAH'S PACE IS RELENTLESS — AND SO IS THE STANDARD WE HOLD OURSELVES TO. XERF GIVES OUR CLIENTS REAL, LASTING RESULTS THAT FIT AROUND THEIR LIVES. NO PAIN, NO DOWNTIME, NO WAITING. THIS IS EXACTLY THE KIND OF INNOVATION COSMODERM WAS BUILT FOR.
          </p>
        </div>
      </section>

      {/* 7. THE TREATMENT EVERYONE IS TALKING ABOUT */}
      <section className="w-full bg-white py-16 sm:py-24 px-6 sm:px-12 md:px-16 border-y border-stone-200/60">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <div className="space-y-6 text-left">
            <h2 className="text-2xl sm:text-3xl md:text-[34px] lg:text-[36px] font-extralight tracking-[0.14em] text-[#2c3831] font-avenir uppercase leading-[1.35]">
              THE TREATMENT EVERYONE IS<br />
              TALKING ABOUT
            </h2>

            <p className="text-xs sm:text-sm md:text-[15px] font-light leading-relaxed text-[#524c41]">
              XERF has captured the attention of some of the world's most recognised names in beauty and wellness. Celebrities including Kim Kardashian and Priyanka Chopra have spoken publicly about their love of next-generation, non-invasive skin tightening — and XERF is at the forefront of that movement.
            </p>
            <p className="text-xs sm:text-sm md:text-[15px] font-light leading-relaxed text-[#524c41]">
              Now, for the first time in the region, this treatment is available exclusively at Cosmoderm Clinics, Jeddah.
            </p>
            <p className="text-xs sm:text-sm md:text-[15px] font-light leading-relaxed text-[#524c41]">
              Non-invasive, no downtime, and real results — this is the future of skin tightening.
            </p>

            <div className="pt-2">
              <button
                onClick={() => window.location.href = 'tel:+966126000000'}
                className="px-7 py-2.5 border border-[#4a443a] text-[#38332a] text-xs uppercase tracking-[0.18em] font-light rounded-full hover:bg-[#2c3831] hover:text-white transition-all cursor-pointer"
              >
                BOOK APPOINTMENT
              </button>
            </div>
          </div>

          {/* Machine Image (Exact Card Shape & Studio Floor Gradient) */}
          <div className="flex justify-center md:justify-end">
            <div 
              className="relative p-6 sm:p-10 rounded-[32px] sm:rounded-[38px] max-w-lg w-full flex items-center justify-center overflow-hidden shadow-none"
              style={{
                background: 'linear-gradient(to bottom, #ffffff 0%, #ffffff 52%, #dbded5 78%, #8e9486 100%)'
              }}
            >
              <img 
                src={xerfMachineImg} 
                alt="XERF Cynosure Lutronic RF Device" 
                className="w-full h-auto max-h-[390px] sm:max-h-[430px] object-contain"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 8. XERF + COMBINATION TREATMENTS */}
      <section className="w-full bg-white py-16 sm:py-24 px-6 border-t border-stone-200/60">
        <div className="max-w-[1000px] mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-[34px] font-extralight tracking-[0.16em] text-[#2c3831] font-avenir uppercase mb-6">
            XERF + COMBINATION TREATMENTS
          </h2>

          <p className="text-xs sm:text-sm md:text-[15px] font-light text-[#524c41] max-w-3xl mx-auto leading-relaxed mb-4">
            XERF delivers exceptional results as a standalone treatment. When combined with complementary modalities available at Cosmoderm — from Fotona 4D and Ultherapy to microneedling, laser resurfacing, and biostimulators such as Sculptra and Juláine — outcomes can be truly transformative.
          </p>
          <p className="text-xs sm:text-sm md:text-[15px] font-light text-[#524c41] max-w-2xl mx-auto leading-relaxed mb-10">
            Your clinician will design a personalised protocol based on your unique skin profile and goals.
          </p>

          {/* 6 Grey Pills */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 max-w-3xl mx-auto">
            {[
              'Fotona 4D',
              'Ultherapy',
              'Laser Resurfacing',
              'Softwave',
              'Microneedling',
              'Sculptra & Juláine'
            ].map((item, idx) => (
              <div 
                key={idx}
                className="py-3.5 px-6 bg-[#eae8e4] text-[#2c3831] text-xs sm:text-sm font-light tracking-wide rounded-[12px] hover:bg-[#e2e0dc] transition-colors cursor-default text-center"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FAQ Accordion Section */}
      <section className="w-full bg-white py-16 sm:py-24 px-6 border-t border-stone-200/60">
        <div className="max-w-[900px] mx-auto">
          
          <h2 className="text-2xl sm:text-3xl md:text-[34px] font-extralight tracking-[0.16em] text-[#2c3831] font-avenir uppercase mb-12 sm:mb-16 text-center">
            FREQUENTLY ASKED QUESTIONS
          </h2>

          <div className="space-y-3.5">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div 
                  key={idx} 
                  className="bg-white rounded-xl border border-stone-200/70 overflow-hidden transition-all shadow-none"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full px-6 py-4.5 flex items-center justify-between text-left cursor-pointer hover:bg-stone-50/60 transition-colors"
                  >
                    <span className="text-xs sm:text-sm md:text-[15px] font-light text-[#2c3831] pr-4">
                      {faq.q}
                    </span>
                    <div className="w-6 h-6 rounded-full border border-stone-400/70 flex items-center justify-center flex-shrink-0 text-[#2c3831]">
                      {isOpen ? <Minus className="w-3.5 h-3.5 stroke-[1.5]" /> : <Plus className="w-3.5 h-3.5 stroke-[1.5]" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-xs sm:text-sm md:text-[14px] font-light text-[#524c41] leading-relaxed border-t border-stone-100">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 10. Map Location Section */}
      <section className="w-full bg-white py-16 border-t border-stone-200/60">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-sm">
            <div className="flex flex-col md:flex-row gap-6 items-center justify-between mb-6">
              <div className="space-y-1">
                <h3 className="text-lg font-medium text-[#24342c] font-avenir">Cosmoderm Clinics — Jeddah</h3>
                <p className="text-xs text-stone-600 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#24342c]" />
                  Villa 57, Al Thanya Road, Al Shati District, Jeddah, Saudi Arabia
                </p>
              </div>

              <div className="flex items-center gap-4 text-xs">
                <a href="tel:+966123456789" className="flex items-center gap-1.5 text-[#24342c] hover:underline">
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

      {/* 11. Footer Section */}
      <FooterSection 
        onNavigate={onBackToHome}
        onOpenConsultation={() => window.location.href = 'tel:+966126000000'}
      />

    </div>
  );
};
