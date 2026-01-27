"use client";

import Button from "@/components/ui/Button";

export default function CTA() {
  return (
    <section className="relative bg-[#050810] py-24 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00d4ff] rounded-full blur-[200px] opacity-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#7c3aed] rounded-full blur-[200px] opacity-10" />

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          {/* Main content */}
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            準備好開始
            <span className="bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] bg-clip-text text-transparent">
              {" "}智能化轉型
            </span>
            {" "}了嗎？
          </h2>

          <p className="text-xl text-[#94a3b8] mb-10 leading-relaxed">
            讓我們的專業團隊為您評估現有系統，規劃最適合的智能化升級方案。
            <br />
            免費諮詢，無需負擔任何費用。
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/contact" size="lg" glow>
              預約免費諮詢
            </Button>
            <Button href="/solutions" variant="ghost" size="lg">
              先了解我們的方案 →
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex items-center justify-center gap-8 mt-12 pt-12 border-t border-white/10">
            <div className="flex items-center gap-2 text-[#94a3b8] text-sm">
              <svg
                className="w-5 h-5 text-[#10b981]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>免費技術諮詢</span>
            </div>
            <div className="flex items-center gap-2 text-[#94a3b8] text-sm">
              <svg
                className="w-5 h-5 text-[#10b981]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>在地化服務團隊</span>
            </div>
            <div className="flex items-center gap-2 text-[#94a3b8] text-sm">
              <svg
                className="w-5 h-5 text-[#10b981]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>30+ 年產業經驗</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
