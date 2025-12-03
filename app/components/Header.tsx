"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { MapPin } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-lg bg-gradient-hero flex items-center justify-center">
            <MapPin className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-foreground">ChitwanJobs</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
            Home
          </Link>
          <Link href="/jobs" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
            Find Jobs
          </Link>
          <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
            For Businesses
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
            Sign In
          </Button>
          <Button variant="default" size="sm">
            Post a Job
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;