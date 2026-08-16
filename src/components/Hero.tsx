import { motion } from 'framer-motion';
import { Trophy, ShieldCheck, Zap } from 'lucide-react';
import { CharacterData } from '../data/characters';
import { BilingualCharacterName } from './BilingualCharacterName';

interface HeroProps {
  character: CharacterData;
  isArabic: boolean;
  onToggleLanguage: (isArabic: boolean) => void;
}

export function Hero({ character, isArabic, onToggleLanguage }: HeroProps) {
  return (
    <section className="relative min-h-screen pt-24 pb-16 flex flex-col justify-between overflow-hidden bg-black bg-grain">
      {/* Background Lighting & Radial Glows */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] sm:w-[900px] sm:h-[900px] rounded-full blur-[140px] pointer-events-none opacity-30"
        style={{ background: `radial-gradient(circle, ${character.theme.primaryColor} 0%, transparent 70%)` }}
      />
      <div
        className="absolute bottom-10 right-10 w-[400px] h-[400px] rounded-full blur-[120px] pointer-events-none opacity-20"
        style={{ background: `radial-gradient(circle, ${character.theme.secondaryColor} 0%, transparent 70%)` }}
      />

      {/* Background Racing Geometry Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-15 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-[120vh] border-r-2 border-red-600/30 transform -skew-x-[25deg]" />
        <div className="absolute -top-40 left-1/3 w-96 h-[120vh] border-r-2 border-yellow-500/20 transform -skew-x-[25deg]" />
        <div className="absolute top-1/2 right-10 w-full h-[1px] bg-gradient-to-r from-transparent via-red-600/30 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 my-auto">
        {/* Top Header Badge / Category Row */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between border-b border-zinc-800/80 pb-4 mb-8"
        >
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse shadow-[0_0_10px_#e10600]" />
            <span className="text-xs font-mono tracking-widest text-zinc-400 uppercase">
              CHARACTER ARCHIVE // #{character.racingNumber}
            </span>
          </div>

          <div className="flex items-center gap-2 px-3 py-1 rounded bg-zinc-900/90 border border-zinc-800 text-xs font-mono text-zinc-300">
            <ShieldCheck className="w-3.5 h-3.5 text-yellow-500" />
            <span>{isArabic ? character.identityAr : character.identityEn}</span>
          </div>
        </motion.div>

        {/* Hero Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Character Visual Identity (Name, Tagline, Identity) */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left z-20">

            {/* 1. Racing Number Background Accent */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 0.08, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="absolute -top-12 left-0 lg:-left-10 text-[12rem] sm:text-[18rem] md:text-[22rem] font-black font-display text-white select-none pointer-events-none leading-none z-0"
            >
              {character.racingNumber}
            </motion.div>

            {/* 2. Interactive Bilingual Name Component */}
            <div className="relative z-10 mb-4 w-full">
              <BilingualCharacterName
                nameEn={character.nameEn}
                nameAr={character.nameAr}
                isArabic={isArabic}
                onToggleLanguage={onToggleLanguage}
              />
            </div>

            {/* 3. Official Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative z-10 mt-2 mb-6"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-cairo text-yellow-400 tracking-wide drop-shadow-[0_4px_12px_rgba(250,204,21,0.2)]" dir="rtl">
                {character.taglineAr}
              </h2>
              <p className="text-sm sm:text-base font-sans text-zinc-400 italic mt-1 font-light tracking-wide">
                {character.taglineEn}
              </p>
            </motion.div>

            {/* 4. Identity & Role Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative z-10 flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8"
            >
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-950/40 border border-red-600/40 text-red-400 font-bold tracking-wider text-sm">
                <Trophy className="w-4 h-4 text-yellow-500" />
                <span>{character.racingNumber} // {character.identityEn}</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-900/80 border border-zinc-800 text-zinc-300 text-sm font-cairo">
                <Zap className="w-4 h-4 text-yellow-400" />
                <span>{character.identityAr}</span>
              </div>
            </motion.div>

            {/* 5. Core Themes Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative z-10 flex flex-wrap justify-center lg:justify-start gap-2 max-w-xl"
            >
              {(isArabic ? character.coreThemesAr : character.coreThemes).map((theme, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-sm bg-zinc-950/80 border border-zinc-800 text-xs font-mono uppercase tracking-widest text-zinc-400 hover:border-yellow-500/50 hover:text-white transition-colors"
                >
                  • {theme}
                </span>
              ))}
            </motion.div>

          </div>

          {/* Right Column: Character Hero Artwork Display */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-md lg:max-w-none rounded-2xl overflow-hidden border border-zinc-800/80 bg-zinc-950/60 shadow-[0_20px_50px_rgba(225,6,0,0.25)] group"
            >
              {/* Image Frame Lighting Effects */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 z-10 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 via-transparent to-yellow-500/10 opacity-50 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />

              <img
                src={character.image}
                alt={character.nameEn}
                className="w-full h-[450px] sm:h-[550px] object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Overlay Details on Artwork */}
              <div className="absolute bottom-6 left-6 right-6 z-20 flex items-end justify-between">
                <div>
                  <div className="text-xs font-mono text-yellow-400 tracking-wider mb-1">
                    PISTON CUP LEGEND
                  </div>
                  <div className="text-2xl font-black font-display tracking-wide text-white">
                    #95 {character.nameEn}
                  </div>
                </div>
                <div className="px-3 py-1 bg-red-600/90 text-white text-xs font-mono font-bold rounded shadow-lg">
                  RACE READY
                </div>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Quick Supporting Statistics Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {character.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-zinc-950/70 border border-zinc-800/80 hover:border-red-600/40 transition-colors backdrop-blur-md group"
            >
              <div className="text-xs font-mono text-zinc-500 group-hover:text-yellow-400 transition-colors">
                {isArabic ? stat.labelAr : stat.label}
              </div>
              <div className="text-xl sm:text-2xl font-black font-display text-white mt-1">
                {isArabic ? stat.valueAr : stat.value}
              </div>
              {stat.detail && (
                <div className="text-xs font-sans text-zinc-400 mt-1">
                  {isArabic ? stat.detailAr : stat.detail}
                </div>
              )}
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
