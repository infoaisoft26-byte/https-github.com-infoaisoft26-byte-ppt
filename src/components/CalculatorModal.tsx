import React, { useState } from 'react';
import {
  Calculator,
  X,
  TrendingUp,
  Percent,
  Calendar,
  Layers,
  Users,
  AlertCircle,
  Sparkles,
} from 'lucide-react';

interface CalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CalculatorModal: React.FC<CalculatorModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<'daily' | 'compounding' | 'fd' | 'referral'>('daily');
  const [amount, setAmount] = useState<number>(10);
  const [teamSize, setTeamSize] = useState<number>(1000);
  const [directReferralVol, setDirectReferralVol] = useState<number>(500);

  if (!isOpen) return null;

  // 25-Day Cycle Calculations
  const dailyPrincipal = amount * 0.04;
  const dailyProfit = amount * 0.01;
  const dailyTotal = amount * 0.05;
  const cyclePrincipal = amount * 1.0;
  const cycleProfit = amount * 0.25;
  const cycleTotal = amount * 1.25;

  // Compounding Calculations
  const getCompounded = (p: number, rate: number, days: number) => {
    return p * Math.pow(1 + rate, days);
  };

  const comp25 = getCompounded(amount, 0.05, 25);
  const comp50 = getCompounded(amount, 0.05, 50);
  const comp100 = getCompounded(amount, 0.05, 100);

  // FD Staking Calculations
  const fd180Daily = amount * 0.12;
  const fd180Total = fd180Daily * 180;
  const fd240Daily = amount * 0.2;
  const fd240Total = fd240Daily * 240;

  // Referral Calculations
  const directReferralReward = directReferralVol * 0.1;
  const levelIncomeSim = (teamSize * 50) * 0.0025; // hypothetical 50 USDT avg across levels 2-12

  const presets = [2, 5, 10, 20, 50, 100, 500, 1000, 5000];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-gradient-to-br from-slate-900 via-slate-950 to-[#070e20] border-2 border-amber-500/40 rounded-3xl shadow-2xl overflow-hidden flex flex-col text-white">
        {/* Top Header */}
        <div className="px-6 py-4 bg-slate-950/90 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-400/50 flex items-center justify-center text-amber-400">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-black font-['Outfit'] text-white">
                GLOBAL FINANCE <span className="text-amber-400">ROI & FINANCIAL CALCULATOR</span>
              </h3>
              <p className="text-xs text-cyan-300">
                Interactive USDT Yield, 25-Day Cycle & Staking Simulator
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

        {/* Mode Tabs */}
        <div className="px-6 pt-3 pb-1 border-b border-slate-800 flex items-center gap-2 overflow-x-auto">
          <button
            onClick={() => setActiveTab('daily')}
            className={`px-4 py-2 rounded-xl text-xs font-bold font-['Outfit'] transition flex items-center gap-2 shrink-0 ${
              activeTab === 'daily'
                ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
                : 'bg-slate-900 text-slate-400 hover:text-white'
            }`}
          >
            <Calendar className="w-3.5 h-3.5" />
            25-Day Cycle (5% Daily)
          </button>
          <button
            onClick={() => setActiveTab('compounding')}
            className={`px-4 py-2 rounded-xl text-xs font-bold font-['Outfit'] transition flex items-center gap-2 shrink-0 ${
              activeTab === 'compounding'
                ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
                : 'bg-slate-900 text-slate-400 hover:text-white'
            }`}
          >
            <TrendingUp className="w-3.5 h-3.5" />
            Daily Compounding (25/50/100 Days)
          </button>
          <button
            onClick={() => setActiveTab('fd')}
            className={`px-4 py-2 rounded-xl text-xs font-bold font-['Outfit'] transition flex items-center gap-2 shrink-0 ${
              activeTab === 'fd'
                ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
                : 'bg-slate-900 text-slate-400 hover:text-white'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            FD Staking (180 & 240 Days)
          </button>
          <button
            onClick={() => setActiveTab('referral')}
            className={`px-4 py-2 rounded-xl text-xs font-bold font-['Outfit'] transition flex items-center gap-2 shrink-0 ${
              activeTab === 'referral'
                ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
                : 'bg-slate-900 text-slate-400 hover:text-white'
            }`}
          >
            <Users className="w-3.5 h-3.5" />
            Referral & Level Rewards
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 p-6 overflow-y-auto space-y-5">
          {/* Amount input & presets */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
                Select or Enter Investment Amount (USDT)
              </label>
              <span className="text-xs text-amber-400 font-mono font-bold">
                Range: 2 USDT - 10,000 USDT
              </span>
            </div>

            <div className="relative mb-3">
              <input
                type="number"
                min="2"
                max="10000"
                step="1"
                value={amount}
                onChange={(e) => setAmount(Math.max(2, parseFloat(e.target.value) || 2))}
                className="w-full px-4 py-3 rounded-2xl bg-slate-950 border-2 border-slate-800 focus:border-amber-400 text-2xl font-black font-mono text-amber-400 outline-none transition"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-bold text-slate-400 font-mono">
                USDT (BEP-20)
              </span>
            </div>

            {/* Presets */}
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[11px] text-slate-500 font-mono mr-1">Presets:</span>
              {presets.map((val) => (
                <button
                  key={val}
                  onClick={() => setAmount(val)}
                  className={`px-3 py-1 rounded-lg text-xs font-mono font-bold transition ${
                    amount === val
                      ? 'bg-amber-400 text-slate-950 shadow'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  {val} USDT
                </button>
              ))}
            </div>
          </div>

          {/* TAB 1: 25-Day Cycle */}
          {activeTab === 'daily' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                  <div className="text-[11px] text-slate-400 font-mono">Daily Principal (4%)</div>
                  <div className="text-xl font-black text-cyan-400 font-mono mt-1">
                    {dailyPrincipal.toFixed(2)} USDT
                  </div>
                  <div className="text-[10px] text-slate-500 mt-1">Capital return component</div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                  <div className="text-[11px] text-slate-400 font-mono">Daily Profit (1%)</div>
                  <div className="text-xl font-black text-emerald-400 font-mono mt-1">
                    {dailyProfit.toFixed(2)} USDT
                  </div>
                  <div className="text-[10px] text-slate-500 mt-1">Net profit allocation</div>
                </div>

                <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-500/10 to-amber-950/20 border-2 border-amber-500/50">
                  <div className="text-[11px] text-amber-300 font-mono">Daily Total Allocation (5%)</div>
                  <div className="text-xl font-black text-amber-400 font-mono mt-1">
                    {dailyTotal.toFixed(2)} USDT
                  </div>
                  <div className="text-[10px] text-amber-300/80 mt-1">Daily withdrawable total</div>
                </div>
              </div>

              {/* 25-Day Total Breakdown Table */}
              <div className="rounded-2xl bg-slate-950/80 border border-slate-800 overflow-hidden shadow-xl">
                <div className="px-4 py-3 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
                  <span className="text-xs font-bold text-amber-400 font-['Outfit']">
                    25-Day Cycle Summary Table ({amount} USDT Investment)
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-950 text-cyan-400 font-mono border border-cyan-800">
                    25 Days Fixed Duration
                  </span>
                </div>
                <table className="w-full text-left text-xs">
                  <tbody className="divide-y divide-slate-800/60 font-sans">
                    <tr className="hover:bg-slate-900/40">
                      <td className="py-2.5 px-4 text-slate-300">Daily principal allocation</td>
                      <td className="py-2.5 px-4 font-mono font-bold text-cyan-400">{dailyPrincipal.toFixed(2)} USDT</td>
                      <td className="py-2.5 px-4 text-slate-400 text-[11px]">4% per day</td>
                    </tr>
                    <tr className="hover:bg-slate-900/40">
                      <td className="py-2.5 px-4 text-slate-300">Daily profit allocation</td>
                      <td className="py-2.5 px-4 font-mono font-bold text-emerald-400">{dailyProfit.toFixed(2)} USDT</td>
                      <td className="py-2.5 px-4 text-slate-400 text-[11px]">1% per day</td>
                    </tr>
                    <tr className="hover:bg-slate-900/40 bg-slate-900/30">
                      <td className="py-2.5 px-4 text-white font-semibold">Daily total allocation</td>
                      <td className="py-2.5 px-4 font-mono font-black text-amber-400">{dailyTotal.toFixed(2)} USDT</td>
                      <td className="py-2.5 px-4 text-slate-400 text-[11px]">5% per day</td>
                    </tr>
                    <tr className="hover:bg-slate-900/40">
                      <td className="py-2.5 px-4 text-slate-300">25-day principal allocation</td>
                      <td className="py-2.5 px-4 font-mono font-bold text-cyan-400">{cyclePrincipal.toFixed(2)} USDT</td>
                      <td className="py-2.5 px-4 text-slate-400 text-[11px]">100% of original investment returned</td>
                    </tr>
                    <tr className="hover:bg-slate-900/40">
                      <td className="py-2.5 px-4 text-slate-300">25-day profit allocation</td>
                      <td className="py-2.5 px-4 font-mono font-bold text-emerald-400">{cycleProfit.toFixed(2)} USDT</td>
                      <td className="py-2.5 px-4 text-slate-400 text-[11px]">25% profit generated over cycle</td>
                    </tr>
                    <tr className="bg-amber-500/10 font-bold border-t border-amber-500/40">
                      <td className="py-3 px-4 text-amber-300 text-sm">25-day total allocation</td>
                      <td className="py-3 px-4 font-mono font-black text-amber-400 text-base">{cycleTotal.toFixed(2)} USDT</td>
                      <td className="py-3 px-4 text-amber-200 text-xs">125% of original investment</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Regulatory Notice Banner */}
              <div className="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <p className="text-xs text-slate-300 leading-relaxed">
                  <strong className="text-amber-400">Important Disclosure:</strong> The principal and profit components are accounted for separately. The 4% component represents daily principal allocation, not profit. Do not describe the 125% allocation as guaranteed profit. Returns are subject to platform terms and network conditions without speculative guarantees.
                </p>
              </div>
            </div>
          )}

          {/* TAB 2: Compounding */}
          {activeTab === 'compounding' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 text-center">
                  <div className="text-xs font-mono text-cyan-300">25-Day Compounded</div>
                  <div className="text-2xl font-black font-mono text-cyan-400 mt-1">
                    {comp25.toFixed(2)} USDT
                  </div>
                  <div className="text-[10px] text-slate-400 mt-1">+{((comp25 / amount - 1) * 100).toFixed(1)}% Multiplier</div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 text-center">
                  <div className="text-xs font-mono text-cyan-300">50-Day Compounded</div>
                  <div className="text-2xl font-black font-mono text-cyan-400 mt-1">
                    {comp50.toFixed(2)} USDT
                  </div>
                  <div className="text-[10px] text-slate-400 mt-1">+{((comp50 / amount - 1) * 100).toFixed(1)}% Multiplier</div>
                </div>

                <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-500/10 to-amber-950/20 border-2 border-amber-500/50 text-center">
                  <div className="text-xs font-mono text-amber-300">100-Day Compounded</div>
                  <div className="text-2xl font-black font-mono text-amber-400 mt-1">
                    {comp100.toFixed(2)} USDT
                  </div>
                  <div className="text-[10px] text-amber-300/80 mt-1">+{((comp100 / amount - 1) * 100).toFixed(1)}% Multiplier</div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 text-xs text-slate-300 leading-relaxed">
                <h4 className="font-bold text-amber-400 mb-1 font-['Outfit']">Compounding Mechanism:</h4>
                <p>
                  By enabling compounding, your daily 5% allocation (1% profit + 4% principal) is continuously rolled into the active allocation pool. This accelerates overall potential rewards over 25, 50, and 100 day cycles, all settled strictly in USDT.
                </p>
              </div>
            </div>
          )}

          {/* TAB 3: FD Staking */}
          {activeTab === 'fd' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-slate-900/90 border-2 border-cyan-500/40">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-cyan-400 uppercase font-mono">Option 1</span>
                    <span className="px-2 py-0.5 rounded-full bg-cyan-950 border border-cyan-800 text-[10px] font-bold text-cyan-300 font-mono">
                      180-Day Plan
                    </span>
                  </div>
                  <div className="text-sm font-semibold text-white">Daily Return Basis: 12%</div>
                  <div className="mt-3 space-y-2 font-mono text-xs">
                    <div className="flex justify-between py-1 border-b border-slate-800">
                      <span className="text-slate-400">Daily Return:</span>
                      <span className="text-cyan-400 font-bold">{fd180Daily.toFixed(2)} USDT/day</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-800">
                      <span className="text-slate-400">Duration:</span>
                      <span className="text-white">180 Days</span>
                    </div>
                    <div className="flex justify-between py-1 text-sm font-bold pt-2">
                      <span className="text-cyan-300">Total Return:</span>
                      <span className="text-cyan-400">{fd180Total.toFixed(2)} USDT</span>
                    </div>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-slate-900/90 border-2 border-amber-500/50">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-amber-400 uppercase font-mono">Option 2</span>
                    <span className="px-2 py-0.5 rounded-full bg-amber-950 border border-amber-800 text-[10px] font-bold text-amber-300 font-mono">
                      240-Day Plan
                    </span>
                  </div>
                  <div className="text-sm font-semibold text-white">Daily Return Basis: 20%</div>
                  <div className="mt-3 space-y-2 font-mono text-xs">
                    <div className="flex justify-between py-1 border-b border-slate-800">
                      <span className="text-slate-400">Daily Return:</span>
                      <span className="text-amber-400 font-bold">{fd240Daily.toFixed(2)} USDT/day</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-800">
                      <span className="text-slate-400">Duration:</span>
                      <span className="text-white">240 Days</span>
                    </div>
                    <div className="flex justify-between py-1 text-sm font-bold pt-2">
                      <span className="text-amber-300">Total Return:</span>
                      <span className="text-amber-400">{fd240Total.toFixed(2)} USDT</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: Referral & Level */}
          {activeTab === 'referral' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800">
                  <div className="text-xs font-bold text-amber-400 mb-1 font-mono">Direct Referral (10%)</div>
                  <div className="text-xs text-slate-400 mb-2">Simulate Direct Team Volume (USDT)</div>
                  <input
                    type="range"
                    min="100"
                    max="10000"
                    step="100"
                    value={directReferralVol}
                    onChange={(e) => setDirectReferralVol(parseFloat(e.target.value))}
                    className="w-full accent-amber-400 mb-2"
                  />
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-slate-400">Volume: {directReferralVol} USDT</span>
                    <span className="text-amber-400 font-bold">Earn: {directReferralReward.toFixed(2)} USDT</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800">
                  <div className="text-xs font-bold text-cyan-400 mb-1 font-mono">Levels 2 to 12 (0.25% each)</div>
                  <div className="text-xs text-slate-400 mb-2">Simulate Team Size (Members)</div>
                  <input
                    type="range"
                    min="100"
                    max="10000"
                    step="100"
                    value={teamSize}
                    onChange={(e) => setTeamSize(parseInt(e.target.value))}
                    className="w-full accent-cyan-400 mb-2"
                  />
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-slate-400">Team: {teamSize} Members</span>
                    <span className="text-cyan-400 font-bold">Est. Level: ~{levelIncomeSim.toFixed(2)} USDT</span>
                  </div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-center text-xs font-bold text-amber-300 font-mono">
                THERE ARE NO CONDITIONS REQUIRED TO EARN LEVEL INCOME
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <span>Global Finance Investment Platform • Mathematical Simulator</span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold font-['Outfit'] transition shadow-md"
          >
            Close Calculator
          </button>
        </div>
      </div>
    </div>
  );
};
