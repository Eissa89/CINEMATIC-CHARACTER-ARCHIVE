import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Award, Flame, Quote, Sparkles, Flag } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

import { CharacterData } from '../data/characters';

gsap.registerPlugin(ScrollTrigger);

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
  const timelineRef = useRef<HTMLDivElement>(null);

  // GSAP ScrollTrigger for career milestone progression
  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return;
      }

      if (timelineRef.current) {
        const cards = timelineRef.current.querySelectorAll('.timeline-card');
        if (cards.length > 0) {
          gsap.fromTo(
            cards,
            { y: 40, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              stagger: 0.2,
              duration: 0.8,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: timelineRef.current,
                start: 'top 80%',
              },
            }
          );
        }
      }
    },
    { scope: timelineRef, dependencies: [character.id] }
  );

  return (
    <div className="relative text-white z-10 space-y-28 py-20 character-theme-container">
      {/* SCENE 02 — CHARACTER NARRATIVE & LEGEND */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl p-8 md:p-14 bg-character-surface border border-character-border shadow-2xl overflow-hidden group">
          {/* Flame / Lightning Decorative Background Element */}
          <Flame
            className="absolute -bottom-10 -right-10 w-96 h-96 opacity-5 pointer-events-none transition-colors duration-500"
            style={{ color: character.theme.primaryColor }}
          />

          <div className="relative z-10 max-w-4xl">
            <div
              className="flex items-center gap-3 text-xs font-mono tracking-widest uppercase mb-4"
              style={{ color: character.theme.primaryColor }}
            >
              <Sparkles className="w-4 h-4" />
              <span>{isArabic ? 'سيرة الأسطورة' : 'THE LEGEND NARRATIVE'}</span>
            </div>

            <h3
              className={`text-2xl sm:text-4xl font-bold mb-8 text-zinc-100 leading-relaxed ${
                isArabic ? 'font-cairo' : 'font-sans'
              }`}
              dir={isArabic ? 'rtl' : 'ltr'}
            >
              {isArabic ? character.bioAr : character.bioEn}
            </h3>

            {/* Official Partners Bar */}
            <div className="pt-6 border-t border-character-border flex flex-wrap items-center gap-6">
              <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
                {isArabic ? 'الرعاة الرسميون:' : 'OFFICIAL PARTNERS:'}
              </span>
              <div className="flex flex-wrap items-center gap-3">
                {(isArabic ? character.sponsorsAr : character.sponsorsEn).map((sponsor, idx) => (
                  <span
                    key={idx}
                    className="px-3.5 py-1.5 rounded-lg bg-zinc-950/90 border border-zinc-800 text-zinc-300 font-mono text-xs hover:border-character-secondary transition-colors"
                  >
                    {sponsor}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SCENE 03 — CAREER TIMELINE & MILESTONES */}
      {character.timeline.length > 0 && (
        <section ref={timelineRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <div
                className="text-xs font-mono tracking-widest uppercase mb-1"
                style={{ color: character.theme.primaryColor }}
              >
                {isArabic ? 'مسيرة البطولة' : 'CAREER MILESTONES'}
              </div>
              <h3 className="text-3xl sm:text-5xl font-black font-display tracking-wide text-white">
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
                className="timeline-card p-8 rounded-2xl bg-character-surface border border-character-border hover:border-character-primary transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div
                    className="text-4xl font-black font-display mb-3"
                    style={{ color: character.theme.secondaryColor }}
                  >
                    {item.year}
                  </div>
                  <h4
                    className={`text-xl font-bold text-white mb-3 ${
                      isArabic ? 'font-cairo' : 'font-sans'
                    }`}
                    dir={isArabic ? 'rtl' : 'ltr'}
                  >
                    {isArabic ? item.titleAr : item.title}
                  </h4>
                  <p
                    className={`text-sm text-zinc-400 leading-relaxed ${
                      isArabic ? 'font-cairo' : 'font-sans'
                    }`}
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

      {/* SCENE 04 — SIGNATURE MOMENTS */}
      {character.iconicMoments.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <div
                className="text-xs font-mono tracking-widest uppercase mb-1"
                style={{ color: character.theme.secondaryColor }}
              >
                {isArabic ? 'لحظات خالدة' : 'SIGNATURE MOMENTS'}
              </div>
              <h3 className="text-3xl sm:text-5xl font-black font-display tracking-wide text-white">
                {isArabic ? 'أبرز محطات التاريخ' : 'ICONIC RACING HISTORY'}
              </h3>
            </div>
            <Award className="w-8 h-8 text-zinc-600 hidden sm:block" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {character.iconicMoments.map((moment) => (
              <div
                key={moment.id}
                className="relative p-8 rounded-2xl bg-character-surface border border-character-border overflow-hidden group hover:border-character-primary transition-all duration-300"
              >
                <div
                  className="absolute top-0 right-0 w-36 h-36 rounded-bl-full pointer-events-none opacity-20 transition-opacity group-hover:opacity-40"
                  style={{ backgroundColor: character.theme.primaryColor }}
                />

                <span
                  className="inline-block px-3 py-1 rounded text-xs font-mono font-bold mb-4 border"
                  style={{
                    backgroundColor: 'rgba(13, 13, 18, 0.9)',
                    color: character.theme.primaryColor,
                    borderColor: character.theme.borderColor,
                  }}
                >
                  {moment.tag}
                </span>

                <h4
                  className={`text-2xl font-bold text-white mb-2 ${
                    isArabic ? 'font-cairo' : 'font-sans'
                  }`}
                  dir={isArabic ? 'rtl' : 'ltr'}
                >
                  {isArabic ? moment.titleAr : moment.title}
                </h4>

                <div className="text-xs font-mono text-zinc-400 mb-6">
                  📍 {isArabic ? moment.locationAr : moment.location}
                </div>

                <div
                  className="relative pl-6 border-l-2 italic text-zinc-300 text-sm"
                  style={{ borderColor: character.theme.secondaryColor }}
                >
                  <Quote
                    className="w-4 h-4 opacity-50 absolute top-0 left-1"
                    style={{ color: character.theme.secondaryColor }}
                  />
                  <p className={isArabic ? 'font-cairo' : 'font-sans'} dir={isArabic ? 'rtl' : 'ltr'}>
                    "{isArabic ? moment.quoteAr : moment.quote}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* SCENE 05 — CHARACTER ARCHIVE NAVIGATOR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 border-t border-character-border">
        <div className="text-center mb-12">
          <div
            className="text-xs font-mono tracking-widest uppercase mb-2 flex items-center justify-center gap-2"
            style={{ color: character.theme.primaryColor }}
          >
            <Flag className="w-4 h-4" />
            <span>{isArabic ? 'أرشيف الشخصيات' : 'CHARACTER ARCHIVE NAVIGATOR'}</span>
          </div>
          <h3 className="text-3xl sm:text-5xl font-black font-display tracking-wide text-white">
            {isArabic ? 'اختر شخصية لعرض عالمها السينمائي' : 'EXPLORE CHARACTER WORLDS'}
          </h3>
          <p className="text-zinc-400 text-sm mt-3 max-w-xl mx-auto">
            {isArabic
              ? 'اختيار أي شخصية يحول المظهر البصري والألوان والأداء التفاعلي للموقع بالكامل.'
              : 'Selecting a character dynamically adapts the global color variables, typography accents, and visual theme.'}
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
                    ? 'bg-character-surface border-character-primary shadow-[0_0_25px_var(--character-glow)]'
                    : 'bg-zinc-950/80 border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/60'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span
                    className="text-xs font-mono font-bold"
                    style={{
                      color: isSelected ? char.theme.secondaryColor : '#a1a1aa',
                    }}
                  >
                    #{char.racingNumber}
                  </span>
                  {isSelected && (
                    <span
                      className="w-2.5 h-2.5 rounded-full animate-pulse"
                      style={{ backgroundColor: char.theme.primaryColor }}
                    />
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
