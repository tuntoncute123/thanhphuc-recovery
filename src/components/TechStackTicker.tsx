'use client';

import React from 'react';
import { 
  ShieldCheck, 
  Cpu, 
  Server, 
  Lock, 
  Zap, 
  Layers, 
  Award,
  CheckCircle2
} from 'lucide-react';
import { TECH_STANDARDS } from '../data/landingData';

export const TechStackTicker: React.FC = () => {
  const icons = [
    <Cpu className="w-4 h-4 text-sky-500" key="1" />,
    <Server className="w-4 h-4 text-cyan-500" key="2" />,
    <Lock className="w-4 h-4 text-emerald-500" key="3" />,
    <ShieldCheck className="w-4 h-4 text-sky-600" key="4" />,
    <Zap className="w-4 h-4 text-amber-500" key="5" />,
    <Award className="w-4 h-4 text-purple-500" key="6" />,
    <Layers className="w-4 h-4 text-sky-500" key="7" />,
    <CheckCircle2 className="w-4 h-4 text-emerald-500" key="8" />,
  ];

  return (
    <div className="border-y border-sky-100 bg-white py-6 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-3 text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-sky-700">
          TIÊU CHUẨN KỸ THUẬT &amp; CÔNG NGHỆ PHÒNG SẠCH HÀNG ĐẦU
        </p>
      </div>

      <div className="relative flex overflow-x-hidden">
        {/* Infinite scrolling ticker */}
        <div className="py-2 animate-marquee whitespace-nowrap flex items-center space-x-6 sm:space-x-8">
          {[...TECH_STANDARDS, ...TECH_STANDARDS].map((item, idx) => (
            <div
              key={idx}
              className="inline-flex items-center space-x-2.5 px-4 py-2 rounded-xl bg-sky-50/70 border border-sky-100 hover:border-sky-300 transition-colors shadow-2xs"
            >
              <div className="w-7 h-7 rounded-lg bg-white flex items-center justify-center shadow-2xs">
                {icons[idx % icons.length]}
              </div>
              <div className="text-left">
                <span className="text-xs sm:text-sm font-bold text-slate-800 block leading-tight">
                  {item.name}
                </span>
                <span className="text-[11px] text-slate-500 block">
                  {item.desc}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
