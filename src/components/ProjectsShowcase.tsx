'use client';

import React, { useState } from 'react';
import { Button } from 'antd';
import { 
  FolderCheck, 
  CheckCircle2, 
  ArrowRight, 
  HardDrive, 
  Server, 
  Cpu, 
  ShieldAlert,
  Zap,
  Activity
} from 'lucide-react';
import { FEATURED_CASES } from '../data/landingData';

interface ProjectsShowcaseProps {
  onSelectProjectInquiry: (projectName: string) => void;
}

export const ProjectsShowcase: React.FC<ProjectsShowcaseProps> = ({ onSelectProjectInquiry }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Tất Cả Ca Cứu' },
    { id: 'server-raid', label: 'Máy Chủ Server RAID' },
    { id: 'hdd', label: 'Ổ Cứng Cơ HDD' },
    { id: 'ssd', label: 'Ổ Cứng SSD NVMe' },
    { id: 'ransomware', label: 'Virus Ransomware' },
  ];

  const filteredCases = selectedCategory === 'all' 
    ? FEATURED_CASES 
    : FEATURED_CASES.filter((c) => c.category === selectedCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'server-raid':
        return <Server className="w-4 h-4 text-cyan-500" />;
      case 'hdd':
        return <HardDrive className="w-4 h-4 text-sky-500" />;
      case 'ssd':
        return <Cpu className="w-4 h-4 text-sky-500" />;
      case 'ransomware':
        return <ShieldAlert className="w-4 h-4 text-rose-500" />;
      default:
        return <FolderCheck className="w-4 h-4 text-sky-500" />;
    }
  };

  return (
    <section id="projects" className="py-20 sm:py-28 bg-[#f8fafc] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16" data-aos="fade-up">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-sky-100 text-sky-800 text-xs sm:text-sm font-bold mb-3 border border-sky-200">
            <Activity className="w-4 h-4 text-sky-600" />
            <span>KẾT QUẢ THỰC TẾ ĐÃ ĐƯỢC CHỨNG THỰC</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Những Ca Cứu Dữ Liệu{' '}
            <span className="tech-gradient-text">Tiêu Biểu Tại Phòng Lab</span>
          </h2>

          <p className="mt-3.5 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Hàng ngàn doanh nghiệp và cá nhân đã lấy lại trọn vẹn tài sản số quý giá nhờ chuyên môn kỹ thuật sâu và trang thiết bị hiện đại tại T&amp;T Data Recovery.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10" data-aos="fade-up">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4.5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-sky-600 text-white shadow-md shadow-sky-500/20 ring-2 ring-sky-500/30'
                    : 'bg-white text-slate-700 hover:bg-sky-50 border border-sky-100'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {filteredCases.map((item, idx) => (
            <div
              key={item.id}
              data-aos="fade-up"
              data-aos-delay={idx * 80}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-sky-100 hover:border-sky-300 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Category & Impact Metric */}
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center text-xs font-bold px-3 py-1 rounded-full bg-sky-50 text-sky-700 border border-sky-100 space-x-1.5">
                    {getCategoryIcon(item.category)}
                    <span>{item.categoryLabel}</span>
                  </span>

                  <span className="inline-flex items-center text-xs font-black px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                    <Zap className="w-3.5 h-3.5 mr-1 text-emerald-500" />
                    {item.impact.metric} {item.impact.label}
                  </span>
                </div>

                {/* Title & Client */}
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors mb-2 leading-snug">
                  {item.title}
                </h3>

                <div className="text-xs font-semibold text-slate-500 mb-3">
                  Khách hàng: <span className="text-slate-800 font-bold">{item.client}</span>
                </div>

                {/* Device hardware badge */}
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700 mb-4 font-mono">
                  <span className="text-slate-400 font-bold">Thiết bị:</span> {item.device}
                </div>

                <p className="text-xs sm:text-sm text-slate-600 mb-5 leading-relaxed font-normal">
                  {item.summary}
                </p>

                {/* Highlights */}
                <ul className="space-y-1.5 text-xs text-slate-700 font-medium mb-6">
                  {item.highlights.map((h, hIdx) => (
                    <li key={hIdx} className="flex items-start">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="leading-tight">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Footer: Restored file amount & CTA */}
              <div className="pt-4 border-t border-sky-50 flex items-center justify-between gap-3">
                <div className="text-xs">
                  <span className="text-slate-400 block text-[11px]">Dữ liệu phục hồi:</span>
                  <span className="font-bold text-sky-700">{item.restoredFiles}</span>
                </div>

                <Button
                  type="default"
                  onClick={() => onSelectProjectInquiry(item.title)}
                  className="rounded-xl font-bold text-xs border-sky-200 text-sky-700 hover:bg-sky-50 h-9"
                >
                  <span>Cứu Ca Tương Tự</span>
                  <ArrowRight className="w-3 h-3 ml-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
