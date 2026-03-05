"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import Link from "next/link";

const cases = [
  {
    id: "sbir-textile",
    industry: "紡織染整",
    title: "SBIR 染整產業智慧調控雲平台",
    description:
      "獲臺南市政府審查推薦進入「中央地方攜手方案」，為數位轉型領域唯一獲選專案",
    results: ["SBIR 獲選", "製程即時監控", "智慧調控"],
    image: "/images/spinning.png",
  },
  {
    id: "sports-equipment",
    industry: "運動器材",
    title: "運動器材智慧產線管理系統",
    description:
      "建立智慧管理及製造系統平台，整合生產看板、工單管理與品質管控",
    results: ["生產看板即時", "工單數位化", "品質系統化"],
    image: "/images/mes.png",
  },
  {
    id: "carbon-data",
    industry: "碳管理",
    title: "碳數據雲平台系統",
    description:
      "建置碳數據雲端平台，協助企業進行碳排放數據收集、計算與 ESG 報告",
    results: ["碳排即時監測", "碳盤查自動化", "ESG 標準化"],
    image: "/images/carbon.png",
  },
];

export default function CasesPreview() {
  return (
    <section className="bg-[#0a0f1a] py-24">
      <div className="container mx-auto px-6">
        <SectionHeader
          badge="實績案例"
          title="成功"
          highlight="案例"
          description="我們已協助多家製造業客戶完成智能化轉型，提升產能與競爭力"
        />

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {cases.map((caseItem) => (
            <Link
              key={caseItem.id}
              href="/cases"
              className="group relative rounded-2xl overflow-hidden bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-[#00d4ff]/50 transition-all duration-300"
            >
              {/* Image */}
              <div className="aspect-video bg-gradient-to-br from-[#1e3a5f] to-[#0a0f1a] overflow-hidden">
                <img
                  src={caseItem.image}
                  alt={caseItem.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Industry tag */}
                <span className="inline-block px-3 py-1 bg-[#00d4ff]/10 text-[#00d4ff] text-xs font-medium rounded-full mb-3">
                  {caseItem.industry}
                </span>

                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#00d4ff] transition-colors">
                  {caseItem.title}
                </h3>

                <p className="text-[#94a3b8] text-sm leading-relaxed mb-4">
                  {caseItem.description}
                </p>

                {/* Results */}
                <div className="flex flex-wrap gap-2">
                  {caseItem.results.map((result) => (
                    <span
                      key={result}
                      className="px-2 py-1 bg-[#10b981]/10 text-[#10b981] text-xs rounded"
                    >
                      {result}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover arrow */}
              <div className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <svg
                  className="w-5 h-5 text-[#00d4ff]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button href="/cases" variant="outline">
            查看更多案例 →
          </Button>
        </div>
      </div>
    </section>
  );
}
