"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

const industries = [
  "扣件成型",
  "金屬模具",
  "電源轉換器",
  "紡織染整",
  "電子製造",
  "其他製造業",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    company: "",
    name: "",
    email: "",
    phone: "",
    industry: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submission
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative bg-[#0a0f1a] py-24 overflow-hidden">
        <div className="absolute inset-0 tech-grid opacity-30" />
        <div className="absolute top-10 left-1/4 w-72 h-72 bg-[#00d4ff] rounded-full blur-[120px] opacity-10" />
        <div className="absolute bottom-10 right-1/4 w-72 h-72 bg-[#7c3aed] rounded-full blur-[120px] opacity-10" />

        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00d4ff]/30 bg-[#00d4ff]/10 mb-6">
              <span className="text-[#00d4ff] text-sm font-medium">
                聯絡我們
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              開始您的
              <span className="bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] bg-clip-text text-transparent">
                {" "}智能化轉型
              </span>
            </h1>
            <p className="text-xl text-[#94a3b8] leading-relaxed">
              填寫以下表單，我們的技術顧問將在 24 小時內與您聯繫
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-[#050810] py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              {isSubmitted ? (
                <div className="rounded-2xl bg-gradient-to-b from-white/5 to-transparent border border-[#10b981]/50 p-12 text-center">
                  <div className="w-20 h-20 rounded-full bg-[#10b981]/20 flex items-center justify-center mx-auto mb-6">
                    <svg
                      className="w-10 h-10 text-[#10b981]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    感謝您的來信！
                  </h3>
                  <p className="text-[#94a3b8] mb-8">
                    我們已收到您的諮詢需求，技術顧問將在 24 小時內與您聯繫。
                  </p>
                  <Button onClick={() => setIsSubmitted(false)} variant="outline">
                    返回表單
                  </Button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="rounded-2xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 p-8"
                >
                  <h2 className="text-2xl font-bold text-white mb-6">
                    免費諮詢表單
                  </h2>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    {/* Company */}
                    <div>
                      <label className="block text-[#94a3b8] text-sm mb-2">
                        公司名稱 *
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-[#64748b] focus:border-[#00d4ff] focus:outline-none transition-colors"
                        placeholder="台訊鍇股份有限公司"
                      />
                    </div>

                    {/* Name */}
                    <div>
                      <label className="block text-[#94a3b8] text-sm mb-2">
                        聯絡人姓名 *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-[#64748b] focus:border-[#00d4ff] focus:outline-none transition-colors"
                        placeholder="王小明"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-[#94a3b8] text-sm mb-2">
                        電子郵件 *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-[#64748b] focus:border-[#00d4ff] focus:outline-none transition-colors"
                        placeholder="example@company.com"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-[#94a3b8] text-sm mb-2">
                        聯絡電話
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-[#64748b] focus:border-[#00d4ff] focus:outline-none transition-colors"
                        placeholder="07-XXX-XXXX"
                      />
                    </div>
                  </div>

                  {/* Industry */}
                  <div className="mb-6">
                    <label className="block text-[#94a3b8] text-sm mb-2">
                      產業類別 *
                    </label>
                    <select
                      name="industry"
                      value={formData.industry}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-[#00d4ff] focus:outline-none transition-colors"
                    >
                      <option value="" className="bg-[#0a0f1a]">
                        請選擇產業類別
                      </option>
                      {industries.map((industry) => (
                        <option
                          key={industry}
                          value={industry}
                          className="bg-[#0a0f1a]"
                        >
                          {industry}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div className="mb-8">
                    <label className="block text-[#94a3b8] text-sm mb-2">
                      需求說明 *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-[#64748b] focus:border-[#00d4ff] focus:outline-none transition-colors resize-none"
                      placeholder="請簡述您的需求，例如：希望將工廠的舊機台連網，實現遠端監控..."
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full" glow>
                    送出諮詢需求
                  </Button>

                  <p className="text-[#64748b] text-xs text-center mt-4">
                    提交即表示您同意我們的隱私權政策
                  </p>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-8">聯絡資訊</h2>

              <div className="space-y-6 mb-12">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#00d4ff]/10 flex items-center justify-center shrink-0">
                    <svg
                      className="w-6 h-6 text-[#00d4ff]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">公司地址</h3>
                    <p className="text-[#94a3b8]">台南市東區東興路282號2樓</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#00d4ff]/10 flex items-center justify-center shrink-0">
                    <svg
                      className="w-6 h-6 text-[#00d4ff]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">電子郵件</h3>
                    <p className="text-[#94a3b8]">contact@tsc.com.tw</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#00d4ff]/10 flex items-center justify-center shrink-0">
                    <svg
                      className="w-6 h-6 text-[#00d4ff]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">聯絡電話</h3>
                    <p className="text-[#94a3b8]">+886-7-XXX-XXXX</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#00d4ff]/10 flex items-center justify-center shrink-0">
                    <svg
                      className="w-6 h-6 text-[#00d4ff]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">營業時間</h3>
                    <p className="text-[#94a3b8]">
                      週一至週五 09:00 - 18:00
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQ */}
              <div className="rounded-2xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 p-6">
                <h3 className="text-lg font-semibold text-white mb-4">
                  常見問題
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-[#00d4ff] text-sm font-medium mb-1">
                      諮詢是否需要費用？
                    </h4>
                    <p className="text-[#94a3b8] text-sm">
                      初次諮詢完全免費，我們會先了解您的需求後提供建議。
                    </p>
                  </div>
                  <div>
                    <h4 className="text-[#00d4ff] text-sm font-medium mb-1">
                      導入需要多少時間？
                    </h4>
                    <p className="text-[#94a3b8] text-sm">
                      依專案規模而定，一般基礎導入約 2-4 週可完成。
                    </p>
                  </div>
                  <div>
                    <h4 className="text-[#00d4ff] text-sm font-medium mb-1">
                      是否提供教育訓練？
                    </h4>
                    <p className="text-[#94a3b8] text-sm">
                      是的，我們提供完整的系統操作教育訓練與技術支援。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
