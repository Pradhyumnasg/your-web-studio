import { useState } from "react";
import EventCard from "@/components/public/EventCard";
import { Button } from "@/components/ui/button";

// Placeholder events data - you'll replace this with real data
const eventsData = [
  {
    title: "Tech Fest 2026",
    date: "February 15-17, 2026",
    location: "Main Auditorium",
    description:
      "Annual technical festival featuring coding competitions, hackathons, and tech talks.",
    attendees: 500,
    status: "upcoming" as const,
  },
  {
    title: "AI/ML Workshop",
    date: "January 25, 2026",
    location: "Computer Lab 1",
    description:
      "Hands-on workshop on machine learning fundamentals and practical applications.",
    attendees: 100,
    status: "upcoming" as const,
  },
  {
    title: "Industry Expert Talk",
    date: "January 20, 2026",
    location: "Seminar Hall",
    description:
      "Guest lecture by industry experts on emerging trends in software development.",
    attendees: 150,
    status: "ongoing" as const,
  },
  {
    title: "Coding Competition",
    date: "January 10, 2026",
    location: "Computer Lab 2",
    description:
      "Inter-college coding competition testing problem-solving and algorithmic skills.",
    attendees: 80,
    status: "completed" as const,
  },
  {
    title: "Cloud Computing Seminar",
    date: "December 20, 2025",
    location: "Virtual",
    description:
      "Online seminar covering AWS, Azure, and GCP cloud services.",
    attendees: 200,
    status: "completed" as const,
  },
  {
    title: "Project Exhibition",
    date: "December 15, 2025",
    location: "Exhibition Hall",
    description:
      "Annual project exhibition showcasing innovative student projects.",
    attendees: 300,
    status: "completed" as const,
  },
];

const Events = () => {
  const [filter, setFilter] = useState<"all" | "upcoming" | "ongoing" | "completed">("all");

  const filteredEvents =
    filter === "all"
      ? eventsData
      : eventsData.filter((event) => event.status === filter);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="hero-gradient relative py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="animate-fade-in font-serif text-4xl font-bold text-white md:text-5xl">
            Events & Activities
          </h1>
          <p className="mx-auto mt-4 max-w-2xl animate-slide-up text-white/80">
            Stay updated with workshops, seminars, competitions, and tech fests
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="border-b border-border py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: "All Events", value: "all" },
              { label: "Upcoming", value: "upcoming" },
              { label: "Ongoing", value: "ongoing" },
              { label: "Completed", value: "completed" },
            ].map((btn) => (
              <Button
                key={btn.value}
                variant={filter === btn.value ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter(btn.value as typeof filter)}
              >
                {btn.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          {filteredEvents.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredEvents.map((event, index) => (
                <EventCard key={index} {...event} />
              ))}
            </div>
          ) : (
            <div className="py-12 text-center">
              <p className="text-muted-foreground">
                No events found for this filter.
              </p>
            </div>
          )}
        </div>
      </section>

    </div>
  );
};

export default Events;
