interface SectionHeaderProps {
  badge?: string;
  title: string;
  highlight?: string;
  description?: string;
  centered?: boolean;
}

export default function SectionHeader({
  badge,
  title,
  highlight,
  description,
  centered = true,
}: SectionHeaderProps) {
  return (
    <div className={`mb-16 ${centered ? "text-center" : ""}`}>
      {badge && (
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00d4ff]/30 bg-[#00d4ff]/10 mb-6">
          <span className="w-2 h-2 bg-[#10b981] rounded-full animate-pulse" />
          <span className="text-[#00d4ff] text-sm font-medium">{badge}</span>
        </div>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        {title}
        {highlight && (
          <span className="bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] bg-clip-text text-transparent">
            {" "}{highlight}
          </span>
        )}
      </h2>
      {description && (
        <p className={`text-[#94a3b8] text-lg ${centered ? "max-w-2xl mx-auto" : "max-w-2xl"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
