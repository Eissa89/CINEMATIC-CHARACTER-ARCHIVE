import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface BilingualCharacterNameProps {
  nameEn: string;
  nameAr: string;
  isArabic: boolean;
  onToggleLanguage?: (isArabic: boolean) => void;
  className?: string;
}

export function BilingualCharacterName({
  nameEn,
  nameAr,
  isArabic,
  onToggleLanguage,
  className = '',
}: BilingualCharacterNameProps) {
  const [internalIsArabic, setInternalIsArabic] = useState(isArabic);

  // Sync or use internal toggle state
  const activeIsArabic = onToggleLanguage ? isArabic : internalIsArabic;

  const handleToggle = useCallback(() => {
    const nextState = !activeIsArabic;
    if (onToggleLanguage) {
      onToggleLanguage(nextState);
    } else {
      setInternalIsArabic(nextState);
    }
  }, [activeIsArabic, onToggleLanguage]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleToggle();
    }
  };

  return (
    <div className={`inline-flex flex-col items-center select-none ${className}`}>
      {/* Interactive Title Element */}
      <button
        type="button"
        onClick={handleToggle}
        onKeyDown={handleKeyDown}
        aria-label={`Toggle character name between English and Arabic. Current name: ${
          activeIsArabic ? nameAr : nameEn
        }`}
        className="group relative cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-4 focus-visible:ring-offset-black rounded-lg transition-transform hover:scale-[1.01] active:scale-[0.99] bg-transparent border-0 p-0 text-left"
      >
        {/* Subtle hover glow indicator surrounding name */}
        <div className="absolute -inset-x-4 -inset-y-2 rounded-xl bg-gradient-to-r from-red-600/0 via-red-500/10 to-yellow-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md pointer-events-none" />

        {/* Text Container with Fixed AnimatePresence */}
        <div className="relative min-h-[4rem] sm:min-h-[5.5rem] md:min-h-[7rem] lg:min-h-[8.5rem] flex items-center justify-center overflow-visible">
          <AnimatePresence mode="wait">
            {!activeIsArabic ? (
              <motion.span
                key="en-name"
                initial={{ opacity: 0, x: -20, filter: 'blur(8px)' }}
                animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, x: 20, filter: 'blur(8px)' }}
                transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                className="block text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black font-display tracking-wider text-white uppercase drop-shadow-[0_10px_25px_rgba(225,6,0,0.3)] group-hover:text-red-50 transition-colors duration-300"
              >
                {nameEn}
              </motion.span>
            ) : (
              <motion.span
                key="ar-name"
                initial={{ opacity: 0, x: 20, filter: 'blur(8px)' }}
                animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, x: -20, filter: 'blur(8px)' }}
                transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                dir="rtl"
                className="block text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black font-cairo text-white leading-tight drop-shadow-[0_10px_25px_rgba(225,6,0,0.35)] group-hover:text-red-50 transition-colors duration-300"
              >
                {nameAr}
              </motion.span>
            )}
          </AnimatePresence>
        </div>

        {/* Minimal Cinematic Language Toggle Hint: EN ⇄ ع */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="mt-2 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/80 border border-zinc-800 text-zinc-400 group-hover:border-red-500/50 group-hover:text-white transition-all duration-300 backdrop-blur-md shadow-lg"
        >
          <span className={`text-xs font-mono font-bold tracking-widest ${!activeIsArabic ? 'text-red-500 font-black' : 'text-zinc-500'}`}>
            EN
          </span>
          <span className="text-xs text-red-500/80 animate-pulse font-mono">⇄</span>
          <span className={`text-xs font-cairo font-bold ${activeIsArabic ? 'text-red-500 font-black' : 'text-zinc-500'}`}>
            ع
          </span>
        </motion.div>
      </button>
    </div>
  );
}
