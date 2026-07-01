export type ResearchDirection = {
  title: string;
  description: string;
  keywords: string[];
};

export const researchDirections: ResearchDirection[] = [
  {
    title: "AI-driven Multipath Transport Protocols",
    description:
      "Designing intelligent scheduling mechanisms for QUIC/MPQUIC in heterogeneous wireless networks, including Wi-Fi, LTE, and 5G. The research focuses on stream-aware scheduling, path selection, out-of-order delivery reduction, and web performance optimization.",
    keywords: [
      "MPQUIC",
      "QUIC",
      "Multipath scheduling",
      "Stream-aware scheduling",
      "Heterogeneous wireless networks",
      "Reinforcement learning",
      "Fuzzy Q-learning",
      "Soft actor-critic",
      "Mininet-WiFi"
    ]
  },
  {
    title: "Intelligent Networked Systems",
    description:
      "Developing adaptive networked systems that monitor path quality, infer network states, and make intelligent decisions to improve reliability, latency, and throughput.",
    keywords: ["Network telemetry", "Path quality", "Adaptive systems", "Latency", "Reliability"]
  },
  {
    title: "Smart Healthcare and Digital Infrastructure",
    description:
      "Applying AI and digital technologies to smart hospital systems, digital operation centers, healthcare data analysis, and intelligent infrastructure planning.",
    keywords: ["Smart healthcare", "Digital operation center", "Healthcare analytics", "Infrastructure planning"]
  },
  {
    title: "Cloud, Edge, and UAV Systems",
    description:
      "Investigating cloud/edge resource optimization, UAV simulation, intelligent control, and practical system deployment for applied AI and networking scenarios.",
    keywords: ["Cloud", "Edge computing", "UAV systems", "Resource optimization", "Intelligent control"]
  }
];
