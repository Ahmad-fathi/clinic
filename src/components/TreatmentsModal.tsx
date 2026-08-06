import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowUpRight, Sparkles, Shield, Zap, Stethoscope, HeartPulse, UserCheck } from 'lucide-react';

interface TreatmentsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectTreatment: (treatmentName: string) => void;
}

export const TreatmentsModal: React.FC<TreatmentsModalProps> = ({
  isOpen,
  onClose,
  onSelectTreatment,
}) => {
  const categories = [
    {
      id: 'dermatology',
      title: 'Dermatological Diseases',
      icon: Stethoscope,
      description: 'Expert medical diagnosis and targeted therapy for acne, eczema, psoriasis, rosacea, and skin conditions.',
      highlights: ['Acne & Scar Therapy', 'Pigmentation Control', 'Eczema & Allergy Care'],
    },
    {
      id: 'cosmetic',
      title: 'Cosmetic Procedures',
      icon: Sparkles,
      description: 'Advanced non-surgical aesthetic enhancements designed for natural, refined youthfulness.',
      highlights: ['Botox & Fillers', 'Thread Lifts', 'Skin Tightening & HIFU'],
    },
    {
      id: 'laser',
      title: 'State-of-the-Art Laser Therapy',
      icon: Zap,
      description: 'Precision laser resurfacing, hair removal, vascular treatment, and tattoo removal with cutting-edge devices.',
      highlights: ['Fractional CO2 Laser', 'Laser Hair Removal', 'Vascular & Pigment Laser'],
    },
    {
      id: 'surgery',
      title: 'Plastic & Aesthetic Surgery',
      icon: Shield,
      description: 'Refined surgical interventions performed by world-class board-certified plastic surgeons.',
      highlights: ['Facial Contouring', 'Body Sculpting', 'Blepharoplasty'],
    },
    {
      id: 'males',
      title: "Males' Aesthetic Services",
      icon: UserCheck,
      description: 'Specialized clinical treatments tailored specifically for male skin health, jawline definition, and hair care.',
      highlights: ['Male Hair Restoration', 'Jawline Sculpting', 'Laser Beard Line Design'],
    },
    {
      id: 'wellness',
      title: 'Cosmoderm Wellness & Facials',
      icon: HeartPulse,
      description: 'Medical-grade hydrafacials, chemical peels, and holistic cellular rejuvenation programs.',
      highlights: ['HydraFacial MD', 'Custom Chemical Peels', 'PRP Vampire Facial'],
    },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-3xl bg-[#f4efe4] border border-[#d8d2c4] rounded-2xl shadow-2xl overflow-hidden z-10 my-8 font-avenir text-stone-900"
          >
            {/* Header */}
            <div className="p-6 border-b border-[#d8d2c4] bg-[#eae5da]/60 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-semibold tracking-widest text-[#24342c] uppercase block mb-1">
                  COSMODERM CLINICS
                </span>
                <h3 className="text-2xl font-bold text-[#24342c]">
                  Clinical Services & Treatments
                </h3>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full text-stone-500 hover:text-stone-900 hover:bg-stone-300/50 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Grid of Categories */}
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[70vh] overflow-y-auto">
              {categories.map((cat) => {
                const IconComponent = cat.icon;
                return (
                  <div
                    key={cat.id}
                    className="group relative p-5 bg-white/80 hover:bg-white border border-[#d8d2c4] hover:border-[#24342c]/40 rounded-xl transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-md"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="w-10 h-10 rounded-lg bg-[#24342c]/10 text-[#24342c] flex items-center justify-center border border-[#24342c]/20">
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <button
                          onClick={() => {
                            onSelectTreatment(cat.title);
                          }}
                          className="flex items-center gap-1 px-3 py-1 bg-[#24342c] hover:bg-[#1a2620] text-white text-xs font-medium rounded-full transition-colors cursor-pointer"
                        >
                          <span>Book</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <h4 className="text-lg font-bold text-[#24342c] mb-1">
                        {cat.title}
                      </h4>
                      <p className="text-xs text-stone-600 leading-relaxed mb-4">
                        {cat.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-stone-200 flex flex-wrap gap-1.5">
                      {cat.highlights.map((h, i) => (
                        <span
                          key={i}
                          className="text-[10px] px-2.5 py-0.5 rounded-full bg-[#24342c]/10 text-[#24342c] border border-[#24342c]/20 font-medium"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-[#eae5da]/80 border-t border-[#d8d2c4] text-center text-xs text-stone-600">
              Need personalized advice? Our specialist doctors in Jeddah provide tailor-made consultations.
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
