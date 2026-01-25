import { useState } from "react";
import {
  Users,
  BookOpen,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Search,
  Filter,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
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
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
} from "recharts";

// 1st Semester Data
const sem1Students = [
  { rollNo: 1, usn: "22BI25MCA081-T", name: "A PAVANI", dms: { marks: 36, att: 100 }, dbms: { marks: 27, att: 98 }, os: { marks: 44, att: 100 }, rmIpr: { marks: 38 } },
  { rollNo: 2, usn: "22BI25MCA007-T", name: "ABDUL RAZAK", dms: { marks: 32, att: 85 }, dbms: { marks: 40, att: 93 }, os: { marks: 42, att: 87 }, rmIpr: { marks: 43 } },
  { rollNo: 3, usn: "22BI25MCA016-T", name: "ABHISHEK MAHANTESH AKKI", dms: { marks: 29, att: 65 }, dbms: { marks: 41, att: 81 }, os: { marks: 31, att: 83 }, rmIpr: { marks: 38 } },
  { rollNo: 4, usn: "22BI25MCA075-T", name: "AISHWARYA B", dms: { marks: 43, att: 75 }, dbms: { marks: 48, att: 91 }, os: { marks: 47, att: 97 }, rmIpr: { marks: 42 } },
  { rollNo: 5, usn: "22BI25MCA065-T", name: "AKHILA V K", dms: { marks: 50, att: 85 }, dbms: { marks: 46, att: 86 }, os: { marks: 47, att: 83 }, rmIpr: { marks: 46 } },
  { rollNo: 6, usn: "22BI25MCA013-T", name: "AKHILESH G", dms: { marks: 44, att: 70 }, dbms: { marks: 42, att: 79 }, os: { marks: 42, att: 77 }, rmIpr: { marks: 48 } },
  { rollNo: 7, usn: "22BI25MCA071-T", name: "AMRUTHA", dms: { marks: 41, att: 70 }, dbms: { marks: 48, att: 72 }, os: { marks: 50, att: 67 } },
  { rollNo: 8, usn: "22BI25MCA002-T", name: "ANIKETH RAO JANAK", dms: { marks: 26, att: 50 }, dbms: { marks: 45, att: 58 }, os: { marks: 31, att: 50 } },
  { rollNo: 9, usn: "22BI25MCA049-T", name: "ANJANA PRIYA", dms: { marks: 50, att: 85 }, dbms: { marks: 48, att: 86 }, os: { marks: 50, att: 90 } },
  { rollNo: 10, usn: "22BI25MCA060-T", name: "ANJINEYA K G", dms: { marks: 30, att: 85 }, dbms: { marks: 43, att: 95 }, os: { marks: 38, att: 90 } },
  { rollNo: 11, usn: "22BI25MCA010-T", name: "ANURAG VERMA", dms: { marks: 32, att: 75 }, dbms: { marks: 35, att: 79 }, os: { marks: 44, att: 83 } },
  { rollNo: 12, usn: "22BI25MCA094-T", name: "ARUNA JYOTHI", dms: { marks: 42, att: 85 }, dbms: { marks: 43, att: 95 }, os: { marks: 45, att: 90 } },
  { rollNo: 13, usn: "22BI25MCA029-T", name: "ASMA ANJUM", dms: { marks: 47, att: 50 }, dbms: { marks: 43, att: 65 }, os: { marks: 47, att: 67 } },
  { rollNo: 14, usn: "22BI25MCA036-T", name: "AYESHA NUFA", dms: { marks: 50, att: 80 }, dbms: { marks: 46, att: 77 }, os: { marks: 47, att: 70 } },
  { rollNo: 15, usn: "22BI25MCA040-T", name: "AYESHA SULTANA M", dms: { marks: 47, att: 80 }, dbms: { marks: 38, att: 81 }, os: { marks: 44, att: 93 } },
  { rollNo: 16, usn: "22BI25MCA078-T", name: "B MOUNESH", dms: { marks: 48, att: 95 }, dbms: { marks: 47, att: 81 }, os: { marks: 46, att: 93 } },
  { rollNo: 17, usn: "22BI25MCA046-T", name: "B SAITEJA", dms: { marks: 4, att: 30 }, dbms: { marks: 25, att: 49 }, os: { marks: 26, att: 53 } },
  { rollNo: 18, usn: "22BI25MCA101-T", name: "B J RANGANATH", dms: { marks: 45, att: 70 }, dbms: { marks: 34, att: 86 }, os: { marks: 42, att: 77 } },
  { rollNo: 19, usn: "22BI25MCA042-T", name: "BHAGAVAN REDDY P", dms: { marks: 32, att: 90 }, dbms: { marks: 45, att: 100 }, os: { marks: 39, att: 93 } },
  { rollNo: 20, usn: "22BI25MCA093-T", name: "BHAGYASHRI", dms: { marks: 48, att: 90 }, dbms: { marks: 45, att: 95 }, os: { marks: 46, att: 87 } },
  { rollNo: 21, usn: "22BI25MCA100-T", name: "BHUDHANUR BHUMIKA", dms: { marks: 40, att: 95 }, dbms: { marks: 46, att: 81 }, os: { marks: 46, att: 87 } },
  { rollNo: 22, usn: "22BI25MCA022-T", name: "BOLLINENI ASWINI", dms: { marks: 26, att: 60 }, dbms: { marks: 39, att: 72 }, os: { marks: 32, att: 80 } },
  { rollNo: 23, usn: "22BI25MCA011-T", name: "BUDDAREDDY GARI RISHITHA REDDY", dms: { marks: 50, att: 95 }, dbms: { marks: 44, att: 81 }, os: { marks: 37, att: 93 } },
  { rollNo: 24, usn: "22BI25MCA018-T", name: "BUDURU RANJITHA", dms: { marks: 45, att: 100 }, dbms: { marks: 50, att: 93 }, os: { marks: 49, att: 100 } },
  { rollNo: 25, usn: "22BI25MCA105-T", name: "D AKHILA REDDY", dms: { marks: 47, att: 95 }, dbms: { marks: 44, att: 95 }, os: { marks: 49, att: 100 } },
  { rollNo: 26, usn: "22BI25MCA102-T", name: "D M ABHISHEK", dms: { marks: 33, att: 90 }, dbms: { marks: 49, att: 100 }, os: { marks: 47, att: 80 } },
  { rollNo: 27, usn: "22BI25MCA059-T", name: "FARIYA FATHIMA", dms: { marks: 11, att: 55 }, dbms: { marks: 25, att: 81 }, os: { marks: 32, att: 78 } },
  { rollNo: 28, usn: "22BI25MCA008-T", name: "FIRDOSE JAHAN K", dms: { marks: 47, att: 65 }, dbms: { marks: 40, att: 84 }, os: { marks: 43, att: 80 } },
  { rollNo: 29, usn: "22BI25MCA057-T", name: "G GANESH", dms: { marks: 32, att: 20 }, dbms: { marks: 41, att: 93 }, os: { marks: 47, att: 90 } },
  { rollNo: 30, usn: "22BI25MCA064-T", name: "G N SRINIVASA", dms: { marks: 31, att: 85 }, dbms: { marks: 46, att: 93 }, os: { marks: 38, att: 83 } },
  { rollNo: 31, usn: "22BI25MCA074-T", name: "GADILINGAPPA B R", dms: { marks: 48, att: 100 }, dbms: { marks: 46, att: 100 }, os: { marks: 49, att: 97 } },
  { rollNo: 32, usn: "22BI25MCA019-T", name: "GANESH B", dms: { marks: 14, att: 100 }, dbms: { marks: 25, att: 88 }, os: { marks: 28, att: 83 } },
  { rollNo: 33, usn: "22BI25MCA048-T", name: "GOUSIYA S", dms: { marks: 40, att: 50 }, dbms: { marks: 43, att: 84 }, os: { marks: 48, att: 80 } },
  { rollNo: 34, usn: "22BI25MCA097-T", name: "GOWTHAMI A", dms: { marks: 30, att: 90 }, dbms: { marks: 38, att: 88 }, os: { marks: 49, att: 100 } },
  { rollNo: 35, usn: "22BI25MCA038-T", name: "GURUPADI H", dms: { marks: 31, att: 95 }, dbms: { marks: 37, att: 91 }, os: { marks: 34, att: 93 } },
  { rollNo: 36, usn: "22BI25MCA084-T", name: "H S ABHISHEK", dms: { marks: 29, att: 85 }, dbms: { marks: 46, att: 100 }, os: { marks: 46, att: 93 } },
  { rollNo: 37, usn: "22BI25MCA021-T", name: "J PRAVALIKA", dms: { marks: 34, att: 50 }, dbms: { marks: 48, att: 81 }, os: { marks: 44, att: 80 } },
  { rollNo: 38, usn: "22BI25MCA037-T", name: "JAYA KRISHNA REDDY M", dms: { marks: 28, att: 70 }, dbms: { marks: 45, att: 84 }, os: { marks: 40, att: 80 } },
  { rollNo: 39, usn: "22BI25MCA043-T", name: "K GURURAJ", dms: { marks: 29, att: 80 }, dbms: { marks: 45, att: 88 }, os: { marks: 39, att: 87 } },
  { rollNo: 40, usn: "22BI25MCA054-T", name: "K MANASA DEVI", dms: { marks: 30, att: 80 }, dbms: { marks: 37, att: 79 }, os: { marks: 48, att: 83 } },
  { rollNo: 41, usn: "22BI25MCA047-T", name: "K MOHAMMED KHIZAR", dms: { marks: 41, att: 100 }, dbms: { marks: 40, att: 91 }, os: { marks: 40, att: 90 } },
  { rollNo: 42, usn: "22BI25MCA067-T", name: "KAVYA B", dms: { marks: 42, att: 90 }, dbms: { marks: 44, att: 93 }, os: { marks: 43, att: 87 } },
  { rollNo: 43, usn: "22BI25MCA083-T", name: "KEERTHI K", dms: { marks: 44, att: 85 }, dbms: { marks: 48, att: 91 }, os: { marks: 47, att: 83 } },
  { rollNo: 44, usn: "22BI25MCA104-T", name: "LAKSHMI B", dms: { marks: 40, att: 60 }, dbms: { marks: 35, att: 93 }, os: { marks: 34, att: 87 } },
  { rollNo: 45, usn: "22BI25MCA077-T", name: "LAKSHMI SHREYA M", dms: { marks: 50, att: 90 }, dbms: { marks: 41, att: 84 }, os: { marks: 48, att: 90 } },
  { rollNo: 46, usn: "22BI25MCA026-T", name: "M AMMULU", dms: { marks: 31, att: 80 }, dbms: { marks: 45, att: 95 }, os: { marks: 47, att: 90 } },
  { rollNo: 47, usn: "22BI25MCA090-T", name: "M HAZARA", dms: { marks: 47, att: 80 }, dbms: { marks: 44, att: 91 }, os: { marks: 49, att: 87 } },
  { rollNo: 48, usn: "22BI25MCA082-T", name: "M NEELA", dms: { marks: 50, att: 85 }, dbms: { marks: 49, att: 86 }, os: { marks: 46, att: 80 } },
  { rollNo: 49, usn: "22BI25MCA027-T", name: "M VENKATESH", dms: { marks: 29, att: 60 }, dbms: { marks: 37, att: 77 }, os: { marks: 35, att: 63 } },
  { rollNo: 50, usn: "22BI25MCA035-T", name: "SAMIYA KHAN", dms: { marks: 49, att: 90 }, dbms: { marks: 49, att: 86 }, os: { marks: 49, att: 93 } },
  { rollNo: 51, usn: "22BI25MCA056-T", name: "SAMRIN TAJ S", dms: { marks: 47, att: 85 }, dbms: { marks: 48, att: 84 }, os: { marks: 49, att: 87 } },
];

// 3rd Semester Data
const sem3Students = [
  { rollNo: 52, usn: "22BI25MCA091-T", name: "M A TARASREE", psc: { marks: 45, att: 96 }, dms: { marks: 46, att: 98 }, dbms: { marks: 45, att: 91 }, os: { marks: 47, att: 88 }, rmIpr: { marks: 44 } },
  { rollNo: 53, usn: "22BI25MCA063-T", name: "M JOSHNA REDDY", psc: { marks: 50, att: 96 }, dms: { marks: 46, att: 95 }, dbms: { marks: 43, att: 96 }, os: { marks: 48, att: 97 }, rmIpr: { marks: 41 } },
  { rollNo: 54, usn: "22BI25MCA070-T", name: "MANOJ KUMAR", psc: { marks: 43, att: 88 }, dms: { marks: 46, att: 93 }, dbms: { marks: 46, att: 87 }, os: { marks: 48, att: 97 }, rmIpr: { marks: 40 } },
  { rollNo: 55, usn: "22BI25MCA085-T", name: "MASEERA FATHIMA M", psc: { marks: 45, att: 100 }, dms: { marks: 45, att: 98 }, dbms: { marks: 49, att: 100 }, os: { marks: 49, att: 94 }, rmIpr: { marks: 35 } },
  { rollNo: 56, usn: "22BI25MCA017-T", name: "MOHAMMED IMRAN", psc: { marks: 45, att: 88 }, dms: { marks: 44, att: 88 }, dbms: { marks: 42, att: 83 }, os: { marks: 44, att: 82 }, rmIpr: { marks: 39 } },
  { rollNo: 57, usn: "22BI25MCA087-T", name: "MOHAMMED SAMEER", psc: { marks: 30, att: 84 }, dms: { marks: 37, att: 95 }, dbms: { marks: 43, att: 96 }, os: { marks: 44, att: 85 }, rmIpr: { marks: 34 } },
  { rollNo: 58, usn: "22BI25MCA103-T", name: "MOHAMMED DANISH", psc: { marks: 43, att: 76 }, dms: { marks: 31, att: 90 }, dbms: { marks: 30, att: 96 }, os: { marks: 25, att: 91 }, rmIpr: { marks: 43 } },
  { rollNo: 59, usn: "22BI25MCA014-T", name: "MOHAMMED N ROSHAN ZAMEER", psc: { marks: 35, att: 84 }, dms: { marks: 45, att: 85 }, dbms: { marks: 43, att: 87 }, os: { marks: 44, att: 91 }, rmIpr: { marks: 47 } },
  { rollNo: 60, usn: "22BI25MCA001-T", name: "MULLANGI JAYACHANDRA", psc: { marks: 33, att: 88 }, dms: { marks: 43, att: 88 }, dbms: { marks: 39, att: 80 }, os: { marks: 42, att: 76 }, rmIpr: { marks: 43 } },
  { rollNo: 61, usn: "22BI25MCA072-T", name: "NANDINI V H", psc: { marks: 46, att: 96 }, dms: { marks: 42, att: 80 }, dbms: { marks: 47, att: 96 }, os: { marks: 47, att: 91 }, rmIpr: { marks: 47 } },
  { rollNo: 62, usn: "22BI25MCA024-T", name: "NEESHATH FATHIMA", psc: { marks: 48, att: 96 }, dms: { marks: 45, att: 90 }, dbms: { marks: 49, att: 87 }, os: { marks: 40, att: 85 }, rmIpr: { marks: 41 } },
  { rollNo: 63, usn: "22BI25MCA062-T", name: "NIKIL KUMAR K", psc: { marks: 48, att: 76 }, dms: { marks: 42, att: 85 }, dbms: { marks: 42, att: 80 }, os: { marks: 47, att: 67 }, rmIpr: { marks: 43 } },
  { rollNo: 64, usn: "22BI25MCA055-T", name: "NIKITHA B", psc: { marks: 47, att: 88 }, dms: { marks: 47, att: 78 }, dbms: { marks: 48, att: 87 }, os: { marks: 43, att: 79 }, rmIpr: { marks: 41 } },
  { rollNo: 65, usn: "22BI25MCA098-T", name: "P UMMAR FAROOQ", psc: { marks: 29, att: 0 }, dms: { marks: 29, att: 78 }, dbms: { marks: 27, att: 80 }, os: { marks: 35, att: 88 }, rmIpr: { marks: 45 } },
  { rollNo: 66, usn: "22BI25MCA073-T", name: "PAVAN KUMAR U", psc: { marks: 47, att: 72 }, dms: { marks: 40, att: 90 }, dbms: { marks: 38, att: 90 }, os: { marks: 41, att: 88 }, rmIpr: { marks: 39 } },
  { rollNo: 67, usn: "22BI25MCA069-T", name: "PAVANKUMAR RAJASHEKHAR HIREMATH", psc: { marks: 50, att: 72 }, dms: { marks: 16, att: 93 }, dbms: { marks: 40, att: 84 }, os: { marks: 35, att: 70 }, rmIpr: { marks: 48 } },
  { rollNo: 68, usn: "22BI25MCA053-T", name: "PAVITRA R GANJIMATH", psc: { marks: 50, att: 92 }, dms: { marks: 49, att: 90 }, dbms: { marks: 50, att: 91 }, os: { marks: 50, att: 94 }, rmIpr: { marks: 48 } },
  { rollNo: 69, usn: "22BI25MCA020-T", name: "PRAMOD KUMAR D P", psc: { marks: 47, att: 68 }, dms: { marks: 32, att: 63 }, dbms: { marks: 36, att: 70 }, os: { marks: 31, att: 64 }, rmIpr: { marks: 39 } },
  { rollNo: 70, usn: "22BI25MCA044-T", name: "R HEMALATHA", psc: { marks: 50, att: 96 }, dms: { marks: 46, att: 88 }, dbms: { marks: 49, att: 83 }, os: { marks: 47, att: 85 }, rmIpr: { marks: 46 } },
  { rollNo: 71, usn: "22BI25MCA009-T", name: "R SREEKARI", psc: { marks: 45, att: 100 }, dms: { marks: 43, att: 98 }, dbms: { marks: 46, att: 100 }, os: { marks: 46, att: 94 }, rmIpr: { marks: 48 } },
  { rollNo: 72, usn: "22BI25MCA050-T", name: "R K SHAILAJA", psc: { marks: 50, att: 96 }, dms: { marks: null, att: 88 }, dbms: { marks: null, att: 83 }, os: { marks: 46, att: 91 }, rmIpr: { marks: 39 } },
  { rollNo: 73, usn: "22BI25MCA015-T", name: "R YUGDEEP", psc: { marks: 28, att: 76 }, dms: { marks: 35, att: 83 }, dbms: { marks: 37, att: 83 }, os: { marks: 41, att: 73 }, rmIpr: { marks: 47 } },
  { rollNo: 75, usn: "22BI25MCA004-T", name: "RAMESH K", psc: { marks: 48, att: 96 }, dms: { marks: 31, att: 88 }, dbms: { marks: 31, att: 83 }, os: { marks: 36, att: 85 }, rmIpr: { marks: 43 } },
  { rollNo: 76, usn: "22BI25MCA052-T", name: "RENUKA H S", psc: { marks: 40, att: 88 }, dms: { marks: 45, att: 88 }, dbms: { marks: 47, att: 91 }, os: { marks: 47, att: 94 }, rmIpr: { marks: 45 } },
  { rollNo: 77, usn: "22BI25MCA099-T", name: "S K PRAMEYA", psc: { marks: 50, att: 88 }, dms: { marks: 46, att: 93 }, dbms: { marks: 49, att: 91 }, os: { marks: 47, att: 79 }, rmIpr: { marks: 45 } },
  { rollNo: 78, usn: "22BI25MCA025-T", name: "SAI GANESH REDDY K", psc: { marks: 45, att: 88 }, dms: { marks: 37, att: 90 }, dbms: { marks: 17, att: 91 }, os: { marks: 28, att: 82 }, rmIpr: { marks: 43 } },
  { rollNo: 79, usn: "22BI25MCA086-T", name: "SANA AISHA A K", psc: { marks: 35, att: 100 }, dms: { marks: 44, att: 98 }, dbms: { marks: 44, att: 96 }, os: { marks: 42, att: 94 }, rmIpr: { marks: 37 } },
  { rollNo: 80, usn: "22BI25MCA045-T", name: "SANDEEP KULKARNI", psc: { marks: 50, att: 76 }, dms: { marks: 39, att: 75 }, dbms: { marks: 42, att: 87 }, os: { marks: 35, att: 82 }, rmIpr: { marks: 35 } },
  { rollNo: 81, usn: "22BI25MCA030-T", name: "SANDHYA", psc: { marks: 46, att: 88 }, dms: { marks: 45, att: 90 }, dbms: { marks: 45, att: 100 }, os: { marks: 48, att: 91 }, rmIpr: { marks: 44 } },
  { rollNo: 82, usn: "22BI25MCA089-T", name: "SHAIK JEELAN K", psc: { marks: 18, att: 84 }, dms: { marks: 21, att: 93 }, dbms: { marks: 21, att: 80 }, os: { marks: 39, att: 85 }, rmIpr: { marks: 26 } },
  { rollNo: 83, usn: "22BI25MCA096-T", name: "SHARANU", psc: { marks: 37, att: 76 }, dms: { marks: 35, att: 93 }, dbms: { marks: 38, att: 91 }, os: { marks: 39, att: 91 }, rmIpr: { marks: 42 } },
  { rollNo: 84, usn: "22BI25MCA092-T", name: "SHASHI KUMAR M", psc: { marks: 44, att: 84 }, dms: { marks: 25, att: 90 }, dbms: { marks: 23, att: 87 }, os: { marks: 11, att: 79 }, rmIpr: { marks: 48 } },
  { rollNo: 85, usn: "22BI25MCA066-T", name: "SHIVABASAV ASHOK JULAKATTI", psc: { marks: 30, att: 68 }, dms: { marks: 33, att: 73 }, dbms: { marks: 32, att: 76 }, os: { marks: 42, att: 67 }, rmIpr: { marks: 47 } },
  { rollNo: 86, usn: "22BI25MCA028-T", name: "SHRIJEET F GHOTNEKAR", psc: { marks: 49, att: 84 }, dms: { marks: 37, att: 88 }, dbms: { marks: 43, att: 80 }, os: { marks: 44, att: 94 }, rmIpr: { marks: 48 } },
  { rollNo: 87, usn: "22BI25MCA033-T", name: "SNEHA", psc: { marks: 50, att: 88 }, dms: { marks: 47, att: 85 }, dbms: { marks: 49, att: 91 }, os: { marks: 37, att: 76 }, rmIpr: { marks: 47 } },
  { rollNo: 88, usn: "22BI25MCA076-T", name: "SNEHA", psc: { marks: 50, att: 88 }, dms: { marks: 45, att: 90 }, dbms: { marks: 49, att: 96 }, os: { marks: 47, att: 85 }, rmIpr: { marks: 46 } },
  { rollNo: 89, usn: "22BI25MCA061-T", name: "SUSHMA J", psc: { marks: 50, att: 100 }, dms: { marks: 46, att: 95 }, dbms: { marks: 49, att: 96 }, os: { marks: 47, att: 85 }, rmIpr: { marks: 50 } },
  { rollNo: 90, usn: "22BI25MCA068-T", name: "SUSHMA KUMARI M", psc: { marks: 48, att: 80 }, dms: { marks: 44, att: 90 }, dbms: { marks: 49, att: 90 }, os: { marks: 43, att: 79 }, rmIpr: { marks: 42 } },
  { rollNo: 91, usn: "22BI25MCA023-T", name: "SWATHI B", psc: { marks: 50, att: 92 }, dms: { marks: 37, att: 93 }, dbms: { marks: 48, att: 96 }, os: { marks: 40, att: 85 }, rmIpr: { marks: 47 } },
  { rollNo: 92, usn: "22BI25MCA088-T", name: "T RENUKA", psc: { marks: 50, att: 96 }, dms: { marks: 47, att: 95 }, dbms: { marks: 49, att: 96 }, os: { marks: 44, att: 94 }, rmIpr: { marks: 46 } },
  { rollNo: 93, usn: "22BI25MCA032-T", name: "T TULASI", psc: { marks: 50, att: 96 }, dms: { marks: 50, att: 95 }, dbms: { marks: 46, att: 91 }, os: { marks: 48, att: 88 }, rmIpr: { marks: 50 } },
  { rollNo: 94, usn: "22BI25MCA095-T", name: "TAPAL ARSHIYA", psc: { marks: 37, att: 88 }, dms: { marks: 33, att: 83 }, dbms: { marks: 35, att: 80 }, os: { marks: 40, att: 58 }, rmIpr: { marks: 50 } },
  { rollNo: 95, usn: "22BI25MCA079-T", name: "U M NAGESHA SHARMA", psc: { marks: 43, att: 76 }, dms: { marks: 36, att: 83 }, dbms: { marks: 33, att: 78 }, os: { marks: 41, att: 85 }, rmIpr: { marks: 33 } },
  { rollNo: 96, usn: "22BI25MCA041-T", name: "U M PAVAN KUMAR", psc: { marks: 48, att: 88 }, dms: { marks: 41, att: 95 }, dbms: { marks: 34, att: 100 }, os: { marks: 34, att: 88 }, rmIpr: { marks: 41 } },
  { rollNo: 97, usn: "22BI25MCA058-T", name: "USHARANI H K", psc: { marks: 16, att: 8 }, dms: { marks: 26, att: 38 }, dbms: { marks: 36, att: 80 }, os: { marks: 27, att: 33 }, rmIpr: { marks: 35 } },
  { rollNo: 98, usn: "22BI25MCA034-T", name: "V MANASA", psc: { marks: 50, att: 96 }, dms: { marks: 46, att: 95 }, dbms: { marks: 46, att: 100 }, os: { marks: 46, att: 88 }, rmIpr: { marks: 44 } },
  { rollNo: 99, usn: "22BI25MCA051-T", name: "VARSHA H S", psc: { marks: 47, att: 88 }, dms: { marks: 40, att: 93 }, dbms: { marks: 45, att: 87 }, os: { marks: 45, att: 94 }, rmIpr: { marks: 48 } },
  { rollNo: 100, usn: "22BI25MCA080-T", name: "VARUNAKUMARA H G", psc: { marks: 45, att: 84 }, dms: { marks: 40, att: 93 }, dbms: { marks: 41, att: 80 }, os: { marks: 46, att: 79 }, rmIpr: { marks: 38 } },
  { rollNo: 101, usn: "22BI25MCA039-T", name: "VINAYAKA N", psc: { marks: 44, att: 92 }, dms: { marks: 42, att: 95 }, dbms: { marks: 45, att: 96 }, os: { marks: 45, att: 91 }, rmIpr: { marks: 38 } },
  { rollNo: 102, usn: "22BI25MCA006-T", name: "VINIT V M", psc: { marks: 46, att: 92 }, dms: { marks: 38, att: 93 }, dbms: { marks: 45, att: 96 }, os: { marks: 45, att: 88 }, rmIpr: { marks: 46 } },
  { rollNo: 103, usn: "22BI25MCA005-T", name: "YASAR ARAFATH", psc: { marks: 31, att: 4 }, dms: { marks: 25, att: 100 }, dbms: { marks: 31, att: 90 }, os: { marks: 38, att: 88 }, rmIpr: { marks: 20 } },
  { rollNo: 104, usn: "22BI25MCA106-T", name: "MADHANKUMAR N B", psc: { marks: 36, att: 72 }, dms: { marks: 40, att: 100 }, dbms: { marks: 37, att: 92 }, os: { marks: 43, att: 64 }, rmIpr: { marks: 45 } },
  { rollNo: 105, usn: "22BI25MCA107-T", name: "SAMUEL U", psc: { marks: 19, att: 76 }, dms: { marks: 30, att: 64 }, dbms: { marks: 30, att: 70 }, os: { marks: 31, att: 48 }, rmIpr: { marks: 43 } },
  { rollNo: 108, usn: "22BI25MCA110-T", name: "PUTTI TARUN CHAND", psc: { marks: 24, att: 80 }, dms: { marks: 37, att: 80 }, dbms: { marks: 34, att: 82 }, os: { marks: 27, att: 55 }, rmIpr: { marks: 43 } },
  { rollNo: 109, usn: "22BI25MCA111-T", name: "YASHASWINI I M", psc: { marks: 33, att: 72 }, dms: { marks: 30, att: 93 }, dbms: { marks: 32, att: 92 }, os: { marks: 40, att: 90 }, rmIpr: { marks: 44 } },
];

const getAttendanceStatus = (att: number | undefined) => {
  if (att === undefined) return { label: "N/A", color: "bg-muted" };
  if (att >= 85) return { label: "Excellent", color: "bg-green-500" };
  if (att >= 75) return { label: "Good", color: "bg-blue-500" };
  if (att >= 50) return { label: "Average", color: "bg-yellow-500" };
  return { label: "Low", color: "bg-red-500" };
};

const getMarksStatus = (marks: number | null | undefined) => {
  if (marks === null || marks === undefined) return { label: "AB", color: "bg-muted text-muted-foreground" };
  if (marks >= 40) return { label: "Pass", color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" };
  if (marks >= 20) return { label: "Needs Improvement", color: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200" };
  return { label: "Fail", color: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200" };
};

// Calculate statistics for charts
const calculateAttendanceDistribution = (students: typeof sem1Students | typeof sem3Students, subject: string) => {
  const ranges = {
    "0-50%": 0,
    "51-75%": 0,
    "76-84%": 0,
    "85%+": 0,
  };
  
  students.forEach((s) => {
    const subjectData = s[subject as keyof typeof s] as { marks?: number | null; att?: number } | undefined;
    const att = subjectData?.att;
    if (att !== undefined) {
      if (att <= 50) ranges["0-50%"]++;
      else if (att <= 75) ranges["51-75%"]++;
      else if (att <= 84) ranges["76-84%"]++;
      else ranges["85%+"]++;
    }
  });
  
  return Object.entries(ranges).map(([name, value]) => ({ name, value }));
};

const COLORS = ["#ef4444", "#f59e0b", "#3b82f6", "#22c55e"];

const chartConfig = {
  dms: { label: "DMS", color: "hsl(var(--primary))" },
  dbms: { label: "DBMS", color: "hsl(var(--accent))" },
  os: { label: "OS", color: "hsl(var(--secondary))" },
};

const Attendance = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSemester, setSelectedSemester] = useState("sectionA");
  const [filterStatus, setFilterStatus] = useState("all");
  const [selectedPieSubject, setSelectedPieSubject] = useState("dbms");

  const currentStudents = selectedSemester === "sectionA" ? sem1Students : sem3Students;
  
  const filteredStudents = currentStudents.filter((student) => {
    const matchesSearch = 
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.usn.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (filterStatus === "all") return matchesSearch;
    
    // Calculate average attendance and average IA marks
    const subjects = selectedSemester === "sectionA" 
      ? ["dms", "dbms", "os"] 
      : ["psc", "dms", "dbms", "os"];
    
    const attendances = subjects
      .map((sub) => (student[sub as keyof typeof student] as { att?: number })?.att)
      .filter((a) => a !== undefined) as number[];
    
    const marks = subjects
      .map((sub) => (student[sub as keyof typeof student] as { marks?: number })?.marks)
      .filter((m) => m !== undefined) as number[];
    
    const avgAtt = attendances.length > 0 
      ? attendances.reduce((a, b) => a + b, 0) / attendances.length 
      : 0;
    
    // IA marks are out of 50, so calculate percentage
    const avgMarksPercent = marks.length > 0 
      ? (marks.reduce((a, b) => a + b, 0) / marks.length) * 2 
      : 0;
    
    // Good Attendance & Poor Performance: >70% Attendance & < 50% of IA Marks
    if (filterStatus === "goodAtt_poorPerf") return matchesSearch && avgAtt > 70 && avgMarksPercent < 50;
    // Poor Attendance & Good Performance: < 50% Attendance & >= 60% of IA Marks
    if (filterStatus === "poorAtt_goodPerf") return matchesSearch && avgAtt < 50 && avgMarksPercent >= 60;
    // Poor Attendance & Poor Performance: < 50% Attendance & < 50% of IA Marks
    if (filterStatus === "poorAtt_poorPerf") return matchesSearch && avgAtt < 50 && avgMarksPercent < 50;
    
    return matchesSearch;
  });

  // Summary stats
  const totalStudents = currentStudents.length;
  const subjects = selectedSemester === "sectionA" ? ["dms", "dbms", "os"] : ["psc", "dms", "dbms", "os"];
  
  const avgAttendance = Math.round(
    currentStudents.reduce((sum, student) => {
      const atts = subjects
        .map((sub) => (student[sub as keyof typeof student] as { att?: number })?.att)
        .filter((a) => a !== undefined) as number[];
      return sum + (atts.length > 0 ? atts.reduce((a, b) => a + b, 0) / atts.length : 0);
    }, 0) / totalStudents
  );

  const lowAttendanceCount = currentStudents.filter((student) => {
    const atts = subjects
      .map((sub) => (student[sub as keyof typeof student] as { att?: number })?.att)
      .filter((a) => a !== undefined) as number[];
    const avg = atts.length > 0 ? atts.reduce((a, b) => a + b, 0) / atts.length : 0;
    return avg < 75;
  }).length;

  const excellentCount = currentStudents.filter((student) => {
    const atts = subjects
      .map((sub) => (student[sub as keyof typeof student] as { att?: number })?.att)
      .filter((a) => a !== undefined) as number[];
    const avg = atts.length > 0 ? atts.reduce((a, b) => a + b, 0) / atts.length : 0;
    return avg >= 85;
  }).length;

  // Bar chart data for subject-wise average attendance
  const subjectAvgData = subjects.map((sub) => {
    const atts = currentStudents
      .map((s) => (s[sub as keyof typeof s] as { att?: number })?.att)
      .filter((a) => a !== undefined) as number[];
    return {
      subject: sub.toUpperCase(),
      attendance: Math.round(atts.reduce((a, b) => a + b, 0) / atts.length),
    };
  });

  const pieData = calculateAttendanceDistribution(currentStudents, selectedPieSubject);

  // Available subjects for pie chart based on semester
  const pieSubjectOptions = selectedSemester === "sectionA" 
    ? [
        { value: "dms", label: "DMS" },
        { value: "dbms", label: "DBMS" },
        { value: "os", label: "OS" },
      ]
    : [
        { value: "psc", label: "PSC" },
        { value: "dms", label: "DMS" },
        { value: "dbms", label: "DBMS" },
        { value: "os", label: "OS" },
      ];

  return (
    <div className="min-h-screen hero-gradient">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Attendance Dashboard
          </h1>
          <p className="text-muted-foreground">
            1st Internal Marks & Attendance Report - Academic Year 2025-26
          </p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Total Students</p>
                  <p className="text-2xl font-bold text-foreground">{totalStudents}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-green-500/10">
                  <TrendingUp className="h-6 w-6 text-green-500" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Avg Attendance</p>
                  <p className="text-2xl font-bold text-foreground">{avgAttendance}%</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-blue-500/10">
                  <CheckCircle className="h-6 w-6 text-blue-500" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Excellent (85%+)</p>
                  <p className="text-2xl font-bold text-foreground">{excellentCount}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-red-500/10">
                  <AlertTriangle className="h-6 w-6 text-red-500" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Low Attendance</p>
                  <p className="text-2xl font-bold text-foreground">{lowAttendanceCount}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts Section */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Subject-wise Average Attendance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-[300px]">
                <BarChart data={subjectAvgData}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                  <XAxis dataKey="subject" className="text-xs" />
                  <YAxis domain={[0, 100]} className="text-xs" />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="attendance" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Attendance Distribution
                </CardTitle>
                <Select value={selectedPieSubject} onValueChange={setSelectedPieSubject}>
                  <SelectTrigger className="w-[120px]">
                    <SelectValue placeholder="Subject" />
                  </SelectTrigger>
                  <SelectContent>
                    {pieSubjectOptions.map((opt) => (
                      <SelectItem key={opt.value} value={opt.value}>
                        {opt.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-[300px]">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    outerRadius={100}
                    dataKey="value"
                  >
                    {pieData.map((_, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Legend />
                </PieChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>

        {/* Filters and Table */}
        <Card className="bg-card/50 backdrop-blur-sm border-border/50">
          <CardHeader>
            <div className="flex flex-col md:flex-row gap-4 justify-between">
              <CardTitle>Student Records</CardTitle>
              <div className="flex flex-wrap gap-3">
                <Select value={selectedSemester} onValueChange={setSelectedSemester}>
                  <SelectTrigger className="w-[140px]">
                    <SelectValue placeholder="Section" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sectionA">Section A</SelectItem>
                    <SelectItem value="sectionB">Section B</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={filterStatus} onValueChange={setFilterStatus}>
                  <SelectTrigger className="w-[220px]">
                    <Filter className="h-4 w-4 mr-2" />
                    <SelectValue placeholder="Filter" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Students</SelectItem>
                    <SelectItem value="goodAtt_poorPerf">Good Att &amp; Poor Perf</SelectItem>
                    <SelectItem value="poorAtt_goodPerf">Poor Att &amp; Good Perf</SelectItem>
                    <SelectItem value="poorAtt_poorPerf">Poor Att &amp; Poor Perf</SelectItem>
                  </SelectContent>
                </Select>

                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search by name or USN..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 w-[250px]"
                  />
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="table" className="w-full">
              <TabsList className="mb-4">
                <TabsTrigger value="table">Table View</TabsTrigger>
                <TabsTrigger value="cards">Card View</TabsTrigger>
              </TabsList>

              <TabsContent value="table">
                <div className="rounded-md border overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[60px]">R.No</TableHead>
                        <TableHead>USN</TableHead>
                        <TableHead>Name</TableHead>
                        {selectedSemester === "sectionB" && (
                          <TableHead className="text-center">PSC</TableHead>
                        )}
                        <TableHead className="text-center">DMS</TableHead>
                        <TableHead className="text-center">DBMS</TableHead>
                        <TableHead className="text-center">OS</TableHead>
                        <TableHead className="text-center">RM & IPR</TableHead>
                        <TableHead className="text-center">Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredStudents.map((student) => {
                        const atts = subjects
                          .map((sub) => (student[sub as keyof typeof student] as { att?: number })?.att)
                          .filter((a) => a !== undefined) as number[];
                        const avgAtt = atts.length > 0 
                          ? atts.reduce((a, b) => a + b, 0) / atts.length 
                          : 0;
                        const status = getAttendanceStatus(avgAtt);
                        
                        return (
                          <TableRow key={student.usn}>
                            <TableCell className="font-medium">{student.rollNo}</TableCell>
                            <TableCell className="font-mono text-xs">{student.usn}</TableCell>
                            <TableCell className="font-medium">{student.name}</TableCell>
                            {selectedSemester === "sectionB" && (
                              <TableCell className="text-center">
                                <div className="space-y-1">
                                  <Badge variant="outline" className={getMarksStatus((student as typeof sem3Students[0]).psc?.marks).color}>
                                    {(student as typeof sem3Students[0]).psc?.marks ?? "AB"}
                                  </Badge>
                                  <p className="text-xs text-muted-foreground">{(student as typeof sem3Students[0]).psc?.att}%</p>
                                </div>
                              </TableCell>
                            )}
                            <TableCell className="text-center">
                              <div className="space-y-1">
                                <Badge variant="outline" className={getMarksStatus(student.dms?.marks).color}>
                                  {student.dms?.marks ?? "AB"}
                                </Badge>
                                <p className="text-xs text-muted-foreground">{student.dms?.att}%</p>
                              </div>
                            </TableCell>
                            <TableCell className="text-center">
                              <div className="space-y-1">
                                <Badge variant="outline" className={getMarksStatus(student.dbms?.marks).color}>
                                  {student.dbms?.marks ?? "AB"}
                                </Badge>
                                <p className="text-xs text-muted-foreground">{student.dbms?.att}%</p>
                              </div>
                            </TableCell>
                            <TableCell className="text-center">
                              <div className="space-y-1">
                                <Badge variant="outline" className={getMarksStatus(student.os?.marks).color}>
                                  {student.os?.marks ?? "AB"}
                                </Badge>
                                <p className="text-xs text-muted-foreground">{student.os?.att}%</p>
                              </div>
                            </TableCell>
                            <TableCell className="text-center">
                              <Badge variant="outline" className={getMarksStatus(student.rmIpr?.marks).color}>
                                {student.rmIpr?.marks ?? "-"}
                              </Badge>
                            </TableCell>
                            <TableCell className="text-center">
                              <Badge className={`${status.color} text-white`}>
                                {status.label}
                              </Badge>
                            </TableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Showing {filteredStudents.length} of {currentStudents.length} students
                </p>
              </TabsContent>

              <TabsContent value="cards">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {filteredStudents.slice(0, 12).map((student) => {
                    const atts = subjects
                      .map((sub) => (student[sub as keyof typeof student] as { att?: number })?.att)
                      .filter((a) => a !== undefined) as number[];
                    const avgAtt = atts.length > 0 
                      ? Math.round(atts.reduce((a, b) => a + b, 0) / atts.length)
                      : 0;
                    const status = getAttendanceStatus(avgAtt);
                    
                    return (
                      <Card key={student.usn} className="bg-background/50 border-border/50">
                        <CardContent className="p-4">
                          <div className="flex justify-between items-start mb-3">
                            <div>
                              <p className="font-semibold text-foreground">{student.name}</p>
                              <p className="text-xs text-muted-foreground font-mono">{student.usn}</p>
                            </div>
                            <Badge className={`${status.color} text-white`}>
                              {avgAtt}%
                            </Badge>
                          </div>
                          <div className="grid grid-cols-3 gap-2 text-center">
                            <div className="p-2 rounded bg-muted/50">
                              <p className="text-xs text-muted-foreground">DMS</p>
                              <p className="font-semibold">{student.dms?.marks ?? "-"}</p>
                              <p className="text-xs text-muted-foreground">{student.dms?.att}%</p>
                            </div>
                            <div className="p-2 rounded bg-muted/50">
                              <p className="text-xs text-muted-foreground">DBMS</p>
                              <p className="font-semibold">{student.dbms?.marks ?? "-"}</p>
                              <p className="text-xs text-muted-foreground">{student.dbms?.att}%</p>
                            </div>
                            <div className="p-2 rounded bg-muted/50">
                              <p className="text-xs text-muted-foreground">OS</p>
                              <p className="font-semibold">{student.os?.marks ?? "-"}</p>
                              <p className="text-xs text-muted-foreground">{student.os?.att}%</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
                {filteredStudents.length > 12 && (
                  <p className="text-sm text-muted-foreground mt-4 text-center">
                    Showing 12 of {filteredStudents.length} students. Use table view for all records.
                  </p>
                )}
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Attendance;
