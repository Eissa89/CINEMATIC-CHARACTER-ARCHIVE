import { motion } from 'framer-motion';
import { Calendar, Award, Flame, Quote, Sparkles } from 'lucide-react';
import { CharacterData } from '../data/characters';

interface PortfolioSectionsProps {
  character: CharacterData;
  isArabic: boolean;
  allCharacters: CharacterData[];
  onSelectCharacter: (charId: string) => void;
}

export function PortfolioSections({
  character,
  isArabic,
  allCharacters,
  onSelectCharacter,
}: PortfolioSectionsProps) {
  return (
    <div className="relative bg-black text-white z-10 space-y-24 py-16">

      {/* 1. Character Biography & Narrative Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl p-8 md:p-12 bg-gradient-to-br from-zinc-900/90 via-zinc-950/80 to-black border border-zinc-800 shadow-2xl overflow-hidden">
          {/* Subtle Flame/Lightning Backdrop */}
          <Flame className="absolute -bottom-10 -right-10 w-80 h-80 text-red-600/5 pointer-events-none" />

          <div className="relative z-10 max-w-4xl">
            <div className="flex items-center gap-3 text-red-500 text-xs font-mono tracking-widest uppercase mb-4">
              <Sparkles className="w-4 h-4" />
              <span>{isArabic ? 'سيرة الأسطورة' : 'THE LEGEND NARRATIVE'}</span>
            </div>

            <h3
              className={`text-2xl sm:text-4xl font-bold mb-6 text-zinc-100 ${isArabic ? 'font-cairo leading-relaxed' : 'font-sans'}`}
              dir={isArabic ? 'rtl' : 'ltr'}
            >
              {isArabic ? character.bioAr : character.bioEn}
            </h3>

            {/* Sponsors Bar */}
            <div className="pt-6 border-t border-zinc-800/80 flex flex-wrap items-center gap-6">
              <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
                {isArabic ? 'الرعاة الرسميون:' : 'OFFICIAL PARTNERS:'}
              </span>
              <div className="flex flex-wrap items-center gap-3">
                {(isArabic ? character.sponsorsAr : character.sponsorsEn).map((sponsor, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded bg-zinc-900 border border-zinc-800 text-zinc-300 font-mono text-xs hover:border-yellow-500/50 transition-colors"
                  >
                    {sponsor}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Timeline & Career Milestones Section */}
      {character.timeline.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <div className="text-xs font-mono text-red-500 tracking-widest uppercase mb-1">
                {isArabic ? 'مسيرة البطولة' : 'CAREER MILESTONES'}
              </div>
              <h3 className="text-3xl sm:text-4xl font-black font-display text-white">
                {isArabic ? 'التسلسل الزمني للإنجازات' : 'THE CHAMPION TIMELINE'}
              </h3>
            </div>
            <Calendar className="w-8 h-8 text-zinc-600 hidden sm:block" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {character.timeline.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -6 }}
                className="p-6 rounded-2xl bg-zinc-950/80 border border-zinc-800/80 hover:border-red-600/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="text-3xl font-black font-display text-yellow-500 mb-2">
                    {item.year}
                  </div>
                  <h4
                    className={`text-xl font-bold text-white mb-3 ${isArabic ? 'font-cairo' : 'font-sans'}`}
                    dir={isArabic ? 'rtl' : 'ltr'}
                  >
                    {isArabic ? item.titleAr : item.title}
                  </h4>
                  <p
                    className={`text-sm text-zinc-400 leading-relaxed ${isArabic ? 'font-cairo' : 'font-sans'}`}
                    dir={isArabic ? 'rtl' : 'ltr'}
                  >
                    {isArabic ? item.descriptionAr : item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* 3. Iconic Moments Section */}
      {character.iconicMoments.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <div className="text-xs font-mono text-yellow-500 tracking-widest uppercase mb-1">
                {isArabic ? 'لحظات خالدة' : 'SIGNATURE MOMENTS'}
              </div>
              <h3 className="text-3xl sm:text-4xl font-black font-display text-white">
                {isArabic ? 'أبرز محطات التاريخ' : 'ICONIC RACING HISTORY'}
              </h3>
            </div>
            <Award className="w-8 h-8 text-zinc-600 hidden sm:block" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {character.iconicMoments.map((moment) => (
              <div
                key={moment.id}
                className="relative p-8 rounded-2xl bg-gradient-to-br from-zinc-900/80 to-zinc-950 border border-zinc-800/80 overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 rounded-bl-full pointer-events-none group-hover:bg-red-600/20 transition-colors" />

                <span className="inline-block px-3 py-1 rounded text-xs font-mono font-bold bg-red-950/80 text-red-400 border border-red-800/60 mb-4">
                  {moment.tag}
                </span>

                <h4 className={`text-2xl font-bold text-white mb-2 ${isArabic ? 'font-cairo' : 'font-sans'}`}>
                  {isArabic ? moment.titleAr : moment.title}
                </h4>

                <div className="text-xs font-mono text-zinc-400 mb-6">
                  📍 {isArabic ? moment.locationAr : moment.location}
                </div>

                <div className="relative pl-6 border-l-2 border-yellow-500 italic text-zinc-300 text-sm">
                  <Quote className="w-4 h-4 text-yellow-500/50 absolute top-0 left-1" />
                  <p className={isArabic ? 'font-cairo' : 'font-sans'} dir={isArabic ? 'rtl' : 'ltr'}>
                    "{isArabic ? moment.quoteAr : moment.quote}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 4. Character Archive Navigator (Demonstrates Reusable Architecture) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 border-t border-zinc-800/80">
        <div className="text-center mb-10">
          <div className="text-xs font-mono text-red-500 tracking-widest uppercase mb-2">
            REUSABLE COMPONENT ARCHITECTURE
          </div>
          <h3 className="text-3xl sm:text-4xl font-black font-display text-white">
            {isArabic ? 'أرشيف الشخصيات الشامل' : 'CHARACTER ARCHIVE NAVIGATOR'}
          </h3>
          <p className="text-zinc-400 text-sm mt-2 max-w-xl mx-auto">
            {isArabic
              ? 'كل شخصية تستخدم نفس المكون التفاعلي للأسماء ثنائية اللغة والتكوين السينمائي.'
              : 'Every character leverages the same interactive bilingual name component and cinematic framework.'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {allCharacters.map((char) => {
            const isSelected = char.id === character.id;
            return (
              <button
                key={char.id}
                type="button"
                onClick={() => onSelectCharacter(char.id)}
                className={`p-6 rounded-2xl text-left border transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? 'bg-gradient-to-br from-red-950/60 to-zinc-950 border-red-500 shadow-[0_0_20px_rgba(225,6,0,0.3)]'
                    : 'bg-zinc-950/80 border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/60'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-yellow-500 font-bold">
                    #{char.racingNumber}
                  </span>
                  {isSelected && (
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  )}
                </div>

                <div className="text-xl font-bold font-display tracking-wide text-white">
                  {char.nameEn}
                </div>
                <div className="text-sm font-bold font-cairo text-zinc-400 mt-1" dir="rtl">
                  {char.nameAr}
                </div>

                <div className="mt-4 pt-3 border-t border-zinc-800/60 text-xs font-mono text-zinc-500">
                  {char.identityEn}
                </div>
              </button>
            );
          })}
        </div>
      </section>

    </div>
  );
}
