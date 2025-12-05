import { MapPin, Mail, Phone } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">ChitwnaJobs</span>
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
             Helping everyone in Chitwan find their dream job and connect with local businesses.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">For Job Seekers</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><Link href="/jobs" className="hover:text-background transition-colors">Browse Jobs</Link></li>
              <li><Link href="#" className="hover:text-background transition-colors">Job Categories</Link></li>
              <li><Link href="#" className="hover:text-background transition-colors">Career Resources</Link></li>
              <li><Link href="#" className="hover:text-background transition-colors">Resume Tips</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">For Businesses</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><Link href="#" className="hover:text-background transition-colors">Post a Job</Link></li>
              <li><Link href="#" className="hover:text-background transition-colors">Pricing</Link></li>
              <li><Link href="#" className="hover:text-background transition-colors">Hiring Tips</Link></li>
              <li><Link href="#" className="hover:text-background transition-colors">Success Stories</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-background/70">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                chitwanjobs1@gmail.com
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                +977 9800000000
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Bharatpur, Chitwan
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 text-center text-sm text-background/50">
          <p>© 2025 ChitwanJobs. Made with love for local people.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;