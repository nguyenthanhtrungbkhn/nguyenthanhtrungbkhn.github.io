export type PublicationType = "Journal" | "Conference" | "Preprint" | "Under Review";

export type Publication = {
  id: string;
  title: string;
  authors: string;
  venue: string;
  year: number;
  type: PublicationType;
  selected?: boolean;
  tags: string[];
  links: {
    pdf?: string;
    doi?: string;
    code?: string;
    slides?: string;
    bibtex?: string;
  };
};

export const publicationTypes: Array<"All" | PublicationType> = [
  "All",
  "Journal",
  "Conference",
  "Preprint",
  "Under Review"
];

export const publications: Publication[] = [
  {
    id: "sac-mp-2026",
    title: "SAC-MP: A Soft Actor-Critic-based MPQUIC Scheduler in Heterogeneous Wireless Networks",
    authors: "Nguyen Thanh Trung, et al.",
    venue: "Computer Communications",
    year: 2026,
    type: "Journal",
    selected: true,
    tags: ["MPQUIC", "Soft Actor-Critic", "Wireless Networks"],
    links: {
      pdf: "#",
      doi: "#",
      code: "#",
      bibtex: "#"
    }
  },
  {
    id: "jsps-2026",
    title: "JSPS: A Joint Stream-Priority and Path Scheduler for MPQUIC Web Applications",
    authors: "Nguyen Thanh Trung, et al.",
    venue: "Under Review",
    year: 2026,
    type: "Under Review",
    selected: true,
    tags: ["MPQUIC", "HTTP/3", "Stream Scheduling"],
    links: {
      pdf: "#",
      slides: "#",
      bibtex: "#"
    }
  },
  {
    id: "ai-multipath-2025",
    title: "AI-driven Multipath Scheduling for Heterogeneous Wireless Networks",
    authors: "Nguyen Thanh Trung, et al.",
    venue: "Conference Paper",
    year: 2025,
    type: "Conference",
    selected: true,
    tags: ["AI for Networking", "QUIC", "5G"],
    links: {
      pdf: "#",
      doi: "#",
      code: "#",
      bibtex: "#"
    }
  },
  {
    id: "fuzzy-q-2025",
    title: "Fuzzy Q-learning for Adaptive Path Selection in Mobile Network Environments",
    authors: "Nguyen Thanh Trung, collaborators",
    venue: "Preprint",
    year: 2025,
    type: "Preprint",
    tags: ["Fuzzy Q-learning", "Path Selection", "Mobile Networks"],
    links: {
      pdf: "#",
      code: "#",
      bibtex: "#"
    }
  },
  {
    id: "smart-hospital-2024",
    title: "Digital Operation Center Architecture for Smart Hospital Management",
    authors: "Nguyen Thanh Trung, collaborators",
    venue: "Applied Research Report",
    year: 2024,
    type: "Preprint",
    tags: ["Smart Healthcare", "Digital Infrastructure", "AI Systems"],
    links: {
      pdf: "#",
      bibtex: "#"
    }
  }
];
