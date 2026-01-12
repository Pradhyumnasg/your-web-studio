import { ExternalLink, FileText, Users, Award } from "lucide-react";

// Placeholder research data - you'll replace this with real data
const researchAreas = [
  {
    title: "Artificial Intelligence & Machine Learning",
    description:
      "Research in deep learning, natural language processing, computer vision, and intelligent systems.",
    projects: 12,
    publications: 25,
  },
  {
    title: "Data Science & Big Data Analytics",
    description:
      "Working on data mining, predictive analytics, and large-scale data processing frameworks.",
    projects: 8,
    publications: 18,
  },
  {
    title: "Cybersecurity & Network Security",
    description:
      "Focus on cryptography, ethical hacking, intrusion detection, and secure systems design.",
    projects: 6,
    publications: 14,
  },
  {
    title: "Cloud Computing & Distributed Systems",
    description:
      "Research in cloud architecture, microservices, containerization, and serverless computing.",
    projects: 5,
    publications: 10,
  },
  {
    title: "Internet of Things (IoT)",
    description:
      "Developing smart systems, sensor networks, and edge computing solutions.",
    projects: 7,
    publications: 12,
  },
  {
    title: "Software Engineering",
    description:
      "Improving software development methodologies, testing, and quality assurance practices.",
    projects: 4,
    publications: 8,
  },
];

const recentPublications = [
  {
    title: "Deep Learning Approaches for Natural Language Understanding",
    authors: "Dr. John Smith, Dr. Sarah Johnson",
    journal: "IEEE Transactions on AI",
    year: 2025,
  },
  {
    title: "Secure Cloud Architecture for Healthcare Applications",
    authors: "Dr. Emily Davis, Prof. Robert Wilson",
    journal: "ACM Computing Surveys",
    year: 2025,
  },
  {
    title: "Edge Computing for Real-time IoT Analytics",
    authors: "Dr. Lisa Anderson, Dr. John Smith",
    journal: "Journal of Computer Science",
    year: 2024,
  },
];

const Research = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="hero-gradient relative py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="animate-fade-in font-serif text-4xl font-bold text-primary-foreground md:text-5xl">
            Research Activities
          </h1>
          <p className="mx-auto mt-4 max-w-2xl animate-slide-up text-primary-foreground/80">
            Exploring cutting-edge technologies and contributing to the
            advancement of computer science
          </p>
        </div>
      </section>

      {/* Research Stats */}
      <section className="relative -mt-8 z-10">
        <div className="container mx-auto px-4">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="card-elevated flex items-center gap-4 rounded-xl bg-card p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <div>
                <span className="font-serif text-2xl font-bold text-primary">
                  85+
                </span>
                <p className="text-sm text-muted-foreground">Publications</p>
              </div>
            </div>
            <div className="card-elevated flex items-center gap-4 rounded-xl bg-card p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/20">
                <Users className="h-6 w-6 text-secondary" />
              </div>
              <div>
                <span className="font-serif text-2xl font-bold text-primary">
                  40+
                </span>
                <p className="text-sm text-muted-foreground">Active Projects</p>
              </div>
            </div>
            <div className="card-elevated flex items-center gap-4 rounded-xl bg-card p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <div>
                <span className="font-serif text-2xl font-bold text-primary">
                  15+
                </span>
                <p className="text-sm text-muted-foreground">Funded Projects</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="section-heading text-center font-serif text-3xl font-bold text-foreground mx-auto">
            Research Areas
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {researchAreas.map((area) => (
              <div
                key={area.title}
                className="card-elevated rounded-xl bg-card p-6"
              >
                <h3 className="font-serif text-lg font-semibold text-foreground">
                  {area.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {area.description}
                </p>
                <div className="mt-4 flex gap-4 border-t border-border pt-4">
                  <div className="text-center">
                    <span className="block font-semibold text-primary">
                      {area.projects}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      Projects
                    </span>
                  </div>
                  <div className="text-center">
                    <span className="block font-semibold text-secondary">
                      {area.publications}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      Publications
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Publications */}
      <section className="bg-muted/50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="section-heading text-center font-serif text-3xl font-bold text-foreground mx-auto">
            Recent Publications
          </h2>
          <div className="mx-auto mt-12 max-w-3xl space-y-4">
            {recentPublications.map((pub, index) => (
              <div
                key={index}
                className="card-elevated group cursor-pointer rounded-xl bg-card p-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-foreground group-hover:text-primary">
                      {pub.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {pub.authors}
                    </p>
                    <p className="mt-2 text-sm">
                      <span className="font-medium text-secondary">
                        {pub.journal}
                      </span>
                      <span className="text-muted-foreground"> • {pub.year}</span>
                    </p>
                  </div>
                  <ExternalLink className="h-5 w-5 flex-shrink-0 text-muted-foreground group-hover:text-primary" />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <button className="btn-secondary">View All Publications</button>
          </div>
        </div>
      </section>

      {/* Collaboration CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl">
            Research Collaboration
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            We welcome collaborations with industry partners and academic
            institutions. Contact us to explore research opportunities.
          </p>
          <button className="btn-primary mt-6">Contact Research Cell</button>
        </div>
      </section>
    </div>
  );
};

export default Research;
