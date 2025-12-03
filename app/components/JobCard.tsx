import { MapPin, Clock, DollarSign, Building2 } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

interface JobCardProps {
  title: string;
  company: string;
  location: string;
  salary: string;
  type: string;
  category: string;
  postedTime: string;
  featured?: boolean;
}

const JobCard = ({
  title,
  company,
  location,
  salary,
  type,
  category,
  postedTime,
  featured = false,
}: JobCardProps) => {
  return (
    <div
      className={`group relative p-6 bg-card rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-soft ${
        featured ? "border-primary/30 shadow-glow" : "border-border/50 shadow-card"
      }`}
    >
      {featured && (
        <div className="absolute -top-3 left-6">
          <Badge className="bg-gradient-warm text-accent-foreground border-0 px-3 py-1 text-xs font-medium">
            Featured
          </Badge>
        </div>
      )}

      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
              <Building2 className="w-6 h-6 text-muted-foreground" />
            </div>
            <div className="min-w-0">
              <h3 className="font-semibold text-foreground truncate group-hover:text-primary transition-colors">
                {title}
              </h3>
              <p className="text-sm text-muted-foreground">{company}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 mb-4">
            <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4" />
              {location}
            </span>
            <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
              <DollarSign className="w-4 h-4" />
              {salary}
            </span>
            <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
              <Clock className="w-4 h-4" />
              {type}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="text-xs font-medium">
              {category}
            </Badge>
            <span className="text-xs text-muted-foreground">{postedTime}</span>
          </div>
        </div>

        <Button variant="soft" size="sm" className="flex-shrink-0 hidden sm:inline-flex">
          Apply Now
        </Button>
      </div>

      <Button variant="soft" size="sm" className="w-full mt-4 sm:hidden">
        Apply Now
      </Button>
    </div>
  );
};

export default JobCard;