import { Metadata } from "next";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "關於我們 - 台訊鍇 tSC",
  description: "台訊鍇股份有限公司 - 專注於工業物聯網與智慧製造解決方案",
};

const milestones = [
  { year: "2024", title: "台訊鍇成立", description: "專注於工業物聯網與智慧製造解決方案" },
];

const values = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "創新驅動",
    description: "持續探索最新技術，為客戶提供前瞻性的解決方案",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "客戶至上",
    description: "深入了解客戶需求，提供量身訂製的服務與支援",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "品質堅持",
    description: "嚴格把關每一個環節，確保系統穩定可靠",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    title: "在地服務",
    description: "立足台灣，提供即時的技術支援與售後服務",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative bg-[#0a0f1a] py-24 overflow-hidden">
        <div className="absolute inset-0 tech-grid opacity-30" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#7c3aed] rounded-full blur-[120px] opacity-10" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#00d4ff] rounded-full blur-[120px] opacity-10" />

        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00d4ff]/30 bg-[#00d4ff]/10 mb-6">
              <span className="text-[#00d4ff] text-sm font-medium">關於台訊鍇</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              智慧製造的
              <span className="bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] bg-clip-text text-transparent">
                {" "}最佳夥伴
              </span>
            </h1>
            <p className="text-xl text-[#94a3b8] leading-relaxed">
              我們致力於提供客戶服務導向型雲端平台系統與相關產品的開發與應用，
              為勞力密集的產業提升智能化能量與國際競爭力。
            </p>
          </div>
        </div>
      </section>

      {/* Company Intro */}
      <section className="bg-[#050810] py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                深耕產業，
                <span className="bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] bg-clip-text text-transparent">
                  專注創新
                </span>
              </h2>
              <div className="space-y-4 text-[#94a3b8] text-lg leading-relaxed">
                <p>
                  台訊鍇股份有限公司（tSC - Taiwan Signal Cloud）成立於 2024 年，
                  由具備豐富資訊服務經驗的專業團隊組成。
                </p>
                <p>
                  我們專注於工業物聯網（IIoT）領域，提供從感測器到雲端平台的完整解決方案，
                  協助製造業實現數位轉型與智能化升級。
                </p>
                <p>
                  透過自主研發的 aIoT-Box 邊緣運算設備與 MES 雲服務系統，
                  我們能夠快速整合新舊機台，讓數據驅動的智慧製造不再是遙不可及的目標。
                </p>
              </div>
            </div>

            {/* Visual */}
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 flex items-center justify-center p-8">
                <div className="text-center">
                  <div className="text-7xl font-bold bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] bg-clip-text text-transparent mb-4">
                    tSC
                  </div>
                  <div className="text-white text-xl font-medium mb-2">Taiwan Signal Cloud</div>
                  <div className="text-[#94a3b8]">工業物聯網解決方案專家</div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#00d4ff] rounded-full blur-[60px] opacity-20" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[#7c3aed] rounded-full blur-[60px] opacity-20" />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-[#0a0f1a] py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00d4ff]/30 bg-[#00d4ff]/10 mb-6">
              <span className="text-[#00d4ff] text-sm font-medium">發展歷程</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              公司
              <span className="bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] bg-clip-text text-transparent">
                {" "}里程碑
              </span>
            </h2>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00d4ff] to-[#7c3aed]" />

              {/* Timeline items */}
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div key={milestone.year} className="relative flex gap-8">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#00d4ff] to-[#7c3aed] flex items-center justify-center text-white font-bold text-lg shrink-0 z-10">
                      {milestone.year}
                    </div>
                    <div className="pt-3">
                      <h3 className="text-xl font-semibold text-white mb-2">{milestone.title}</h3>
                      <p className="text-[#94a3b8]">{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#050810] py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00d4ff]/30 bg-[#00d4ff]/10 mb-6">
              <span className="text-[#00d4ff] text-sm font-medium">核心價值</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              我們的
              <span className="bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] bg-clip-text text-transparent">
                {" "}經營理念
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#00d4ff]/50 transition-all group"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#00d4ff]/20 to-[#7c3aed]/20 flex items-center justify-center text-[#00d4ff] mb-4 group-hover:scale-110 transition-transform">
                  {value.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{value.title}</h3>
                <p className="text-[#94a3b8] text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0a0f1a] py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            與我們攜手合作
          </h2>
          <p className="text-[#94a3b8] mb-8 max-w-xl mx-auto">
            無論您是想了解更多我們的解決方案，或是有專案合作的需求，歡迎與我們聯繫
          </p>
          <Button href="/contact" size="lg" glow>
            聯絡我們
          </Button>
        </div>
      </section>
    </div>
  );
}
