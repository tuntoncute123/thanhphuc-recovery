'use client';

import React, { useState, useEffect } from 'react';
import { Modal, Form, Input, Select, Button, message } from 'antd';
import confetti from 'canvas-confetti';
import { 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  Calculator
} from 'lucide-react';

const { Option } = Select;
const { TextArea } = Input;

interface ConsultationModalProps {
  open: boolean;
  onClose: () => void;
  initialService?: string;
  initialProjectDetails?: {
    projectType: string;
    selectedAddons: string[];
    estimatedPrice: string;
    estimatedTime: string;
  } | null;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  open,
  onClose,
  initialService,
  initialProjectDetails,
}) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (open) {
      setSubmitted(false);
      form.resetFields();
      if (initialService) {
        form.setFieldsValue({ deviceType: initialService });
      }
    }
  }, [open, initialService, form]);

  const onFinish = async (values: any) => {
    setLoading(true);
    try {
      let combinedNotes = values.symptoms || '';
      if (initialProjectDetails) {
        combinedNotes += `\n[Cấu hình từ Dự toán 30s]:\n- Thiết bị: ${initialProjectDetails.projectType}\n- Dịch vụ kèm theo: ${initialProjectDetails.selectedAddons.join(', ')}\n- Ước tính: ${initialProjectDetails.estimatedPrice} (${initialProjectDetails.estimatedTime})`;
      }

      const response = await fetch('/api/consultation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: values.fullName,
          phone: values.phone,
          email: values.email,
          serviceType: values.deviceType || initialService || 'Cứu dữ liệu khẩn cấp',
          budget: initialProjectDetails?.estimatedPrice || values.capacity || 'Chưa xác định',
          notes: combinedNotes,
          source: initialProjectDetails ? 'Dự Toán Chi Phí 30s Modal' : 'Modal Cấp Cứu Dữ Liệu',
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        message.success('Đã gửi yêu cầu thành công!');
        
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#0284c7', '#06b6d4', '#10b981', '#38bdf8']
        });
      } else {
        message.error(data.error || 'Có lỗi xảy ra. Vui lòng gọi trực tiếp hotline.');
      }
    } catch (err) {
      console.error(err);
      message.error('Lỗi mạng. Vui lòng liên hệ hotline trực tiếp.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      open={open}
      onCancel={onClose}
      footer={null}
      width={640}
      centered
      destroyOnClose
      className="recovery-modal"
    >
      <div className="py-2 px-1">
        
        {/* Header */}
        <div className="text-center mb-6">
          <img
            src="/logo.png"
            alt="Thành Phúc Recover"
            className="w-12 h-12 rounded-2xl mx-auto mb-2 shadow-xs object-contain"
          />
          <h3 className="text-xl sm:text-2xl font-black text-slate-900">
            Yêu Cầu Cấp Cứu &amp; Kiểm Tra Miễn Phí
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            Anh Thành Phúc sẽ liên hệ chẩn đoán tình trạng và kiểm tra file trực tiếp cho bạn trong 10-15 phút.
          </p>
        </div>

        {/* Display forwarded configuration from 30s estimator */}
        {initialProjectDetails && (
          <div className="mb-5 p-3.5 rounded-2xl bg-sky-50 border border-sky-200 text-xs text-slate-700">
            <div className="flex items-center justify-between font-bold text-sky-900 pb-2 border-b border-sky-200/60 mb-2">
              <span className="flex items-center">
                <Calculator className="w-4 h-4 mr-1 text-sky-600" />
                Cấu hình dự toán đã chọn:
              </span>
              <span className="text-sky-600 text-sm font-black">{initialProjectDetails.estimatedPrice}</span>
            </div>
            <p className="font-semibold text-slate-800">{initialProjectDetails.projectType}</p>
            {initialProjectDetails.selectedAddons.length > 0 && (
              <p className="text-slate-600 mt-0.5">
                Hạng mục: {initialProjectDetails.selectedAddons.join(' • ')}
              </p>
            )}
            <p className="text-slate-500 mt-0.5 font-medium">
              Thời gian: {initialProjectDetails.estimatedTime}
            </p>
          </div>
        )}

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <h4 className="text-xl font-bold text-slate-900">Đã Tiếp Nhận Thông Tin!</h4>
            <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
              Cảm ơn quý khách. Anh Thành Phúc sẽ liên hệ trực tiếp qua số điện thoại/Zalo để hướng dẫn phương án xử lý thiết bị an toàn.
            </p>
            <Button
              type="primary"
              onClick={onClose}
              className="rounded-xl font-bold bg-sky-600 hover:bg-sky-700 h-10 px-8 border-0"
            >
              Đóng Cửa Sổ
            </Button>
          </div>
        ) : (
          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            requiredMark={false}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <Form.Item
                name="fullName"
                label={<span className="font-bold text-xs text-slate-700">Họ và tên *</span>}
                rules={[{ required: true, message: 'Vui lòng nhập họ và tên' }]}
              >
                <Input placeholder="Nguyễn Văn A" className="h-10 rounded-xl text-sm" />
              </Form.Item>

              <Form.Item
                name="phone"
                label={<span className="font-bold text-xs text-slate-700">Số điện thoại *</span>}
                rules={[{ required: true, message: 'Vui lòng nhập số điện thoại' }]}
              >
                <Input placeholder="0909 123 456" className="h-10 rounded-xl text-sm" />
              </Form.Item>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <Form.Item
                name="email"
                label={<span className="font-bold text-xs text-slate-700">Email (Tùy chọn)</span>}
              >
                <Input placeholder="email@gmail.com" className="h-10 rounded-xl text-sm" />
              </Form.Item>

              <Form.Item
                name="deviceType"
                label={<span className="font-bold text-xs text-slate-700">Loại thiết bị</span>}
                initialValue={initialService || 'Ổ cứng cơ HDD'}
              >
                <Select className="h-10 rounded-xl text-sm">
                  <Option value="Ổ cứng cơ HDD">Ổ cứng cơ HDD (PC, Laptop, Di động)</Option>
                  <Option value="Ổ cứng SSD NVMe">Ổ cứng thể rắn SSD / M.2 NVMe</Option>
                  <Option value="Máy chủ Server RAID">Máy chủ Server, SAN, NAS, RAID</Option>
                  <Option value="Virus Ransomware">Bị Virus Ransomware mã hóa tống tiền</Option>
                  <Option value="Thẻ nhớ / USB">Thẻ nhớ máy ảnh SD / CF / USB Flash</Option>
                  <Option value="Điện thoại Smartphone">Điện thoại iPhone / Android</Option>
                  <Option value="Khác">Thiết bị lưu trữ khác</Option>
                </Select>
              </Form.Item>
            </div>

            <Form.Item
              name="symptoms"
              label={<span className="font-bold text-xs text-slate-700">Mô tả tình trạng lỗi của thiết bị</span>}
            >
              <TextArea
                rows={3}
                placeholder="Ví dụ: Rơi ổ cứng kêu lách cách, hoặc format nhầm ổ D, cần cứu file kế toán gấp..."
                className="rounded-xl text-sm"
              />
            </Form.Item>

            <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 mb-4 flex items-center space-x-2 text-xs text-emerald-800 font-bold">
              <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span>Chính sách vàng: &quot;Không Cứu Được Dữ Liệu - Hoàn Toàn Không Mất Phí&quot;</span>
            </div>

            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              block
              size="large"
              className="rounded-xl font-bold bg-sky-600 hover:bg-sky-700 text-white h-11 text-sm shadow-md shadow-sky-500/20 border-0"
            >
              <Send className="w-4 h-4 mr-1.5" />
              <span>Gửi Yêu Cầu Cứu Dữ Liệu Ngay</span>
            </Button>
          </Form>
        )}
      </div>
    </Modal>
  );
};
