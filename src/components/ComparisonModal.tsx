import React, { useState } from 'react';
import {
  Scale,
  X,
  TrendingUp,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Layers,
  ArrowUpRight,
  Info,
} from 'lucide-react';

interface ComparisonModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ComparisonModal: React.FC<ComparisonModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [amountA, setAmountA] = useState<number>(10);
  const [amountB, setAmountB] = useState<number>(100);

  if (!isOpen) return null;

  // Global Finance 25-Day Model
  const calcCycle = (inv: number) => {
    const dailyPrincipal = inv * 0.04;
    const dailyProfit = inv * 0.01;
    const dailyTotal = inv * 0.05;
    const totalPrincipal = inv * 1.0;
    const totalProfit = inv * 0.25;
    const totalAllocation = inv * 1.25;
    return {
      investment: inv,
      dailyPrincipal,
      dailyProfit,
      dailyTotal,
      totalPrincipal,
      totalProfit,
      totalAllocation,
    };
  };

  const planA = calcCycle(amountA);
  const planB = calcCycle(amountB);

  // Deltas
  const diffInvestment = Math.abs(planB.investment - planA.investment);
  const diffDaily = Math.abs(planB.dailyTotal - planA.dailyTotal);
  const diffProfit = Math.abs(planB.totalProfit - planA.totalProfit);
  const diffTotal = Math.abs(planB.totalAllocation - planA.totalAllocation);
  const multiplier = planA.investment > 0 ? (planB.investment / planA.investment) : 1;

  const presets = [
    { label: 'Starter: 10 vs 50 USDT', a: 10, b: 50 },
    { label: 'Growth: 50 vs 200 USDT', a: 50, b: 200 },
    { label: 'Pro: 100 vs 500 USDT', a: 100, b: 500 },
    { label: 'VIP: 500 vs 2,500 USDT', a: 500, b: 2500 },
    { label: 'Elite: 1,000 vs 5,000 USDT', a: 1000, b: 5000 },
  ];

  const milestones = [1, 5, 10, 15, 20, 25];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-fade-in select-none">
      <div className="relative w-full max-w-5xl max-h-[92vh] bg-gradient-to-br from-[#070e20] via-slate-950 to-[#040814] border-2 border-amber-500/50 rounded-3xl shadow-2xl overflow-hidden flex flex-col text-white">
        {/* Modal Header */}
        <div className="px-6 py-4 bg-slate-950/90 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500/20 to-blue-600/20 border border-amber-400/50 flex items-center justify-center text-amber-400">
              <Scale className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-black font-['Outfit'] text-white">
                  SIDE-BY-SIDE 25-DAY CYCLE COMPARISON
                </h3>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-950 border border-cyan-800 text-cyan-400 font-mono font-bold">
                  TOTAL vs. PRINCIPAL vs. PROFIT
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Compare two USDT investment amounts based on the verified Global Finance 5% daily allocation model
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center transition border border-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Presets Bar */}
        <div className="px-6 py-2.5 bg-slate-900/60 border-b border-slate-800/80 flex items-center gap-2 overflow-x-auto">
          <span className="text-[11px] font-mono text-slate-400 shrink-0 mr-1 flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Quick Comparisons:
          </span>
          {presets.map((p, idx) => (
            <button
              key={idx}
              onClick={() => {
                setAmountA(p.a);
                setAmountB(p.b);
              }}
              className="px-3 py-1 rounded-lg bg-slate-950 hover:bg-slate-800 border border-slate-800 hover:border-amber-400/50 text-xs font-mono text-slate-300 hover:text-amber-300 transition shrink-0"
            >
              {p.label}
            </button>
          ))}
        </div>

        {/* Scrollable Body */}
        <div className="flex-1 p-6 overflow-y-auto space-y-6">
          {/* Inputs Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Plan A Input */}
            <div className="p-5 rounded-2xl bg-slate-900/80 border-2 border-cyan-500/40 relative">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold font-mono uppercase px-2.5 py-0.5 rounded-full bg-cyan-950 border border-cyan-800 text-cyan-300">
                  OPTION A
                </span>
                <span className="text-xs text-slate-400 font-mono">Min: 2 USDT</span>
              </div>

              <div className="mb-2">
                <label className="text-xs text-slate-400 font-semibold mb-1 block">
                  Investment Amount A
                </label>
                <div className="relative">
                  <input
                    type="number"
                    min="2"
                    max="10000"
                    step="1"
                    value={amountA}
                    onChange={(e) => setAmountA(Math.max(2, parseFloat(e.target.value) || 2))}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-400 text-xl font-mono font-black text-cyan-400 outline-none"
                  />
                  <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-mono font-bold text-slate-500">
                    USDT
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1.5 flex-wrap mt-2">
                {[2, 5, 10, 25, 50, 100].map((v) => (
                  <button
                    key={v}
                    onClick={() => setAmountA(v)}
                    className={`px-2 py-0.5 rounded text-[11px] font-mono transition ${
                      amountA === v ? 'bg-cyan-500 text-black font-bold' : 'bg-slate-950 text-slate-400 hover:text-white'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Plan B Input */}
            <div className="p-5 rounded-2xl bg-slate-900/80 border-2 border-amber-500/50 relative">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold font-mono uppercase px-2.5 py-0.5 rounded-full bg-amber-950 border border-amber-800 text-amber-300">
                  OPTION B
                </span>
                <span className="text-xs text-slate-400 font-mono">Max: 10,000 USDT</span>
              </div>

              <div className="mb-2">
                <label className="text-xs text-slate-400 font-semibold mb-1 block">
                  Investment Amount B
                </label>
                <div className="relative">
                  <input
                    type="number"
                    min="2"
                    max="10000"
                    step="1"
                    value={amountB}
                    onChange={(e) => setAmountB(Math.max(2, parseFloat(e.target.value) || 2))}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-amber-400 text-xl font-mono font-black text-amber-400 outline-none"
                  />
                  <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-mono font-bold text-slate-500">
                    USDT
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1.5 flex-wrap mt-2">
                {[100, 250, 500, 1000, 2500, 5000].map((v) => (
                  <button
                    key={v}
                    onClick={() => setAmountB(v)}
                    className={`px-2 py-0.5 rounded text-[11px] font-mono transition ${
                      amountB === v ? 'bg-amber-400 text-black font-bold' : 'bg-slate-950 text-slate-400 hover:text-white'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Core Outcomes Comparison Grid */}
          <div className="rounded-2xl bg-slate-950/90 border border-slate-800 overflow-hidden shadow-2xl">
            <div className="px-5 py-3 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
              <span className="text-sm font-bold text-white font-['Outfit']">
                25-Day Cycle Outcomes Breakdown
              </span>
              <span className="text-xs font-mono text-amber-400 font-semibold">
                Option B is {multiplier.toFixed(1)}x Option A
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-slate-800 bg-slate-950 text-[11px] text-slate-400 font-mono">
                    <th className="py-3 px-4 font-semibold">Metric / Allocation Component</th>
                    <th className="py-3 px-4 text-cyan-300 font-bold">Option A ({amountA} USDT)</th>
                    <th className="py-3 px-4 text-amber-400 font-bold">Option B ({amountB} USDT)</th>
                    <th className="py-3 px-4 text-emerald-400 font-bold text-right">Variance / Delta</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/70 font-mono">
                  {/* Initial Investment */}
                  <tr className="hover:bg-slate-900/40">
                    <td className="py-3 px-4 font-sans text-slate-200 font-medium">
                      Initial Investment (USDT)
                    </td>
                    <td className="py-3 px-4 text-cyan-300 font-black text-sm">
                      {planA.investment.toFixed(2)} USDT
                    </td>
                    <td className="py-3 px-4 text-amber-400 font-black text-sm">
                      {planB.investment.toFixed(2)} USDT
                    </td>
                    <td className="py-3 px-4 text-right text-slate-300 font-bold">
                      +{diffInvestment.toFixed(2)} USDT
                    </td>
                  </tr>

                  {/* Daily Principal (4%) */}
                  <tr className="hover:bg-slate-900/40">
                    <td className="py-3 px-4 font-sans text-slate-300">
                      <div>Daily Principal Allocation (4%)</div>
                      <div className="text-[10px] text-slate-500 font-sans">Capital return per day</div>
                    </td>
                    <td className="py-3 px-4 text-cyan-400">
                      {planA.dailyPrincipal.toFixed(2)} USDT/day
                    </td>
                    <td className="py-3 px-4 text-cyan-400 font-bold">
                      {planB.dailyPrincipal.toFixed(2)} USDT/day
                    </td>
                    <td className="py-3 px-4 text-right text-cyan-300">
                      +{Math.abs(planB.dailyPrincipal - planA.dailyPrincipal).toFixed(2)} USDT/day
                    </td>
                  </tr>

                  {/* Daily Profit (1%) */}
                  <tr className="hover:bg-slate-900/40">
                    <td className="py-3 px-4 font-sans text-slate-300">
                      <div>Daily Profit Allocation (1%)</div>
                      <div className="text-[10px] text-slate-500 font-sans">Pure daily net profit</div>
                    </td>
                    <td className="py-3 px-4 text-emerald-400">
                      {planA.dailyProfit.toFixed(2)} USDT/day
                    </td>
                    <td className="py-3 px-4 text-emerald-400 font-bold">
                      {planB.dailyProfit.toFixed(2)} USDT/day
                    </td>
                    <td className="py-3 px-4 text-right text-emerald-300">
                      +{Math.abs(planB.dailyProfit - planA.dailyProfit).toFixed(2)} USDT/day
                    </td>
                  </tr>

                  {/* Daily Total Allocation (5%) */}
                  <tr className="hover:bg-slate-900/40 bg-slate-900/30">
                    <td className="py-3 px-4 font-sans text-white font-bold">
                      <div>Daily Total Allocation (5%)</div>
                      <div className="text-[10px] text-slate-400 font-sans">Combined daily payout</div>
                    </td>
                    <td className="py-3 px-4 text-white font-black">
                      {planA.dailyTotal.toFixed(2)} USDT/day
                    </td>
                    <td className="py-3 px-4 text-amber-400 font-black">
                      {planB.dailyTotal.toFixed(2)} USDT/day
                    </td>
                    <td className="py-3 px-4 text-right text-amber-300 font-bold">
                      +{diffDaily.toFixed(2)} USDT/day
                    </td>
                  </tr>

                  {/* 25-Day Principal Allocation (100%) */}
                  <tr className="hover:bg-slate-900/40">
                    <td className="py-3 px-4 font-sans text-slate-300">
                      <div>25-Day Principal Returned (100%)</div>
                      <div className="text-[10px] text-slate-500 font-sans">Full initial capital returned</div>
                    </td>
                    <td className="py-3 px-4 text-cyan-400">
                      {planA.totalPrincipal.toFixed(2)} USDT
                    </td>
                    <td className="py-3 px-4 text-cyan-400 font-bold">
                      {planB.totalPrincipal.toFixed(2)} USDT
                    </td>
                    <td className="py-3 px-4 text-right text-cyan-300">
                      +{Math.abs(planB.totalPrincipal - planA.totalPrincipal).toFixed(2)} USDT
                    </td>
                  </tr>

                  {/* 25-Day Profit Allocation (25%) */}
                  <tr className="hover:bg-slate-900/40">
                    <td className="py-3 px-4 font-sans text-emerald-400 font-semibold">
                      <div>25-Day Net Profit (25%)</div>
                      <div className="text-[10px] text-emerald-500 font-sans">Pure generated profit component</div>
                    </td>
                    <td className="py-3 px-4 text-emerald-400 font-black text-sm">
                      {planA.totalProfit.toFixed(2)} USDT
                    </td>
                    <td className="py-3 px-4 text-emerald-400 font-black text-sm">
                      {planB.totalProfit.toFixed(2)} USDT
                    </td>
                    <td className="py-3 px-4 text-right text-emerald-300 font-black">
                      +{diffProfit.toFixed(2)} USDT
                    </td>
                  </tr>

                  {/* 25-Day Total Allocation (125%) */}
                  <tr className="bg-amber-500/10 border-t-2 border-amber-500/40 font-bold">
                    <td className="py-3.5 px-4 font-sans text-amber-300 text-sm">
                      <div>25-Day Total Allocation (125%)</div>
                      <div className="text-[10px] text-amber-400/80 font-sans">
                        100% Principal Returned + 25% Pure Profit
                      </div>
                    </td>
                    <td className="py-3.5 px-4 text-cyan-300 font-black text-base">
                      {planA.totalAllocation.toFixed(2)} USDT
                    </td>
                    <td className="py-3.5 px-4 text-amber-400 font-black text-base">
                      {planB.totalAllocation.toFixed(2)} USDT
                    </td>
                    <td className="py-3.5 px-4 text-right text-amber-300 font-black text-base">
                      +{diffTotal.toFixed(2)} USDT
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Visual Day-by-Day Milestone Progression */}
          <div className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono mb-3">
              Cumulative Daily Payout Milestones (Days 1 to 25)
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-6 gap-2">
              {milestones.map((day) => {
                const aCumulative = planA.dailyTotal * day;
                const bCumulative = planB.dailyTotal * day;
                return (
                  <div
                    key={day}
                    className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-center flex flex-col justify-between"
                  >
                    <div className="text-[10px] font-mono text-slate-500">Day {day}</div>
                    <div className="my-1.5 space-y-1">
                      <div className="text-[11px] font-mono text-cyan-400">
                        A: {aCumulative.toFixed(2)}
                      </div>
                      <div className="text-[11px] font-mono font-bold text-amber-400">
                        B: {bCumulative.toFixed(2)}
                      </div>
                    </div>
                    <div className="text-[9px] text-slate-400">
                      {((day / 25) * 100).toFixed(0)}% Cycle
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Regulatory & Clarification Notice */}
          <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-start gap-3">
            <Info className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div className="text-xs text-slate-300 leading-relaxed space-y-1">
              <p>
                <strong className="text-amber-400">Global Finance Policy:</strong> Principal and profit components are accounted for separately. The 4% daily component represents principal allocation (capital return), not profit. The 1% daily component represents profit. Total 25-day allocation of 125% equals 100% principal return + 25% profit.
              </p>
              <p className="text-[11px] text-slate-500">
                All amounts are settled exclusively in BEP-20 USDT with 0% admin fees and 24*7 withdrawal availability.
              </p>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <span>Global Finance Investment Platform • Comparative Model</span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold font-['Outfit'] transition shadow-md"
          >
            Done Comparing
          </button>
        </div>
      </div>
    </div>
  );
};
