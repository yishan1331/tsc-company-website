"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import Link from "next/link";

const cases = [
  {
    id: "fastener",
    industry: "扣件成型",
    title: "扣件成型機台 IoT 化",
    description:
      "連結舊式、新式機台，將各式訊號轉接經 aIoT-Box 處理，進行大數據處理與可視化展示",
    results: ["產能提升 25%", "良率改善 15%", "故障預警準確率 95%"],
    image: "/images/cases/fastener.jpg",
  },
  {
    id: "metal-mold",
    industry: "金屬模具",
    title: "金屬模具製造智慧服務平台",
    description:
      "遠端監控公司產能狀況、營運狀況、NC 異常回報，提供多平台可視化介面",
    results: ["遠端監控 24/7", "異常回報即時", "產能可視化"],
    image: "/images/cases/metal-mold.jpg",
  },
  {
    id: "power-converter",
    industry: "電源轉換器",
    title: "電源轉換器科技公司管理監控平台",
    description:
      "整合場域監控、電子看板、工時紀錄、文件管理、工單管理、資源管理等功能",
    results: ["管理效率提升 40%", "工時記錄數位化", "庫存管理優化"],
    image: "/images/cases/power-converter.jpg",
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
              href={`/cases/${caseItem.id}`}
              className="group relative rounded-2xl overflow-hidden bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-[#00d4ff]/50 transition-all duration-300"
            >
              {/* Image placeholder */}
              <div className="aspect-video bg-gradient-to-br from-[#1e3a5f] to-[#0a0f1a] flex items-center justify-center">
                <span className="text-6xl opacity-50">
                  {caseItem.industry === "扣件成型" && "🔩"}
                  {caseItem.industry === "金屬模具" && "🏭"}
                  {caseItem.industry === "電源轉換器" && "⚡"}
                </span>
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
