'use client';

import React from 'react';
import { Button } from 'antd';
import { 
  ShieldCheck, 
  Zap, 
  ArrowRight, 
  Calculator, 
  CheckCircle2, 
  Activity,
  HardDrive,
  Camera,
  Globe,
  Lock,
  Search,
  ExternalLink,
  Users
} from 'lucide-react';
import { COMPANY_INFO } from '../data/landingData';
import { GsapCounter } from './GsapCounter';
import { GsapFloatingOrbs } from './GsapFloatingOrbs';
import { HandDrawnMarker } from './HandDrawnMarker';
import { Interactive3DTilt } from './Interactive3DTilt';

interface HeroSectionProps {
  onOpenConsultation: (serviceName?: string) => void;
  onScrollToEstimator: () => void;
  onScrollToProjects: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenConsultation,
  onScrollToEstimator,
  onScrollToProjects,
}) => {
  return (
    <section className="relative pt-6 sm:pt-10 pb-16 sm:pb-24 overflow-hidden tech-mesh-bg">
      {/* Background Animated Glowing Orbs */}
      <GsapFloatingOrbs />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition & High-converting CTAs (7 cols) */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6" data-aos="fade-right">
            
            {/* Meta Verified Trust Badge */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <div className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-blue-100/90 border border-blue-300 text-blue-900 text-xs sm:text-sm font-bold shadow-xs">
                <svg className="w-4 h-4 fill-blue-600 flex-shrink-0" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                <span>DỊCH VỤ META ĐÃ XÁC MINH</span>
              </div>

              <div className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-emerald-100 text-emerald-900 text-xs sm:text-sm font-bold border border-emerald-300">
                <Globe className="w-3.5 h-3.5 text-emerald-600" />
                <span>🌏 HỖ TRỢ ONLINE TOÀN QUỐC</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] font-extrabold text-slate-900 tracking-tight leading-[1.18]">
              Khôi Phục Dữ Liệu{' '}
              <HandDrawnMarker variant="heroTop" color="text-sky-600" textColor="text-white">
                Thẻ Nhớ • Ổ Cứng
              </HandDrawnMarker>{' '}
              USB &amp; Drive Uy Tín
            </h1>

            {/* Subtitle Description */}
            <p className="text-base sm:text-lg text-slate-700 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Chuyên sâu xử lý: <strong className="text-slate-900 font-bold">Xóa nhầm • Lỗi thẻ bắt format (RAW) • Ghi đè file ảnh/video 📸🎦🔄</strong>. Cứu dữ liệu máy ảnh Sony, Canon, flycam DJI, ổ cứng HDD/SSD, USB và Google Drive. Khách hàng ngồi tại nhà giám sát trực tiếp 100% qua UltraViewer.
            </p>

            {/* Authority Links (Facebook, Fanpage & Admin Group) */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 text-xs">
              <a
                href={COMPANY_INFO.social.facebookPage}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-blue-50 hover:bg-blue-100 border border-blue-200 text-blue-900 font-bold transition-all shadow-2xs hover:shadow"
              >
                <svg className="w-3.5 h-3.5 fill-blue-600 flex-shrink-0" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                <span>Fanpage: 26K Follower</span>
                <ExternalLink className="w-3 h-3 text-blue-500" />
              </a>

              <a
                href={COMPANY_INFO.social.facebookGroup}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-amber-50 hover:bg-amber-100 border border-amber-200 text-amber-900 font-bold transition-all shadow-2xs hover:shadow"
              >
                <Users className="w-3.5 h-3.5 text-amber-600" />
                <span>Admin Group: 47.3K Thành viên</span>
                <ExternalLink className="w-3 h-3 text-amber-600" />
              </a>

              <a
                href={COMPANY_INFO.social.facebookPersonal}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-slate-800 font-bold transition-all shadow-2xs hover:shadow"
              >
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <span>Facebook Cá Nhân (20K Follow)</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>
            </div>

            {/* Golden Commitments Highlight Box */}
            <div className="p-4 rounded-2xl bg-white/90 border border-sky-200/90 shadow-sm backdrop-blur-sm max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center space-x-3 text-sky-950 font-bold text-sm sm:text-base">
                <div className="w-9 h-9 rounded-xl bg-sky-500/10 flex items-center justify-center text-sky-600 flex-shrink-0">
                  <Lock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-sky-600 font-black">CHÍNH SÁCH VÀNG:</span> Không Cứu Được Dữ Liệu - Hoàn Toàn Không Mất Phí
                  <p className="text-xs text-slate-500 font-normal mt-0.5">
                    Kiểm tra tình trạng file MIỄN PHÍ 100% Online trong 10 - 20 phút. Xem trước ảnh/video rồi mới thanh toán.
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <a
                href={`tel:${COMPANY_INFO.hotline.replace(/\./g, '')}`}
                className="rounded-xl font-bold bg-sky-600 hover:bg-sky-700 text-white h-12.5 px-6 shadow-md shadow-sky-500/25 flex items-center space-x-2 text-sm sm:text-base border-0 transition-all hover:scale-102 cursor-pointer"
              >
                <Activity className="w-4 h-4 text-sky-100 animate-pulse" />
                <span>Gọi Cứu Dữ Liệu: {COMPANY_INFO.hotlineDisplay}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={onScrollToEstimator}
                className="flex items-center space-x-2 px-6 h-12.5 rounded-xl bg-white hover:bg-sky-50/60 border border-sky-200 text-slate-800 font-bold text-sm sm:text-base transition-all duration-200 shadow-xs hover:shadow cursor-pointer"
              >
                <Calculator className="w-4 h-4 text-sky-600" />
                <span>Dự Toán Chi Phí (30s)</span>
              </button>

              <button
                type="button"
                onClick={onScrollToProjects}
                className="flex items-center space-x-2 px-5 h-12.5 rounded-xl bg-sky-50 hover:bg-sky-100 text-sky-800 font-bold text-sm transition-all border border-sky-200 cursor-pointer"
              >
                <Search className="w-4 h-4 text-sky-600" />
                <span>Xem Ca Đã Cứu</span>
              </button>
            </div>

            {/* Core Commitments Checklist */}
            <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-5 text-xs sm:text-sm text-slate-600 font-medium">
              <span className="flex items-center">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-1.5 flex-shrink-0" />
                Kiểm tra lỗi Miễn Phí 100%
              </span>
              <span className="flex items-center">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-1.5 flex-shrink-0" />
                Giám sát trực tiếp qua Ultraview
              </span>
              <span className="flex items-center">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-1.5 flex-shrink-0" />
                Xem trước file OK mới trả phí
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Cleanroom & Card Recovery Showcase (5 cols) */}
          <div className="lg:col-span-5 relative" data-aos="fade-left">
            
            {/* Floating Top Pill: Meta Verified */}
            <div className="absolute -top-5 -left-4 sm:-left-6 z-20 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-lg border border-blue-100 flex items-center space-x-2.5 animate-float">
              <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                <svg className="w-5 h-5 fill-blue-600" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <div>
                <p className="text-xs font-bold text-slate-500 leading-none mb-0.5">Meta Đã Xác Minh</p>
                <p className="text-sm font-black text-blue-600">26K Người Theo Dõi</p>
              </div>
            </div>

            {/* Floating Bottom Pill: Group KPDL 47.3K Thành viên */}
            <div className="absolute -bottom-5 -right-2 sm:-right-4 z-20 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-lg border border-amber-100 flex items-center space-x-2.5 animate-float-reverse">
              <div className="w-9 h-9 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-500 leading-none mb-0.5">Admin Group KPDL</p>
                <p className="text-sm font-black text-amber-600">47.3K Thành Viên</p>
              </div>
            </div>

            {/* Central Visual Showcase: 3D Cleanroom Tech with GSAP interactive mouse perspective */}
            <Interactive3DTilt maxTilt={8} scale={1.02}>
              <div className="relative rounded-3xl bg-white/95 backdrop-blur-xl p-3.5 sm:p-4 shadow-2xl shadow-sky-500/15 border border-sky-200/90 overflow-hidden group">
                
                {/* Lab Diagnostics header bar */}
                <div className="flex items-center justify-between px-3.5 py-2.5 mb-2.5 bg-sky-50/70 rounded-2xl border border-sky-100/80">
                  <div className="flex items-center space-x-2">
                    <div className="w-3.5 h-3.5 rounded-full bg-red-400" />
                    <div className="w-3.5 h-3.5 rounded-full bg-amber-400" />
                    <div className="w-3.5 h-3.5 rounded-full bg-emerald-400" />
                    <span className="text-xs sm:text-sm font-mono text-slate-500 pl-2">thanhphuc-recovery.online</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="inline-flex items-center text-xs font-bold px-3 py-1 rounded-full bg-emerald-100 text-emerald-800">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 mr-1.5 animate-pulse" />
                      Đang Trực Cứu Dữ Liệu
                    </span>
                  </div>
                </div>

                {/* Showcase Image */}
                <div className="relative rounded-2xl overflow-hidden shadow-xs border border-sky-100/70 bg-slate-900">
                  <img
                    src="/hero-showcase.jpg"
                    alt="Phòng Lab Cứu Dữ Liệu Thành Phúc Recovery"
                    className="w-full h-auto object-cover rounded-2xl group-hover:scale-[1.03] transition-transform duration-500"
                  />
                  <div className="absolute bottom-2 left-2 bg-slate-950/85 backdrop-blur-md px-3 py-1.5 rounded-xl border border-sky-500/30 text-[11px] font-mono text-sky-300">
                    STATUS: UltraViewer Remote Recovery [CONNECTED]
                  </div>
                </div>

                {/* Bottom micro metrics bar */}
                <div className="mt-3.5 px-2 flex flex-wrap items-center justify-between text-xs sm:text-sm font-semibold text-slate-700 gap-2">
                  <div className="flex items-center space-x-1.5 text-sky-800">
                    <Camera className="w-4 h-4 text-sky-600 flex-shrink-0" />
                    <span>Ghép Nối Video 4K/8K &amp; Cứu Ảnh RAW Độc Quyền</span>
                  </div>
                  <div className="flex items-center space-x-1 text-emerald-600 font-bold">
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                    <span>Khách Xem Trước File</span>
                  </div>
                </div>
              </div>
            </Interactive3DTilt>
          </div>
        </div>

        {/* Impressive Stats Bar with GSAP animated counter */}
        <div className="mt-14 sm:mt-20 pt-10 border-t border-sky-200/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-3" data-aos="fade-up" data-aos-delay="100">
            <div className="text-3xl sm:text-4xl font-black text-amber-600 mb-1">
              <GsapCounter end={47.3} decimals={1} suffix="K+" />
            </div>
            <div className="text-sm sm:text-base font-bold text-slate-800">Thành Viên Group KPDL</div>
            <div className="text-xs sm:text-sm text-slate-500">Cộng đồng cứu dữ liệu lớn nhất</div>
          </div>

          <div className="p-3" data-aos="fade-up" data-aos-delay="200">
            <div className="text-3xl sm:text-4xl font-black text-blue-600 mb-1">
              <GsapCounter end={26} suffix="K+" />
            </div>
            <div className="text-sm sm:text-base font-bold text-slate-800">Người Theo Dõi Fanpage</div>
            <div className="text-xs sm:text-sm text-slate-500">Dịch vụ Meta đã xác minh</div>
          </div>

          <div className="p-3" data-aos="fade-up" data-aos-delay="300">
            <div className="text-3xl sm:text-4xl font-black text-sky-600 mb-1">
              <GsapCounter end={20} suffix="K+" />
            </div>
            <div className="text-sm sm:text-base font-bold text-slate-800">Theo Dõi Facebook Cá Nhân</div>
            <div className="text-xs sm:text-sm text-slate-500">Admin Thành Phúc hỗ trợ 24/7</div>
          </div>

          <div className="p-3" data-aos="fade-up" data-aos-delay="400">
            <div className="text-3xl sm:text-4xl font-black text-emerald-600 mb-1">
              <GsapCounter end={28000} suffix="+" />
            </div>
            <div className="text-sm sm:text-base font-bold text-slate-800">Ca Cứu Dữ Liệu Thành Công</div>
            <div className="text-xs sm:text-sm text-slate-500">Online toàn quốc &amp; tại TP.HCM</div>
          </div>
        </div>
      </div>
    </section>
  );
};
