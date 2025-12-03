'use client'

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import Header from "../components/Header";
import Footer from "../components/Footer";
import JobCard from "../components/JobCard";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import {
  Search,
  MapPin,
  SlidersHorizontal,
  Store,
  Utensils,
  Wrench,
  Heart,
  GraduationCap,
  Truck,
  Scissors,
  Briefcase,
  LucideIcon,
} from "lucide-react";

interface Category {
  id: string;
  label: string;
  icon: LucideIcon;
}

const categories: Category[] = [
  { id: "all", label: "All Jobs", icon: Briefcase },
  { id: "retail", label: "Retail", icon: Store },
  { id: "food & service", label: "Food & Service", icon: Utensils },
  { id: "trades", label: "Trades", icon: Wrench },
  { id: "healthcare", label: "Healthcare", icon: Heart },
  { id: "education", label: "Education", icon: GraduationCap },
  { id: "delivery", label: "Delivery", icon: Truck },
  { id: "beauty", label: "Beauty", icon: Scissors },
];

const mockJobs = [
  {
    title: "Barista",
    company: "Local Coffee House",
    location: "Downtown",
    salary: "$15-18/hr",
    type: "Part-time",
    category: "Food & Service",
    postedTime: "2 hours ago",
    featured: true,
  },
  {
    title: "Sales Associate",
    company: "Main Street Boutique",
    location: "Main Street",
    salary: "$14-16/hr",
    type: "Full-time",
    category: "Retail",
    postedTime: "5 hours ago",
    featured: true,
  },
  {
    title: "HVAC Technician",
    company: "Cool Air Services",
    location: "Industrial District",
    salary: "$25-35/hr",
    type: "Full-time",
    category: "Trades",
    postedTime: "1 day ago",
  },
  {
    title: "Dental Assistant",
    company: "Smile Dental Clinic",
    location: "Medical Center",
    salary: "$18-22/hr",
    type: "Full-time",
    category: "Healthcare",
    postedTime: "1 day ago",
  },
  {
    title: "Delivery Driver",
    company: "QuickMart Delivery",
    location: "Citywide",
    salary: "$16-20/hr + tips",
    type: "Flexible",
    category: "Delivery",
    postedTime: "2 days ago",
  },
  {
    title: "Hair Stylist",
    company: "Chic Salon & Spa",
    location: "Fashion District",
    salary: "$14/hr + commission",
    type: "Full-time",
    category: "Beauty",
    postedTime: "2 days ago",
  },
  {
    title: "Tutoring Assistant",
    company: "Learning Center Plus",
    location: "University Area",
    salary: "$17-20/hr",
    type: "Part-time",
    category: "Education",
    postedTime: "3 days ago",
  },
  {
    title: "Store Manager",
    company: "Hardware Haven",
    location: "North Side",
    salary: "$45-55k/year",
    type: "Full-time",
    category: "Retail",
    postedTime: "3 days ago",
  },
  {
    title: "Line Cook",
    company: "Mama's Kitchen",
    location: "Old Town",
    salary: "$16-19/hr",
    type: "Full-time",
    category: "Food & Service",
    postedTime: "4 days ago",
  },
  {
    title: "Electrician Apprentice",
    company: "PowerUp Electric",
    location: "Various Locations",
    salary: "$18-22/hr",
    type: "Full-time",
    category: "Trades",
    postedTime: "5 days ago",
  },
];

const Jobs = () => {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "all";
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredJobs = mockJobs.filter((job) => {
    const matchesCategory =
      selectedCategory === "all" ||
      job.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Page Header */}
      <section className="pt-28 pb-8 bg-secondary/30">
        <div className="container">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Find Every Available Jobs In Chitwan
            </h1>
            <p className="text-muted-foreground">
              Discover opportunities from businesses right in your neighborhood
            </p>
          </div>
        </div>
      </section>

      {/* Search & Filters */}
      <section className="py-6 border-b border-border bg-card sticky top-16 z-40">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search jobs, companies..."
                className="pl-12 h-12 bg-background border-border"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="relative md:w-64">
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Location"
                className="pl-12 h-12 bg-background border-border"
                defaultValue="Your Area"
              />
            </div>
            <Button variant="outline" size="lg" className="h-12">
              <SlidersHorizontal className="w-4 h-4 mr-2" />
              Filters
            </Button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-6 border-b border-border">
        <div className="container">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => {
              const Icon = category.icon;
              const isActive = selectedCategory === category.id;
              return (
                <Button
                  key={category.id}
                  variant={isActive ? "default" : "secondary"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex-shrink-0 ${isActive ? "" : "hover:bg-secondary/80"}`}
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {category.label}
                </Button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-8">
        <div className="container">
          <div className="flex items-center justify-between mb-6">
            <p className="text-muted-foreground">
              <span className="font-semibold text-foreground">{filteredJobs.length}</span> jobs found
            </p>
            <select className="text-sm bg-transparent border border-border rounded-lg px-3 py-2 text-foreground">
              <option>Most Recent</option>
              <option>Highest Pay</option>
              <option>Closest to You</option>
            </select>
          </div>

          <div className="space-y-4">
            {filteredJobs.map((job, index) => (
              <div
                key={index}
                className="animate-fade-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <JobCard {...job} />
              </div>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-16">
              <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">No jobs found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search or filters to find what you're looking for
              </p>
              <Button variant="outline" onClick={() => {
                setSelectedCategory("all");
                setSearchTerm("");
              }}>
                Clear All Filters
              </Button>
            </div>
          )}

          {filteredJobs.length > 0 && (
            <div className="text-center mt-10">
              <Button variant="outline" size="lg">
                Load More Jobs
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Jobs;