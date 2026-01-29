import { Zap } from "lucide-react";

interface HeroBadgeProps {
  size?: "sm" | "default";
}

const HeroBadge = ({ size = "sm" }: HeroBadgeProps) => {
  return (
    <div 
      className={`mb-6 inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/10 px-3 py-1.5 font-medium text-secondary backdrop-blur-sm animate-fade-in ${
        size === "sm" ? "text-xs" : "text-sm"
      }`}
    >
      <Zap className={size === "sm" ? "h-3 w-3" : "h-4 w-4"} />
      <span>Excellence in Technology Education</span>
    </div>
  );
};

export default HeroBadge;
