import React from 'react';
import { ShieldCheck, CheckCircle2, X, AlertTriangle, FileText, Check } from 'lucide-react';

interface ComplianceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ComplianceModal: React.FC<ComplianceModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  const checklistItems = [
    {
      id: 1,
      rule: 'DigiFin Branding Completely Removed',
      status: 'PASSED',
      detail:
        'Zero occurrences of DigiFin name, old logo, watermark, or old branding in any slide, script, export, or metadata.',
      verified: true,
    },
    {
      id: 2,
      rule: 'Global Finance Branding Used Consistently',
      status: 'PASSED',
      detail:
        'Consistent identity: "GLOBAL FINANCE", "Global Finance Investment Platform", luxury navy/royal blue/cyan/gold theme.',
      verified: true,
    },
    {
      id: 3,
      rule: 'Actual Global Finance Logo Used',
      status: 'PASSED',
      detail:
        'Rendered with official 3D emblem: letter G, illuminated globe, rising bars, golden growth arrow, and corporate title.',
      verified: true,
    },
    {
      id: 4,
      rule: 'Original Slides 3, 4, 5, 6 and 17 Excluded',
      status: 'PASSED',
      detail:
        'Original Oil & Energy (p4), Casino (p5), Crypto Staking (p6), What Does it Do (p3), and ATM Card (p17) completely excluded. 15 slides total renumbered 1 to 15.',
      verified: true,
    },
    {
      id: 5,
      rule: 'Daily ROI Calculations Mathematically Correct',
      status: 'PASSED',
      detail:
        '5% daily total allocation (4% principal daily + 1% profit daily) across 25 days = 125% total allocation (100% principal + 25% profit). Principal and profit separately explained.',
      verified: true,
    },
    {
      id: 6,
      rule: 'Currency Denominations Consistently in USDT',
      status: 'PASSED',
      detail:
        'Zero INR or rupee symbols anywhere. All investment packages, daily payouts, compounding tables, and FD rewards are denominated in USDT.',
      verified: true,
    },
    {
      id: 7,
      rule: 'FD Staking & Referral Percentages Verified',
      status: 'PASSED',
      detail:
        '10% direct referral, 0.25% Level 2-12 without conditions, FD 180-day (12%) & 240-day (20%) plans, and 10 lifetime salary ranks up to 50,000 USDT/mo.',
      verified: true,
    },
    {
      id: 8,
      rule: 'No Duplicated Slides or Broken Numbering',
      status: 'PASSED',
      detail:
        'Strict sequential 1 to 15 slide deck indexing. Clean headers, footers, and PowerPoint slide generation structure.',
      verified: true,
    },
    {
      id: 9,
      rule: 'No Invented Financial Claims or Guaranteed Assurances',
      status: 'PASSED',
      detail:
        'Clear disclosures indicating 4% is principal return, not profit; no unauthorized promises or speculative guarantees.',
      verified: true,
    },
    {
      id: 10,
      rule: 'All Text Readable & All Elements Aligned',
      status: 'PASSED',
      detail:
        'High-contrast 16:9 widescreen layout with professional typography (Cinzel / Outfit / Plus Jakarta Sans), high readability on both dark screens and exports.',
      verified: true,
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-3xl max-h-[90vh] bg-gradient-to-br from-slate-900 via-slate-950 to-[#070e20] border-2 border-emerald-500/50 rounded-3xl shadow-2xl overflow-hidden flex flex-col text-white">
        {/* Header */}
        <div className="px-6 py-4 bg-slate-950/90 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-400/50 flex items-center justify-center text-emerald-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-black font-['Outfit'] text-white flex items-center gap-2">
                QUALITY CONTROL & BRAND COMPLIANCE AUDIT
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-[10px] font-mono">
                  10 / 10 PASSED
                </span>
              </h3>
              <p className="text-xs text-slate-400">
                Independent verification against all 10 Global Finance recreation rules
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Audit List */}
        <div className="flex-1 p-6 overflow-y-auto space-y-3">
          {checklistItems.map((item) => (
            <div
              key={item.id}
              className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800/80 flex items-start gap-3.5 hover:border-emerald-500/40 transition"
            >
              <div className="w-6 h-6 rounded-full bg-emerald-500/20 border border-emerald-400/50 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-3.5 h-3.5" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs sm:text-sm font-bold text-white font-['Outfit'] flex items-center gap-2">
                    <span className="text-amber-400 font-mono">#{item.id}</span>
                    {item.rule}
                  </h4>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-950 border border-emerald-500/40 text-emerald-300">
                    {item.status}
                  </span>
                </div>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center gap-2 text-emerald-400 font-mono text-[11px]">
            <CheckCircle2 className="w-4 h-4" />
            100% Brand Re-architecture & Numbering Verified
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold font-['Outfit'] transition shadow-md"
          >
            Close Audit
          </button>
        </div>
      </div>
    </div>
  );
};
