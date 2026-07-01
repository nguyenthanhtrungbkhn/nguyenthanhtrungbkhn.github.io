export type Course = {
  title: string;
  description: string;
  level: string;
  semester: string;
};

export const courses: Course[] = [
  {
    title: "Computer Networks",
    description: "Layered network architecture, routing, transport protocols, and hands-on performance analysis.",
    level: "Undergraduate",
    semester: "Semester placeholder"
  },
  {
    title: "Cloud Computing",
    description: "Cloud service models, virtualization, deployment, reliability, and scalable system design.",
    level: "Undergraduate / Graduate",
    semester: "Semester placeholder"
  },
  {
    title: "Network Programming",
    description: "Socket programming, client-server systems, web protocols, and practical distributed applications.",
    level: "Undergraduate",
    semester: "Semester placeholder"
  },
  {
    title: "Artificial Intelligence Applications",
    description: "Applied machine learning workflows for real-world systems, analytics, and decision support.",
    level: "Undergraduate",
    semester: "Semester placeholder"
  },
  {
    title: "Information Systems",
    description: "Information system design, data-driven workflows, and enterprise application foundations.",
    level: "Undergraduate",
    semester: "Semester placeholder"
  },
  {
    title: "Research Methodology",
    description: "Research design, literature review, experimental evaluation, and academic writing.",
    level: "Graduate / Senior undergraduate",
    semester: "Semester placeholder"
  }
];

export const studentProjectTopics = [
  "AI-based MPQUIC scheduling",
  "Reinforcement learning for wireless networks",
  "QUIC/HTTP/3 performance optimization",
  "Smart hospital digital operation center",
  "UAV simulation and AI-based control",
  "Cloud/edge resource optimization"
];
