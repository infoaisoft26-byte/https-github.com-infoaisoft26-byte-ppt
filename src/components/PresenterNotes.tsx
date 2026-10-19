import React from 'react';
import { SlideData } from '../types/presentation';
import { MessageSquareText, Lightbulb, Clock, Check } from 'lucide-react';

interface PresenterNotesProps {
  slide: SlideData;
  isOpen: boolean;
  onClose: () => void;
}

export const PresenterNotes: React.FC<PresenterNotesProps> = ({
  slide,
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="w-full max-w-[1240px] mx-auto mt-4 p-4 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl text-white transition-all">
      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <MessageSquareText className="w-5 h-5 text-amber-400" />
          <h4 className="text-sm font-bold font-['Outfit'] text-white">
            PRESENTER NOTES & TALKING POINTS — SLIDE {slide.id.toString().padStart(2, '0')}: {slide.title}
          </h4>
        </div>
        <div className="flex items-center gap-3 text-xs text-slate-400 font-mono">
          <span className="flex items-center gap-1 text-cyan-400">
            <Clock className="w-3.5 h-3.5" />
            Est. Time: ~1.5 mins
          </span>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white px-2 py-0.5 rounded bg-slate-800"
          >
            Hide
          </button>
        </div>
      </div>

      <div className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed space-y-2">
        <p className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
          {slide.speakerNotes}
        </p>

        {slide.id === 8 && (
          <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-2 text-xs text-amber-200">
            <Lightbulb className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <strong>Presentation Tip:</strong> Emphasize clearly to participants that the 5% daily allocation consists of 4% principal return plus 1% profit. The 100% principal is returned across 25 days, plus 25% profit, totaling 125% allocation. This transparency establishes long-term credibility.
            </div>
          </div>
        )}

        {slide.id === 7 && (
          <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-start gap-2 text-xs text-cyan-200">
            <Lightbulb className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
            <div>
              <strong>Key Value Proposition:</strong> Emphasize that there are zero mandatory qualification barriers or downline balancing conditions to receive Level Income across Levels 2 through 12.
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
