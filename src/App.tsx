import React, { useState, useEffect, useCallback } from 'react';
import confetti from 'canvas-confetti';
import { GLOBAL_FINANCE_SLIDES } from './data/presentationData';
import { exportGlobalFinancePresentation } from './services/pptxExporter';
import { downloadGlobalFinancePdf } from './services/pdfExporter';
import { PresentationHeader } from './components/PresentationHeader';
import { SlideViewer } from './components/SlideViewer';
import { SlideThumbnails } from './components/SlideThumbnails';
import { SlideGrid } from './components/SlideGrid';
import { PresenterNotes } from './components/PresenterNotes';
import { CalculatorModal } from './components/CalculatorModal';
import { ComparisonModal } from './components/ComparisonModal';
import { ComplianceModal } from './components/ComplianceModal';
import {
  ChevronLeft,
  ChevronRight,
  Download,
  Printer,
  Sparkles,
  ShieldCheck,
  Calculator,
  Scale,
  CheckCircle2,
} from 'lucide-react';

export default function App() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const [viewMode, setViewMode] = useState<'deck' | 'grid'>('deck');
  const [showNotes, setShowNotes] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [isCalculatorOpen, setIsCalculatorOpen] = useState<boolean>(false);
  const [isComparisonOpen, setIsComparisonOpen] = useState<boolean>(false);
  const [isComplianceOpen, setIsComplianceOpen] = useState<boolean>(false);

  // PPTX & PDF Export State
  const [isExportingPptx, setIsExportingPptx] = useState<boolean>(false);
  const [isExportingPdf, setIsExportingPdf] = useState<boolean>(false);
  const [exportProgress, setExportProgress] = useState<{ step: string; percent: number } | null>(null);
  const [exportToast, setExportToast] = useState<string | null>(null);

  const slides = GLOBAL_FINANCE_SLIDES;
  const currentSlide = slides[currentSlideIndex];

  // Next / Previous slide actions
  const nextSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => {
      const next = Math.min(prev + 1, slides.length - 1);
      if (next === slides.length - 1 && prev !== next) {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.7 },
          colors: ['#F59E0B', '#00F0FF', '#3B82F6'],
        });
      }
      return next;
    });
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => Math.max(prev - 1, 0));
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isCalculatorOpen || isComparisonOpen || isComplianceOpen) return;

      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp' || e.key === 'Backspace') {
        e.preventDefault();
        prevSlide();
      } else if (e.key === 'f' || e.key === 'F') {
        toggleFullscreen();
      } else if (e.key === 'n' || e.key === 'N') {
        setShowNotes((prev) => !prev);
      } else if (e.key === 'c' || e.key === 'C') {
        setIsCalculatorOpen(true);
      } else if (e.key === 'v' || e.key === 'V') {
        setIsComparisonOpen(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide, isCalculatorOpen, isComparisonOpen, isComplianceOpen]);

  // Fullscreen toggle
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {});
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {});
    }
  };

  useEffect(() => {
    const onFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', onFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', onFullscreenChange);
  }, []);

  // PPTX Export Trigger
  const handleDownloadPptx = async () => {
    try {
      setIsExportingPptx(true);
      setExportProgress({ step: 'Preparing official PPTX presentation...', percent: 50 });

      // Immediate download of verified prebuilt PPTX with fallback to dynamic client compilation
      try {
        const response = await fetch('/GLOBAL_FINANCE_OFFICIAL_PRESENTATION.pptx');
        if (response.ok) {
          const blob = await response.blob();
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = 'GLOBAL_FINANCE_OFFICIAL_PRESENTATION.pptx';
          document.body.appendChild(a);
          a.click();
          window.URL.revokeObjectURL(url);
          document.body.removeChild(a);
        } else {
          throw new Error('Fallback to client generator');
        }
      } catch (fetchErr) {
        await exportGlobalFinancePresentation((step, percent) => {
          setExportProgress({ step, percent });
        });
      }

      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#F59E0B', '#00F0FF', '#10B981'],
      });

      setExportToast('GLOBAL_FINANCE_OFFICIAL_PRESENTATION.pptx downloaded successfully!');
      setTimeout(() => setExportToast(null), 5000);
    } catch (err) {
      console.error('Export failed', err);
      setExportToast('Export failed. Please try again.');
      setTimeout(() => setExportToast(null), 4000);
    } finally {
      setIsExportingPptx(false);
      setExportProgress(null);
    }
  };

  // Direct PDF Download Trigger
  const handleDownloadPdf = async () => {
    try {
      setIsExportingPdf(true);
      await downloadGlobalFinancePdf();

      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#00F0FF', '#3B82F6', '#F59E0B'],
      });

      setExportToast('GLOBAL_FINANCE_OFFICIAL_PRESENTATION.pdf downloaded successfully!');
      setTimeout(() => setExportToast(null), 5000);
    } catch (err) {
      console.error('PDF Download failed', err);
      setExportToast('PDF Download failed. Please try again.');
      setTimeout(() => setExportToast(null), 4000);
    } finally {
      setIsExportingPdf(false);
    }
  };

  const handlePrintPdf = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-['Plus_Jakarta_Sans'] selection:bg-cyan-500 selection:text-black">
      {/* Toast Notification */}
      {exportToast && (
        <div className="fixed bottom-6 right-6 z-50 p-4 rounded-2xl bg-slate-900 border-2 border-emerald-500/80 shadow-2xl text-white flex items-center gap-3 animate-fade-in no-print">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
          <span className="text-xs sm:text-sm font-semibold">{exportToast}</span>
        </div>
      )}

      {/* Top Header */}
      <PresentationHeader
        currentSlideIndex={currentSlideIndex}
        totalSlides={slides.length}
        viewMode={viewMode}
        setViewMode={setViewMode}
        showNotes={showNotes}
        setShowNotes={setShowNotes}
        isFullscreen={isFullscreen}
        toggleFullscreen={toggleFullscreen}
        onPrev={prevSlide}
        onNext={nextSlide}
        onOpenCalculator={() => setIsCalculatorOpen(true)}
        onOpenComparison={() => setIsComparisonOpen(true)}
        onOpenCompliance={() => setIsComplianceOpen(true)}
        onDownloadPptx={handleDownloadPptx}
        isExportingPptx={isExportingPptx}
        exportProgress={exportProgress}
        onDownloadPdf={handleDownloadPdf}
        isExportingPdf={isExportingPdf}
        onPrintPdf={handlePrintPdf}
      />

      {/* Slide Deck View */}
      {viewMode === 'deck' ? (
        <div className="flex-1 flex flex-col justify-between p-4 sm:p-6 no-print">
          {/* Progress Bar */}
          <div className="w-full max-w-[1240px] mx-auto mb-3">
            <div className="w-full h-1 bg-slate-900 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-cyan-400 to-amber-400 transition-all duration-300"
                style={{ width: `${((currentSlideIndex + 1) / slides.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Main Slide Viewer Canvas */}
          <div className="relative w-full flex-1 flex items-center justify-center">
            {/* Quick left/right floating arrows */}
            <button
              onClick={prevSlide}
              disabled={currentSlideIndex === 0}
              className="absolute left-2 sm:left-4 z-20 w-11 h-11 rounded-full bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 text-white flex items-center justify-center transition disabled:opacity-0 disabled:pointer-events-none shadow-xl hover:scale-105"
              title="Previous Slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <SlideViewer
              slide={currentSlide}
              totalSlides={slides.length}
              onNext={nextSlide}
              onPrev={prevSlide}
              onOpenComparison={() => setIsComparisonOpen(true)}
            />

            <button
              onClick={nextSlide}
              disabled={currentSlideIndex === slides.length - 1}
              className="absolute right-2 sm:right-4 z-20 w-11 h-11 rounded-full bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 text-white flex items-center justify-center transition disabled:opacity-0 disabled:pointer-events-none shadow-xl hover:scale-105"
              title="Next Slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Presenter Notes Box (Collapsible) */}
          <PresenterNotes
            slide={currentSlide}
            isOpen={showNotes}
            onClose={() => setShowNotes(false)}
          />

          {/* Bottom Thumbnails Carousel */}
          <div className="mt-4">
            <SlideThumbnails
              slides={slides}
              currentIndex={currentSlideIndex}
              onSelectSlide={(idx) => setCurrentSlideIndex(idx)}
            />
          </div>
        </div>
      ) : (
        /* 15-Slide Master Grid View */
        <div className="flex-1 no-print">
          <SlideGrid
            slides={slides}
            onSelectSlide={(idx) => {
              setCurrentSlideIndex(idx);
              setViewMode('deck');
            }}
          />
        </div>
      )}

      {/* Hidden Multi-Page Print Layout (Only rendered during Print/PDF export) */}
      <div className="hidden print-only print:block space-y-4">
        {slides.map((s) => (
          <div key={s.id} className="print-slide">
            <SlideViewer slide={s} totalSlides={slides.length} />
          </div>
        ))}
      </div>

      {/* Side-by-Side 25-Day Cycle Comparison Modal */}
      <ComparisonModal
        isOpen={isComparisonOpen}
        onClose={() => setIsComparisonOpen(false)}
      />

      {/* Interactive Calculator Modal */}
      <CalculatorModal
        isOpen={isCalculatorOpen}
        onClose={() => setIsCalculatorOpen(false)}
      />

      {/* Quality Control Compliance Modal */}
      <ComplianceModal
        isOpen={isComplianceOpen}
        onClose={() => setIsComplianceOpen(false)}
      />
    </div>
  );
}
