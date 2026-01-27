"use client";

import Button from "@/components/ui/Button";

const layers = [
  { level: "L4", title: "展示層", color: "#f59e0b", gradient: "from-[#f59e0b] to-[#d97706]" },
  { level: "L3", title: "平台層", color: "#10b981", gradient: "from-[#10b981] to-[#059669]" },
  { level: "L2", title: "網路通訊層", color: "#7c3aed", gradient: "from-[#7c3aed] to-[#6d28d9]" },
  { level: "L1", title: "訊號感知層", color: "#00d4ff", gradient: "from-[#00d4ff] to-[#0ea5e9]" },
];

export default function Architecture() {
  return (
    <section className="bg-[#050810] py-24 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00d4ff]/30 bg-[#00d4ff]/10 mb-6">
              <span className="text-[#00d4ff] text-sm font-medium">技術能力</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              完整的
              <span className="bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] bg-clip-text text-transparent">
                {" "}四層架構
              </span>
              {" "}技術整合
            </h2>

            <p className="text-[#94a3b8] text-lg leading-relaxed mb-8">
              從現場感測器到雲端平台，我們具備完整的技術堆疊整合能力。
              不論您的機台是新是舊，我們都能協助您實現智能化升級。
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 text-[#94a3b8]">
                <svg className="w-5 h-5 text-[#10b981]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>支援各種 PLC、HMI、感測器整合</span>
              </div>
              <div className="flex items-center gap-3 text-[#94a3b8]">
                <svg className="w-5 h-5 text-[#10b981]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>整合現有 ERP、MES 系統</span>
              </div>
              <div className="flex items-center gap-3 text-[#94a3b8]">
                <svg className="w-5 h-5 text-[#10b981]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>跨平台可視化展示（Web、Mobile）</span>
              </div>
            </div>

            <Button href="/solutions" variant="outline">
              了解更多 →
            </Button>
          </div>

          {/* Right - 3D Isometric Visual */}
          <div className="relative flex items-center justify-center min-h-[400px]">
            {/* 3D Isometric Stack */}
            <div
              className="relative"
              style={{
                transform: "rotateX(60deg) rotateZ(-45deg)",
                transformStyle: "preserve-3d",
              }}
            >
              {layers.map((layer, index) => (
                <div
                  key={layer.level}
                  className="relative group"
                  style={{
                    transform: `translateZ(${index * 25}px)`,
                    transformStyle: "preserve-3d",
                  }}
                >
                  {/* Top face */}
                  <div
                    className={`w-48 h-48 bg-gradient-to-br ${layer.gradient} rounded-lg shadow-2xl transition-all duration-300 group-hover:shadow-[0_0_40px_rgba(255,255,255,0.2)]`}
                    style={{
                      transform: "translateZ(20px)",
                    }}
                  >
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                      <span className="text-2xl font-bold">{layer.level}</span>
                      <span className="text-sm mt-1 opacity-90">{layer.title}</span>
                    </div>
                  </div>

                  {/* Right face */}
                  <div
                    className="absolute top-0 w-48 h-5 origin-bottom"
                    style={{
                      transform: "rotateX(-90deg) translateZ(192px)",
                      background: `linear-gradient(to bottom, ${layer.color}cc, ${layer.color}66)`,
                    }}
                  />

                  {/* Front face */}
                  <div
                    className="absolute top-0 left-0 w-5 h-48 origin-left"
                    style={{
                      transform: "rotateY(90deg)",
                      background: `linear-gradient(to right, ${layer.color}99, ${layer.color}44)`,
                    }}
                  />
                </div>
              ))}
            </div>

            {/* Glow effects */}
            <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-[#00d4ff] rounded-full blur-[80px] opacity-30" />
            <div className="absolute bottom-1/4 left-1/4 w-32 h-32 bg-[#7c3aed] rounded-full blur-[80px] opacity-30" />

            {/* Floating labels - arrow pointing from L1 to L4 (bottom-right to top-left) */}
            <div className="absolute bottom-8 right-8 flex items-center gap-2">
              <div className="text-xs text-[#94a3b8]">DATA FLOW</div>
              <svg className="w-6 h-6 text-[#00d4ff] animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17L7 7M7 7h10M7 7v10" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
