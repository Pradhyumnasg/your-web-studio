import { FileText, Calendar } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Agenda = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-secondary/20 px-4 py-2 text-sm font-medium text-secondary mb-6">
            <Calendar className="h-4 w-4" />
            Review Meeting
          </div>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl mb-4">
            Meeting <span className="text-gradient">Agenda</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Review meeting agenda and discussion points
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto">
            <CardHeader className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                <FileText className="h-8 w-8" />
              </div>
              <CardTitle className="text-2xl">Agenda Coming Soon</CardTitle>
              <CardDescription className="text-base">
                The meeting agenda will be updated here before each review meeting.
                Please check back later for the latest agenda items.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center text-muted-foreground">
              <p>Contact the department for more information about upcoming meetings.</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Agenda;
