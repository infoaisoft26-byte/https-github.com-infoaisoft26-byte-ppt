import React from 'react';
import {
  Download,
  Printer,
  Maximize2,
  Minimize2,
  FileSpreadsheet,
  ShieldCheck,
  Grid,
  MonitorPlay,
  FileText,
  Calculator,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Loader2,
  Scale,
} from 'lucide-react';

interface PresentationHeaderProps {
  currentSlideIndex: number;
  totalSlides: number;
  viewMode: 'deck' | 'grid';
  setViewMode: (mode: 'deck' | 'grid') => void;
  showNotes: boolean;
  setShowNotes: (show: boolean) => void;
  isFullscreen: boolean;
  toggleFullscreen: () => void;
  onPrev: () => void;
  onNext: () => void;
  onOpenCalculator: () => void;
  onOpenComparison: () => void;
  onOpenCompliance: () => void;
  onDownloadPptx: () => void;
  isExportingPptx: boolean;
  exportProgress: { step: string; percent: number } | null;
  onDownloadPdf: () => void;
  isExportingPdf: boolean;
  onPrintPdf: () => void;
}

export const PresentationHeader: React.FC<PresentationHeaderProps> = ({
  currentSlideIndex,
  totalSlides,
  viewMode,
  setViewMode,
  showNotes,
  setShowNotes,
  isFullscreen,
  toggleFullscreen,
  onPrev,
  onNext,
  onOpenCalculator,
  onOpenComparison,
  onOpenCompliance,
  onDownloadPptx,
  isExportingPptx,
  exportProgress,
  onDownloadPdf,
  isExportingPdf,
  onPrintPdf,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-xl border-b border-slate-800/80 px-4 sm:px-6 py-3 transition-all">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
        {/* Brand Identity */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl overflow-hidden border border-amber-400/50 shadow-md bg-slate-900 flex items-center justify-center p-0.5">
            <img
              src="/global_finance_logo.jpg"
              alt="Global Finance"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-base font-extrabold font-['Outfit'] bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500 bg-clip-text text-transparent">
                GLOBAL FINANCE
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-400 font-mono font-bold">
                15 RECREATED SLIDES
              </span>
            </div>
            <p className="text-xs text-slate-400 font-medium">
              Official Investment Platform Deck • 100% USDT (BEP-20)
            </p>
          </div>
        </div>

        {/* View Mode & Utility Switchers */}
        <div className="flex items-center gap-1.5 bg-slate-900/90 p-1 rounded-2xl border border-slate-800 shadow-inner flex-wrap justify-center">
          <button
            onClick={() => setViewMode('deck')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold font-['Outfit'] transition flex items-center gap-1.5 ${
              viewMode === 'deck'
                ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <MonitorPlay className="w-3.5 h-3.5" />
            Slide Show
          </button>
          <button
            onClick={() => setViewMode('grid')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold font-['Outfit'] transition flex items-center gap-1.5 ${
              viewMode === 'grid'
                ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Grid className="w-3.5 h-3.5" />
            15-Slide Overview
          </button>
          <button
            onClick={onOpenComparison}
            className="px-3 py-1.5 rounded-xl text-xs font-bold font-['Outfit'] text-amber-300 hover:text-amber-200 hover:bg-amber-950/40 transition flex items-center gap-1.5 border border-amber-500/30 hover:border-amber-400 shadow-sm"
          >
            <Scale className="w-3.5 h-3.5 text-amber-400" />
            Compare 25-Day Plans
          </button>
          <button
            onClick={onOpenCalculator}
            className="px-3 py-1.5 rounded-xl text-xs font-bold font-['Outfit'] text-cyan-400 hover:text-cyan-300 hover:bg-cyan-950/40 transition flex items-center gap-1.5 border border-transparent hover:border-cyan-800"
          >
            <Calculator className="w-3.5 h-3.5" />
            ROI Calculator
          </button>
          <button
            onClick={onOpenCompliance}
            className="px-3 py-1.5 rounded-xl text-xs font-bold font-['Outfit'] text-emerald-400 hover:text-emerald-300 hover:bg-emerald-950/40 transition flex items-center gap-1.5 border border-transparent hover:border-emerald-800"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            QC Audit (10/10)
          </button>
        </div>

        {/* Export & Presentation Controls */}
        <div className="flex items-center gap-2">
          {viewMode === 'deck' && (
            <div className="flex items-center gap-1 mr-2 bg-slate-900 px-2 py-1 rounded-xl border border-slate-800">
              <button
                onClick={onPrev}
                disabled={currentSlideIndex === 0}
                className="p-1 rounded-lg hover:bg-slate-800 disabled:opacity-30 disabled:hover:bg-transparent text-slate-300 hover:text-white transition"
                title="Previous Slide (Left Arrow)"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-xs font-mono font-bold text-amber-400 px-1">
                {(currentSlideIndex + 1).toString().padStart(2, '0')}/{totalSlides}
              </span>
              <button
                onClick={onNext}
                disabled={currentSlideIndex === totalSlides - 1}
                className="p-1 rounded-lg hover:bg-slate-800 disabled:opacity-30 disabled:hover:bg-transparent text-slate-300 hover:text-white transition"
                title="Next Slide (Right Arrow)"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* Toggle Speaker Notes */}
          <button
            onClick={() => setShowNotes(!showNotes)}
            className={`p-2 rounded-xl text-xs border transition flex items-center gap-1 ${
              showNotes
                ? 'bg-amber-500/20 border-amber-400/50 text-amber-300'
                : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
            }`}
            title="Toggle Presenter Speaker Notes"
          >
            <FileText className="w-4 h-4" />
          </button>

          {/* Fullscreen */}
          <button
            onClick={toggleFullscreen}
            className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition"
            title="Toggle Fullscreen (F)"
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>

          {/* Direct PDF Download Button */}
          <button
            onClick={onDownloadPdf}
            disabled={isExportingPdf}
            className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black text-xs font-['Outfit'] shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 transition flex items-center gap-1.5 disabled:opacity-60"
            title="Download Complete 15-Slide Presentation in PDF Format"
          >
            {isExportingPdf ? (
              <>
                <Loader2 className="w-3.5 h-3.5 animate-spin" />
                <span>Downloading PDF...</span>
              </>
            ) : (
              <>
                <Download className="w-3.5 h-3.5" />
                <span>Download .PDF</span>
              </>
            )}
          </button>

          {/* PPTX Download Button */}
          <button
            onClick={onDownloadPptx}
            disabled={isExportingPptx}
            className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-xs font-['Outfit'] shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 transition flex items-center gap-1.5 disabled:opacity-60"
            title="Download Editable PowerPoint (.pptx)"
          >
            {isExportingPptx ? (
              <>
                <Loader2 className="w-3.5 h-3.5 animate-spin" />
                <span>{exportProgress ? `${exportProgress.percent}%` : 'Exporting...'}</span>
              </>
            ) : (
              <>
                <Download className="w-3.5 h-3.5" />
                <span>Download .PPTX</span>
              </>
            )}
          </button>

          {/* Print fallback */}
          <button
            onClick={onPrintPdf}
            className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-white transition"
            title="Browser Print / Quick PDF Preview"
          >
            <Printer className="w-4 h-4 text-slate-400" />
          </button>
        </div>
      </div>
    </header>
  );
};
