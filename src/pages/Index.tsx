import { Link } from "react-router-dom";
import { ArrowRight, Users, BookOpen, Award, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import StatCard from "@/components/public/StatCard";

const Index = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptMCAwdi02aDZ2Nmg2di02aC02djZoLTZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50"></div>
        <div className="container relative mx-auto px-4 py-20 md:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="animate-fade-in font-serif text-4xl font-bold text-primary-foreground md:text-5xl lg:text-6xl">
              Master of{" "}
              <span className="text-gradient">Computer Applications</span>
            </h1>
            <p className="mt-6 animate-slide-up text-lg text-primary-foreground/80 md:text-xl">
              Shaping tomorrow's tech leaders through excellence in education,
              research, and innovation in computer science.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button className="btn-primary" size="lg" asChild>
                <Link to="/about-mca">
                  Explore Department
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <Link to="/portal">Student Portal</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* Stats Section */}
      <section className="relative -mt-8 z-10">
        <div className="container mx-auto px-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <StatCard
              value="500+"
              label="Students"
              icon={<Users className="h-6 w-6" />}
            />
            <StatCard
              value="25+"
              label="Faculty Members"
              icon={<BookOpen className="h-6 w-6" />}
            />
            <StatCard
              value="95%"
              label="Placement Rate"
              icon={<Award className="h-6 w-6" />}
            />
            <StatCard
              value="50+"
              label="Events Yearly"
              icon={<Calendar className="h-6 w-6" />}
            />
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="section-heading font-serif text-3xl font-bold text-foreground md:text-4xl">
                About Our Department
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                The Department of Master of Computer Applications (MCA) is
                committed to providing quality education in computer science and
                applications. Our curriculum is designed to meet industry
                standards while fostering innovation and research capabilities.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                With state-of-the-art facilities, experienced faculty, and
                strong industry connections, we prepare students for successful
                careers in the ever-evolving tech landscape.
              </p>
              <Button className="mt-8" variant="outline" asChild>
                <Link to="/about-mca">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10">
                <div className="flex h-full items-center justify-center">
                  <div className="text-center">
                    <BookOpen className="mx-auto h-16 w-16 text-primary/30" />
                    <p className="mt-4 text-sm text-muted-foreground">
                      Department Image
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-xl bg-secondary/20"></div>
              <div className="absolute -top-4 -left-4 h-16 w-16 rounded-lg bg-primary/10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="bg-muted/50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="section-heading mx-auto font-serif text-3xl font-bold text-foreground md:text-4xl">
              Explore More
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">
              Discover our faculty, research activities, and upcoming events.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Our Faculty",
                description:
                  "Meet our experienced professors and researchers dedicated to your success.",
                link: "/faculty",
                icon: Users,
              },
              {
                title: "Research",
                description:
                  "Explore cutting-edge research in AI, ML, cybersecurity, and more.",
                link: "/research",
                icon: BookOpen,
              },
              {
                title: "Events",
                description:
                  "Stay updated with workshops, seminars, and tech fests.",
                link: "/events",
                icon: Calendar,
              },
            ].map((item) => (
              <Link
                key={item.title}
                to={item.link}
                className="card-elevated group rounded-xl bg-card p-6"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary">
                  <item.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {item.description}
                </p>
                <span className="mt-4 inline-flex items-center text-sm font-medium text-secondary">
                  Learn more
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
