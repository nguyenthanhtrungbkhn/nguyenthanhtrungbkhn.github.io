export type NewsItem = {
  date: string;
  title: string;
  category: "Publications" | "Talks & Seminars" | "Student Achievements" | "Research Projects" | "Collaborations" | "Teaching Activities";
  description: string;
  links?: Array<{
    label: string;
    href: string;
  }>;
};

export const news: NewsItem[] = [
  {
    date: "2026/01",
    title: "Completed Ph.D. thesis",
    category: "Student Achievements",
    description:
      "I completed my thesis under the supervision of Associate Prof. Phi Le Nguyen (HUST) and Associate Prof. Kien Nguyen (Chiba University).",
    links: [
      {
        label: "Phi Le Nguyen",
        href: "https://users.soict.hust.edu.vn/lenp/"
      },
      {
        label: "Kien Nguyen",
        href: "https://www.s-lab.nd.chiba-u.jp/nguyen/"
      }
    ]
  },
  {
    date: "2025/09",
    title: "Computer Networks paper accepted",
    category: "Publications",
    description:
      "Our research, Evaluating MPQUIC schedulers in dynamic wireless networks with 2D and 3D mobility, was accepted for publication in Computer Networks (Q1, IF: 4.6).",
    links: [
      {
        label: "DOI",
        href: "https://doi.org/10.1016/j.comnet.2025.111689"
      }
    ]
  },
  {
    date: "2024/08",
    title: "FQ-SAT paper accepted",
    category: "Publications",
    description:
      "Our research, FQ-SAT, was accepted for publication in Computer Communications (Q1, IF: 4.5).",
    links: [
      {
        label: "DOI",
        href: "https://doi.org/10.1016/j.comcom.2024.107924"
      }
    ]
  },
  {
    date: "2024/03",
    title: "Research internship at KLab, NII",
    category: "Research Projects",
    description:
      "I participated in research as an internship student at KLab, NII (Japan), under the supervision of Prof. Yusheng Ji.",
    links: [
      {
        label: "KLab",
        href: "https://klab.nii.ac.jp"
      }
    ]
  },
  {
    date: "2022/12",
    title: "Best Student Paper Award at IEEE WF-IoT 2022",
    category: "Student Achievements",
    description:
      "I received the Best Student Paper Award at the IEEE 8th World Forum on the Internet of Things (WF-IoT) 2022."
  }
];
