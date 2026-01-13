import { Palette, Dumbbell, Code, Music, Leaf, BookOpen } from "lucide-react";

const clubsData = [
  {
    name: "Pratibimba",
    description: "Pratibimba is a platform that reflects creativity and self-expression through arts, literature, drama, photography, and cultural performances. It celebrates talent, imagination, and individuality among students.",
    icon: Palette,
  },
  {
    name: "Sports",
    description: "The Sports club promotes physical fitness, teamwork, and competitive spirit through indoor and outdoor games. It encourages students to build discipline, leadership, and sportsmanship while enjoying healthy competition.",
    icon: Dumbbell,
  },
  {
    name: "Codex",
    description: "Codex is the technical and coding club that fosters innovation, logical thinking, and problem-solving skills. It hosts coding contests, hackathons, workshops, and tech challenges to enhance digital and programming expertise.",
    icon: Code,
  },
  {
    name: "Kalavaibhava",
    description: "Kalavaibhava showcases the richness of traditional and modern art forms, including music, dance, fine arts, and cultural heritage. It provides a stage for students to preserve culture while exploring artistic excellence.",
    icon: Music,
  },
  {
    name: "Nirvana",
    description: "Nirvana focuses on mental well-being, mindfulness, and inner growth through yoga, meditation, and self-development activities. It aims to help students achieve balance, peace, and clarity in academic and personal life.",
    icon: Leaf,
  },
  {
    name: "Samvid",
    description: "Samvid is dedicated to intellectual growth, ethical values, and awareness through debates, discussions, quizzes, and knowledge-sharing sessions. It encourages critical thinking, communication skills, and social responsibility.",
    icon: BookOpen,
  },
];

const Events = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="hero-gradient relative py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="animate-fade-in font-serif text-4xl font-bold text-white md:text-5xl">
            Clubs & Activities
          </h1>
          <p className="mx-auto mt-4 max-w-2xl animate-slide-up text-white/80">
            Explore our vibrant clubs fostering creativity, sports, technology, and personal growth
          </p>
        </div>
      </section>

      {/* Clubs Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {clubsData.map((club, index) => (
              <div
                key={index}
                className="card-elevated group rounded-xl bg-card p-6 transition-all duration-300 hover:shadow-xl"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <club.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-3 font-serif text-xl font-bold text-foreground">
                  {club.name}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {club.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
