import { Link } from "react-router-dom";
import {
  Calendar,
  BarChart3,
  Users,
  MessageSquare,
  FileText,
  BookOpen,
} from "lucide-react";

const portalFeatures = [
  {
    title: "Agenda",
    icon: FileText,
    path: "/portal/agenda",
  },
  {
    title: "Syllabus",
    icon: BookOpen,
    path: "/portal/syllabus",
  },
  {
    title: "Attendance",
    icon: Calendar,
    path: "/portal/attendance",
  },
  {
    title: "IA Performance",
    icon: BarChart3,
    path: "/portal/ia-performance",
  },
  {
    title: "Proctoring",
    icon: Users,
    path: "/portal/proctoring",
  },
  {
    title: "Feedback",
    icon: MessageSquare,
    path: "/portal/faculty-feedback",
  },
];

const Portal = () => {
  return (
    <div className="flex flex-col min-h-[60vh]">
      {/* Hero Section */}
      <section className="hero-gradient py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl font-bold text-primary-foreground md:text-5xl">
            Review Meeting
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-primary-foreground/80">
            Access all review meeting resources and features
          </p>
          
          {/* Links Section */}
          <div className="mt-12 flex flex-col items-center gap-4">
            {portalFeatures.map((feature) => (
              <Link
                key={feature.title}
                to={feature.path}
                className="group flex items-center gap-3 text-lg font-medium text-primary-foreground/90 hover:text-primary-foreground transition-colors"
              >
                <feature.icon className="h-5 w-5" />
                {feature.title}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portal;
