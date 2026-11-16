
export interface Person {
  id: string;
  name: string;
  role: string;
  department: string;
  email: string;
  phone: string;
  location: string;
  status: "Active" | "Inactive";
}

export const people: Person[] = [
  {
    id: "1",
    name: "Alex Morgan",
    role: "Product Designer",
    department: "Design",
    email: "alex.morgan@example.com",
    phone: "+1 555 0101",
    location: "New York",
    status: "Active",
  },
  {
    id: "2",
    name: "Sophia Chen",
    role: "Frontend Developer",
    department: "Engineering",
    email: "sophia.chen@example.com",
    phone: "+1 555 0102",
    location: "San Francisco",
    status: "Active",
  },
  {
    id: "3",
    name: "Daniel Wilson",
    role: "Data Analyst",
    department: "Analytics",
    email: "daniel.wilson@example.com",
    phone: "+1 555 0103",
    location: "Chicago",
    status: "Active",
  },
  {
    id: "4",
    name: "Emma Thompson",
    role: "Marketing Manager",
    department: "Marketing",
    email: "emma.thompson@example.com",
    phone: "+1 555 0104",
    location: "Boston",
    status: "Inactive",
  },
  {
    id: "5",
    name: "Noah Williams",
    role: "UX Researcher",
    department: "Design",
    email: "noah.williams@example.com",
    phone: "+1 555 0105",
    location: "Seattle",
    status: "Active",
  },
];
