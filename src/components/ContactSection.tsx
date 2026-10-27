'use client';

import React, { useState } from 'react';
import { Form, Input, Select, Button, message } from 'antd';
import confetti from 'canvas-confetti';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  CheckCircle2, 
  Globe, 
  ShieldCheck, 
  Activity,
  ExternalLink,
  Users,
  Monitor
} from 'lucide-react';
import { COMPANY_INFO } from '../data/landingData';

const { Option } = Select;
const { TextArea } = Input;

export const ContactSection: React.FC = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const onFinish = async (values: any) => {
    setLoading(true);
    try {
      let notesWithRemote = values.symptoms || '';
      if (values.ultraviewId) {
        notesWithRemote += `\n[UltraViewer / TeamViewer ID]: ${values.ultraviewId}`;
      }

      const response = await fetch('/api/consultation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: values.fullName,
          phone: values.phone,
          email: values.email || 'Không có',
          serviceType: values.deviceType,
          budget: values.capacity || 'Không rõ',
          notes: notesWithRemote,
          source: 'Form Tiếp Nhận Thành Phúc Data Recovery',
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        message.success('Đã gửi yêu cầu thành công! Anh Phúc sẽ liên hệ lại ngay trong 10-15 phút.');
        
        confetti({
          particleCount: 80,
          spread: 60,
          origin: { y: 0.7 },
          colors: ['#0284c7', '#06b6d4', '#10b981', '#1877F2']
        });
        
        form.resetFields();
      } else {
        message.error(data.error || 'Có lỗi xảy ra. Vui lòng gọi trực tiếp hotline.');
      }
    } catch (err) {
      console.error(err);
      message.error('Lỗi kết nối máy chủ. Vui lòng gọi hotline 0935.473.890.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Info & Verified Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-7" data-aos="fade-right">
            <div>
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-blue-900 text-xs sm:text-sm font-bold mb-3 border border-blue-200">
                <svg className="w-3.5 h-3.5 fill-blue-600" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                <span>META ĐÃ XÁC MINH • HỖ TRỢ ONLINE TOÀN QUỐC</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Liên Hệ Với{' '}
                <span className="tech-gradient-text">Anh Thành Phúc</span>
              </h2>

              <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Nếu thẻ nhớ hay ổ cứng của bạn vừa gặp sự cố (xóa nhầm, format, không nhận), hãy rút thiết bị ra ngay và nhắn tin hoặc gọi điện cho anh Phúc để được hỗ trợ kiểm tra Online từ xa lấy file nhanh nhất!
              </p>
            </div>

            {/* Hotline Call Box */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-sky-600 to-cyan-600 text-white shadow-xl shadow-sky-500/20 space-y-3">
              <div className="flex items-center justify-between text-xs font-bold text-sky-100 uppercase tracking-wider">
                <span>Zalo.me &amp; Hotline Trực Tiếp 24/7</span>
                <span className="px-2 py-0.5 rounded-full bg-white/20 text-white font-mono text-[11px]">
                  Cứu Gấp Trong Đêm
                </span>
              </div>
              <a
                href={COMPANY_INFO.social.zalo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl sm:text-3xl font-black text-white block hover:underline tracking-tight"
                title="Mở Zalo.me chat trực tiếp: 0935.473.890"
              >
                {COMPANY_INFO.hotlineDisplay}
              </a>
              <div className="flex items-center justify-between pt-1 text-xs">
                <span className="text-sky-100 font-medium">
                  Anh Phúc trực tiếp hỗ trợ 24/7.
                </span>
                <a
                  href={COMPANY_INFO.social.zalo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1 px-3 py-1 rounded-lg bg-white text-sky-700 font-bold hover:bg-sky-50 transition-colors shadow-2xs"
                >
                  <span>Mở Zalo.me</span>
                  <ExternalLink className="w-3 h-3 ml-0.5" />
                </a>
              </div>
            </div>

            {/* Verified Channels Box */}
            <div className="space-y-3">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                Kênh liên hệ chính chủ đã xác minh:
              </span>

              {/* Zalo Me Official */}
              <a
                href={COMPANY_INFO.social.zalo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-2xl bg-blue-50/80 border border-blue-200 text-blue-950 hover:bg-blue-100 transition-all shadow-2xs group"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-[#0068FF] text-white flex items-center justify-center font-bold text-xs">
                    Z
                  </div>
                  <div>
                    <span className="text-xs font-bold block">Zalo Me Chính Chủ (Nhắn Tin Ngay):</span>
                    <span className="text-xs text-blue-700 font-medium">zalo.me/0935473890</span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-blue-500 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <a
                href={COMPANY_INFO.social.facebookPersonal}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-2xl bg-blue-50/70 border border-blue-200 text-blue-950 hover:bg-blue-100 transition-all shadow-2xs group"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs">
                    f
                  </div>
                  <div>
                    <span className="text-xs font-bold block">Facebook Cá Nhân (20K Người Theo Dõi):</span>
                    <span className="text-xs text-blue-700 font-medium">www.facebook.com/ThanhphucRecover</span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-blue-500 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <a
                href={COMPANY_INFO.social.facebookPage}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-2xl bg-sky-50/70 border border-sky-200 text-sky-950 hover:bg-sky-100 transition-all shadow-2xs group"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-sky-600 text-white flex items-center justify-center font-bold text-xs">
                    📸
                  </div>
                  <div>
                    <span className="text-xs font-bold block">Fanpage Meta Verified (26K Người Theo Dõi):</span>
                    <span className="text-xs text-sky-700 font-medium">Khôi Phục Dữ Liệu Thẻ Nhớ</span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-sky-500 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <a
                href={COMPANY_INFO.social.facebookGroup}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200 text-amber-950 hover:bg-amber-100 transition-all shadow-2xs group"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-amber-600 text-white flex items-center justify-center font-bold text-xs">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold block">🔴 Admin Group KPDL (47.3K Thành Viên):</span>
                    <span className="text-xs text-amber-700 font-medium">Khôi phục dữ liệu thẻ nhớ - ổ cứng lớn nhất</span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-amber-500 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

            {/* Address & City */}
            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start space-x-3 text-xs text-slate-700">
              <MapPin className="w-5 h-5 text-sky-600 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 block text-xs">Địa bàn tiếp nhận trực tiếp:</strong>
                <span>Thành phố Hồ Chí Minh • Hỗ trợ kết nối Online từ xa toàn quốc 24/7</span>
              </div>
            </div>

            {/* Golden Commitments list */}
            <div className="p-3.5 rounded-2xl bg-emerald-50/70 border border-emerald-200 text-xs text-emerald-900 space-y-1.5 font-bold">
              <div className="flex items-center">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 flex-shrink-0" />
                <span>Không cứu được dữ liệu - Hoàn toàn không mất phí</span>
              </div>
              <div className="flex items-center">
                <ShieldCheck className="w-4 h-4 text-emerald-600 mr-2 flex-shrink-0" />
                <span>Kiểm tra tệp tin hoàn toàn miễn phí trước khi quyết định</span>
              </div>
            </div>
          </div>

          {/* Right Column: Intake & Consultation Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#f8fafc] rounded-3xl p-6 sm:p-9 border border-sky-200/90 shadow-xl" data-aos="fade-left">
            
            <div className="mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                Gửi Yêu Cầu Cứu Dữ Liệu Online / Trực Tiếp
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Điền thông tin để anh Phúc liên hệ hướng dẫn sơ cứu đúng kỹ thuật và kiểm tra file cho bạn ngay.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 text-center space-y-4 bg-white rounded-2xl border border-emerald-200">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h4 className="text-xl font-bold text-slate-900">Đã Tiếp Nhận Thông Tin!</h4>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Anh Thành Phúc sẽ gọi điện hoặc nhắn tin Zalo trực tiếp cho bạn qua số điện thoại để hướng dẫn kiểm tra file ngay.
                </p>
                <Button
                  type="primary"
                  onClick={() => setSubmitted(false)}
                  className="rounded-xl font-bold bg-sky-600 hover:bg-sky-700 h-10 px-6 border-0"
                >
                  Gửi yêu cầu thiết bị khác
                </Button>
              </div>
            ) : (
              <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
                requiredMark={false}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Form.Item
                    name="fullName"
                    label={<span className="font-bold text-xs text-slate-700">Họ và tên của bạn *</span>}
                    rules={[{ required: true, message: 'Vui lòng nhập họ và tên' }]}
                  >
                    <Input placeholder="Ví dụ: Anh Tuấn / Chị Mai" className="h-11 rounded-xl text-sm" />
                  </Form.Item>

                  <Form.Item
                    name="phone"
                    label={<span className="font-bold text-xs text-slate-700">Số điện thoại / Zalo *</span>}
                    rules={[{ required: true, message: 'Vui lòng nhập số điện thoại hoặc Zalo' }]}
                  >
                    <Input placeholder="Ví dụ: 0935 473 890" className="h-11 rounded-xl text-sm" />
                  </Form.Item>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Form.Item
                    name="deviceType"
                    label={<span className="font-bold text-xs text-slate-700">Loại thiết bị gặp sự cố *</span>}
                    initialValue="Thẻ nhớ máy ảnh SD/CF"
                    rules={[{ required: true, message: 'Vui lòng chọn loại thiết bị' }]}
                  >
                    <Select className="h-11 rounded-xl text-sm">
                      <Option value="Thẻ nhớ máy ảnh SD/CF">Thẻ nhớ máy ảnh (SD, MicroSD, CF, CFexpress) 📸</Option>
                      <Option value="Ổ cứng HDD">Ổ cứng máy tính / Ổ di động HDD</Option>
                      <Option value="Ổ cứng SSD">Ổ cứng SSD thể rắn / M.2 NVMe</Option>
                      <Option value="USB Flash">USB Flash / Thẻ nhớ nhỏ</Option>
                      <Option value="Google Drive">Google Drive / OneDrive Cloud</Option>
                      <Option value="Máy chủ Server RAID">Máy chủ Server, SAN, NAS, RAID</Option>
                      <Option value="Khác">Thiết bị khác</Option>
                    </Select>
                  </Form.Item>

                  <Form.Item
                    name="capacity"
                    label={<span className="font-bold text-xs text-slate-700">Dung lượng thiết bị</span>}
                  >
                    <Input placeholder="Ví dụ: 64GB, 128GB, 1TB, 2TB..." className="h-11 rounded-xl text-sm" />
                  </Form.Item>
                </div>

                <Form.Item
                  name="ultraviewId"
                  label={
                    <span className="font-bold text-xs text-slate-700 flex items-center">
                      <Monitor className="w-3.5 h-3.5 mr-1 text-sky-600" />
                      ID UltraViewer / TeamViewer (Nếu cần cứu Online từ xa)
                    </span>
                  }
                >
                  <Input placeholder="Ví dụ: ID: 52 143 890 - Pass: 1234" className="h-11 rounded-xl text-sm" />
                </Form.Item>

                <Form.Item
                  name="symptoms"
                  label={<span className="font-bold text-xs text-slate-700">Mô tả tình trạng lỗi &amp; file cần cứu *</span>}
                  rules={[{ required: true, message: 'Vui lòng mô tả sơ lược triệu chứng' }]}
                >
                  <TextArea
                    rows={3}
                    placeholder="Ví dụ: Thẻ nhớ máy ảnh bị lỡ tay format nhầm, hoặc cắm vào máy tính bắt format; cần cứu lại ảnh cưới chụp hôm qua..."
                    className="rounded-xl text-sm"
                  />
                </Form.Item>

                <Button
                  type="primary"
                  htmlType="submit"
                  loading={loading}
                  block
                  size="large"
                  className="rounded-xl font-bold bg-sky-600 hover:bg-sky-700 text-white h-12.5 text-sm sm:text-base shadow-lg shadow-sky-500/25 flex items-center justify-center space-x-2 border-0"
                >
                  <Send className="w-4 h-4" />
                  <span>Gửi Yêu Cầu Cho Anh Phúc Ngay</span>
                </Button>

                <p className="text-[11px] text-slate-500 text-center mt-3">
                  Cam kết bảo mật 100%. Kiểm tra miễn phí trước khi quyết định.
                </p>
              </Form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
