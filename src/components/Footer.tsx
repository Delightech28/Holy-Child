import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import schoolLogo from "@/assets/school-logo.jpg";
import churchLogo from "@/assets/church-logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-1.5">
                <img src={churchLogo} alt="Church Logo" className="h-10 w-10 rounded-full object-cover" />
                <img src={schoolLogo} alt="School Logo" className="h-10 w-10 rounded-full object-cover" />
              </div>
              <span className="font-display text-xl font-bold">Holy Child School</span>
            </div>
            <p className="text-primary-foreground/80 font-sans text-sm leading-relaxed">
              Nurturing young minds with excellence, integrity, and compassion since 1995.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2 font-sans text-sm">
              <Link to="/" className="text-primary-foreground/80 hover:text-secondary transition-colors">Home</Link>
              <Link to="/about" className="text-primary-foreground/80 hover:text-secondary transition-colors">About Us</Link>
              <Link to="/gallery" className="text-primary-foreground/80 hover:text-secondary transition-colors">Gallery</Link>
              <Link to="/enrollment" className="text-primary-foreground/80 hover:text-secondary transition-colors">Enrollment</Link>
              <Link to="/contact" className="text-primary-foreground/80 hover:text-secondary transition-colors">Contact</Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3 font-sans text-sm text-primary-foreground/80">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-secondary" />
                <span>123 Education Avenue, Lagos, Nigeria</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-secondary" />
                <span>+234 801 234 5678</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-secondary" />
                <span>info@holychildschool.edu</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-primary-foreground/20 pt-6 text-center font-sans text-sm text-primary-foreground/60">
          © {new Date().getFullYear()} Holy Child School. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
