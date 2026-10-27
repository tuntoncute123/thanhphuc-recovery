'use client';

import React, { useState, useEffect } from 'react';
import { Button, Drawer } from 'antd';
import { 
  Phone, 
  Menu as MenuIcon, 
  X, 
  ArrowRight, 
  ChevronRight, 
  ShieldCheck, 
  Zap, 
  Globe, 
  Users,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { COMPANY_INFO } from '../data/landingData';

interface NavbarProps {
  onOpenConsultation: (serviceName?: string) => void;
  onScrollToEstimator: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  onOpenConsultation,
  onScrollToEstimator 
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Check current section in viewport
      const sections = ['services', 'solutions', 'process', 'cost-estimator', 'projects', 'why-us', 'testimonials', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 160 && rect.bottom >= 160) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: 'Dịch Vụ Cứu Hộ', shortLabel: 'Dịch Vụ', id: 'services' },
    { label: 'Cứu Online Từ Xa', shortLabel: 'Cứu Online', id: 'solutions' },
    { label: 'Quy Trình 5 Bước', shortLabel: 'Quy Trình', id: 'process' },
    { label: 'Dự Toán Chi Phí', shortLabel: 'Bảng Giá', id: 'cost-estimator' },
    { label: 'Ca Cứu Thực Tế', shortLabel: 'Ca Thực Tế', id: 'projects' },
    { label: 'Vì Sao Chọn Phúc', shortLabel: 'Vì Sao Chọn', id: 'why-us' },
    { label: 'Đánh Giá & FAQ', shortLabel: 'Đánh Giá', id: 'testimonials' },
  ];

  return (
    <>
      {/* Top Banner Alert Bar: Meta Verified & Hotline Online Toàn Quốc */}
      <div className="bg-slate-950 text-slate-200 text-xs py-2 px-3 sm:px-4 border-b border-sky-900/40">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-3 overflow-x-auto no-scrollbar">
          
          {/* Left: Meta Verified & 24K Followers */}
          <div className="flex items-center space-x-2.5 text-[11px] sm:text-xs whitespace-nowrap shrink-0">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-blue-600/20 text-blue-300 font-bold border border-blue-500/40 shrink-0">
              <svg className="w-3.5 h-3.5 mr-1 fill-blue-500 shrink-0" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              Meta Đã Xác Minh
            </span>

            <span className="hidden sm:inline text-slate-300 whitespace-nowrap">
              • <strong>26K Follower Fanpage</strong> • <strong>Group KPDL 47.3K Thành viên</strong>
            </span>

            <a
              href={COMPANY_INFO.social.facebookGroup}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center text-sky-400 hover:text-sky-300 font-semibold transition-colors whitespace-nowrap"
            >
              <Users className="w-3.5 h-3.5 mr-1 shrink-0" />
              <span>Group 47.3K Thành Viên</span>
              <ExternalLink className="w-3 h-3 ml-0.5 shrink-0" />
            </a>
          </div>

          {/* Right: Online Support & No Data No Charge */}
          <div className="flex items-center space-x-3 text-[11px] sm:text-xs whitespace-nowrap shrink-0">
            <span className="text-emerald-400 font-bold flex items-center whitespace-nowrap">
              <Globe className="w-3.5 h-3.5 mr-1 text-emerald-400 shrink-0" />
              🌏 Hỗ trợ Online Toàn Quốc
            </span>
            <span className="hidden md:inline text-slate-500">|</span>
            <span className="hidden sm:flex items-center text-sky-300 font-bold whitespace-nowrap">
              <ShieldCheck className="w-3.5 h-3.5 mr-1 text-sky-400 shrink-0" />
              Không Cứu Được - Không Mất Phí
            </span>
          </div>

        </div>
      </div>

      {/* Main Navigation Bar */}
      <header 
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'glass-nav shadow-md py-2.5' 
            : 'bg-[#f8fafc]/95 backdrop-blur-md py-3 border-b border-sky-100'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-2 xl:gap-4">
            
            {/* Logo Brand */}
            <div 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center space-x-2.5 sm:space-x-3 cursor-pointer select-none group py-0.5 shrink-0"
            >
              <img
                src="/logo.png"
                alt="Thành Phúc Recover Logo"
                className="h-10 sm:h-11 w-auto aspect-square object-contain rounded-xl shadow-xs group-hover:scale-105 transition-transform duration-200 shrink-0"
              />
              <div className="text-left leading-tight shrink-0 whitespace-nowrap">
                <div className="flex items-center space-x-1 whitespace-nowrap">
                  <span className="font-black text-slate-900 text-sm sm:text-base xl:text-lg tracking-tight group-hover:text-sky-600 transition-colors whitespace-nowrap">
                    THÀNH PHÚC <span className="text-sky-600">RECOVER</span>
                  </span>
                  <svg className="w-4 h-4 fill-blue-500 inline-block shrink-0" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <span className="text-[10px] sm:text-[11px] font-bold text-sky-700 tracking-wider uppercase whitespace-nowrap hidden sm:block">
                  Khôi Phục Dữ Liệu Chuyên Nghiệp
                </span>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-0.5 xl:space-x-1.5 2xl:space-x-2 shrink-0">
              {navLinks.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className={`px-2 xl:px-3 py-1.5 rounded-lg text-xs xl:text-sm font-semibold whitespace-nowrap shrink-0 transition-all cursor-pointer ${
                      isActive
                        ? 'text-sky-600 bg-sky-50 font-bold shadow-2xs'
                        : 'text-slate-600 hover:text-sky-600 hover:bg-sky-50/60'
                    }`}
                  >
                    {item.shortLabel}
                  </button>
                );
              })}
            </nav>

            {/* Right Action Buttons */}
            <div className="hidden lg:flex items-center space-x-2 xl:space-x-3 shrink-0">
              {/* Hotline / Zalo for Large Screens -> Directly to zalo.me */}
              <a
                href={COMPANY_INFO.social.zalo}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden xl:flex items-center space-x-2 px-3 py-1.5 rounded-xl bg-sky-50/80 hover:bg-sky-100 border border-sky-200 text-slate-800 transition-colors whitespace-nowrap shrink-0 group"
                title="Mở Zalo.me chat và liên hệ 24/7"
              >
                <div className="w-8 h-8 rounded-lg bg-sky-600 flex items-center justify-center text-white shadow-2xs shrink-0 group-hover:scale-105 transition-transform">
                  <Phone className="w-4 h-4 shrink-0" />
                </div>
                <div className="text-left leading-tight whitespace-nowrap">
                  <span className="text-[10px] uppercase font-bold text-slate-500 block whitespace-nowrap">
                    Zalo.me • Hotline 24/7
                  </span>
                  <span className="font-black text-sky-700 text-sm tracking-tight whitespace-nowrap">
                    {COMPANY_INFO.hotlineDisplay}
                  </span>
                </div>
              </a>

              {/* Hotline / Zalo for Medium Desktop (1024px - 1279px) sleek single-row pill -> zalo.me */}
              <a
                href={COMPANY_INFO.social.zalo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex xl:hidden items-center space-x-1.5 px-2.5 py-2 rounded-xl bg-sky-50/90 hover:bg-sky-100 border border-sky-200 text-sky-800 font-bold text-xs whitespace-nowrap shrink-0"
                title="Mở Zalo.me 0935.473.890"
              >
                <Phone className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                <span className="whitespace-nowrap">{COMPANY_INFO.hotlineDisplay}</span>
              </a>

              <Button
                type="primary"
                size="large"
                onClick={() => onOpenConsultation('Yêu cầu cứu dữ liệu Online')}
                className="rounded-xl font-bold bg-sky-600 hover:bg-sky-700 h-10 xl:h-11 px-3.5 xl:px-5 shadow-sm shadow-sky-500/20 flex items-center space-x-1.5 xl:space-x-2 border-0 whitespace-nowrap shrink-0 text-xs xl:text-sm"
              >
                <Globe className="w-4 h-4 text-sky-100 shrink-0" />
                <span className="whitespace-nowrap">Cứu Dữ Liệu Ngay</span>
              </Button>
            </div>

            {/* Mobile Menu Hamburger Button */}
            <div className="flex lg:hidden items-center space-x-2">
              <a
                href={COMPANY_INFO.social.zalo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-sky-600 text-white text-xs font-bold whitespace-nowrap shrink-0"
                title="Mở Zalo.me 0935.473.890"
              >
                <Phone className="w-3.5 h-3.5 shrink-0" />
                <span className="whitespace-nowrap">{COMPANY_INFO.hotlineDisplay}</span>
              </a>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-slate-700 hover:bg-sky-50 transition-colors cursor-pointer"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <Drawer
        title={
          <div className="flex items-center space-x-2.5">
            <img
              src="/logo.png"
              alt="Thành Phúc Recover Logo"
              className="h-9 w-auto aspect-square object-contain rounded-xl shadow-xs"
            />
            <div className="text-left leading-tight">
              <span className="font-black text-slate-900 text-sm block">
                THÀNH PHÚC <span className="text-sky-600">RECOVER</span>
              </span>
              <span className="text-[9px] font-bold text-sky-700 uppercase block">
                Khôi Phục Dữ Liệu
              </span>
            </div>
          </div>
        }
        placement="right"
        onClose={() => setMobileMenuOpen(false)}
        open={mobileMenuOpen}
        styles={{ body: { padding: '16px' } }}
      >
        <div className="flex flex-col space-y-2">
          {navLinks.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="flex items-center justify-between p-3 rounded-xl text-sm font-semibold text-slate-700 hover:bg-sky-50 hover:text-sky-600 transition-colors text-left cursor-pointer"
            >
              <span>{item.label}</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </button>
          ))}

          {/* Social Community Shortcuts inside Mobile Drawer */}
          <div className="pt-4 pb-2 border-t border-slate-100 space-y-2">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
              Kênh chính thức &amp; Cộng đồng
            </span>

            <a
              href={COMPANY_INFO.social.facebookPersonal}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-2.5 rounded-xl bg-blue-50/60 text-blue-900 text-xs font-bold border border-blue-100"
            >
              <span>🔴 Facebook Cá Nhân: ThanhphucRecover</span>
              <ExternalLink className="w-3.5 h-3.5 text-blue-500" />
            </a>

            <a
              href={COMPANY_INFO.social.facebookPage}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-2.5 rounded-xl bg-sky-50/60 text-sky-900 text-xs font-bold border border-sky-100"
            >
              <span>📸 Fanpage: Khôi Phục Dữ Liệu Thẻ Nhớ (24K Follow)</span>
              <ExternalLink className="w-3.5 h-3.5 text-sky-500" />
            </a>

            <a
              href={COMPANY_INFO.social.facebookGroup}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-2.5 rounded-xl bg-amber-50/60 text-amber-900 text-xs font-bold border border-amber-100"
            >
              <span>🔴 Admin Group: khoiphucdulieuthe</span>
              <ExternalLink className="w-3.5 h-3.5 text-amber-600" />
            </a>
          </div>

          <div className="pt-4 border-t border-slate-100 space-y-3">
            <div className="p-3.5 bg-sky-50 rounded-2xl space-y-2 border border-sky-100">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-bold text-sky-900 block">Zalo Me / Hotline 24/7:</span>
              </div>
              <a 
                href={COMPANY_INFO.social.zalo} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-lg font-black text-sky-600 block hover:underline"
              >
                {COMPANY_INFO.hotlineDisplay}
              </a>
              <span className="text-xs text-slate-500 block leading-tight">
                Mở chat Zalo.me trực tiếp hoặc gọi 24/7 toàn quốc
              </span>
            </div>

            <Button
              type="primary"
              block
              size="large"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation('Yêu cầu cứu dữ liệu khẩn cấp');
              }}
              className="rounded-xl font-bold bg-sky-600 hover:bg-sky-700 h-11 border-0"
            >
              Yêu Cầu Cứu Dữ Liệu Ngay
            </Button>
          </div>
        </div>
      </Drawer>
    </>
  );
};
