import FacultyCard from "@/components/public/FacultyCard";

// Placeholder faculty data - you'll replace this with real data
const facultyData = [
  {
    name: "Dr. John Smith",
    designation: "Professor & HOD",
    specialization: "Machine Learning, AI",
    email: "john.smith@university.edu",
  },
  {
    name: "Dr. Sarah Johnson",
    designation: "Associate Professor",
    specialization: "Data Science, Big Data",
    email: "sarah.johnson@university.edu",
  },
  {
    name: "Prof. Michael Brown",
    designation: "Assistant Professor",
    specialization: "Cloud Computing",
    email: "michael.brown@university.edu",
  },
  {
    name: "Dr. Emily Davis",
    designation: "Associate Professor",
    specialization: "Cybersecurity",
    email: "emily.davis@university.edu",
  },
  {
    name: "Prof. Robert Wilson",
    designation: "Assistant Professor",
    specialization: "Web Technologies",
    email: "robert.wilson@university.edu",
  },
  {
    name: "Dr. Lisa Anderson",
    designation: "Professor",
    specialization: "Software Engineering",
    email: "lisa.anderson@university.edu",
  },
];

const Faculty = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="hero-gradient relative py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="animate-fade-in font-serif text-4xl font-bold text-white md:text-5xl">
            Our Faculty
          </h1>
          <p className="mx-auto mt-4 max-w-2xl animate-slide-up text-white/80">
            Meet our experienced professors and researchers dedicated to shaping
            future tech leaders
          </p>
        </div>
      </section>

      {/* Faculty Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {facultyData.map((faculty) => (
              <FacultyCard key={faculty.email} {...faculty} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl">
            Want to Join Our Team?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            We are always looking for talented educators and researchers to join
            our department.
          </p>
          <button className="btn-primary mt-6">View Open Positions</button>
        </div>
      </section>
    </div>
  );
};

export default Faculty;
