/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { HeroSection } from './components/HeroSection';
import { SignatureTreatments } from './components/SignatureTreatments';
import { MeetSpecialists } from './components/MeetSpecialists';
import { BotoxServicePage } from './components/BotoxServicePage';
import { XerfServicePage } from './components/XerfServicePage';
import { FooterSection } from './components/FooterSection';

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'botox' | 'xerf'>('home');
  const [activeNav, setActiveNav] = useState('home');
  const lenisRef = useRef<Lenis | null>(null);

  // Initialize Lenis smooth scroll globally
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    });
    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  const handleSelectTreatment = (id: string) => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    if (id === 'xerf') {
      setCurrentView('xerf');
    } else {
      setCurrentView('botox');
    }
  };

  const handleBackToHome = () => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    setCurrentView('home');
    setActiveNav('home');
  };

  if (currentView === 'xerf') {
    return (
      <XerfServicePage
        onBackToHome={handleBackToHome}
        setActiveNav={setActiveNav}
      />
    );
  }

  if (currentView === 'botox') {
    return (
      <BotoxServicePage
        onBackToHome={handleBackToHome}
        setActiveNav={setActiveNav}
      />
    );
  }

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-[#eee9df] via-[#e2ddd2] to-[#eae5da] text-[#24342c]">
      <HeroSection activeNav={activeNav} setActiveNav={setActiveNav} />
      <SignatureTreatments onSelectTreatment={handleSelectTreatment} />
      <MeetSpecialists />
      <FooterSection
        onNavigate={handleBackToHome}
        onOpenConsultation={() => window.location.href = 'tel:+966126000000'}
      />
    </div>
  );
}
