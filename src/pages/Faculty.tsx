import FacultyCard from "@/components/public/FacultyCard";

// Placeholder faculty data - you'll replace this with real data
const facultyData = [
  {
    name: "Dr. Girish Kumar D",
    designation: "Professor & HOD",
    teachingExp: "13 Years",
    email: "girishkumar@bitm.edu.in",
  },
  {
    name: "Dr. Hayath Ali",
    designation: "Associate Professor",
    teachingExp: "16 Years",
    email: "dr.hayathali@bitm.edu.in",
  },
  {
    name: "Mrs. Sharvani",
    designation: "Asst Professor",
    teachingExp: "11 Years",
    email: "sharvan@bitm.edu.in",
  },
  {
    name: "Mrs. Subhashree S",
    designation: "Asst Professor",
    teachingExp: "2 Years",
    email: "subhashree@bitm.edu.in",
  },
  {
    name: "Ms. Jennifer Mary S",
    designation: "Asst Professor",
    teachingExp: "8 Years",
    email: "jennifermary.sagayraj@gmail.com",
  },
  {
    name: "Mr. Prakash Sarangamath",
    designation: "Asst Professor",
    teachingExp: "12 Years",
    email: "prakash.sarangamath@bitm.edu.in",
  },
  {
    name: "Ms. MM Harshitha",
    designation: "Asst Professor",
    teachingExp: "3 Years",
    email: "harshitha@bitm.edu.in",
  },
  {
    name: "Ms. Sreelakshmi Joshi",
    designation: "Asst Professor",
    teachingExp: "0-1 Year",
    email: "sreelakshmijoshi07@gmail.com",
  },
  {
    name: "Mr. Pradhyumn SG",
    designation: "Asst Professor",
    teachingExp: "0-1 Year",
    email: "pradhyumna@bitm.edu.in",
  },
  {
    name: "Ms. Nida Fatima K",
    designation: "Asst Professor",
    teachingExp: "0-1 Year",
    email: "nidakhan18122000@bitm.edu.in",
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

    </div>
  );
};

export default Faculty;
