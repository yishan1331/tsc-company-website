"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";

const serviceIcons = {
  iot: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  data: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
  auto: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  cloud: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
    </svg>
  ),
};

const services = [
  {
    icon: serviceIcons.iot,
    title: "物聯網平台組件",
    description: "物聯網平台相關組件產品/系統研發與銷售，提供完整的 IoT 解決方案",
  },
  {
    icon: serviceIcons.data,
    title: "大數據服務平台",
    description: "服務為基磐的企業產線專屬大數據服務平台，實現數據驅動的智慧決策",
  },
  {
    icon: serviceIcons.auto,
    title: "智慧自動控制",
    description: "客製化的智慧自動控制系統設計開發，滿足各產業獨特需求",
  },
  {
    icon: serviceIcons.cloud,
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
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#00d4ff]/20 to-[#7c3aed]/20 flex items-center justify-center text-[#00d4ff] mb-4">{service.icon}</div>
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
