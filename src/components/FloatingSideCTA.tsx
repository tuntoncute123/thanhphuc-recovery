'use client';

import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MessageCircle, 
  Calculator, 
  ArrowUp,
  Globe
} from 'lucide-react';
import { COMPANY_INFO } from '../data/landingData';

interface FloatingSideCTAProps {
  onOpenConsultation: () => void;
  onScrollToEstimator: () => void;
}

export const FloatingSideCTA: React.FC<FloatingSideCTAProps> = ({
  onOpenConsultation,
  onScrollToEstimator,
}) => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Desktop Floating Right Action Bar */}
      <div className="fixed right-4 bottom-6 z-50 hidden sm:flex flex-col space-y-3">
        
        {/* Facebook Personal Shortcut */}
        <a
          href={COMPANY_INFO.social.facebookPersonal}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center shadow-lg shadow-blue-600/30 transition-transform hover:scale-110 cursor-pointer group relative"
          aria-label="Facebook Thành Phúc"
        >
          <span className="font-bold text-base">f</span>
          <span className="absolute right-14 bg-slate-900 text-white text-xs font-bold px-3 py-1.5 rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-md pointer-events-none">
            Facebook: ThanhphucRecover
          </span>
        </a>

        {/* Zalo Chat Button */}
        <a
          href={COMPANY_INFO.social.zalo}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-[#0068FF] hover:bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-500/30 transition-transform hover:scale-110 cursor-pointer group relative"
          aria-label="Chat Zalo"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="absolute right-14 bg-slate-900 text-white text-xs font-bold px-3 py-1.5 rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-md pointer-events-none">
            Chat Zalo: 0935.473.890
          </span>
        </a>

        {/* Quick Estimator Button */}
        <button
          onClick={onScrollToEstimator}
          className="w-12 h-12 rounded-full bg-amber-500 hover:bg-amber-600 text-white flex items-center justify-center shadow-lg shadow-amber-500/30 transition-transform hover:scale-110 cursor-pointer group relative"
          aria-label="Dự toán chi phí"
        >
          <Calculator className="w-5 h-5" />
          <span className="absolute right-14 bg-slate-900 text-white text-xs font-bold px-3 py-1.5 rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-md pointer-events-none">
            Dự Toán Chi Phí (30s)
          </span>
        </button>

        {/* Emergency Call Button with Pulse Glow */}
        <a
          href={`tel:${COMPANY_INFO.hotline.replace(/\./g, '')}`}
          className="w-12 h-12 rounded-full bg-sky-600 hover:bg-sky-700 text-white flex items-center justify-center shadow-lg shadow-sky-500/35 transition-transform hover:scale-110 cursor-pointer group relative animate-pulse"
          aria-label="Hotline cấp cứu"
        >
          <Phone className="w-5 h-5" />
          <span className="absolute right-14 bg-sky-600 text-white text-xs font-bold px-3 py-1.5 rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-md pointer-events-none">
            Gọi Anh Phúc: 0935.473.890
          </span>
        </a>

        {/* Back To Top Button */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className="w-11 h-11 rounded-full bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 flex items-center justify-center shadow-md transition-all hover:scale-105 cursor-pointer"
            aria-label="Lên đầu trang"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Mobile Fixed Bottom CTA Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 sm:hidden bg-white/95 backdrop-blur-md border-t border-sky-100 px-3 py-2 flex items-center justify-between gap-2 shadow-2xl">
        <a
          href={`tel:${COMPANY_INFO.hotline.replace(/\./g, '')}`}
          className="flex-1 flex items-center justify-center space-x-1.5 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-bold"
        >
          <Phone className="w-4 h-4 text-sky-400" />
          <span>Gọi: {COMPANY_INFO.hotlineDisplay}</span>
        </a>

        <a
          href={COMPANY_INFO.social.zalo}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center space-x-1.5 py-2.5 rounded-xl bg-blue-600 text-white text-xs font-bold shadow-md shadow-blue-500/20"
        >
          <MessageCircle className="w-4 h-4" />
          <span>Chat Zalo</span>
        </a>

        <button
          onClick={onOpenConsultation}
          className="flex-1 flex items-center justify-center space-x-1 py-2.5 rounded-xl bg-sky-600 text-white text-xs font-bold shadow-md shadow-sky-500/20"
        >
          <Globe className="w-3.5 h-3.5" />
          <span>Cứu Online</span>
        </button>
      </div>
    </>
  );
};
