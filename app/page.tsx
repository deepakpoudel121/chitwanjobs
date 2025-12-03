'use client'

import Link from "next/link";
import { Button } from "./components/ui/button";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CategoryCard from "./components/CategoryCard";
import StatCard from "./components/StatCard";
import {
  Search,
  Briefcase,
  Store,
  Utensils,
  Wrench,
  Heart,
  GraduationCap,
  Truck,
  Scissors,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const categories = [
  { icon: Store, title: "Retail", jobCount: 124, color: "bg-blue-100 text-blue-600" },
  { icon: Utensils, title: "Food & Service", jobCount: 89, color: "bg-orange-100 text-orange-600" },
  { icon: Wrench, title: "Trades", jobCount: 67, color: "bg-slate-100 text-slate-600" },
  { icon: Heart, title: "Healthcare", jobCount: 45, color: "bg-rose-100 text-rose-600" },
  { icon: GraduationCap, title: "Education", jobCount: 32, color: "bg-purple-100 text-purple-600" },
  { icon: Truck, title: "Delivery", jobCount: 56, color: "bg-emerald-100 text-emerald-600" },
  { icon: Scissors, title: "Beauty", jobCount: 28, color: "bg-pink-100 text-pink-600" },
  { icon: Briefcase, title: "Office", jobCount: 41, color: "bg-cyan-100 text-cyan-600" },
];

const stats = [
  { value: "500+", label: "Local Jobs" },
  { value: "150+", label: "Businesses" },
  { value: "2,000+", label: "Job Seekers" },
  { value: "95%", label: "Satisfaction" },
];

const benefits = [
  "Jobs within walking distance",
  "Support local businesses",
  "Build community connections",
  "Flexible opportunities",
];

const Page = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center animate-fade-up">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              Chitwan Job Board
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Find Your Next Job{" "}
              <span className="text-gradient-primary">Close to Home</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Connect with local businesses in your community. No long commutes, just great opportunities right around the corner.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button variant="hero" size="xl" asChild>
                <Link href="/jobs">
                  <Search className="w-5 h-5 mr-2" />
                  Find Jobs Near You
                </Link>
              </Button>
              <Button variant="outline" size="xl">
                Post a Job
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {benefits.map((benefit) => (
                <span key={benefit} className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  {benefit}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary/50">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Browse by Category
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Find opportunities that match your skills and interests in your local area
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {categories.map((category) => (
              <CategoryCard key={category.title} {...category} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Button variant="ghost" size="lg" asChild>
              <Link href="/jobs" className="group">
                View All Jobs
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-secondary/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Getting started is simple. Find your next opportunity in just a few steps.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                step: "1",
                title: "Browse Jobs",
                description: "Explore opportunities from local businesses in your neighborhood",
              },
              {
                step: "2",
                title: "Apply Easily",
                description: "Submit your application directly to the business with one click",
              },
              {
                step: "3",
                title: "Get Hired",
                description: "Connect with employers and start your new job close to home",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-hero text-primary-foreground text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container">
          <div className="bg-gradient-hero rounded-3xl p-10 md:p-16 text-center text-primary-foreground">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Find Your Dream Job?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Join thousands of locals who found meaningful work in their community. Your next opportunity is just around the corner.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" size="lg" asChild>
                <Link href="/jobs">
                  <Search className="w-4 h-4 mr-2" />
                  Start Searching
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                I'm a Business
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Page;