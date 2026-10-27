'use client';

import React, { useState } from 'react';
import { Button } from 'antd';
import { 
  Building2, 
  Activity, 
  Film, 
  UserCheck, 
  Clock, 
  ArrowRight, 
  CheckCircle2,
  ShieldCheck,
  Check
} from 'lucide-react';
import { INDUSTRY_SOLUTIONS } from '../data/landingData';

interface SolutionsSectionProps {
  onSelectSolution: (solutionTitle: string) => void;
}

export const SolutionsSection: React.FC<SolutionsSectionProps> = ({ onSelectSolution }) => {
  const [activeTab, setActiveTab] = useState(INDUSTRY_SOLUTIONS[0].id);

  const activeSolution = INDUSTRY_SOLUTIONS.find((s) => s.id === activeTab) || INDUSTRY_SOLUTIONS[0];

  const getTabIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2':
        return <Building2 className="w-5 h-5" />;
      case 'Activity':
        return <Activity className="w-5 h-5" />;
      case 'Film':
        return <Film className="w-5 h-5" />;
      case 'UserCheck':
        return <UserCheck className="w-5 h-5" />;
      default:
        return <Building2 className="w-5 h-5" />;
    }
  };

  return (
    <section id="solutions" className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16" data-aos="fade-up">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-100 text-cyan-800 text-xs sm:text-sm font-bold mb-3 border border-cyan-200">
            <ShieldCheck className="w-4 h-4 text-cyan-600" />
            <span>GIẢI PHÁP CHUYÊN BIỆT THEO ĐẶC THÙ NGÀNH</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Quy Trình Cứu Dữ Liệu Được Tối Ưu Cho{' '}
            <span className="tech-gradient-text">Từng Đối Tượng Khách Hàng</span>
          </h2>

          <p className="mt-3.5 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Mỗi lĩnh vực đòi hỏi mức độ bảo mật và tính cấp bách khác nhau. Chúng tôi xây dựng quy trình chuyên biệt đáp ứng tiêu chuẩn khắt khe nhất của từng ngành.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12" data-aos="fade-up">
          {INDUSTRY_SOLUTIONS.map((sol) => {
            const isActive = activeTab === sol.id;
            return (
              <button
                key={sol.id}
                onClick={() => setActiveTab(sol.id)}
                className={`flex items-center space-x-2.5 px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-sky-600 text-white shadow-lg shadow-sky-500/25 ring-2 ring-sky-500/30 scale-102'
                    : 'bg-sky-50/70 text-slate-700 hover:bg-sky-100 border border-sky-100'
                }`}
              >
                <span className={isActive ? 'text-white' : 'text-sky-600'}>
                  {getTabIcon(sol.iconName)}
                </span>
                <span>{sol.title.split('&')[0].trim()}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Card */}
        <div 
          className="rounded-3xl p-6 sm:p-10 bg-gradient-to-br from-sky-50/60 via-white to-sky-50/40 border border-sky-200/90 shadow-xl"
          data-aos="fade-up"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center space-x-3">
                <span className="px-3.5 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-black uppercase tracking-wider">
                  Chuyên môn hóa
                </span>
                <span className="flex items-center text-xs sm:text-sm font-bold text-sky-700">
                  <Clock className="w-4 h-4 mr-1 text-sky-600" />
                  Tiến độ: {activeSolution.timeline}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-snug">
                {activeSolution.title}
              </h3>

              <p className="text-sm sm:text-base font-semibold text-sky-800 leading-relaxed">
                {activeSolution.subtitle}
              </p>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                {activeSolution.description}
              </p>

              {/* Benefits list */}
              <div className="pt-2">
                <p className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
                  Quyền lợi và cam kết kỹ thuật đặc quyền:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeSolution.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start text-xs sm:text-sm text-slate-700 bg-white/80 p-2.5 rounded-xl border border-sky-100">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="leading-tight font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <Button
                  type="primary"
                  size="large"
                  onClick={() => onSelectSolution(`Tư vấn giải pháp cho: ${activeSolution.title}`)}
                  className="rounded-xl font-bold bg-sky-600 hover:bg-sky-700 text-white h-12 px-6 shadow-md shadow-sky-500/25 flex items-center space-x-2 border-0"
                >
                  <span>Liên Hệ Tư Vấn Gói {activeSolution.title.split('&')[0]}</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Right Side: Suitable For Checklist & Trust Box (5 cols) */}
            <div className="lg:col-span-5 bg-white rounded-2xl p-6 sm:p-7 border border-sky-100 shadow-sm space-y-6">
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-3 flex items-center">
                  <Check className="w-4 h-4 mr-2 text-sky-600" />
                  Đối tượng khách hàng tiêu biểu:
                </h4>
                <div className="space-y-2">
                  {activeSolution.suitableFor.map((item, idx) => (
                    <div key={idx} className="flex items-center text-xs sm:text-sm text-slate-700 p-2 rounded-lg bg-sky-50/50">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-500 mr-2.5" />
                      <span className="font-semibold">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-sky-50 border border-sky-100 text-xs text-slate-700 space-y-2">
                <div className="flex items-center space-x-2 text-sky-900 font-bold">
                  <ShieldCheck className="w-4 h-4 text-sky-600" />
                  <span>Quy trình bảo mật NDA pháp lý</span>
                </div>
                <p className="leading-relaxed text-slate-600">
                  Đối với dữ liệu doanh nghiệp và y tế, chúng tôi cử kỹ sư ký biên bản bảo mật trước khi tiếp nhận và mở thiết bị. Khách hàng có quyền giám sát trực tiếp toàn bộ quá trình cứu hộ.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
