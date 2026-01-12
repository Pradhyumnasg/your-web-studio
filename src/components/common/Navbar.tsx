import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, GraduationCap, ChevronDown, CalendarCheck, BarChart3, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About MCA", path: "/about-mca" },
  { name: "Faculty", path: "/faculty" },
  { name: "Events", path: "/events" },
  { name: "Research", path: "/research" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 shadow-nav backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary md:h-12 md:w-12">
              <GraduationCap className="h-6 w-6 text-primary-foreground md:h-7 md:w-7" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg font-bold text-primary md:text-xl">
                MCA Department
              </span>
              <span className="hidden text-xs text-muted-foreground md:block">
                Master of Computer Applications
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link ${
                  location.pathname === link.path ? "active text-primary" : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Student Portal Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="nav-link flex items-center gap-1">
                  Student Portal
                  <ChevronDown className="h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 bg-card border border-border shadow-lg z-50">
                <DropdownMenuItem asChild>
                  <Link to="/portal/attendance" className="flex items-center gap-2 cursor-pointer">
                    <CalendarCheck className="h-4 w-4" />
                    Attendance Dashboard
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/portal/ia-performance" className="flex items-center gap-2 cursor-pointer">
                    <BarChart3 className="h-4 w-4" />
                    IA Performance & Analytics
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/portal/proctoring" className="flex items-center gap-2 cursor-pointer">
                    <Users className="h-4 w-4" />
                    Proctoring (Mentorship Info)
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card lg:hidden"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="animate-slide-up border-t border-border py-4 lg:hidden">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                    location.pathname === link.path
                      ? "bg-primary/10 text-primary"
                      : "text-foreground/80 hover:bg-muted"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="mt-2 border-t border-border pt-4">
                <p className="px-4 py-2 text-xs font-semibold text-muted-foreground uppercase">Student Portal</p>
                <Link
                  to="/portal/attendance"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 rounded-lg px-4 py-3 text-sm font-medium text-foreground/80 hover:bg-muted"
                >
                  <CalendarCheck className="h-4 w-4" />
                  Attendance Dashboard
                </Link>
                <Link
                  to="/portal/ia-performance"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 rounded-lg px-4 py-3 text-sm font-medium text-foreground/80 hover:bg-muted"
                >
                  <BarChart3 className="h-4 w-4" />
                  IA Performance & Analytics
                </Link>
                <Link
                  to="/portal/proctoring"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 rounded-lg px-4 py-3 text-sm font-medium text-foreground/80 hover:bg-muted"
                >
                  <Users className="h-4 w-4" />
                  Proctoring (Mentorship Info)
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
