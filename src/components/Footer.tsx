'use client';

import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  Lock, 
  Globe, 
  ChevronRight,
  ArrowUp,
  ExternalLink,
  Users
} from 'lucide-react';
import { COMPANY_INFO } from '../data/landingData';

interface FooterProps {
  onScrollTo: (id: string) => void;
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onScrollTo, onOpenConsultation }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-sky-950/80 pt-16 pb-12 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-900">
          
          {/* Brand Col (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div 
              onClick={scrollToTop}
              className="cursor-pointer inline-flex items-center space-x-3 group"
            >
              <img
                src="/logo.png"
                alt="Thành Phúc Recover Logo"
                className="h-12 w-auto aspect-square object-contain rounded-2xl shadow-md group-hover:scale-105 transition-transform"
              />
              <div className="text-left leading-tight">
                <span className="font-black text-white text-lg tracking-tight block">
                  THÀNH PHÚC <span className="text-sky-400">RECOVER</span>
                </span>
                <span className="text-[10px] font-bold text-sky-400 tracking-wider uppercase block">
                  Khôi Phục Dữ Liệu Chuyên Nghiệp
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Khôi Phục Dữ Liệu Thẻ Nhớ • Ổ Cứng • USB • Drive. Dịch vụ Meta đã xác minh chính chủ. Hỗ trợ cứu dữ liệu Online từ xa toàn quốc 24/7 và tiếp nhận trực tiếp tại TP.HCM.
            </p>

            {/* Meta Verified & Group badge */}
            <div className="pt-2 space-y-2">
              <div className="flex items-center text-blue-400 font-bold text-xs">
                <svg className="w-4 h-4 mr-2 fill-blue-500 flex-shrink-0" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                <span>Dịch vụ Meta đã xác minh • Fanpage 26K • Group 47.3K</span>
              </div>
              <div className="flex items-center text-emerald-400 font-bold text-xs">
                <ShieldCheck className="w-4 h-4 mr-2 flex-shrink-0" />
                <span>Không cứu được dữ liệu - Hoàn toàn không mất phí</span>
              </div>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">
              Khám Phá
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button 
                  onClick={() => onScrollTo('services')} 
                  className="hover:text-sky-400 transition-colors flex items-center cursor-pointer"
                >
                  <ChevronRight className="w-3.5 h-3.5 mr-1" />
                  Dịch vụ thẻ &amp; ổ cứng
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onScrollTo('solutions')} 
                  className="hover:text-sky-400 transition-colors flex items-center cursor-pointer"
                >
                  <ChevronRight className="w-3.5 h-3.5 mr-1" />
                  Cứu Online toàn quốc
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onScrollTo('process')} 
                  className="hover:text-sky-400 transition-colors flex items-center cursor-pointer"
                >
                  <ChevronRight className="w-3.5 h-3.5 mr-1" />
                  Quy trình 5 bước
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onScrollTo('cost-estimator')} 
                  className="hover:text-sky-400 transition-colors flex items-center cursor-pointer"
                >
                  <ChevronRight className="w-3.5 h-3.5 mr-1" />
                  Dự toán chi phí 30s
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onScrollTo('projects')} 
                  className="hover:text-sky-400 transition-colors flex items-center cursor-pointer"
                >
                  <ChevronRight className="w-3.5 h-3.5 mr-1" />
                  Ca cứu thực tế
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onScrollTo('testimonials')} 
                  className="hover:text-sky-400 transition-colors flex items-center cursor-pointer"
                >
                  <ChevronRight className="w-3.5 h-3.5 mr-1" />
                  Đánh giá &amp; FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Core Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">
              Dịch Vụ Trọng Tâm
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>📸 Cứu thẻ nhớ máy ảnh SD, CF, CFexpress</li>
              <li>🎦 Tái ghép nối Video 4K/8K Sony, Canon bị đè</li>
              <li>💾 Cứu ổ cứng HDD PC, Laptop, ổ ngoài</li>
              <li>⚡ Cứu ổ SSD thể rắn M.2 NVMe mất firmware</li>
              <li>🔌 Cứu USB bị đòi format, virus ẩn file</li>
              <li>☁️ Khôi phục Google Drive &amp; OneDrive Cloud</li>
            </ul>
          </div>

          {/* Contact Col (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">
              Kênh Chính Chủ
            </h4>
            
            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <a href={`tel:${COMPANY_INFO.hotline.replace(/\./g, '')}`} className="font-bold text-sky-400 hover:underline text-sm">
                  {COMPANY_INFO.hotlineDisplay}
                </a>
              </div>

              <div>
                <a 
                  href={COMPANY_INFO.social.facebookPersonal} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 flex items-center space-x-1"
                >
                  <span>🔴 Facebook: ThanhphucRecover (20K Follow)</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </div>

              <div>
                <a 
                  href={COMPANY_INFO.social.facebookPage} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-sky-400 flex items-center space-x-1"
                >
                  <span>📸 Fanpage: Khôi Phục Dữ Liệu Thẻ Nhớ (26K Follow)</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </div>

              <div>
                <a 
                  href={COMPANY_INFO.social.facebookGroup} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 flex items-center space-x-1"
                >
                  <span>🔴 Admin Group: khoiphucdulieuthe (47.3K TV)</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </div>

              <div className="flex items-start space-x-2 pt-1">
                <MapPin className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                <span>Ho Chi Minh City • Hỗ trợ Online Toàn Quốc</span>
              </div>
            </div>

            <button
              onClick={onOpenConsultation}
              className="mt-3 w-full py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs transition-colors flex items-center justify-center space-x-2 cursor-pointer"
            >
              <span>Nhắn Tin Cứu Dữ Liệu Ngay</span>
            </button>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>
            &copy; {new Date().getFullYear()} Thành Phúc Data Recovery. Khôi Phục Dữ Liệu Thẻ Nhớ • Ổ Cứng • USB • Drive.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 transition-colors cursor-pointer"
          >
            <span>Lên đầu trang</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
