export type Project = {
  title: string;
  time: string;
  role: string;
  description: string;
  keywords: string[];
  outcomes: string[];
};

export const projects: Project[] = [
  {
    title: "AI for MPQUIC and Next-Generation Networks",
    time: "2025-2026",
    role: "Principal investigator / research lead",
    description:
      "Designing AI-assisted MPQUIC scheduling mechanisms for heterogeneous Wi-Fi, LTE, and 5G environments.",
    keywords: ["MPQUIC", "Reinforcement Learning", "HTTP/3", "Mininet-WiFi"],
    outcomes: ["Prototype schedulers", "Simulation workflows", "Publication manuscripts"]
  },
  {
    title: "Smart Hospital and Digital Operation Center",
    time: "2025-2026",
    role: "Research collaborator",
    description:
      "Developing concepts, technical reports, and applied AI workflows for smart healthcare operations.",
    keywords: ["Smart Hospital", "Digital Operation Center", "Healthcare AI"],
    outcomes: ["System architecture", "Research reports", "Student project topics"]
  },
  {
    title: "UAV Simulation and Intelligent Control",
    time: "2024-2026",
    role: "Academic supervisor",
    description:
      "Exploring UAV simulation, path planning, and AI-based control for applied digital infrastructure scenarios.",
    keywords: ["UAV", "Simulation", "AI Control"],
    outcomes: ["Prototype simulations", "Student demos", "Technical documentation"]
  },
  {
    title: "Cloud Computing and Digital Infrastructure",
    time: "2024-2026",
    role: "Lecturer / project mentor",
    description:
      "Guiding practical cloud, edge, and distributed system projects with a focus on deployment and reliability.",
    keywords: ["Cloud Computing", "Edge Systems", "DevOps"],
    outcomes: ["Course projects", "Deployment templates", "Research directions"]
  },
  {
    title: "AI Applications in Healthcare and Communication Networks",
    time: "2025-2026",
    role: "Research mentor",
    description:
      "Applying machine learning and data-driven methods to communication networks and healthcare service workflows.",
    keywords: ["Applied AI", "Networking", "Healthcare"],
    outcomes: ["Applied prototypes", "Literature reviews", "Collaboration proposals"]
  }
];
