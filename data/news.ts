export type NewsItem = {
  date: string;
  title: string;
  category: "Publications" | "Talks & Seminars" | "Student Achievements" | "Research Projects" | "Collaborations" | "Teaching Activities";
  description: string;
};

export const news: NewsItem[] = [
  {
    date: "2026/07",
    title: "Research collaboration discussion on AI applications in communication networks",
    category: "Collaborations",
    description:
      "Exploring applied research directions at the intersection of AI systems and communication network optimization."
  },
  {
    date: "2026/06",
    title: "Working on MPQUIC scheduling mechanisms for heterogeneous wireless networks",
    category: "Research Projects",
    description:
      "Continuing experiments on stream-aware path selection, congestion conditions, and web performance."
  },
  {
    date: "2026/06",
    title: "Developing smart hospital and AI-based digital operation center research reports",
    category: "Research Projects",
    description:
      "Preparing technical material for smart healthcare workflows, operations dashboards, and infrastructure planning."
  },
  {
    date: "2026/05",
    title: "Supervising student projects in cloud computing, networking, and AI applications",
    category: "Teaching Activities",
    description:
      "Mentoring student teams on practical system design, evaluation, and research communication."
  },
  {
    date: "2026/04",
    title: "Seminar on QUIC, HTTP/3, and AI-assisted network optimization",
    category: "Talks & Seminars",
    description:
      "Shared an overview of modern transport protocols and learning-based scheduling opportunities."
  },
  {
    date: "2026/03",
    title: "Student prototype demonstrations for cloud and edge computing projects",
    category: "Student Achievements",
    description:
      "Students presented early prototypes covering deployment automation, monitoring, and distributed services."
  },
  {
    date: "2025/12",
    title: "Manuscript preparation on reinforcement learning for MPQUIC scheduling",
    category: "Publications",
    description:
      "Preparing experimental results and analysis for an academic publication on AI-driven transport scheduling."
  }
];
