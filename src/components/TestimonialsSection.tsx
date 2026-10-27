'use client';

import React from 'react';
import { Collapse } from 'antd';
import { 
  Star, 
  MessageSquare, 
  HelpCircle, 
  ShieldCheck, 
  Quote
} from 'lucide-react';
import { TESTIMONIALS_DATA, FAQ_DATA } from '../data/landingData';

export const TestimonialsSection: React.FC = () => {
  const faqItems = FAQ_DATA.map((item, index) => ({
    key: String(index),
    label: (
      <span className="font-bold text-sm sm:text-base text-slate-800 hover:text-sky-600 transition-colors">
        {item.question}
      </span>
    ),
    children: (
      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal pt-1">
        {item.answer}
      </p>
    ),
  }));

  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-[#f8fafc] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20" data-aos="fade-up">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-sky-100 text-sky-800 text-xs sm:text-sm font-bold mb-3 border border-sky-200">
            <MessageSquare className="w-4 h-4 text-sky-600" />
            <span>ĐÁNH GIÁ THỰC TẾ &amp; GIẢI ĐÁP</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Niềm Tin Từ Khách Hàng &amp;{' '}
            <span className="tech-gradient-text">Câu Hỏi Thường Gặp</span>
          </h2>

          <p className="mt-3.5 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Lắng nghe trải nghiệm trực tiếp từ các doanh nghiệp và chuyên gia đã đồng hành cùng T&amp;T Data Recovery trong những giây phút cấp bách nhất.
          </p>
        </div>

        {/* Testimonials 3 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-20">
          {TESTIMONIALS_DATA.map((item, idx) => (
            <div
              key={item.id}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-sky-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between relative group"
            >
              <div className="mb-4">
                {/* 5 Stars Rating & Project Type */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-bold text-sky-700 bg-sky-50 px-2.5 py-1 rounded-full border border-sky-100">
                    {item.projectType}
                  </span>
                </div>

                <Quote className="w-8 h-8 text-sky-200 mb-2" />

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic mb-6">
                  &quot;{item.content}&quot;
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center space-x-3 pt-4 border-t border-sky-50">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-11 h-11 rounded-full object-cover border border-sky-200"
                />
                <div>
                  <h4 className="text-sm font-bold text-slate-900 leading-tight">
                    {item.name}
                  </h4>
                  <p className="text-xs text-sky-600 font-medium">
                    {item.position}
                  </p>
                  <p className="text-[11px] text-slate-400 truncate max-w-[190px]">
                    {item.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto" data-aos="fade-up">
          <div className="text-center mb-8">
            <div className="inline-flex items-center space-x-2 text-xs font-bold text-sky-700 uppercase tracking-wider mb-1">
              <HelpCircle className="w-4 h-4 text-sky-600" />
              <span>Giải Đáp Mọi Băn Khoăn Của Bạn</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900">
              Câu Hỏi Thường Gặp Về Dịch Vụ Cứu Dữ Liệu
            </h3>
          </div>

          <div className="bg-white rounded-3xl p-4 sm:p-8 border border-sky-100 shadow-sm">
            <Collapse
              items={faqItems}
              bordered={false}
              defaultActiveKey={['0']}
              className="bg-transparent"
            />
          </div>
        </div>

      </div>
    </section>
  );
};
