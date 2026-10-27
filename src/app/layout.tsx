import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import "aos/dist/aos.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta-sans",
});

export const metadata: Metadata = {
  title: "Thành Phúc Data Recovery | Khôi Phục Dữ Liệu Thẻ Nhớ • Ổ Cứng • USB • Drive (Meta Đã Xác Minh)",
  description: "Thành Phúc Data Recovery - Khôi phục dữ liệu thẻ nhớ máy ảnh, ổ cứng HDD/SSD, USB, Google Drive. Xóa nhầm, lỗi thẻ, ghi đè file ảnh/video 📸🎦🔄. Hỗ trợ Online toàn quốc 24/7 qua Ultraviewer. Hotline/Zalo: 0935.473.890.",
  keywords: "Thành Phúc Data Recovery, cứu dữ liệu thẻ nhớ, khôi phục dữ liệu thẻ nhớ, cứu dữ liệu ổ cứng, phục hồi file ghi đè, cứu ảnh cưới, cứu video 4k, cứu dữ liệu usb, cứu dữ liệu google drive, khoiphucdulieuthenho, 0935473890",
  authors: [{ name: "Thành Phúc Data Recovery" }],
  openGraph: {
    title: "Thành Phúc Data Recovery - Khôi Phục Dữ Liệu Thẻ Nhớ • Ổ Cứng • USB • Drive",
    description: "Dịch vụ Meta đã xác minh chính chủ. Hỗ trợ Online toàn quốc. Không cứu được dữ liệu - Hoàn toàn không mất phí. Hotline: 0935.473.890.",
    type: "website",
    locale: "vi_VN",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className={plusJakartaSans.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="icon" href="/icon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/icon.png" />
      </head>
      <body className={`${plusJakartaSans.className} min-h-screen bg-slate-50 text-slate-900 antialiased`}>
        {children}
      </body>
    </html>
  );
}
