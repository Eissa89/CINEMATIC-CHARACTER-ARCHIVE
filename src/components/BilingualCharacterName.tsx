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
    <div className={`inline-flex flex-col items-center lg:items-start select-none ${className}`}>
      {/* Interactive Title Element */}
      <button
        type="button"
        onClick={handleToggle}
        onKeyDown={handleKeyDown}
        aria-label={`Toggle character name between English and Arabic. Current name: ${
          activeIsArabic ? nameAr : nameEn
        }`}
        className="group relative cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-character-focus focus-visible:ring-offset-4 focus-visible:ring-offset-black rounded-xl transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] bg-transparent border-0 p-0 text-left"
      >
        {/* Subtle character glow behind name */}
        <div
          className="absolute -inset-x-6 -inset-y-3 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl pointer-events-none"
          style={{
            background: 'radial-gradient(circle, var(--character-glow) 0%, transparent 80%)'
          }}
        />

        {/* Text Container with AnimatePresence */}
        <div className="relative min-h-[4rem] sm:min-h-[5.5rem] md:min-h-[7rem] lg:min-h-[8.5rem] flex items-center justify-center lg:justify-start overflow-visible">
          <AnimatePresence mode="wait">
            {!activeIsArabic ? (
              <motion.span
                key="en-name"
                initial={{ opacity: 0, x: -25, filter: 'blur(10px)' }}
                animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, x: 25, filter: 'blur(10px)' }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="block text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black font-display tracking-wider text-white uppercase drop-shadow-[0_12px_30px_rgba(0,0,0,0.8)] transition-colors duration-300"
              >
                {nameEn}
              </motion.span>
            ) : (
              <motion.span
                key="ar-name"
                initial={{ opacity: 0, x: 25, filter: 'blur(10px)' }}
                animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, x: -25, filter: 'blur(10px)' }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                dir="rtl"
                className="block text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black font-cairo text-white leading-tight drop-shadow-[0_12px_30px_rgba(0,0,0,0.8)] transition-colors duration-300"
              >
                {nameAr}
              </motion.span>
            )}
          </AnimatePresence>
        </div>

        {/* Minimal Cinematic Language Toggle Hint: EN ⇄ ع */}
        <div className="mt-3 inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-zinc-950/90 border border-character-border text-zinc-400 group-hover:border-character-primary group-hover:text-white transition-all duration-300 backdrop-blur-md shadow-xl">
          <span className={`text-xs font-mono font-bold tracking-widest ${!activeIsArabic ? 'text-character-secondary font-black' : 'text-zinc-500'}`}>
            EN
          </span>
          <span className="text-xs text-character-primary animate-pulse font-mono font-bold">⇄</span>
          <span className={`text-xs font-cairo font-bold ${activeIsArabic ? 'text-character-secondary font-black' : 'text-zinc-500'}`}>
            ع
          </span>
          <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest border-l border-zinc-800 pl-2 ml-0.5">
            IDENTITY SWITCH
          </span>
        </div>
      </button>
    </div>
  );
}
