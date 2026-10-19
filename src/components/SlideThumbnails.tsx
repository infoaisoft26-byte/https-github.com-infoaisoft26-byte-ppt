import React from 'react';
import { SlideData } from '../types/presentation';

interface SlideThumbnailsProps {
  slides: SlideData[];
  currentIndex: number;
  onSelectSlide: (index: number) => void;
}

export const SlideThumbnails: React.FC<SlideThumbnailsProps> = ({
  slides,
  currentIndex,
  onSelectSlide,
}) => {
  return (
    <div className="w-full bg-slate-950/90 border-t border-slate-800/80 px-4 py-3 overflow-x-auto">
      <div className="max-w-7xl mx-auto flex items-center gap-3">
        {slides.map((s, idx) => {
          const isActive = idx === currentIndex;
          return (
            <button
              key={s.id}
              onClick={() => onSelectSlide(idx)}
              className={`shrink-0 w-36 text-left p-2 rounded-xl transition duration-200 border flex flex-col justify-between group ${
                isActive
                  ? 'bg-gradient-to-br from-amber-500/20 to-slate-900 border-amber-400 shadow-md shadow-amber-500/10'
                  : 'bg-slate-900/60 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span
                  className={`text-[10px] font-mono font-bold px-1.5 py-0.2 rounded ${
                    isActive
                      ? 'bg-amber-400 text-slate-950'
                      : 'bg-slate-800 text-slate-400 group-hover:text-slate-200'
                  }`}
                >
                  {s.id.toString().padStart(2, '0')}
                </span>
                <span className="text-[9px] text-slate-500 uppercase font-mono truncate max-w-[60px]">
                  {s.category}
                </span>
              </div>
              <div className="text-[11px] font-bold text-slate-200 truncate font-['Outfit'] group-hover:text-amber-400 transition">
                {s.title}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
