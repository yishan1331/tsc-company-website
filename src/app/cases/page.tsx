import { Metadata } from "next";
import Link from "next/link";
import CasesList from "./CasesList";

export const metadata: Metadata = {
  title: "成功案例 - 台訊鍇 tSC",
  description: "碳數據雲平台、資安顧問、智慧產線管理等產業的數位轉型成功案例",
};

const cases = [
  {
    id: "sbir-textile",
    year: "2025",
    industry: "紡織染整",
    title: "SBIR 染整產業整理工序智慧調控數位雲平台系統",
    description:
      "獲臺南市政府審查推薦進入「中央地方攜手方案」，為數位轉型領域唯一獲選專案。整合染整製程參數監控、智慧調控與數據分析，實現染整工序的數位化管理。",
    images: ["/images/SBIR.png", "/images/spinning.png"],
    results: [
      { metric: "政府認證", value: "SBIR", icon: "🏆" },
      { metric: "製程監控", value: "即時", icon: "📡" },
      { metric: "工序調控", value: "智慧化", icon: "🎛️" },
      { metric: "數據分析", value: "雲端化", icon: "☁️" },
    ],
    features: ["製程參數監控", "智慧調控", "數據分析", "雲平台管理"],
  },
  {
    id: "aquaculture",
    year: "2025",
    industry: "智慧養殖",
    title: "養殖管理系統",
    description:
      "建立養殖場域數位管理平台，整合環境監測、養殖數據記錄與分析，協助養殖業者提升管理效率與養殖品質。",
    results: [
      { metric: "環境監測", value: "即時", icon: "🌡️" },
      { metric: "養殖管理", value: "數位化", icon: "🐟" },
      { metric: "數據記錄", value: "自動化", icon: "📊" },
      { metric: "管理效率", value: "提升", icon: "⚡" },
    ],
    features: ["環境監測", "數據記錄", "養殖管理", "數據分析"],
  },
  {
    id: "sports-equipment",
    year: "2025",
    industry: "運動器材",
    title: "運動器材智慧產線管理系統",
    description:
      "為運動器材製造業打造智慧產線管理升級轉型方案，建立智慧管理及製造系統平台，提升產線效率與品質管控能力。",
    images: ["/images/mes.png"],
    results: [
      { metric: "生產看板", value: "即時", icon: "📋" },
      { metric: "工單管理", value: "數位化", icon: "📦" },
      { metric: "品質管控", value: "系統化", icon: "✅" },
      { metric: "產線效率", value: "提升", icon: "📈" },
    ],
    features: ["產線管理", "製造系統", "品質管控", "智慧升級"],
  },
  {
    id: "carbon-data",
    year: "2024",
    industry: "碳管理",
    title: "碳數據雲平台系統",
    description:
      "建置碳數據雲端平台，協助企業進行碳排放數據收集、計算與報告，落實 ESG 永續發展目標與碳盤查管理。",
    images: ["/images/carbon.png"],
    results: [
      { metric: "碳排監測", value: "即時", icon: "📡" },
      { metric: "碳盤查", value: "自動化", icon: "🔄" },
      { metric: "ESG 報告", value: "標準化", icon: "📄" },
      { metric: "數據平台", value: "雲端化", icon: "☁️" },
    ],
    features: ["碳排數據收集", "碳盤查管理", "ESG 報告", "雲端平台"],
  },
  {
    id: "cio-security",
    year: "2024",
    industry: "資訊安全",
    title: "CIO 資安顧問服務",
    description:
      "提供企業 CIO 層級的資訊安全顧問服務，涵蓋資安風險評估、安全架構規劃與防護策略建議，強化企業資安體質。",
    results: [
      { metric: "風險評估", value: "全面", icon: "🔍" },
      { metric: "架構規劃", value: "完整", icon: "🏗️" },
      { metric: "防護策略", value: "強化", icon: "🛡️" },
      { metric: "顧問服務", value: "專業", icon: "👨‍💼" },
    ],
    features: ["資安評估", "架構規劃", "防護策略", "顧問服務"],
  },
  {
    id: "quotation",
    year: "2024",
    industry: "企業系統",
    title: "詢報價系統",
    description:
      "開發客製化詢報價管理系統，整合產品資料、報價流程與客戶管理，提升業務效率與報價準確度。",
    images: ["/images/RFQ.png"],
    results: [
      { metric: "報價流程", value: "自動化", icon: "⚡" },
      { metric: "客戶管理", value: "系統化", icon: "👥" },
      { metric: "產品資料", value: "數位化", icon: "📦" },
      { metric: "業務效率", value: "提升", icon: "📈" },
    ],
    features: ["報價管理", "產品資料庫", "客戶管理", "流程自動化"],
  },
];

const industries = ["全部", "紡織染整", "智慧養殖", "運動器材", "碳管理", "資訊安全", "企業系統"];

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

      {/* Industry Filter + Cases List */}
      <CasesList cases={cases} industries={industries} />

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
