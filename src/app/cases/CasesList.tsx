"use client";

import { useState } from "react";

interface CaseResult {
  metric: string;
  value: string;
  icon: string;
}

interface CaseItem {
  id: string;
  year: string;
  industry: string;
  title: string;
  description: string;
  images?: string[];
  results: CaseResult[];
  features: string[];
}

export default function CasesList({
  cases,
  industries,
}: {
  cases: CaseItem[];
  industries: string[];
}) {
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState("全部");

  const filteredCases =
    activeFilter === "全部"
      ? cases
      : cases.filter((c) => c.industry === activeFilter);

  return (
    <>
      {/* Industry Filter */}
      <section className="bg-[#050810] py-8 border-b border-white/10 sticky top-20 z-40">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-4 overflow-x-auto pb-2">
            {industries.map((industry) => (
              <button
                key={industry}
                onClick={() => setActiveFilter(industry)}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                  industry === activeFilter
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
            {filteredCases.map((caseItem) => (
              <article
                key={caseItem.id}
                className="rounded-2xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 overflow-hidden hover:border-[#00d4ff]/30 transition-all p-8"
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-block px-3 py-1 bg-[#00d4ff]/10 text-[#00d4ff] text-xs font-medium rounded-full">
                    {caseItem.industry}
                  </span>
                  <span className="inline-block px-3 py-1 bg-white/5 text-[#94a3b8] text-xs font-medium rounded-full">
                    {caseItem.year}
                  </span>
                </div>

                <h2 className="text-2xl font-bold text-white mb-4">
                  {caseItem.title}
                </h2>

                <p className="text-[#94a3b8] leading-relaxed mb-6">
                  {caseItem.description}
                </p>

                {/* Images - thumbnails */}
                {caseItem.images && caseItem.images.length > 0 && (
                  <div className="flex gap-3 mb-6 overflow-x-auto pb-2">
                    {caseItem.images.map((img) => (
                      <button
                        key={img}
                        onClick={() => setLightboxImg(img)}
                        className="shrink-0 rounded-lg overflow-hidden border border-white/10 hover:border-[#00d4ff]/50 transition-all hover:scale-[1.02] cursor-zoom-in"
                      >
                        <img
                          src={img}
                          alt={caseItem.title}
                          className="h-28 w-auto object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}

                {/* Results */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  {caseItem.results.map((result) => (
                    <div
                      key={result.metric}
                      className="text-center p-4 rounded-xl bg-white/5"
                    >
                      <span className="text-2xl mb-1 block">{result.icon}</span>
                      <div className="text-lg font-bold text-[#00d4ff]">
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
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImg && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm cursor-zoom-out"
          onClick={() => setLightboxImg(null)}
        >
          <button
            onClick={() => setLightboxImg(null)}
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <img
            src={lightboxImg}
            alt="Preview"
            className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
