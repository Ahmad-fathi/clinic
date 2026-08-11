import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import xerfBeforeAfterImg1 from '../assets/images/optimized/Gemini_Generated_Image_2cglyk2cglyk2cgl.webp';
import xerfBeforeAfterImg2 from '../assets/images/optimized/Gemini_Generated_Image_r9c4p9r9c4p9r9c4.webp';
import xerfBeforeAfterImg3 from '../assets/images/optimized/xerf_ba_case1_1785956479519.webp';

interface BeforeAfterCase {
  id: number;
  colorBefore: string;
  colorAfter: string;
  image: string;
}

const beforeAfterCases: BeforeAfterCase[] = [
  { id: 1, colorBefore: '#84796b', colorAfter: '#968a7b', image: xerfBeforeAfterImg1 },
  { id: 2, colorBefore: '#3d4248', colorAfter: '#52575e', image: xerfBeforeAfterImg2 },
  { id: 3, colorBefore: '#707c85', colorAfter: '#83909a', image: xerfBeforeAfterImg3 },
];

export const BeforeAfterSection: React.FC = () => {
  const [baIndex, setBaIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const handleNextCase = () => {
    setDirection(1);
    setBaIndex((prev) => (prev === beforeAfterCases.length - 1 ? 0 : prev + 1));
  };

  const handlePrevCase = () => {
    setDirection(-1);
    setBaIndex((prev) => (prev === 0 ? beforeAfterCases.length - 1 : prev - 1));
  };

  return (
    <section className="w-full py-16 sm:py-24 px-4 sm:px-8 max-w-[1100px] mx-auto text-center">
      <h2 className="text-2xl sm:text-3xl md:text-[34px] font-extralight tracking-[0.2em] text-[#24342c] font-avenir uppercase mb-10 sm:mb-14">
        Before and After
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
                  alt={`Before and After Case ${baIndex + 1}`}
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
  );
};
