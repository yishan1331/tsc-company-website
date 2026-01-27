"use client";

const features = [
  {
    icon: "📡",
    title: "L1 訊號感知層",
    description: "現場資料點位規劃與佈建、資料傳輸通訊閘道規劃、API介接服務",
    gradient: "from-[#00d4ff] to-[#0ea5e9]",
  },
  {
    icon: "🌐",
    title: "L2 網路通訊層",
    description: "整合異質網路協定資料源、提供 HTTP/s 通訊環境，開發便利",
    gradient: "from-[#7c3aed] to-[#a855f7]",
  },
  {
    icon: "☁️",
    title: "L3 平台層",
    description: "可攜式與完整版 PaaS 平台，效能提升、服務加倍",
    gradient: "from-[#10b981] to-[#34d399]",
  },
  {
    icon: "📊",
    title: "L4 展示層",
    description: "RWD 響應式設計、整合現有 ERP/MES 系統，開放二次開發",
    gradient: "from-[#f59e0b] to-[#fbbf24]",
  },
];

export default function FeaturesA() {
  return (
    <section className="bg-[#0a0f1a] py-24">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            智能化產線
            <span className="bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] bg-clip-text text-transparent">
              {" "}四層架構
            </span>
          </h2>
          <p className="text-[#94a3b8] max-w-2xl mx-auto">
            從感測端到展示端，完整的技術堆疊整合，打造您專屬的智慧工廠解決方案
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative p-6 rounded-2xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-[#00d4ff]/50 transition-all duration-300"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-[#00d4ff]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-2xl mb-4`}>
                  {feature.icon}
                </div>

                {/* Layer indicator */}
                <div className="text-[#00d4ff] text-sm font-mono mb-2">
                  Layer {index + 1}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-[#94a3b8] text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Connection line to next card */}
              {index < features.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-gradient-to-r from-[#00d4ff]/50 to-transparent" />
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <button className="px-6 py-3 border border-[#00d4ff]/50 text-[#00d4ff] rounded-lg hover:bg-[#00d4ff]/10 transition-all">
            查看完整技術架構 →
          </button>
        </div>
      </div>
    </section>
  );
}
