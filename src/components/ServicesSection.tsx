'use client';

import React, { useState } from 'react';
import { Button } from 'antd';
import { 
  HardDrive, 
  Cpu, 
  Server, 
  ShieldAlert, 
  Camera, 
  FileSearch,
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Zap,
  Activity
} from 'lucide-react';
import { CORE_SERVICES } from '../data/landingData';
import { RecoveryServiceItem } from '../types/landing';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [selectedService, setSelectedService] = useState<RecoveryServiceItem>(CORE_SERVICES[0]);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'HardDrive':
        return <HardDrive className="w-6 h-6 text-sky-600" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-sky-600" />;
      case 'Server':
        return <Server className="w-6 h-6 text-cyan-600" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-6 h-6 text-rose-500" />;
      case 'Camera':
        return <Camera className="w-6 h-6 text-amber-500" />;
      case 'FileSearch':
        return <FileSearch className="w-6 h-6 text-purple-600" />;
      default:
        return <HardDrive className="w-6 h-6 text-sky-600" />;
    }
  };

  return (
    <section id="services" className="py-20 sm:py-28 bg-[#f8fafc] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20" data-aos="fade-up">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-sky-100 text-sky-800 text-xs sm:text-sm font-bold mb-3 border border-sky-200">
            <ShieldCheck className="w-4 h-4 text-sky-600" />
            <span>DỊCH VỤ CỨU HỘ CHUYÊN SÂU</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Giải Pháp Khôi Phục Dữ Liệu{' '}
            <span className="tech-gradient-text">Toàn Diện &amp; Bảo Mật</span>
          </h2>

          <p className="mt-3.5 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Trang bị đồng bộ thiết bị công nghệ phòng sạch Cleanroom Class 100 và trạm máy PC-3000 chính hãng ACE Lab, chúng tôi xử lý thành công mọi ca hỏng hóc từ đơn giản đến phức tạp nhất.
          </p>
        </div>

        {/* Services Grid (6 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {CORE_SERVICES.map((service, idx) => (
            <div
              key={service.id}
              data-aos="fade-up"
              data-aos-delay={idx * 80}
              className={`rounded-3xl p-6 sm:p-7 transition-all duration-300 flex flex-col justify-between relative group ${
                service.popular
                  ? 'bg-white border-2 border-sky-500 shadow-xl shadow-sky-500/10'
                  : 'bg-white border border-sky-100/90 hover:border-sky-300 shadow-sm hover:shadow-md'
              }`}
            >
              {service.popular && (
                <div className="absolute -top-3.5 right-6 bg-gradient-to-r from-sky-600 to-cyan-600 text-white text-[11px] font-black uppercase tracking-wider px-3.5 py-1 rounded-full shadow-sm">
                  {service.badge}
                </div>
              )}

              <div>
                {/* Top Icon & Metric */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-13 h-13 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getServiceIcon(service.iconName)}
                  </div>
                  <span className="inline-flex items-center text-xs font-bold px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200">
                    <Zap className="w-3 h-3 mr-1 text-emerald-500" />
                    {service.metrics}
                  </span>
                </div>

                <div className="text-xs font-bold text-sky-600 mb-1 tracking-wide uppercase">
                  {service.category}
                </div>

                <h3 className="text-xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors mb-2.5 leading-snug">
                  {service.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 mb-5 leading-relaxed font-normal">
                  {service.shortDesc}
                </p>

                {/* Features checklist */}
                <ul className="space-y-2 mb-6 border-t border-sky-50 pt-4 text-xs sm:text-sm text-slate-700">
                  {service.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="leading-tight">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom CTA Button */}
              <div className="pt-2">
                <Button
                  type={service.popular ? 'primary' : 'default'}
                  block
                  size="large"
                  onClick={() => onSelectService(service.title)}
                  className={`rounded-xl font-bold h-11 flex items-center justify-center space-x-2 text-sm ${
                    service.popular 
                      ? 'bg-sky-600 hover:bg-sky-700 text-white border-0' 
                      : 'border-sky-200 text-sky-800 hover:border-sky-400 hover:bg-sky-50'
                  }`}
                >
                  <Activity className="w-4 h-4" />
                  <span>Cần Cứu {service.category}</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Commitment Banner below services */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-sky-900 via-slate-900 to-sky-950 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4 text-center md:text-left">
            <div className="w-14 h-14 rounded-2xl bg-sky-500/20 border border-sky-400/30 flex items-center justify-center flex-shrink-0 text-sky-300">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-lg sm:text-xl font-black text-white">
                Bạn chưa xác định được nguyên nhân thiết bị không hoạt động?
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
                Mang thiết bị trực tiếp đến trung tâm hoặc gửi chuyển phát. Kỹ sư trưởng sẽ kiểm tra chẩn đoán lỗi MIỄN PHÍ 100% trong vòng 15 - 30 phút.
              </p>
            </div>
          </div>

          <button
            onClick={() => onSelectService('Yêu cầu kiểm tra chẩn đoán lỗi miễn phí')}
            className="px-6 py-3.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-bold text-sm whitespace-nowrap shadow-lg shadow-sky-500/30 transition-all flex items-center space-x-2 cursor-pointer flex-shrink-0"
          >
            <span>Đặt Hẹn Kiểm Tra Miễn Phí</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
