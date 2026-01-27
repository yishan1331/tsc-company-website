import { Metadata } from "next";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "產品方案 - 台訊鍇 tSC",
  description:
    "aIoT-Box、MES 雲服務系統、PaaS 平台 - 完整的工業物聯網解決方案",
};

const products = [
  {
    id: "aiot-box",
    title: "aIoT-Box",
    subtitle: "邊緣運算設備",
    description:
      "小而美的大數據資料引擎，連結舊式、新式機台將各式訊號轉接，經處理進行大數據處理與可視化展示。",
    features: [
      {
        title: "PPaaS 類平台系統",
        description: "小而美的大數據資料引擎，提供 API 服務",
      },
      {
        title: "Edge Computing",
        description: "In-Memory Edge DB，即時資料處理",
      },
      {
        title: "通訊介接系統",
        description: "隨插即接，資料解譯傳送",
      },
      {
        title: "可視化 Dashboard",
        description: "感測點位即時看板、歷史資料展示、統計分析",
      },
    ],
    gradient: "from-[#00d4ff] to-[#0ea5e9]",
  },
  {
    id: "mes",
    title: "aIoT+MES",
    subtitle: "雲服務生產製造系統",
    description:
      "整合物聯網與製造執行系統，提供完整的生產管理解決方案，實現智慧工廠願景。",
    features: [
      {
        title: "生產監控",
        description: "即時監控生產進度與機台狀態",
      },
      {
        title: "品質管理",
        description: "自動化品檢與異常警報",
      },
      {
        title: "工單管理",
        description: "數位化工單追蹤與排程",
      },
      {
        title: "報表分析",
        description: "OEE 指標與生產效率分析",
      },
    ],
    gradient: "from-[#7c3aed] to-[#a855f7]",
  },
  {
    id: "paas",
    title: "PaaS 平台",
    subtitle: "雲端服務平台",
    description:
      "HTTP/s Restful API 伺服器系統搭配私有雲端平台，提供彈性且安全的雲端服務。",
    features: [
      {
        title: "API 服務中心",
        description: "標準化 RESTful API 介接",
      },
      {
        title: "多資料庫支援",
        description: "MySQL、PostgreSQL、MongoDB",
      },
      {
        title: "可擴展架構",
        description: "依需求彈性擴充服務",
      },
      {
        title: "安全機制",
        description: "HTTPS 加密與權限控管",
      },
    ],
    gradient: "from-[#10b981] to-[#34d399]",
  },
];

export default function SolutionsPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative bg-[#0a0f1a] py-24 overflow-hidden">
        <div className="absolute inset-0 tech-grid opacity-30" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#00d4ff] rounded-full blur-[120px] opacity-10" />

        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00d4ff]/30 bg-[#00d4ff]/10 mb-6">
              <span className="text-[#00d4ff] text-sm font-medium">
                產品與解決方案
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              智能化
              <span className="bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] bg-clip-text text-transparent">
                {" "}產線升級
              </span>
              <br />
              全方位解決方案
            </h1>
            <p className="text-xl text-[#94a3b8] leading-relaxed">
              從感測器到雲端平台，我們提供完整的技術堆疊，
              協助製造業實現數位轉型與智能化升級。
            </p>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="bg-[#050810] py-24">
        <div className="container mx-auto px-6">
          <SectionHeader
            badge="核心產品"
            title="產品"
            highlight="介紹"
            description="針對不同規模與需求，提供彈性的產品組合"
          />

          <div className="space-y-24">
            {products.map((product, index) => (
              <div
                key={product.id}
                id={product.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${product.gradient} mb-4`}
                  >
                    <span className="text-white text-sm font-medium">
                      {product.subtitle}
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">
                    {product.title}
                  </h3>
                  <p className="text-[#94a3b8] text-lg leading-relaxed mb-8">
                    {product.description}
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {product.features.map((feature) => (
                      <div
                        key={feature.title}
                        className="p-4 rounded-xl bg-white/5 border border-white/10"
                      >
                        <h4 className="text-white font-medium mb-1">
                          {feature.title}
                        </h4>
                        <p className="text-[#94a3b8] text-sm">
                          {feature.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visual */}
                <div
                  className={`relative ${index % 2 === 1 ? "lg:order-1" : ""}`}
                >
                  <div className="aspect-square rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 flex items-center justify-center">
                    <div
                      className={`w-32 h-32 rounded-2xl bg-gradient-to-br ${product.gradient} flex items-center justify-center`}
                    >
                      <span className="text-white font-bold text-2xl">
                        {product.title.split("-")[0]}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#050810] py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            需要客製化解決方案？
          </h2>
          <p className="text-[#94a3b8] mb-8 max-w-xl mx-auto">
            我們的技術團隊可以依據您的產業特性與需求，規劃最適合的整合方案
          </p>
          <Button href="/contact" size="lg" glow>
            預約技術諮詢
          </Button>
        </div>
      </section>
    </div>
  );
}
