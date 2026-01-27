"use client";

import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#0a0f1a] overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 tech-grid opacity-50" />

      {/* Gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#00d4ff] rounded-full blur-[120px] opacity-20 animate-float" />
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-[#7c3aed] rounded-full blur-[150px] opacity-20 animate-float"
        style={{ animationDelay: "1s" }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00d4ff]/30 bg-[#00d4ff]/10 mb-8">
            <span className="w-2 h-2 bg-[#10b981] rounded-full animate-pulse" />
            <span className="text-[#00d4ff] text-sm font-medium">
              工業 4.0 智能化解決方案
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            連結感知
            <span className="bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] bg-clip-text text-transparent animate-gradient">
              {" "}
              智能製造
            </span>
          </h1>

          <p className="text-xl text-[#94a3b8] mb-10 max-w-2xl leading-relaxed">
            台訊鍇提供客戶服務導向型雲端平台系統，為勞力密集的產業提升智能化能量與國際競爭力。
            從感測器到雲端，一站式 AIoT 解決方案。
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4 mb-16">
            <Button href="/solutions" size="lg" glow>
              了解解決方案
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              聯絡我們
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-xl">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#00d4ff] mb-2">30+</div>
              <div className="text-[#94a3b8] text-sm">年產業經驗</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#00d4ff] mb-2">100+</div>
              <div className="text-[#94a3b8] text-sm">成功導入案例</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#00d4ff] mb-2">99.9%</div>
              <div className="text-[#94a3b8] text-sm">系統穩定度</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating tech elements */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden lg:block">
        <div className="relative w-80 h-80">
          {/* Central node */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-br from-[#00d4ff] to-[#7c3aed] rounded-2xl flex items-center justify-center animate-pulse-glow">
            <span className="text-white font-bold text-xl">tSC</span>
          </div>

          {/* Orbiting nodes */}
          {["IoT", "AI", "MES", "PaaS"].map((label, i) => (
            <div
              key={label}
              className="absolute w-14 h-14 bg-[#0a0f1a] border border-[#00d4ff]/50 rounded-xl flex items-center justify-center animate-float"
              style={{
                top: `${50 + 40 * Math.sin((i * Math.PI) / 2)}%`,
                left: `${50 + 40 * Math.cos((i * Math.PI) / 2)}%`,
                transform: "translate(-50%, -50%)",
                animationDelay: `${i * 0.3}s`,
              }}
            >
              <span className="text-[#00d4ff] text-xs font-medium">{label}</span>
            </div>
          ))}

          {/* Connection lines */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 320 320"
          >
            <circle
              cx="160"
              cy="160"
              r="80"
              fill="none"
              stroke="rgba(0,212,255,0.2)"
              strokeWidth="1"
              strokeDasharray="5,5"
            />
            <circle
              cx="160"
              cy="160"
              r="120"
              fill="none"
              stroke="rgba(124,58,237,0.2)"
              strokeWidth="1"
              strokeDasharray="5,5"
            />
          </svg>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#94a3b8]">
        <span className="text-xs">往下捲動</span>
        <div className="w-6 h-10 border-2 border-[#94a3b8]/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-[#00d4ff] rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
