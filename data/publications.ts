export type PublicationType = "Journal" | "Conference" | "Preprint" | "Under Review";

export type Publication = {
  id: string;
  title: string;
  authors: string;
  venue: string;
  year: number;
  type: PublicationType;
  citations?: number;
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
    id: "evaluating-mpquic-schedulers-2025",
    title: "Evaluating MPQUIC Schedulers in Dynamic Wireless Networks with 2D and 3D Mobility",
    authors: "MH Vu, TT Nguyen, THL Dinh, TH Nguyen, PL Nguyen, K Nguyen, et al.",
    venue: "Computer Networks",
    year: 2025,
    type: "Journal",
    selected: true,
    tags: ["MPQUIC", "Wireless Networks", "Mobility"],
    links: {
      doi: "https://doi.org/10.1016/j.comnet.2025.111689",
      bibtex: "#"
    }
  },
  {
    id: "fq-sat-2024",
    title: "FQ-SAT: A Fuzzy Q-learning-based MPQUIC Scheduler for Data Transmission Optimization",
    authors: "TT Nguyen, MH Vu, THL Dinh, TH Nguyen, P Le Nguyen, K Nguyen",
    venue: "Computer Communications 226, 107924",
    year: 2024,
    type: "Journal",
    citations: 1,
    selected: true,
    tags: ["MPQUIC", "Fuzzy Q-learning", "Scheduling"],
    links: {
      doi: "https://doi.org/10.1016/j.comcom.2024.107924",
      bibtex: "#"
    }
  },
  {
    id: "q-learning-multipath-2023",
    title: "A Q-learning-based Multipath Scheduler for Data Transmission Optimization in Heterogeneous Wireless Networks",
    authors: "TT Nguyen, MH Vu, P Le Nguyen, PT Do, K Nguyen",
    venue: "2023 IEEE 20th Consumer Communications & Networking Conference (CCNC), 573-578",
    year: 2023,
    type: "Conference",
    citations: 8,
    selected: true,
    tags: ["Q-learning", "Multipath Scheduling", "Wireless Networks"],
    links: {
      bibtex: "#"
    }
  },
  {
    id: "mules-2024",
    title: "MuLeS: A Multi-Client Learning-Based MPQUIC Scheduler",
    authors: "TT Nguyen, MH Vu, THL Dinh, P Le Nguyen, K Nguyen",
    venue: "2024 IEEE 21st Consumer Communications & Networking Conference (CCNC), 656-661",
    year: 2024,
    type: "Conference",
    citations: 1,
    tags: ["MPQUIC", "Learning-Based Scheduling", "Multi-Client Systems"],
    links: {
      bibtex: "#"
    }
  },
  {
    id: "logra-2024",
    title: "LoGra: an LSTM-DDPG Integrated MPQUIC Scheduler for Mobile Video Streaming",
    authors: "MH Vu, TT Nguyen, THL Dinh, P Le Nguyen, K Nguyen",
    venue: "2024 IEEE 100th Vehicular Technology Conference (VTC2024-Fall), 1-5",
    year: 2024,
    type: "Conference",
    tags: ["MPQUIC", "LSTM-DDPG", "Mobile Video Streaming"],
    links: {
      bibtex: "#"
    }
  },
  {
    id: "empirical-mpquic-2022",
    title: "An Empirical Study of MPQUIC Schedulers in Mobile Wireless Networks",
    authors: "MH Vu, G TT Nguyen, HD Tran, TT Nguyen, PT Do, PL Nguyen, K Nguyen",
    venue: "Proceedings of the 11th International Symposium on Information and Communication Technology",
    year: 2022,
    type: "Conference",
    citations: 6,
    tags: ["MPQUIC", "Mobile Wireless Networks", "Empirical Study"],
    links: {
      bibtex: "#"
    }
  },
  {
    id: "rl-multipath-2022",
    title: "A Reinforcement Learning-based Multipath Scheduling for Heterogeneous Wireless Networks",
    authors: "TT Nguyen, MH Vu, P Le Nguyen, PT Do, K Nguyen",
    venue: "2022 IEEE 8th World Forum on Internet of Things (WF-IoT), 1-2",
    year: 2022,
    type: "Conference",
    citations: 2,
    tags: ["Reinforcement Learning", "Multipath Scheduling", "Wireless Networks"],
    links: {
      bibtex: "#"
    }
  },
  {
    id: "wrsn-charging-2022",
    title: "Deep Reinforcement Learning-based Charging Algorithm for Target Coverage and Connectivity in WRSNs",
    authors: "HC Nguyen, MC Dao, TT Nguyen, NK Doan, TH Nguyen, TT Nguyen, et al.",
    venue: "2022 IEEE 33rd Annual International Symposium on Personal, Indoor and Mobile Radio Communications",
    year: 2022,
    type: "Conference",
    citations: 1,
    tags: ["Deep Reinforcement Learning", "WRSNs", "Connectivity"],
    links: {
      bibtex: "#"
    }
  },
  {
    id: "egovernment-architecture-2022",
    title: "E-Government Architecture in Developing Countries: A Case of Public Entities in Vietnam",
    authors: "TT Nguyen",
    venue: "International Journal of eBusiness and eGovernment Studies 14 (2), 35-56",
    year: 2022,
    type: "Journal",
    tags: ["E-Government", "Digital Infrastructure", "Vietnam"],
    links: {
      bibtex: "#"
    }
  },
  {
    id: "coverage-wsn-2019",
    title: "Network Lifetime Maximization for Full Area Coverage in Wireless Sensor Networks",
    authors: "NT Trung, NT Hung, P Le Nguyen",
    venue: "2019 25th Asia-Pacific Conference on Communications (APCC), 431-436",
    year: 2019,
    type: "Conference",
    citations: 3,
    tags: ["Wireless Sensor Networks", "Coverage", "Network Lifetime"],
    links: {
      bibtex: "#"
    }
  },
  {
    id: "delay-guaranteed-routing-2017",
    title: "A Delay-guaranteed Geographic Routing Protocol with Hole Avoidance in WSNs",
    authors: "P Le Nguyen, Y Ji, NT Trung, NT Hung",
    venue: "2017 IEEE 14th International Conference on Mobile Ad Hoc and Sensor Systems",
    year: 2017,
    type: "Conference",
    citations: 4,
    tags: ["Wireless Sensor Networks", "Geographic Routing", "Hole Avoidance"],
    links: {
      bibtex: "#"
    }
  },
  {
    id: "constant-stretch-routing-2017",
    title: "Constant Stretch and Load Balanced Routing Protocol for Bypassing Multiple Holes in Wireless Sensor Networks",
    authors: "PL Nguyen, Y Ji, NT Trung, NT Hung",
    venue: "2017 IEEE 16th International Symposium on Network Computing and Applications",
    year: 2017,
    type: "Conference",
    citations: 3,
    tags: ["Wireless Sensor Networks", "Load Balancing", "Routing"],
    links: {
      bibtex: "#"
    }
  }
];
