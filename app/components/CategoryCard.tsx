import { LucideIcon } from "lucide-react";
import Link from "next/link";

interface CategoryCardProps {
  icon: LucideIcon;
  title: string;
  jobCount: number;
  color: string;
}

const CategoryCard = ({ icon: Icon, title, jobCount, color }: CategoryCardProps) => {
  return (
    <Link
      href={`/jobs?category=${encodeURIComponent(title.toLowerCase())}`}
      className="group block p-6 bg-card rounded-2xl shadow-card hover:shadow-soft transition-all duration-300 hover:-translate-y-1 border border-border/50"
    >
      <div
        className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 ${color}`}
      >
        <Icon className="w-7 h-7" />
      </div>
      <h3 className="font-semibold text-foreground mb-1">{title}</h3>
      <p className="text-sm text-muted-foreground">{jobCount} jobs available</p>
    </Link>
  );
};

export default CategoryCard;