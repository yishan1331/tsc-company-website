"use client";

export default function HeroB() {
  return (
    <section className="relative min-h-screen bg-[#f8fafc] overflow-hidden">
      {/* Diagonal accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#1e3a5f] transform skew-x-[-6deg] origin-top-right" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            {/* Company badge */}
            <div className="inline-flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-[#1e3a5f] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">tSC</span>
              </div>
              <div>
                <div className="text-[#1e3a5f] font-semibold">台訊鍇股份有限公司</div>
                <div className="text-[#64748b] text-sm">taiwan Signal Cloud Co. Ltd.</div>
              </div>
            </div>

            {/* Main heading */}
            <h1 className="text-4xl md:text-6xl font-bold text-[#1e293b] mb-6 leading-tight">
              製造業
              <span className="text-[#f97316]">智能化</span>
              <br />
              最佳夥伴
            </h1>

            <p className="text-lg text-[#64748b] mb-8 max-w-xl leading-relaxed">
              30年產業經驗，我們深知製造業的痛點。從感測器佈建到雲端平台，
              提供一站式 AIoT + MES 解決方案，協助您提升產能、改善良率。
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4 mb-12">
              <button className="px-8 py-4 bg-[#f97316] text-white font-semibold rounded-lg hover:bg-[#ea580c] transition-all shadow-lg shadow-[#f97316]/30">
                預約免費諮詢
              </button>
              <button className="px-8 py-4 border-2 border-[#334155] text-[#334155] font-semibold rounded-lg hover:bg-[#334155] hover:text-white transition-all">
                瀏覽成功案例
              </button>
            </div>

            {/* Trust badges */}
            <div className="flex items-center gap-6 text-sm text-[#64748b]">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#10b981]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>母公司成立於1994年</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#10b981]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>在地服務團隊</span>
              </div>
            </div>
          </div>

          {/* Right content - Stats cards */}
          <div className="relative lg:pl-12">
            <div className="grid grid-cols-2 gap-4">
              {/* Stats cards */}
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-[#f97316]">
                <div className="text-4xl font-bold text-[#1e3a5f] mb-1">30+</div>
                <div className="text-[#64748b] text-sm">年產業經驗</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-[#1e3a5f]">
                <div className="text-4xl font-bold text-[#1e3a5f] mb-1">100+</div>
                <div className="text-[#64748b] text-sm">導入案例</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-[#10b981]">
                <div className="text-4xl font-bold text-[#1e3a5f] mb-1">99.9%</div>
                <div className="text-[#64748b] text-sm">系統穩定度</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-[#7c3aed]">
                <div className="text-4xl font-bold text-[#1e3a5f] mb-1">24/7</div>
                <div className="text-[#64748b] text-sm">技術支援</div>
              </div>
            </div>

            {/* Floating product card */}
            <div className="absolute -bottom-8 -left-8 bg-[#1e3a5f] text-white p-6 rounded-xl shadow-xl max-w-xs hidden lg:block">
              <div className="text-[#f97316] text-sm font-medium mb-2">主力產品</div>
              <div className="text-xl font-bold mb-2">aIoT-Box</div>
              <p className="text-sm text-white/80">
                小而美的邊緣運算設備，連結新舊式機台，即插即用。
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom industry icons */}
      <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-[#e2e8f0] py-6">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between text-[#64748b]">
            <span className="text-sm">服務產業：</span>
            <div className="flex items-center gap-8 text-sm">
              <span className="flex items-center gap-2">🔩 扣件成型</span>
              <span className="flex items-center gap-2">🏭 金屬模具</span>
              <span className="flex items-center gap-2">⚡ 電源轉換器</span>
              <span className="flex items-center gap-2">🧵 紡織染整</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
