"use client";

const features = [
  {
    icon: "📡",
    title: "L1 訊號感知層",
    description: "現場資料點位規劃與佈建、資料傳輸通訊閘道規劃、API介接服務",
    color: "#f97316",
  },
  {
    icon: "🌐",
    title: "L2 網路通訊層",
    description: "整合異質網路協定資料源、提供 HTTP/s 通訊環境，開發便利",
    color: "#1e3a5f",
  },
  {
    icon: "☁️",
    title: "L3 平台層",
    description: "可攜式與完整版 PaaS 平台，效能提升、服務加倍",
    color: "#10b981",
  },
  {
    icon: "📊",
    title: "L4 展示層",
    description: "RWD 響應式設計、整合現有 ERP/MES 系統，開放二次開發",
    color: "#7c3aed",
  },
];

export default function FeaturesB() {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-block px-4 py-1 bg-[#f97316]/10 text-[#f97316] text-sm font-medium rounded-full mb-4">
            技術架構
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e293b] mb-4">
            智能化產線四層架構
          </h2>
          <p className="text-[#64748b] text-lg">
            從感測端到展示端，完整的技術堆疊整合，打造您專屬的智慧工廠解決方案
          </p>
        </div>

        {/* Features - Timeline style */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-[#e2e8f0] hidden md:block" />

          {/* Feature items */}
          <div className="space-y-8">
            {features.map((feature, index) => (
              <div key={feature.title} className="relative flex gap-6 md:gap-12">
                {/* Timeline dot */}
                <div
                  className="relative z-10 w-16 h-16 rounded-xl flex items-center justify-center text-2xl shrink-0 shadow-lg"
                  style={{ backgroundColor: feature.color }}
                >
                  <span>{feature.icon}</span>
                  {/* Layer number */}
                  <span className="absolute -bottom-2 -right-2 w-6 h-6 bg-white border-2 rounded-full flex items-center justify-center text-xs font-bold" style={{ borderColor: feature.color, color: feature.color }}>
                    {index + 1}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 pb-8">
                  <div className="bg-[#f8fafc] p-6 rounded-xl border border-[#e2e8f0] hover:border-[#f97316]/50 hover:shadow-md transition-all">
                    <h3 className="text-xl font-semibold text-[#1e293b] mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-[#64748b] leading-relaxed">
                      {feature.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {index === 0 && ['PLC', 'HMI', 'Sensor', 'Modbus'].map(tag => (
                        <span key={tag} className="px-3 py-1 bg-white border border-[#e2e8f0] text-[#64748b] text-xs rounded-full">{tag}</span>
                      ))}
                      {index === 1 && ['RS485', 'Ethernet', 'HTTP/s'].map(tag => (
                        <span key={tag} className="px-3 py-1 bg-white border border-[#e2e8f0] text-[#64748b] text-xs rounded-full">{tag}</span>
                      ))}
                      {index === 2 && ['MySQL', 'PostgreSQL', 'MongoDB'].map(tag => (
                        <span key={tag} className="px-3 py-1 bg-white border border-[#e2e8f0] text-[#64748b] text-xs rounded-full">{tag}</span>
                      ))}
                      {index === 3 && ['Dashboard', 'Mobile', 'API'].map(tag => (
                        <span key={tag} className="px-3 py-1 bg-white border border-[#e2e8f0] text-[#64748b] text-xs rounded-full">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="flex items-center justify-center gap-4 mt-12 pt-8 border-t border-[#e2e8f0]">
          <span className="text-[#64748b]">想了解更多技術細節？</span>
          <button className="px-6 py-3 bg-[#1e3a5f] text-white rounded-lg hover:bg-[#334155] transition-all">
            下載技術白皮書
          </button>
        </div>
      </div>
    </section>
  );
}
