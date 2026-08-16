import { useState } from 'react';
import { CHARACTERS } from './data/characters';
import { Hero } from './components/Hero';
import { PortfolioSections } from './components/PortfolioSections';
import { Globe, RefreshCw } from 'lucide-react';

export default function App() {
  const [selectedCharacterId, setSelectedCharacterId] = useState('lightning-mcqueen');
  const [isArabic, setIsArabic] = useState(false);

  // Find currently active character
  const activeCharacter = CHARACTERS.find((c) => c.id === selectedCharacterId) || CHARACTERS[0];

  const handleToggleGlobalLang = () => {
    setIsArabic((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-red-600 selection:text-white font-sans antialiased">
      {/* Top Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-zinc-900/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Brand Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-red-600 flex items-center justify-center font-display text-xl font-black text-black tracking-widest shadow-[0_0_15px_#e10600]">
              95
            </div>
            <div>
              <span className="font-display text-lg tracking-wider text-white">
                CINEMATIC <span className="text-red-500">ARCHIVE</span>
              </span>
              <span className="hidden sm:inline-block text-[10px] font-mono text-zinc-500 ml-2">
                v2.0 BILINGUAL
              </span>
            </div>
          </div>

          {/* Interactive Global Quick Switch Bar */}
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={handleToggleGlobalLang}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300 hover:border-red-500/50 hover:text-white transition-all cursor-pointer"
              title="Toggle language mode across active character view"
            >
              <Globe className="w-3.5 h-3.5 text-red-500" />
              <span>{isArabic ? 'English View' : 'عرض باللغة العربية'}</span>
              <RefreshCw className="w-3 h-3 text-zinc-500" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Component with Interactive Bilingual Name System */}
      <main>
        <Hero
          character={activeCharacter}
          isArabic={isArabic}
          onToggleLanguage={(val) => setIsArabic(val)}
        />

        {/* Cinematic Supporting Portfolio Sections */}
        <PortfolioSections
          character={activeCharacter}
          isArabic={isArabic}
          allCharacters={CHARACTERS}
          onSelectCharacter={(id) => setSelectedCharacterId(id)}
        />
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-900 bg-zinc-950 py-8 text-center text-xs font-mono text-zinc-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            LIGHTNING McQUEEN // <span className="font-cairo text-zinc-400">برق بنزين</span> — CINEMATIC CHARACTER PORTFOLIO
          </div>
          <div>
            «تركيز. سرعة. أنا صاروخ.»
          </div>
        </div>
      </footer>
    </div>
  );
}
