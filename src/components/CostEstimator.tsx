'use client';

import React, { useState, useMemo } from 'react';
import { Button } from 'antd';
import { 
  Calculator, 
  Check, 
  Clock, 
  ShieldCheck, 
  ArrowRight, 
  Zap,
  HardDrive,
  Cpu,
  Server,
  Camera,
  ShieldAlert,
  Smartphone,
  Lock,
  FileCheck
} from 'lucide-react';
import { 
  COST_ESTIMATOR_DEVICES, 
  COST_ESTIMATOR_ADDONS 
} from '../data/landingData';

interface CostEstimatorProps {
  onRequestQuoteWithDetails: (details: {
    projectType: string;
    selectedAddons: string[];
    estimatedPrice: string;
    estimatedTime: string;
  }) => void;
}

export const CostEstimator: React.FC<CostEstimatorProps> = ({ onRequestQuoteWithDetails }) => {
  const [selectedDeviceId, setSelectedDeviceId] = useState(COST_ESTIMATOR_DEVICES[0].id);
  const [selectedAddonIds, setSelectedAddonIds] = useState<string[]>([COST_ESTIMATOR_ADDONS[0].id]);
  const [urgency, setUrgency] = useState<'standard' | 'emergency'>('standard');

  const selectedDevice = COST_ESTIMATOR_DEVICES.find((d) => d.id === selectedDeviceId) || COST_ESTIMATOR_DEVICES[0];

  const getDeviceIcon = (iconName: string) => {
    switch (iconName) {
      case 'HardDrive':
        return <HardDrive className="w-5 h-5 text-sky-600" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-sky-600" />;
      case 'Server':
        return <Server className="w-5 h-5 text-cyan-600" />;
      case 'Camera':
        return <Camera className="w-5 h-5 text-amber-500" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-5 h-5 text-rose-500" />;
      case 'Smartphone':
        return <Smartphone className="w-5 h-5 text-purple-600" />;
      default:
        return <HardDrive className="w-5 h-5 text-sky-600" />;
    }
  };

  const toggleAddon = (addonId: string) => {
    if (selectedAddonIds.includes(addonId)) {
      setSelectedAddonIds(selectedAddonIds.filter((id) => id !== addonId));
    } else {
      setSelectedAddonIds([...selectedAddonIds, addonId]);
    }
  };

  const calculation = useMemo(() => {
    let base = selectedDevice.basePrice;

    // Sum selected addons
    const addonsTotal = selectedAddonIds.reduce((sum, id) => {
      const item = COST_ESTIMATOR_ADDONS.find((a) => a.id === id);
      return sum + (item ? item.price : 0);
    }, 0);

    let total = base + addonsTotal;

    // Urgency multiplier
    if (urgency === 'emergency') {
      total = Math.round(total * 1.2);
    }

    const formattedPrice = new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
    }).format(total);

    let estimatedTime = selectedDevice.timeEstimate;
    if (urgency === 'emergency') {
      estimatedTime = 'Cấp cứu 4 - 8 giờ (Xử lý xuyên đêm 24/7)';
    }

    return {
      total,
      formattedPrice,
      estimatedTime,
    };
  }, [selectedDevice, selectedAddonIds, urgency]);

  const handleSendQuote = () => {
    const selectedAddonLabels = selectedAddonIds.map((id) => {
      const item = COST_ESTIMATOR_ADDONS.find((a) => a.id === id);
      return item ? item.label : id;
    });

    onRequestQuoteWithDetails({
      projectType: selectedDevice.name,
      selectedAddons: selectedAddonLabels,
      estimatedPrice: calculation.formattedPrice,
      estimatedTime: calculation.estimatedTime,
    });
  };

  return (
    <section id="cost-estimator" className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18" data-aos="fade-up">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-sky-100 text-sky-800 text-xs sm:text-sm font-bold mb-3 border border-sky-200">
            <Calculator className="w-4 h-4 text-sky-600" />
            <span>CÔNG CỤ BÁO GIÁ MINH BẠCH</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Dự Toán Chi Phí Cứu Dữ Liệu{' '}
            <span className="tech-gradient-text">Tức Thì (30 Giây)</span>
          </h2>

          <p className="mt-3.5 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Chọn thiết bị và tình trạng hỏng hóc để tính toán khoảng ngân sách và thời gian xử lý dự kiến. 
            <strong className="text-slate-900"> Luôn miễn phí kiểm tra 100% tại chỗ.</strong>
          </p>
        </div>

        {/* Interactive Estimator Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Options Configuration (7 cols) */}
          <div className="lg:col-span-7 space-y-8" data-aos="fade-right">
            
            {/* Step 1: Select Device Type */}
            <div className="space-y-3.5">
              <label className="text-base font-bold text-slate-900 flex items-center justify-between">
                <span>1. Chọn loại thiết bị cần phục hồi dữ liệu:</span>
                <span className="text-xs sm:text-sm text-sky-700 font-semibold">Bước quan trọng</span>
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {COST_ESTIMATOR_DEVICES.map((device) => {
                  const isSelected = selectedDeviceId === device.id;
                  return (
                    <div
                      key={device.id}
                      onClick={() => setSelectedDeviceId(device.id)}
                      className={`p-4 rounded-2xl border transition-all cursor-pointer relative select-none ${
                        isSelected
                          ? 'border-sky-600 bg-sky-50/70 ring-2 ring-sky-500/20 shadow-xs'
                          : 'border-sky-100 hover:border-sky-300 bg-white'
                      }`}
                    >
                      {device.isPopular && (
                        <span className="absolute top-2.5 right-2.5 text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-sky-600 text-white">
                          {device.badge}
                        </span>
                      )}

                      <div className="flex items-center space-x-3 mb-2">
                        <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                          isSelected ? 'bg-sky-600 text-white' : 'bg-sky-100 text-sky-700'
                        }`}>
                          {getDeviceIcon(device.iconName)}
                        </div>
                        <div className="font-bold text-sm text-slate-900 leading-tight">
                          {device.name.split('(')[0].trim()}
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-2 border-t border-sky-100/60 text-xs">
                        <span className="text-slate-500">{device.timeEstimate}</span>
                        <span className="font-bold text-sky-600">{device.priceEstimate}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Select Technical Add-ons & Damage Symptoms */}
            <div className="space-y-3.5">
              <label className="text-base font-bold text-slate-900 flex items-center justify-between">
                <span>2. Tình trạng lỗi &amp; Tùy chọn dịch vụ can thiệp:</span>
                <span className="text-xs sm:text-sm text-slate-500 font-normal">Tùy biến theo lỗi</span>
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {COST_ESTIMATOR_ADDONS.map((addon) => {
                  const isChecked = selectedAddonIds.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`flex items-start p-3.5 rounded-xl border transition-all cursor-pointer select-none ${
                        isChecked
                          ? 'border-sky-500 bg-sky-50/70 shadow-xs'
                          : 'border-sky-100 hover:border-sky-300 bg-white'
                      }`}
                    >
                      <div className={`w-4 h-4 rounded mt-0.5 mr-3 flex items-center justify-center border flex-shrink-0 transition-colors ${
                        isChecked ? 'bg-sky-600 border-sky-600 text-white' : 'border-slate-300 bg-white'
                      }`}>
                        {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                      <div className="flex-1">
                        <span className="text-xs sm:text-sm font-bold text-slate-800 block leading-tight">
                          {addon.label}
                        </span>
                        <span className="text-xs font-bold text-sky-600 block mt-0.5">
                          +{new Intl.NumberFormat('vi-VN').format(addon.price)} đ
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Priority & Urgency */}
            <div className="space-y-3.5">
              <label className="text-base font-bold text-slate-900 block">
                3. Yêu cầu về thời gian &amp; mức độ ưu tiên:
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <button
                  type="button"
                  onClick={() => setUrgency('standard')}
                  className={`p-4 rounded-xl border text-left cursor-pointer transition-all ${
                    urgency === 'standard'
                      ? 'border-sky-600 bg-sky-50/70 ring-1 ring-sky-500'
                      : 'border-sky-100 bg-white hover:border-sky-300'
                  }`}
                >
                  <div className="font-bold text-sm text-slate-900 mb-1">Tiến Độ Tiêu Chuẩn (Khuyên dùng)</div>
                  <div className="text-xs text-slate-500">Tối ưu chi phí, xử lý theo thứ tự tiếp nhận tiêu chuẩn.</div>
                </button>

                <button
                  type="button"
                  onClick={() => setUrgency('emergency')}
                  className={`p-4 rounded-xl border text-left cursor-pointer transition-all ${
                    urgency === 'emergency'
                      ? 'border-sky-600 bg-sky-50/70 ring-1 ring-sky-500'
                      : 'border-sky-100 bg-white hover:border-sky-300'
                  }`}
                >
                  <div className="font-bold text-sm text-slate-900 flex items-center justify-between mb-1">
                    <span>Cấp Cứu 24/7 (Xuyên Đêm)</span>
                    <span className="text-xs bg-sky-100 text-sky-800 px-2 py-0.5 rounded font-bold">+20% Phí</span>
                  </div>
                  <div className="text-xs text-slate-500">Ưu tiên kỹ sư trưởng xử lý liên tục xuyên đêm 24/7.</div>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Live Summary & Price Estimation (5 cols) */}
          <div className="lg:col-span-5" data-aos="fade-left">
            <div className="sticky top-28 bg-white rounded-3xl p-6 sm:p-8 text-slate-800 shadow-2xl shadow-sky-500/15 border-2 border-sky-200">
              
              <div className="flex items-center justify-between pb-4 border-b border-sky-100">
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-sky-700 bg-sky-50 px-3 py-1 rounded-full border border-sky-200">
                  Dự toán chi phí
                </span>
                <span className="text-xs bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full font-bold border border-emerald-200 flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5 animate-pulse" />
                  Thời gian thực
                </span>
              </div>

              {/* Price display */}
              <div className="py-5">
                <span className="text-xs sm:text-sm text-slate-600 block mb-1 font-medium">
                  Tổng chi phí ước tính trọn gói:
                </span>
                <div className="text-3xl sm:text-4xl font-black text-sky-600 tracking-tight whitespace-nowrap">
                  {calculation.formattedPrice}
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  * Miễn phí kiểm tra 100%. Chỉ thanh toán khi dữ liệu OK.
                </p>
              </div>

              {/* Key details list */}
              <div className="space-y-3 pt-3 border-t border-sky-100 mb-6 text-xs sm:text-sm text-slate-700">
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Thiết bị chọn:</span>
                  <span className="font-bold text-slate-900 text-right max-w-[210px] truncate">
                    {selectedDevice.name}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Hạng mục can thiệp:</span>
                  <span className="font-bold text-sky-600">{selectedAddonIds.length} dịch vụ</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Thời gian dự kiến:</span>
                  <span className="font-bold text-slate-900 flex items-center">
                    <Clock className="w-3.5 h-3.5 mr-1 text-sky-500" />
                    {calculation.estimatedTime}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Kiểm tra ban đầu:</span>
                  <span className="font-bold text-emerald-600 flex items-center">
                    <Zap className="w-3.5 h-3.5 mr-1 text-emerald-500" />
                    Miễn Phí 100% (15-30p)
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Hợp đồng bảo mật:</span>
                  <span className="font-bold text-sky-700 flex items-center">
                    <Lock className="w-3.5 h-3.5 mr-1 text-sky-600" />
                    Ký NDA Pháp Lý
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Chính sách vàng:</span>
                  <span className="font-bold text-emerald-600">Không Cứu Được - Không Mất Phí</span>
                </div>
              </div>

              {/* Action Button */}
              <Button
                type="primary"
                block
                size="large"
                onClick={handleSendQuote}
                className="rounded-xl font-bold bg-sky-600 hover:bg-sky-700 text-white h-12.5 text-sm sm:text-base shadow-lg shadow-sky-500/25 flex items-center justify-center space-x-2 border-0"
              >
                <span>Gửi Yêu Cầu Cấp Cứu Dữ Liệu</span>
                <ArrowRight className="w-4 h-4" />
              </Button>

              <p className="text-xs text-slate-500 text-center mt-3 leading-relaxed">
                Anh Thành Phúc sẽ liên hệ hỗ trợ và kiểm tra file trực tiếp cho bạn trong 10-15 phút.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
