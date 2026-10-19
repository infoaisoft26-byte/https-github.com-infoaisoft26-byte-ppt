import React from 'react';
import { SlideData } from '../types/presentation';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface SlideGridProps {
  slides: SlideData[];
  onSelectSlide: (index: number) => void;
}

export const SlideGrid: React.FC<SlideGridProps> = ({ slides, onSelectSlide }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-800">
        <div>
          <h2 className="text-xl sm:text-2xl font-black font-['Outfit'] text-white flex items-center gap-2">
            GLOBAL FINANCE PRESENTATION DECK
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-mono border border-amber-400/40">
              15 RECREATED SLIDES
            </span>
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Rebranded from original reference • Excluded slides 3, 4, 5, 6, 17 • 100% USDT financial model
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {slides.map((slide, idx) => (
          <div
            key={slide.id}
            onClick={() => onSelectSlide(idx)}
            className="group relative rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800 hover:border-amber-400/70 p-4 shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between hover:shadow-2xl hover:shadow-amber-500/10 hover:-translate-y-1"
          >
            {/* Top row */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 text-slate-950 font-black font-mono text-xs flex items-center justify-center shadow">
                  {slide.id.toString().padStart(2, '0')}
                </span>
                <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-slate-800 text-cyan-400 border border-slate-700">
                  {slide.category}
                </span>
              </div>
              <div className="w-7 h-7 rounded-full bg-slate-800 group-hover:bg-amber-400 group-hover:text-slate-950 text-slate-400 flex items-center justify-center transition">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>

            {/* Slide title & subtitle */}
            <div className="mb-4">
              <h3 className="text-sm font-bold text-white font-['Outfit'] group-hover:text-amber-300 transition">
                {slide.title}
              </h3>
              {slide.subtitle && (
                <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                  {slide.subtitle}
                </p>
              )}
            </div>

            {/* Bottom info pill */}
            <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500 font-mono">
              <span>Original Ref: Page {slide.originalPageNumber}</span>
              <span className="text-emerald-400 flex items-center gap-1 font-sans font-medium text-[10px]">
                <CheckCircle2 className="w-3 h-3" /> Rebranded
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
