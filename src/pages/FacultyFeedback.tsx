import { MessageSquare } from "lucide-react";

const FacultyFeedback = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="hero-gradient relative py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="animate-fade-in font-serif text-4xl font-bold text-primary-foreground md:text-5xl">
            Faculty Feedback
          </h1>
          <p className="mx-auto mt-4 max-w-2xl animate-slide-up text-primary-foreground/80">
            Submit your feedback for faculty members
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <div className="flex h-20 w-20 mx-auto items-center justify-center rounded-2xl bg-primary/10 mb-8">
              <MessageSquare className="h-10 w-10 text-primary" />
            </div>
            <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl">
              Coming Soon
            </h2>
            <p className="mt-4 text-muted-foreground">
              The faculty feedback form will be available here. You'll be able to provide anonymous feedback about teaching quality, course content, and suggestions for improvement.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FacultyFeedback;
