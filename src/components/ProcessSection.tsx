'use client';

import React from 'react';
import { 
  ClipboardCheck, 
  ShieldCheck, 
  Cpu, 
  FileCheck, 
  Lock, 
  CheckCircle2,
  Clock
} from 'lucide-react';
import { RECOVERY_PROCESS } from '../data/landingData';

export const ProcessSection: React.FC = () => {
  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'ClipboardCheck':
        return <ClipboardCheck className="w-6 h-6 text-sky-600" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-sky-600" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-cyan-600" />;
      case 'FileCheck':
        return <FileCheck className="w-6 h-6 text-emerald-600" />;
      case 'Lock':
        return <Lock className="w-6 h-6 text-sky-600" />;
      default:
        return <ClipboardCheck className="w-6 h-6 text-sky-600" />;
    }
  };

  return (
    <section id="process" className="py-20 sm:py-28 bg-[#f8fafc] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20" data-aos="fade-up">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-sky-100 text-sky-800 text-xs sm:text-sm font-bold mb-3 border border-sky-200">
            <Clock className="w-4 h-4 text-sky-600" />
            <span>QUY TRÌNH CHUẨN QUỐC TẾ</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Quy Trình Cứu Dữ Liệu 5 Bước{' '}
            <span className="tech-gradient-text">Minh Bạch &amp; Nghiêm Ngặt</span>
          </h2>

          <p className="mt-3.5 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Khách hàng luôn nắm rõ tiến độ qua từng bước. Chúng tôi tuân thủ triệt để nguyên tắc: 
            <strong className="text-slate-900"> &quot;Không cứu được dữ liệu - Hoàn toàn không mất phí&quot;</strong>.
          </p>
        </div>

        {/* Process Timeline Steps */}
        <div className="space-y-6 sm:space-y-8">
          {RECOVERY_PROCESS.map((step, idx) => (
            <div
              key={step.step}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-sky-100 hover:border-sky-300 shadow-sm hover:shadow-md transition-all duration-300 relative group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                
                {/* Step indicator (3 cols) */}
                <div className="lg:col-span-3 flex items-center space-x-4">
                  <div className="w-14 h-14 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                    {getStepIcon(step.iconName)}
                  </div>
                  <div>
                    <div className="text-xs font-black uppercase tracking-wider text-sky-600">
                      Bước 0{step.step}
                    </div>
                    <div className="text-xs font-bold text-slate-500 flex items-center mt-0.5">
                      <Clock className="w-3.5 h-3.5 mr-1 text-sky-500" />
                      {step.duration}
                    </div>
                  </div>
                </div>

                {/* Step details (6 cols) */}
                <div className="lg:col-span-5 space-y-2">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>

                {/* Deliverables / Kết quả bàn giao (4 cols) */}
                <div className="lg:col-span-4 bg-sky-50/60 rounded-2xl p-4 border border-sky-100">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-sky-900 mb-2">
                    Kết quả bàn giao bước này:
                  </p>
                  <ul className="space-y-1.5 text-xs text-slate-700 font-medium">
                    {step.deliverables.map((item, dIdx) => (
                      <li key={dIdx} className="flex items-start">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="leading-tight">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
