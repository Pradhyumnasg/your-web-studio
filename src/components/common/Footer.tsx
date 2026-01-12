import { Link } from "react-router-dom";
import { GraduationCap, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="hero-gradient mt-auto text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">
                <GraduationCap className="h-6 w-6 text-secondary-foreground" />
              </div>
              <span className="font-serif text-xl font-bold">
                MCA Department
              </span>
            </Link>
            <p className="text-sm text-primary-foreground/80">
              Empowering future tech leaders with excellence in computer
              applications and innovation.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {["About MCA", "Faculty", "Events", "Research"].map((link) => (
                <li key={link}>
                  <Link
                    to={`/${link.toLowerCase().replace(" ", "-")}`}
                    className="text-sm text-primary-foreground/80 transition-colors hover:text-secondary"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Student Portal */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold">Student Portal</h4>
            <ul className="space-y-2">
              {["Attendance", "IA Performance", "Proctoring", "Feedback"].map(
                (link) => (
                  <li key={link}>
                    <Link
                      to="/portal"
                      className="text-sm text-primary-foreground/80 transition-colors hover:text-secondary"
                    >
                      {link}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-primary-foreground/80">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-secondary" />
                <span>Department of MCA, University Campus</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/80">
                <Phone className="h-4 w-4 flex-shrink-0 text-secondary" />
                <span>+91 XXXXX XXXXX</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/80">
                <Mail className="h-4 w-4 flex-shrink-0 text-secondary" />
                <span>mca@university.edu</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-primary-foreground/20 pt-6">
          <p className="text-center text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} MCA Department. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
