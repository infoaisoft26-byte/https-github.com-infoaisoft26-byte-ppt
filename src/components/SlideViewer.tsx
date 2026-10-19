import React from 'react';
import { SlideData } from '../types/presentation';
import {
  ShieldCheck,
  TrendingUp,
  Users,
  Award,
  Globe,
  Zap,
  UserPlus,
  Network,
  Percent,
  Coins,
  Layers,
  Crown,
  Wallet,
  Clock,
  Plane,
  Building2,
  Lock,
  Infinity as InfinityIcon,
  CheckCircle2,
  ArrowRight,
  Info,
  Scale,
} from 'lucide-react';

interface SlideViewerProps {
  slide: SlideData;
  totalSlides: number;
  onNext?: () => void;
  onPrev?: () => void;
  onOpenComparison?: () => void;
}

export const SlideViewer: React.FC<SlideViewerProps> = ({
  slide,
  totalSlides,
  onOpenComparison,
}) => {
  return (
    <div className="relative w-full aspect-[16/9] max-w-[1240px] mx-auto bg-gradient-to-br from-[#060b19] via-[#091329] to-[#040814] rounded-2xl border border-slate-800 shadow-2xl overflow-hidden flex flex-col justify-between select-none text-white transition-all duration-300">
      {/* Background visual accents */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-600 via-transparent to-transparent" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Slide Top Branding Header (Except on Cover Slide 1 and Thank You Slide 15) */}
      {slide.id !== 1 && slide.id !== 15 && (
        <header className="relative z-10 px-8 py-3 bg-slate-900/80 backdrop-blur-md border-b border-slate-800/80 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg overflow-hidden border border-amber-500/40 shadow-sm flex items-center justify-center bg-slate-950">
              <img
                src="/global_finance_logo.jpg"
                alt="Global Finance Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-extrabold tracking-wider bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500 bg-clip-text text-transparent font-['Outfit']">
                  GLOBAL FINANCE™
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-400 font-mono font-medium">
                  USDT PLATFORM
                </span>
              </div>
              <p className="text-[11px] text-cyan-300/80 tracking-wide font-medium">
                Digital Finance for a Smarter Future
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden sm:flex items-center gap-2 text-xs font-semibold text-amber-400/90 tracking-widest uppercase">
              <span>Trust</span>
              <span className="text-cyan-500">•</span>
              <span>Growth</span>
              <span className="text-cyan-500">•</span>
              <span>Security</span>
              <span className="text-cyan-500">•</span>
              <span>Together</span>
            </div>
            <div className="px-3 py-1 rounded-md bg-slate-800/70 border border-slate-700 text-xs font-mono font-bold text-amber-400">
              {slide.id.toString().padStart(2, '0')} / {totalSlides}
            </div>
          </div>
        </header>
      )}

      {/* Slide Main Content Area */}
      <main className="relative z-10 flex-1 px-8 py-5 flex flex-col justify-center overflow-hidden">
        {renderSlideContent(slide, onOpenComparison)}
      </main>

      {/* Slide Bottom Bar (Except Cover and Thank you) */}
      {slide.id !== 1 && slide.id !== 15 && (
        <footer className="relative z-10 px-8 py-2.5 bg-slate-950/80 backdrop-blur-md border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-400">
          <div className="flex items-center gap-3">
            <span className="text-amber-400 font-semibold tracking-wide">GLOBAL FINANCE</span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-300">Decentralized USDT Yield & Staking Ecosystem</span>
          </div>
          <div className="flex items-center gap-2 font-mono text-[10px] text-cyan-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            100% BEP-20 USDT STABLECOIN ARCHITECTURE
          </div>
        </footer>
      )}
    </div>
  );
};

function renderSlideContent(slide: SlideData, onOpenComparison?: () => void) {
  switch (slide.content.type) {
    case 'cover': {
      const c = slide.content;
      return (
        <div className="h-full flex flex-col items-center justify-between py-2 text-center">
          <div className="flex items-center justify-between w-full px-4 text-xs font-semibold tracking-widest text-amber-400 uppercase">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span className="text-cyan-300">OFFICIAL PRESENTATION DECK</span>
            </div>
            <div>TRUST • GROWTH • SECURITY • TOGETHER</div>
          </div>

          <div className="my-auto flex flex-col items-center">
            {/* Global Finance Logo Centerpiece */}
            <div className="relative group mb-3">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-amber-500 rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition duration-700" />
              <div className="relative w-48 sm:w-64 h-24 sm:h-32 rounded-2xl overflow-hidden border-2 border-amber-400/50 shadow-2xl bg-slate-950/90 flex items-center justify-center p-2">
                <img
                  src="/global_finance_logo.jpg"
                  alt="Global Finance 3D Logo"
                  className="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(245,158,11,0.4)]"
                />
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-400 text-xs font-semibold tracking-widest uppercase mb-2">
              <SparkleIcon className="w-3.5 h-3.5" />
              {c.welcomeText}
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-['Outfit'] tracking-tight text-white mb-2 leading-tight">
              Digital Finance for a{' '}
              <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">
                Smarter Future
              </span>
            </h1>

            <p className="max-w-2xl text-xs sm:text-sm text-slate-300 font-normal leading-relaxed mb-6">
              {c.subHeadline}
            </p>

            {/* 4 Pillars */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-3xl">
              {c.pillars.map((p, i) => (
                <div
                  key={i}
                  className="px-3 py-2.5 rounded-xl bg-slate-900/80 border border-amber-500/30 shadow-lg flex items-center justify-center gap-2 group hover:border-amber-400 transition"
                >
                  <PillarIcon name={p.icon} className="w-4 h-4 text-amber-400 group-hover:scale-110 transition" />
                  <span className="text-xs font-bold text-white font-['Outfit']">{p.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full pt-3 border-t border-slate-800/80 flex items-center justify-center gap-6 text-xs font-medium text-cyan-300 tracking-wider">
            {c.footerPillars.map((fp, i) => (
              <React.Fragment key={i}>
                <span>{fp}</span>
                {i < c.footerPillars.length - 1 && <span className="text-amber-400/60">•</span>}
              </React.Fragment>
            ))}
          </div>
        </div>
      );
    }

    case 'about': {
      const c = slide.content;
      return (
        <div className="h-full flex flex-col justify-between py-1">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="px-3 py-0.5 rounded-md bg-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider border border-amber-500/30">
                OVERVIEW
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-['Outfit']">
                ABOUT{' '}
                <span className="bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">
                  GLOBAL FINANCE
                </span>
              </h2>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/70 border-l-4 border-l-cyan-400 border-y border-r border-slate-800 shadow-md mb-4">
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-medium">
                {c.leadParagraph}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {c.pillars.map((p, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800 hover:border-amber-400/60 shadow-xl transition group flex flex-col justify-between"
              >
                <div>
                  <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-600/30 to-cyan-500/20 border border-cyan-400/40 flex items-center justify-center mb-3 group-hover:scale-105 transition">
                    <PillarIcon name={p.icon} className="w-5 h-5 text-cyan-400" />
                  </div>
                  <h3 className="text-xs sm:text-sm font-bold text-amber-400 tracking-wide mb-1 font-['Outfit']">
                    {p.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {p.description}
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-slate-800/80 flex items-center text-[10px] text-cyan-400 font-semibold gap-1">
                  <span>Core Principle</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }

    case 'company': {
      const c = slide.content;
      return (
        <div className="h-full flex flex-col justify-between py-1">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-['Outfit']">
                OUR{' '}
                <span className="bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">
                  COMPANY
                </span>
              </h2>
              <div className="flex items-center gap-1.5 flex-wrap">
                {c.pillBadges.map((badge, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-0.5 rounded-full bg-cyan-950/70 border border-cyan-500/40 text-[10px] font-bold text-cyan-300 tracking-wider"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 my-auto items-stretch">
            {/* Left description cards */}
            <div className="md:col-span-8 flex flex-col justify-center gap-3">
              {c.paragraphs.map((p, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs sm:text-sm text-slate-300 leading-relaxed"
                >
                  {p}
                </div>
              ))}
            </div>

            {/* Right quote and executive card */}
            <div className="md:col-span-4 rounded-xl bg-gradient-to-b from-[#0e1d3b] to-[#071124] border-2 border-amber-500/50 p-5 flex flex-col justify-between text-center shadow-xl">
              <div className="my-auto">
                <span className="text-amber-400 font-serif text-3xl leading-none">“</span>
                <p className="text-base sm:text-lg font-bold text-amber-300 font-['Outfit'] my-1">
                  Together We Build a Brighter Future
                </p>
                <span className="text-amber-400 font-serif text-3xl leading-none">”</span>
              </div>

              <div className="pt-3 border-t border-amber-500/30">
                <div className="text-sm sm:text-base font-extrabold tracking-wide text-amber-300 font-['Outfit'] uppercase drop-shadow-[0_1px_4px_rgba(245,158,11,0.25)]">
                  {c.executive.name}
                </div>
                <div className="text-[11px] font-semibold text-cyan-400">
                  {c.executive.title}
                </div>
              </div>
            </div>
          </div>

          {/* 4 Bottom badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-2">
            {c.footerBadges.map((fb, idx) => (
              <div
                key={idx}
                className="px-3 py-2 rounded-lg bg-slate-900/70 border border-slate-800 flex items-center justify-center gap-2 text-center"
              >
                <div className="w-2 h-2 rounded-full bg-amber-400" />
                <div className="text-left">
                  <div className="text-[11px] font-bold text-white font-['Outfit']">{fb.title}</div>
                  <div className="text-[9px] text-slate-400">{fb.subtitle}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }

    case 'vision_mission': {
      const c = slide.content;
      return (
        <div className="h-full flex flex-col justify-between py-1">
          <div className="mb-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-['Outfit']">
              OUR{' '}
              <span className="bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">
                VISION & MISSION
              </span>
            </h2>
            <p className="text-xs text-cyan-300/80">
              Clear Strategic Roadmap for Sustainable Digital Wealth in USDT
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-auto">
            {/* Vision Box */}
            <div className="rounded-xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border-2 border-amber-500/40 p-4 sm:p-5 shadow-xl flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-400/50 flex items-center justify-center text-amber-400">
                    <Zap className="w-4 h-4" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-amber-400 font-['Outfit']">
                    OUR VISION
                  </h3>
                </div>
                <div className="space-y-2.5">
                  {c.visionPoints.map((pt, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs sm:text-[13px] text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-4 pt-2 border-t border-slate-800 text-[10px] text-amber-400/80 font-mono">
                LONG-TERM DIRECTION • FINANCIAL INCLUSION
              </div>
            </div>

            {/* Mission Box */}
            <div className="rounded-xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border-2 border-cyan-500/40 p-4 sm:p-5 shadow-xl flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-400/50 flex items-center justify-center text-cyan-400">
                    <Globe className="w-4 h-4" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-cyan-400 font-['Outfit']">
                    OUR MISSION
                  </h3>
                </div>
                <div className="space-y-2.5">
                  {c.missionPoints.map((pt, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs sm:text-[13px] text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-4 pt-2 border-t border-slate-800 text-[10px] text-cyan-400/80 font-mono">
                EXECUTION EXCELLENCE • USER TRANSPARENCY
              </div>
            </div>
          </div>

          {/* Bottom Pillars */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {c.footerPillars.map((fp, i) => (
              <div
                key={i}
                className="px-3 py-1.5 rounded-lg bg-slate-900/60 border border-slate-800 text-center"
              >
                <div className="text-[11px] font-bold text-white font-['Outfit']">{fp.title}</div>
                <div className="text-[9px] text-cyan-400 font-medium">{fp.subtitle}</div>
              </div>
            ))}
          </div>
        </div>
      );
    }

    case 'types_of_incomes': {
      const c = slide.content;
      return (
        <div className="h-full flex flex-col justify-between py-1">
          <div className="mb-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-['Outfit']">
              TYPES OF{' '}
              <span className="bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">
                INCOMES
              </span>
            </h2>
            <p className="text-xs text-cyan-300">
              7 Multi-Dimensional Streams of Financial Reward in USDT
            </p>
          </div>

          <div className="grid grid-cols-1 gap-2 my-auto max-w-4xl mx-auto w-full">
            {c.incomes.map((inc, i) => (
              <div
                key={i}
                className={`p-2.5 sm:px-4 sm:py-2.5 rounded-xl border flex items-center justify-between transition group shadow-md ${
                  inc.number === '03'
                    ? 'bg-gradient-to-r from-slate-900 via-amber-950/30 to-slate-900 border-amber-500/60'
                    : 'bg-slate-900/80 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 text-slate-950 font-black text-xs flex items-center justify-center font-mono shadow-sm">
                    {inc.number}
                  </span>
                  <div className="w-7 h-7 rounded-md bg-slate-800 flex items-center justify-center text-cyan-400">
                    <PillarIcon name={inc.icon} className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-white tracking-wide font-['Outfit']">
                    {inc.title}
                  </span>
                </div>

                {inc.highlight && (
                  <span className="text-[11px] sm:text-xs font-semibold px-2.5 py-0.5 rounded-full bg-cyan-950/70 border border-cyan-500/40 text-cyan-300">
                    {inc.highlight}
                  </span>
                )}
              </div>
            ))}
          </div>

          <div className="text-center text-[10px] text-slate-400 font-mono mt-1">
            ALL EARNINGS CALCULATED AND PAID DIRECTLY IN BEP-20 USDT
          </div>
        </div>
      );
    }

    case 'referral_income': {
      const c = slide.content;
      return (
        <div className="h-full flex flex-col justify-between py-1">
          <div className="mb-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-['Outfit']">
              <span className="text-amber-400 font-mono mr-2">01</span>
              REFERRAL INCOME
            </h2>
            <p className="text-xs text-cyan-300">
              Instant Direct Affiliate Commission Credited in USDT
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 my-auto items-stretch">
            {/* Giant 10% Highlight Box */}
            <div className="md:col-span-5 rounded-2xl bg-gradient-to-br from-[#0c1a3b] via-[#091530] to-[#050c1e] border-2 border-amber-500/60 p-6 flex flex-col items-center justify-center text-center shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-amber-500/5 blur-xl pointer-events-none" />
              <div className="text-6xl sm:text-7xl font-black font-['Outfit'] bg-gradient-to-b from-amber-300 via-amber-400 to-amber-600 bg-clip-text text-transparent filter drop-shadow-[0_4px_12px_rgba(245,158,11,0.4)]">
                {c.percentage}
              </div>
              <div className="text-lg sm:text-xl font-bold text-white font-['Outfit'] mt-1">
                Referral Income Every Referral
              </div>
              <div className="mt-3 px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 text-xs font-mono font-medium">
                Instant USDT Settlement
              </div>
            </div>

            {/* Explanatory Cards */}
            <div className="md:col-span-7 flex flex-col justify-between gap-3">
              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs sm:text-sm text-slate-300 leading-relaxed">
                {c.subheadline}
              </div>

              <div className="space-y-2.5">
                {c.features.map((f, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-start gap-3 hover:border-amber-400/40 transition"
                  >
                    <div className="w-7 h-7 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-white font-['Outfit']">
                        {f.title}
                      </h4>
                      <p className="text-xs text-slate-400 mt-0.5 leading-normal">
                        {f.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="p-2 rounded-lg bg-slate-900/70 border border-slate-800 flex items-center justify-between text-xs text-slate-400 font-mono">
            <span>NO SPONSOR LIMITS</span>
            <span className="text-amber-400 font-bold">10% APPLIED TO EVERY REPURCHASE</span>
            <span>DIRECT WITHDRAWABLE</span>
          </div>
        </div>
      );
    }

    case 'level_income': {
      const c = slide.content;
      return (
        <div className="h-full flex flex-col justify-between py-1">
          <div className="mb-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-['Outfit']">
              <span className="text-amber-400 font-mono mr-2">02</span>
              LEVEL INCOME
            </h2>
            <p className="text-xs text-cyan-300">
              Deep Downstream Team Growth Distribution
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 my-auto items-center">
            {/* Left 0.25% Card */}
            <div className="md:col-span-5 rounded-2xl bg-gradient-to-br from-[#0c1a3b] via-[#091530] to-[#050c1e] border-2 border-amber-500/60 p-5 flex flex-col items-center justify-center text-center shadow-xl">
              <div className="text-5xl sm:text-6xl font-black font-['Outfit'] bg-gradient-to-b from-amber-300 via-amber-400 to-amber-600 bg-clip-text text-transparent">
                {c.percentage}
              </div>
              <div className="text-base sm:text-lg font-bold text-white font-['Outfit'] mt-1">
                LEVEL INCOME
              </div>
              <div className="text-xs text-cyan-300 font-medium max-w-xs mt-1">
                From Level 2 To Level 12 on every qualifying referral investment
              </div>
            </div>

            {/* Right Tier Table */}
            <div className="md:col-span-7 rounded-xl bg-slate-900/80 border border-slate-800 overflow-hidden shadow-xl">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-950/80 text-amber-400 font-mono text-[11px] border-b border-slate-800">
                  <tr>
                    <th className="py-2.5 px-3">Level Tier</th>
                    <th className="py-2.5 px-3">Percentage</th>
                    <th className="py-2.5 px-3">Condition</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 font-sans">
                  {c.levelBreakdown.map((row, i) => (
                    <tr key={i} className="hover:bg-slate-800/40 transition">
                      <td className="py-2 px-3 font-semibold text-white">{row.levelRange}</td>
                      <td className="py-2 px-3 font-mono font-bold text-cyan-400">{row.rate}</td>
                      <td className="py-2 px-3 text-[11px] text-emerald-400 font-medium">
                        {row.note}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Prominent Banner */}
          <div className="p-3 rounded-xl bg-gradient-to-r from-amber-500/20 via-amber-500/30 to-amber-500/20 border-2 border-amber-400/80 text-center shadow-lg">
            <span className="text-xs sm:text-sm font-black text-amber-300 tracking-wider font-['Outfit'] uppercase">
              ★ {c.disclaimerBanner} ★
            </span>
          </div>
        </div>
      );
    }

    case 'daily_withdrawal_roi': {
      const c = slide.content;
      return (
        <div className="h-full flex flex-col justify-between py-1">
          <div className="mb-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-['Outfit']">
              <span className="text-amber-400 font-mono mr-2">03</span>
              DAILY WITHDRAWAL ROI INCOME
            </h2>
            <p className="text-xs text-cyan-300">
              5% Daily Allocation: 1% Profit + 4% Principal for 25 Days
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 my-auto items-stretch">
            {/* Left Highlights Box */}
            <div className="md:col-span-5 rounded-2xl bg-gradient-to-br from-[#0c1a3b] via-[#091530] to-[#050c1e] border-2 border-amber-500/60 p-5 flex flex-col justify-between shadow-xl">
              <div>
                <div className="text-5xl sm:text-6xl font-black font-['Outfit'] text-center bg-gradient-to-b from-amber-300 to-amber-500 bg-clip-text text-transparent">
                  {c.totalDailyRate}
                </div>
                <div className="text-sm font-bold text-white text-center font-['Outfit'] uppercase tracking-wider">
                  DAILY ALLOCATION
                </div>
                <div className="text-xs text-center text-cyan-300 font-semibold mt-1">
                  ( {c.profitRate} Profit + {c.principalRate} Principal for {c.cycleDays} Days )
                </div>
              </div>

              <div className="my-2 p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-center">
                <div className="text-[11px] text-slate-400 uppercase font-mono">Investment Range</div>
                <div className="text-lg font-black text-amber-400 font-mono mt-0.5">
                  {c.investmentRange}
                </div>
                <div className="text-[10px] text-slate-400 mt-1">
                  {c.investmentMin}
                </div>
              </div>

              <div className="flex items-center justify-around text-center pt-2 border-t border-slate-800/80">
                <div>
                  <div className="text-[10px] text-slate-400">Cycle Duration</div>
                  <div className="text-sm font-bold text-white font-mono">{c.cycleDays} Days</div>
                </div>
                <div className="w-px h-6 bg-slate-800" />
                <div>
                  <div className="text-[10px] text-slate-400">Total Cycle Allocation</div>
                  <div className="text-sm font-bold text-amber-400 font-mono">{c.totalAllocationRate}</div>
                </div>
              </div>
            </div>

            {/* Right Verified Example Table */}
            <div className="md:col-span-7 flex flex-col justify-between">
              <div className="rounded-xl bg-slate-900/80 border border-slate-800 overflow-hidden shadow-xl">
                <div className="bg-slate-950/80 px-3 py-2 border-b border-slate-800 flex items-center justify-between text-xs flex-wrap gap-2">
                  <span className="font-bold text-amber-400 font-['Outfit']">
                    Global Finance 25-Day Model Example ({c.calculationExample.investment} Investment)
                  </span>
                  <div className="flex items-center gap-2">
                    {onOpenComparison && (
                      <button
                        onClick={onOpenComparison}
                        className="px-2 py-0.5 rounded-md bg-amber-500/20 hover:bg-amber-500/30 border border-amber-400/50 text-amber-300 font-mono text-[10px] font-bold transition flex items-center gap-1 shadow-sm"
                        title="Compare 2 USDT investment amounts side-by-side"
                      >
                        <Scale className="w-3 h-3 text-amber-400" />
                        Compare Amounts
                      </button>
                    )}
                    <span className="text-[10px] text-cyan-400 font-mono">USDT Only</span>
                  </div>
                </div>
                <table className="w-full text-left text-xs">
                  <tbody className="divide-y divide-slate-800 font-sans">
                    {c.calculationExample.items.map((item, idx) => (
                      <tr
                        key={idx}
                        className={idx === 5 ? 'bg-amber-500/10 font-bold' : 'hover:bg-slate-800/40'}
                      >
                        <td className="py-2 px-3 text-slate-200">{item.label}</td>
                        <td
                          className={`py-2 px-3 font-mono font-bold text-right ${
                            idx === 5 ? 'text-amber-400 text-sm' : 'text-cyan-300'
                          }`}
                        >
                          {item.amount}
                        </td>
                        <td className="py-2 px-3 text-[10px] text-slate-400 hidden sm:table-cell">
                          {item.note}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/80 text-[10px] text-slate-400 leading-relaxed flex items-start gap-2 mt-2">
                <Info className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span>{c.disclaimer}</span>
              </div>
            </div>
          </div>
        </div>
      );
    }

    case 'daily_compounding': {
      const c = slide.content;
      return (
        <div className="h-full flex flex-col justify-between py-1">
          <div className="mb-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-['Outfit']">
              <span className="text-amber-400 font-mono mr-2">04</span>
              DAILY COMPOUNDING ROI INCOME
            </h2>
            <p className="text-xs text-cyan-300">
              {c.subtitle}
            </p>
          </div>

          <div className="rounded-xl bg-slate-900/90 border border-slate-800 overflow-hidden shadow-2xl my-auto">
            <table className="w-full text-center text-xs">
              <thead className="bg-slate-950 text-amber-400 font-mono text-[11px] border-b border-slate-800">
                <tr>
                  <th className="py-2 px-2 text-left sm:text-center">Investment (USDT)</th>
                  <th className="py-2 px-2">5% Daily ROI</th>
                  <th className="py-2 px-2 text-cyan-300">25-Day Figure</th>
                  <th className="py-2 px-2 text-cyan-300">50-Day Figure</th>
                  <th className="py-2 px-2 text-amber-400">100-Day Figure</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 font-mono text-xs">
                {c.tableRows.map((r, i) => (
                  <tr key={i} className="hover:bg-slate-800/40 transition">
                    <td className="py-1.5 px-2 font-bold text-white text-left sm:text-center">
                      {r.investment} USDT
                    </td>
                    <td className="py-1.5 px-2 text-cyan-400">
                      {r.dailyRoi.toFixed(2)} USDT
                    </td>
                    <td className="py-1.5 px-2 text-slate-300">
                      {r.figure25Days.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} USDT
                    </td>
                    <td className="py-1.5 px-2 text-slate-300">
                      {r.figure50Days.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} USDT
                    </td>
                    <td className="py-1.5 px-2 font-bold text-amber-400">
                      {r.figure100Days.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} USDT
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="text-center text-[10px] text-slate-400 font-mono">
            {c.note}
          </div>
        </div>
      );
    }

    case 'roi_on_roi': {
      const c = slide.content;
      return (
        <div className="h-full flex flex-col justify-between py-1">
          <div className="mb-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-['Outfit']">
              <span className="text-amber-400 font-mono mr-2">05</span>
              ROI ON ROI INCOME
            </h2>
            <p className="text-xs text-cyan-300">
              12th - Level Downstream Daily Yield Distribution
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-2.5 my-auto">
            {c.levels.map((lvl, idx) => (
              <div
                key={idx}
                className={`p-3 rounded-xl border flex flex-col items-center text-center shadow-md transition ${
                  lvl.isHighlight
                    ? 'bg-gradient-to-b from-amber-500/20 to-amber-950/40 border-amber-400'
                    : 'bg-slate-900/80 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="text-[11px] font-mono text-slate-400">{lvl.level}</div>
                <div
                  className={`text-base sm:text-lg font-black font-['Outfit'] mt-1 ${
                    lvl.isHighlight ? 'text-amber-400' : 'text-cyan-400'
                  }`}
                >
                  {lvl.rate}
                </div>
                <div className="text-[9px] text-slate-400 mt-1">Daily on Downline ROI</div>
              </div>
            ))}
          </div>

          {/* Prominent Banner */}
          <div className="p-3 rounded-xl bg-gradient-to-r from-amber-500/20 via-amber-500/30 to-amber-500/20 border-2 border-amber-400/80 text-center shadow-lg">
            <span className="text-xs sm:text-sm font-black text-amber-300 tracking-wider font-['Outfit'] uppercase">
              ★ {c.disclaimerBanner} ★
            </span>
          </div>
        </div>
      );
    }

    case 'fd_staking': {
      const c = slide.content;
      return (
        <div className="h-full flex flex-col justify-between py-1">
          <div className="mb-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-['Outfit']">
              <span className="text-amber-400 font-mono mr-2">06</span>
              FD STAKING INCOME
            </h2>
            <p className="text-xs text-cyan-300">
              Fixed Deposit Staking Packages & Summary (All in USDT)
            </p>
          </div>

          <div className="rounded-xl bg-slate-900/90 border border-slate-800 overflow-hidden shadow-2xl my-auto">
            <table className="w-full text-center text-xs">
              <thead className="bg-slate-950 text-amber-400 font-mono text-[11px] border-b border-slate-800">
                <tr>
                  <th className="py-2.5 px-2">FD Package</th>
                  <th className="py-2.5 px-2 text-cyan-300">180-Day: Daily (12%)</th>
                  <th className="py-2.5 px-2 text-cyan-300">180-Day Total</th>
                  <th className="py-2.5 px-2 text-amber-400">240-Day: Daily (20%)</th>
                  <th className="py-2.5 px-2 text-amber-400">240-Day Total</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 font-mono text-xs">
                {c.packages.map((pkg, i) => (
                  <tr key={i} className="hover:bg-slate-800/40 transition">
                    <td className="py-2 px-2 font-black text-white text-sm">
                      {pkg.packageAmount} USDT
                    </td>
                    <td className="py-2 px-2 text-cyan-400">
                      {pkg.option1.dailyReturnUsdt.toFixed(2)} USDT
                    </td>
                    <td className="py-2 px-2 text-slate-200 font-bold">
                      {pkg.option1.totalReturnUsdt.toLocaleString()} USDT
                    </td>
                    <td className="py-2 px-2 text-amber-400">
                      {pkg.option2.dailyReturnUsdt.toFixed(2)} USDT
                    </td>
                    <td className="py-2 px-2 font-bold text-amber-400">
                      {pkg.option2.totalReturnUsdt.toLocaleString()} USDT
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-2 rounded-lg bg-slate-900/60 border border-slate-800 text-center text-[10px] text-slate-400 font-mono">
            * Fixed Deposit lockup tenure applies. Rewards distributed continuously in BEP-20 USDT.
          </div>
        </div>
      );
    }

    case 'salary_income': {
      const c = slide.content;
      return (
        <div className="h-full flex flex-col justify-between py-1">
          <div className="mb-1 flex items-center justify-between">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-['Outfit']">
                <span className="text-amber-400 font-mono mr-2">07</span>
                SALARY INCOME
              </h2>
              <p className="text-xs text-amber-400 font-semibold tracking-wide">
                LIFETIME SALARY — {c.tagline}
              </p>
            </div>
            <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-mono font-bold">
              <Crown className="w-3.5 h-3.5" />
              LIFETIME REWARDS
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 my-auto">
            {c.ranks.map((r, i) => (
              <div
                key={i}
                className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-amber-400/50 shadow-md transition flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 font-bold text-xs flex items-center justify-center font-mono">
                    {r.letter}
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">
                    {r.teamSize.toLocaleString()} Team
                  </span>
                </div>
                <div>
                  <div className="text-xs font-bold text-white font-['Outfit']">{r.rankName}</div>
                  <div className="text-sm sm:text-base font-black text-amber-400 font-mono mt-0.5">
                    {r.monthlySalaryUsdt.toLocaleString()} <span className="text-[10px] text-cyan-300">USDT/mo</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-2.5 rounded-xl bg-slate-950 border border-amber-500/30 text-center">
            <span className="text-xs font-bold text-amber-400 tracking-wider font-['Outfit']">
              {c.footerBanner}
            </span>
          </div>
        </div>
      );
    }

    case 'terms': {
      const c = slide.content;
      return (
        <div className="h-full flex flex-col justify-between py-1">
          <div className="mb-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-['Outfit']">
              TERMS AND CONDITIONS
            </h2>
            <p className="text-xs text-cyan-300">
              Clear, Direct and Zero-Friction Rules in USDT
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-auto">
            {c.terms.map((t) => (
              <div
                key={t.id}
                className="p-3 rounded-xl bg-slate-900/70 border border-slate-800 flex items-start gap-3 hover:border-amber-400/40 transition shadow-md"
              >
                <span className="w-7 h-7 rounded-full bg-amber-500/20 text-amber-400 font-black text-xs flex items-center justify-center shrink-0 mt-0.5 font-mono">
                  {t.id}
                </span>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs sm:text-sm font-bold text-white font-['Outfit']">
                      {t.title}
                    </h4>
                    {t.highlight && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950 border border-cyan-400/40 text-cyan-300 font-bold">
                        {t.highlight}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-300 mt-0.5 leading-snug">
                    {t.description}
                  </p>
                  {t.subPoints && (
                    <ul className="mt-1 space-y-0.5 text-[11px] text-cyan-300/90 list-disc list-inside">
                      {t.subPoints.map((sp, idx) => (
                        <li key={idx}>{sp}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="p-2.5 rounded-xl bg-gradient-to-r from-amber-500/20 via-amber-500/30 to-amber-500/20 border-2 border-amber-400 text-center shadow-lg">
            <span className="text-xs sm:text-sm font-black text-amber-300 tracking-wider font-['Outfit']">
              ★ {c.bannerHighlight} ★
            </span>
          </div>
        </div>
      );
    }

    case 'contact': {
      const c = slide.content;
      return (
        <div className="h-full flex flex-col justify-between py-1">
          <div className="mb-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-['Outfit']">
              GET IN TOUCH WITH US
            </h2>
            <p className="text-xs text-cyan-300">
              Official Platforms & International Contact Information
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-auto">
            {c.channels.map((chan, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800 hover:border-amber-400/50 transition shadow-xl flex flex-col justify-between text-center"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/20 to-blue-600/20 border border-amber-400/40 flex items-center justify-center mx-auto mb-3 text-amber-400">
                    <PillarIcon name={chan.icon} className="w-6 h-6" />
                  </div>
                  <h3 className="text-sm font-bold text-white font-['Outfit'] mb-2">
                    {chan.title}
                  </h3>
                  <div className="space-y-1 text-xs text-slate-300">
                    {chan.details.map((line, i) => (
                      <p key={i} className={i === 1 && chan.link ? 'text-amber-400 font-bold font-mono text-sm' : ''}>
                        {line}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800 text-[10px] text-cyan-400 font-mono">
                  VERIFIED DIRECT CHANNEL
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {c.footerBadges.map((fb, idx) => (
              <div
                key={idx}
                className="px-3 py-1.5 rounded-lg bg-slate-900/60 border border-slate-800 text-center text-xs"
              >
                <span className="font-bold text-amber-400 mr-1">{fb.title}:</span>
                <span className="text-slate-300">{fb.subtitle}</span>
              </div>
            ))}
          </div>
        </div>
      );
    }

    case 'thank_you': {
      const c = slide.content;
      return (
        <div className="h-full flex flex-col items-center justify-between py-2 text-center">
          <div className="flex items-center justify-between w-full px-4 text-xs font-semibold tracking-widest text-amber-400 uppercase">
            <span>GLOBAL FINANCE</span>
            <span>TRUST • GROWTH • SECURITY • TOGETHER</span>
          </div>

          <div className="my-auto flex flex-col items-center">
            {/* Global Finance Logo Centerpiece */}
            <div className="relative mb-3">
              <div className="relative w-44 sm:w-56 h-20 sm:h-28 rounded-2xl overflow-hidden border border-amber-400/50 shadow-2xl bg-slate-950 flex items-center justify-center p-2">
                <img
                  src="/global_finance_logo.jpg"
                  alt="Global Finance Logo"
                  className="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(245,158,11,0.4)]"
                />
              </div>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black font-['Outfit'] tracking-tight bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent mb-1">
              THANK YOU
            </h1>

            <p className="text-lg sm:text-xl font-medium text-slate-200 italic mb-4 font-serif">
              “{c.lead}”
            </p>

            <div className="px-6 py-2.5 rounded-2xl bg-gradient-to-r from-cyan-950/80 via-blue-950/80 to-cyan-950/80 border border-cyan-400/50 shadow-xl mb-6">
              <span className="text-sm sm:text-base font-bold text-cyan-300 tracking-wide font-['Outfit']">
                {c.mainSlogan}
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-2xl">
              {c.pillars.map((p, i) => (
                <div
                  key={i}
                  className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-center gap-2"
                >
                  <PillarIcon name={p.icon} className="w-4 h-4 text-amber-400" />
                  <div className="text-left">
                    <div className="text-xs font-bold text-white font-['Outfit']">{p.title}</div>
                    <div className="text-[9px] text-slate-400">{p.subtitle}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full pt-2 border-t border-slate-800/80 text-[11px] text-slate-400 font-mono">
            WWW.GLOBALFINANCE.WORLD • LONDON HQ
          </div>
        </div>
      );
    }

    default:
      return <div>Slide content</div>;
  }
}

function PillarIcon({ name, className }: { name: string; className?: string }) {
  switch (name) {
    case 'ShieldCheck':
      return <ShieldCheck className={className} />;
    case 'TrendingUp':
      return <TrendingUp className={className} />;
    case 'Users':
      return <Users className={className} />;
    case 'Award':
      return <Award className={className} />;
    case 'Globe':
      return <Globe className={className} />;
    case 'Zap':
      return <Zap className={className} />;
    case 'UserPlus':
      return <UserPlus className={className} />;
    case 'Network':
      return <Network className={className} />;
    case 'Percent':
      return <Percent className={className} />;
    case 'Coins':
      return <Coins className={className} />;
    case 'Layers':
      return <Layers className={className} />;
    case 'Crown':
      return <Crown className={className} />;
    case 'Wallet':
      return <Wallet className={className} />;
    case 'Clock':
      return <Clock className={className} />;
    case 'Plane':
      return <Plane className={className} />;
    case 'Building2':
      return <Building2 className={className} />;
    case 'Lock':
      return <Lock className={className} />;
    case 'Infinity':
      return <InfinityIcon className={className} />;
    default:
      return <ShieldCheck className={className} />;
  }
}

function SparkleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2L14.39 9.61L22 12L14.39 14.39L12 22L9.61 14.39L2 12L9.61 9.61L12 2Z" />
    </svg>
  );
}
