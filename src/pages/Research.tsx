import { ExternalLink, FileText, BookOpen, Award } from "lucide-react";

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
          <h1 className="animate-fade-in font-serif text-4xl font-bold text-white md:text-5xl">
            Research Activities
          </h1>
          <p className="mx-auto mt-4 max-w-2xl animate-slide-up text-white/80">
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
                <Award className="h-6 w-6 text-primary" />
              </div>
              <div>
                <span className="font-serif text-2xl font-bold text-primary">
                  22+
                </span>
                <p className="text-sm text-muted-foreground">Patents</p>
              </div>
            </div>
            <div className="card-elevated flex items-center gap-4 rounded-xl bg-card p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/20">
                <FileText className="h-6 w-6 text-secondary" />
              </div>
              <div>
                <span className="font-serif text-2xl font-bold text-primary">
                  87+
                </span>
                <p className="text-sm text-muted-foreground">Publications</p>
              </div>
            </div>
            <div className="card-elevated flex items-center gap-4 rounded-xl bg-card p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <div>
                <span className="font-serif text-2xl font-bold text-primary">
                  42+
                </span>
                <p className="text-sm text-muted-foreground">Journals</p>
              </div>
            </div>
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

    </div>
  );
};

export default Research;
