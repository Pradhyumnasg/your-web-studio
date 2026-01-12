import { Link } from "react-router-dom";
import {
  Calendar,
  BarChart3,
  Users,
  MessageSquare,
  Lock,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const portalFeatures = [
  {
    title: "Attendance Dashboard",
    description:
      "Track your attendance records, view subject-wise statistics, and monitor your attendance percentage.",
    icon: Calendar,
    path: "/portal/attendance",
  },
  {
    title: "IA Performance",
    description:
      "View your internal assessment scores, performance analytics, and track your academic progress.",
    icon: BarChart3,
    path: "/portal/ia-performance",
  },
  {
    title: "Proctoring / Mentorship",
    description:
      "Connect with your assigned proctor, schedule meetings, and get academic guidance.",
    icon: Users,
    path: "/portal/proctoring",
  },
  {
    title: "Feedback & Forms",
    description:
      "Submit course feedback, fill required forms, and participate in continuous improvement surveys.",
    icon: MessageSquare,
    path: "/portal/continuous-improvement",
  },
];

const Portal = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="hero-gradient relative py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="animate-fade-in font-serif text-4xl font-bold text-primary-foreground md:text-5xl">
            Student Portal
          </h1>
          <p className="mx-auto mt-4 max-w-2xl animate-slide-up text-primary-foreground/80">
            Access your academic dashboard, attendance records, and more
          </p>
        </div>
      </section>

      {/* Login Notice */}
      <section className="relative -mt-8 z-10">
        <div className="container mx-auto px-4">
          <div className="card-elevated mx-auto max-w-2xl rounded-xl bg-card p-6">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/20">
                <Lock className="h-6 w-6 text-secondary" />
              </div>
              <div className="flex-1">
                <h3 className="font-serif text-lg font-semibold text-foreground">
                  Login Required
                </h3>
                <p className="text-sm text-muted-foreground">
                  Please sign in with your student credentials to access portal
                  features.
                </p>
              </div>
              <Button className="btn-primary">Sign In</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Portal Features */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="section-heading text-center font-serif text-3xl font-bold text-foreground mx-auto">
            Portal Features
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-center text-muted-foreground">
            The student portal provides comprehensive tools to manage your
            academic journey.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {portalFeatures.map((feature) => (
              <div
                key={feature.title}
                className="card-elevated group rounded-xl bg-card p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary">
                    <feature.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-xl font-semibold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                    <Link
                      to={feature.path}
                      className="mt-4 inline-flex items-center text-sm font-medium text-secondary"
                    >
                      Access Feature
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl">
            Need Help?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            If you're having trouble accessing the portal or have forgotten your
            credentials, please contact the IT support desk.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <button className="btn-primary">Contact Support</button>
            <button className="btn-secondary">Reset Password</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portal;
