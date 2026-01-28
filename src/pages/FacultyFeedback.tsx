import { useState } from "react";
import { MessageSquare } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type FeedbackEntry = {
  slNo: number;
  subjectCode: string;
  subject: string;
  faculty: string;
  scores: (number | null)[];
  gradePointAvg: number;
  section: "A" | "B";
};

const feedbackData: FeedbackEntry[] = [
  // Section A - Extracted from screenshots
  { slNo: 1, subjectCode: "MMC101", subject: "PSC", faculty: "Dr. Girish Kumar D", scores: [92.81, 95.94, 98.13, 99.06, 98.44, 97.81, 96.88, 96.56, 98.13, 95.31], gradePointAvg: 96.91, section: "A" },
  { slNo: 2, subjectCode: "MMC102", subject: "DMS", faculty: "Dr. M Pralhad", scores: [95.63, 86.25, 86.56, 82.81, 93.75, 84.06, 91.88, 86.88, 87.50, 86.88], gradePointAvg: 88.22, section: "A" },
  { slNo: 3, subjectCode: "MMC103", subject: "DBMS", faculty: "Sharvani Channappa", scores: [96.25, 92.50, 93.13, 90.31, 93.75, 88.44, 92.19, 93.44, 94.06, 94.38], gradePointAvg: 92.84, section: "A" },
  { slNo: 4, subjectCode: "MMC104", subject: "OS", faculty: "Jennifer S", scores: [98.44, 97.81, 98.44, 98.75, 99.38, 97.19, 97.81, 98.44, 98.44, 96.88], gradePointAvg: 98.16, section: "A" },
  { slNo: 5, subjectCode: "MMC105", subject: "WT", faculty: "SDN Hayath Ali", scores: [96.56, 96.88, 97.50, 97.50, 98.75, 96.25, 96.56, 96.25, 98.44, 95.31], gradePointAvg: 97.00, section: "A" },
  { slNo: 6, subjectCode: "MMCL106", subject: "DBMS Lab", faculty: "Subhashree D. C.", scores: [94.69, 92.50, 88.13, 91.25, 93.44, 92.19, 90.63, 90.63, 93.75, null], gradePointAvg: 91.91, section: "A" },
  { slNo: 7, subjectCode: "MRMI107", subject: "RM & IPR", faculty: "Prakash O S", scores: [93.23, 91.29, 90.97, 91.61, 92.90, 88.06, 90.00, 91.29, 92.26, 92.90], gradePointAvg: 91.45, section: "A" },
  
  // Section B - Original data
  { slNo: 1, subjectCode: "MMC101", subject: "PSC", faculty: "SDN Hayath Ali", scores: [96.10, 93.50, 92.60, 91.30, 96.50, 91.60, 92.60, 93.20, 93.20, 94.80], gradePointAvg: 93.54, section: "B" },
  { slNo: 2, subjectCode: "MMC102", subject: "DMS", faculty: "Mr. Swamy J S T", scores: [98.40, 93.20, 94.50, 96.80, 96.80, 93.90, 95.80, 93.90, 93.50, 95.50], gradePointAvg: 95.23, section: "B" },
  { slNo: 3, subjectCode: "MMC103", subject: "DBMS", faculty: "Sharvani Channappa", scores: [94.50, 93.20, 89.70, 91.60, 92.90, 90.00, 89.40, 90.00, 94.20, 94.80], gradePointAvg: 92.03, section: "B" },
  { slNo: 4, subjectCode: "MMC104", subject: "OS", faculty: "Jennifer S", scores: [96.10, 95.50, 94.80, 94.80, 96.10, 92.30, 93.90, 93.90, 94.80, 93.20], gradePointAvg: 94.54, section: "B" },
  { slNo: 5, subjectCode: "MMC105", subject: "WT", faculty: "Sree Lakshmi", scores: [91.60, 92.90, 88.70, 91.60, 89.70, 89.40, 89.40, 86.50, 92.60, 91.30], gradePointAvg: 90.34, section: "B" },
  { slNo: 6, subjectCode: "MMCL106", subject: "DBMS Lab", faculty: "Subhashree D. C.", scores: [94.30, 92.70, 91.30, 91.70, 90.70, 90.70, 92.30, 92.30, 93.70, null], gradePointAvg: 92.19, section: "B" },
  { slNo: 7, subjectCode: "MRMI107", subject: "RM & IPR", faculty: "Dr. Girish Kumar D", scores: [89.00, 91.70, 92.10, 93.40, 93.80, 92.10, 94.10, 91.40, 94.10, 94.50], gradePointAvg: 92.62, section: "B" },
];

const subjects = ["All", "PSC", "DMS", "DBMS", "OS", "WT", "RM & IPR"];
const sections = ["All", "A", "B"];

const FacultyFeedback = () => {
  const [selectedSubject, setSelectedSubject] = useState("All");
  const [selectedSection, setSelectedSection] = useState("All");

  const filteredData = feedbackData.filter((entry) => {
    const subjectMatch = selectedSubject === "All" || entry.subject === selectedSubject;
    const sectionMatch = selectedSection === "All" || entry.section === selectedSection;
    return subjectMatch && sectionMatch;
  });

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="hero-gradient relative py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="animate-fade-in font-serif text-4xl font-bold text-primary-foreground md:text-5xl">
            Faculty Feedback Report
          </h1>
          <p className="mx-auto mt-4 max-w-2xl animate-slide-up text-primary-foreground/80">
            Teaching Evaluation - Odd Term 2025
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          {/* Header Info */}
          <div className="mb-6 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="font-serif text-xl font-semibold text-foreground">
                Department: Master of Computer Applications
              </h2>
              <p className="text-muted-foreground">Semester 1</p>
            </div>
          </div>

          {/* Filters */}
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-muted-foreground">Subject:</span>
              <Select value={selectedSubject} onValueChange={setSelectedSubject}>
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Select Subject" />
                </SelectTrigger>
                <SelectContent>
                  {subjects.map((subject) => (
                    <SelectItem key={subject} value={subject}>
                      {subject}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-muted-foreground">Section:</span>
              <Select value={selectedSection} onValueChange={setSelectedSection}>
                <SelectTrigger className="w-[100px]">
                  <SelectValue placeholder="Select Section" />
                </SelectTrigger>
                <SelectContent>
                  {sections.map((section) => (
                    <SelectItem key={section} value={section}>
                      {section === "All" ? "All" : `Section ${section}`}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Table */}
          <div className="rounded-lg border bg-card">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50">
                  <TableHead className="w-[60px]">Sl No</TableHead>
                  <TableHead className="w-[100px]">Code</TableHead>
                  <TableHead className="w-[80px]">Subject</TableHead>
                  <TableHead>Faculty</TableHead>
                  <TableHead className="w-[60px]">Section</TableHead>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                    <TableHead key={num} className="w-[50px] text-center">
                      {num}
                    </TableHead>
                  ))}
                  <TableHead className="w-[80px] text-center font-semibold">
                    GPA
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredData.length > 0 ? (
                  filteredData.map((entry, index) => (
                    <TableRow key={`${entry.section}-${entry.slNo}-${index}`}>
                      <TableCell className="font-medium">{entry.slNo}</TableCell>
                      <TableCell className="text-muted-foreground">
                        {entry.subjectCode}
                      </TableCell>
                      <TableCell className="font-medium text-primary">
                        {entry.subject}
                      </TableCell>
                      <TableCell>{entry.faculty}</TableCell>
                      <TableCell className="text-center font-medium">
                        {entry.section}
                      </TableCell>
                      {entry.scores.map((score, scoreIndex) => (
                        <TableCell
                          key={scoreIndex}
                          className="text-center text-sm"
                        >
                          {score !== null ? score.toFixed(2) : "-"}
                        </TableCell>
                      ))}
                      <TableCell className="text-center font-semibold text-primary">
                        {entry.gradePointAvg.toFixed(2)}
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell
                      colSpan={16}
                      className="h-24 text-center text-muted-foreground"
                    >
                      No feedback data found for the selected filters.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>

          {/* Summary */}
          <div className="mt-4 text-sm text-muted-foreground">
            Showing {filteredData.length} of {feedbackData.length} entries
          </div>
        </div>
      </section>
    </div>
  );
};

export default FacultyFeedback;
