"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";

const services = [
  {
    icon: "🔌",
    title: "物聯網平台組件",
    description: "物聯網平台相關組件產品/系統研發與銷售，提供完整的 IoT 解決方案",
  },
  {
    icon: "📊",
    title: "大數據服務平台",
    description: "服務為基磐的企業產線專屬大數據服務平台，實現數據驅動的智慧決策",
  },
  {
    icon: "🤖",
    title: "智慧自動控制",
    description: "客製化的智慧自動控制系統設計開發，滿足各產業獨特需求",
  },
  {
    icon: "☁️",
    title: "雲服務平台",
    description: "雲服務平台技術組件相關產品研發，提供彈性且可擴展的雲端服務",
  },
];

export default function Services() {
  return (
    <section className="bg-[#0a0f1a] py-24">
      <div className="container mx-auto px-6">
        <SectionHeader
          badge="核心服務"
          title="我們處理感知訊息"
          highlight="提供資訊服務"
          description="從訊號感知到雲端展示，提供全方位的智慧工廠解決方案"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={service.title} glow>
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-[#94a3b8] text-sm leading-relaxed">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
