'use client';

import React from 'react';
import { 
  Cpu, 
  Server, 
  ShieldCheck, 
  Lock, 
  Clock, 
  Layers, 
  Award,
  CheckCircle2
} from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/landingData';

export const WhyChooseUs: React.FC = () => {
  const getFeatureIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-sky-600" />;
      case 'Server':
        return <Server className="w-6 h-6 text-cyan-600" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-emerald-600" />;
      case 'Lock':
        return <Lock className="w-6 h-6 text-sky-600" />;
      case 'Clock':
        return <Clock className="w-6 h-6 text-amber-500" />;
      case 'Layers':
        return <Layers className="w-6 h-6 text-purple-600" />;
      default:
        return <Award className="w-6 h-6 text-sky-600" />;
    }
  };

  return (
    <section id="why-us" className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20" data-aos="fade-up">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs sm:text-sm font-bold mb-3 border border-emerald-200">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>NĂNG LỰC PHÒNG LAB VÀ CAM KẾT VÀNG</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Vì Sao Hơn 47.300+ Thành Viên &amp; Khách Hàng Chọn{' '}
            <span className="tech-gradient-text">Thành Phúc Data Recovery</span>
          </h2>

          <p className="mt-3.5 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Dịch vụ Meta đã xác minh chính chủ. Uy tín 12+ năm được khẳng định bởi hơn 26.000 Follower Fanpage, 20.000 Follower trang cá nhân và Group cứu dữ liệu 47.300 thành viên đông đảo nhất mạng xã hội.
          </p>
        </div>

        {/* 6 Commitments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WHY_CHOOSE_US.map((item, idx) => (
            <div
              key={item.id}
              data-aos="fade-up"
              data-aos-delay={idx * 80}
              className="p-6 sm:p-8 rounded-3xl bg-[#f8fafc] border border-sky-100 hover:border-sky-300 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group hover-lift"
            >
              <div>
                <div className="w-13 h-13 rounded-2xl bg-white border border-sky-100 flex items-center justify-center mb-5 shadow-2xs group-hover:scale-110 transition-transform">
                  {getFeatureIcon(item.iconName)}
                </div>

                <h3 className="text-lg font-bold text-slate-900 group-hover:text-sky-600 transition-colors mb-3 leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-sky-100/70 flex items-center text-xs font-bold text-sky-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0" />
                <span>Được cam kết bằng văn bản</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
