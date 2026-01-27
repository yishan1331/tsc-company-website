import { Metadata } from "next";
import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "成功案例 - 台訊鍇 tSC",
  description: "扣件成型、金屬模具、電源轉換器等產業的智能化轉型成功案例",
};

const cases = [
  {
    id: "kanmei-mes",
    industry: "製造業 MES",
    title: "康美 MES 系統服務升級專案",
    client: "康美企業",
    description:
      "為康美企業升級現有 MES 報工系統，整合 ERP 資料同步、工單排班、原物料線邊倉領料管理、品管檢測作業及生產統計報表，實現完整的生產製造管理數位化。",
    challenge:
      "既有報工系統功能有限，工單排班與原物料領用仍依賴人工管理，難以即時掌握生產進度與庫存狀況。",
    solution: [
      "建置 ERP 橋接 APIs 實現資料自動同步",
      "開發工單排班與領料作業模組",
      "建立品檢、線上巡檢、成檢報告系統",
      "部署電子即時看板監控生產狀態",
    ],
    results: [
      { metric: "ERP 整合", value: "即時同步", icon: "🔗" },
      { metric: "工單管理", value: "數位化", icon: "📋" },
      { metric: "庫存可視化", value: "100%", icon: "📦" },
      { metric: "品檢效率", value: "+50%", icon: "✅" },
    ],
    features: [
      "ERP 資料同步",
      "工單排班",
      "領料管理",
      "品管檢測",
      "電子看板",
      "生產報表",
    ],
  },
  {
    id: "fastener",
    industry: "扣件成型",
    title: "扣件成型機台 IoT 化專案",
    client: "某大型扣件製造廠",
    description:
      "連結舊式、新式機台將各式訊號轉接，經 aIoT-Box 處理進行大數據處理與可視化展示，達到數據、進度監控目的，亦可減少人力成本、提升效能品質。",
    challenge:
      "工廠內有多種不同年代的成型機台，訊號格式各異，難以統一監控與管理。",
    solution: [
      "部署 aIoT-Box 進行訊號整合",
      "建立統一的數據收集平台",
      "開發客製化監控看板",
      "實現機台狀態即時監控",
    ],
    results: [
      { metric: "產能提升", value: "25%", icon: "📈" },
      { metric: "良率改善", value: "15%", icon: "✅" },
      { metric: "故障預警準確率", value: "95%", icon: "🎯" },
      { metric: "人力成本降低", value: "30%", icon: "💰" },
    ],
    features: ["機台監測", "運轉統計", "故障預警", "電子看板"],
  },
  {
    id: "metal-mold",
    industry: "金屬模具",
    title: "金屬模具製造智慧服務平台系統",
    client: "某精密模具製造商",
    description:
      "建立遠端監控系統，整合公司產能狀況、營運狀況、NC 異常回報，提供多平台可視化結果報告介面。",
    challenge: "NC 工具機分散各廠區，管理者難以即時掌握整體生產狀況與設備健康度。",
    solution: [
      "建置雲端伺服器進行數據運算",
      "整合 NC 工具機數據收集",
      "開發訊號處理與健康評估模組",
      "實現 Web/iOS/Android 多平台存取",
    ],
    results: [
      { metric: "遠端監控", value: "24/7", icon: "👁️" },
      { metric: "異常回報時間", value: "即時", icon: "⚡" },
      { metric: "設備稼動率", value: "+20%", icon: "🏭" },
      { metric: "維護成本降低", value: "25%", icon: "🔧" },
    ],
    features: ["遠端監控", "產能可視化", "NC 異常回報", "多平台支援"],
  },
  {
    id: "power-converter",
    industry: "電源轉換器",
    title: "電源轉換器科技公司管理監控平台系統",
    client: "某電源轉換器科技公司",
    description:
      "整合場域監控、電子看板、工時紀錄、文件管理、工單管理、資源管理等多項功能的綜合管理平台。",
    challenge:
      "生產資訊分散在不同系統，工時記錄仍依賴人工，管理效率低落。",
    solution: [
      "建立整合式管理平台",
      "數位化工時紀錄系統",
      "即時場域環境監控",
      "電子看板顯示生產狀態",
    ],
    results: [
      { metric: "管理效率提升", value: "40%", icon: "📊" },
      { metric: "工時記錄", value: "數位化", icon: "📱" },
      { metric: "庫存準確率", value: "99%", icon: "📦" },
      { metric: "文件查詢時間", value: "-80%", icon: "📄" },
    ],
    features: [
      "場域監控",
      "電子看板",
      "工時紀錄",
      "工單管理",
      "文件管理",
      "資源管理",
    ],
  },
  {
    id: "textile",
    industry: "紡織染整",
    title: "紡織染整機聯網監控系統",
    client: "某紡織染整廠",
    description:
      "建立機台即時狀態監控系統，整合烘箱溫度控制、幅寬拉碼調控、出口含潮率等關鍵參數的即時監測。",
    challenge:
      "染整製程參數眾多，人工監控容易疏漏，品質一致性難以維持。",
    solution: [
      "部署感測器網路收集製程參數",
      "建立即時監控看板",
      "設定參數異常警報機制",
      "歷史數據分析與報表",
    ],
    results: [
      { metric: "品質一致性", value: "+35%", icon: "🎨" },
      { metric: "能源效率", value: "+18%", icon: "⚡" },
      { metric: "異常反應時間", value: "-70%", icon: "⏱️" },
      { metric: "產品報廢率", value: "-40%", icon: "♻️" },
    ],
    features: ["溫度監控", "參數調控", "含潮率監測", "即時看板"],
  },
];

const industries = ["全部", "製造業 MES", "扣件成型", "金屬模具", "電源轉換器", "紡織染整"];

export default function CasesPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative bg-[#0a0f1a] py-24 overflow-hidden">
        <div className="absolute inset-0 tech-grid opacity-30" />
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-[#7c3aed] rounded-full blur-[120px] opacity-10" />

        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00d4ff]/30 bg-[#00d4ff]/10 mb-6">
              <span className="text-[#00d4ff] text-sm font-medium">
                實績案例
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              成功
              <span className="bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] bg-clip-text text-transparent">
                {" "}案例
              </span>
            </h1>
            <p className="text-xl text-[#94a3b8] leading-relaxed">
              我們已協助多家製造業客戶完成智能化轉型，
              以下是部分代表性的成功案例。
            </p>
          </div>
        </div>
      </section>

      {/* Industry Filter */}
      <section className="bg-[#050810] py-8 border-b border-white/10 sticky top-20 z-40">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-4 overflow-x-auto pb-2">
            {industries.map((industry) => (
              <button
                key={industry}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                  industry === "全部"
                    ? "bg-[#00d4ff] text-white"
                    : "bg-white/5 text-[#94a3b8] hover:bg-white/10"
                }`}
              >
                {industry}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Cases List */}
      <section className="bg-[#050810] py-16">
        <div className="container mx-auto px-6">
          <div className="space-y-12">
            {cases.map((caseItem) => (
              <article
                key={caseItem.id}
                className="rounded-2xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 overflow-hidden hover:border-[#00d4ff]/30 transition-all"
              >
                <div className="grid lg:grid-cols-3">
                  {/* Left - Image placeholder */}
                  <div className="bg-gradient-to-br from-[#1e3a5f] to-[#0a0f1a] p-12 flex items-center justify-center">
                    <div className="text-center">
                      <span className="text-8xl opacity-50 block mb-4">
                        {caseItem.industry === "製造業 MES" && "📊"}
                        {caseItem.industry === "扣件成型" && "🔩"}
                        {caseItem.industry === "金屬模具" && "🏭"}
                        {caseItem.industry === "電源轉換器" && "⚡"}
                        {caseItem.industry === "紡織染整" && "🧵"}
                      </span>
                      <span className="text-[#94a3b8] text-sm">
                        {caseItem.client}
                      </span>
                    </div>
                  </div>

                  {/* Right - Content */}
                  <div className="lg:col-span-2 p-8">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <span className="inline-block px-3 py-1 bg-[#00d4ff]/10 text-[#00d4ff] text-xs font-medium rounded-full mb-3">
                          {caseItem.industry}
                        </span>
                        <h2 className="text-2xl font-bold text-white">
                          {caseItem.title}
                        </h2>
                      </div>
                    </div>

                    <p className="text-[#94a3b8] leading-relaxed mb-6">
                      {caseItem.description}
                    </p>

                    {/* Results */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                      {caseItem.results.map((result) => (
                        <div
                          key={result.metric}
                          className="text-center p-4 rounded-xl bg-white/5"
                        >
                          <span className="text-2xl mb-1 block">
                            {result.icon}
                          </span>
                          <div className="text-xl font-bold text-[#00d4ff]">
                            {result.value}
                          </div>
                          <div className="text-[#94a3b8] text-xs">
                            {result.metric}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2">
                      {caseItem.features.map((feature) => (
                        <span
                          key={feature}
                          className="px-3 py-1 bg-white/5 border border-white/10 text-[#94a3b8] text-xs rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0a0f1a] py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            想了解更多案例細節？
          </h2>
          <p className="text-[#94a3b8] mb-8 max-w-xl mx-auto">
            我們可以針對您的產業，提供更詳細的案例說明與技術討論
          </p>
          <Link
            href="/contact"
            className="inline-flex px-8 py-4 bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] text-white font-semibold rounded-lg hover:opacity-90 transition-all"
          >
            預約案例分享
          </Link>
        </div>
      </section>
    </div>
  );
}
