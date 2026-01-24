import { BookOpen, CalendarCheck, BarChart3, Users, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

const quickLinks = [
  {
    title: "Syllabus",
    icon: BookOpen,
    path: "/portal/syllabus",
  },
  {
    title: "Attendance Dashboard",
    icon: CalendarCheck,
    path: "/portal/attendance",
  },
  {
    title: "IA Performance & Analytics",
    icon: BarChart3,
    path: "/portal/ia-performance",
  },
  {
    title: "Proctoring (Mentorship Info)",
    icon: Users,
    path: "/portal/proctoring",
  },
  {
    title: "Faculty Feedback",
    icon: MessageSquare,
    path: "/portal/faculty-feedback",
  },
];

const Agenda = () => {
  return (
    <div className="min-h-screen hero-gradient">
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Agenda
          </h1>
          
          <p className="text-lg text-white/90 leading-relaxed mb-12">
            The agenda provides a structured roadmap of the academic journey, helping
            students and faculty stay aligned with learning goals and timelines. It outlines key
            sessions, milestones, assessments, and activities planned throughout the
            course, ensuring transparency and clarity from the start. By integrating seamlessly with the syllabus, attendance tracking, performance analytics, and mentorship support, The agenda enables learners to plan effectively, stay on track,
            and engage meaningfully with their academic progress. Designed to support
            consistency and accountability, it serves as a central reference point for managing coursework, evaluations, and feedback in one unified platform.
          </p>

          {/* Quick Links Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {quickLinks.map((link) => (
              <Link
                key={link.title}
                to={link.path}
                className="flex items-center gap-3 bg-white/10 hover:bg-white/20 transition-colors px-6 py-4 rounded-lg text-white font-medium"
              >
                <link.icon className="h-5 w-5" />
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Agenda;
