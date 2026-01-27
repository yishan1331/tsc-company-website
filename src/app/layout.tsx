import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "台訊鍇 tSC - 工業物聯網解決方案",
  description:
    "台訊鍇股份有限公司 - 提供客戶服務導向型雲端平台系統與相關副產品的開發與應用，為勞力密集的產業提升智能化能量與國際競爭力。",
  keywords: ["IoT", "工業物聯網", "MES", "智慧製造", "PaaS", "台訊鍇", "tSC"],
  authors: [{ name: "台訊鍇股份有限公司" }],
  openGraph: {
    title: "台訊鍇 tSC - 工業物聯網解決方案",
    description:
      "提供客戶服務導向型雲端平台系統，為勞力密集的產業提升智能化能量與國際競爭力。",
    type: "website",
    locale: "zh_TW",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW">
      <body className="antialiased bg-[#0a0f1a] text-white">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
