import {Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProjectData {

  categories = signal([
    {
      type: ProjectCategory.ACADEMIC,
      label: 'Academic Work & Research'
    },
    {
      type: ProjectCategory.PROJECTS,
      label: 'Projects'
    }
  ])

  projects: Project[] = [
    {
      id: "micropython-tmf882x",
      title: "MicroPython Library for TMF882X ToF Sensors",
      shortDesc: "An open-source MicroPython library for interfacing with the TMF882X series of Time-of-Flight laser distance sensors.",
      longDesc: "This project provides a robust, production-ready MicroPython driver for the AMS TMF8820 and TMF8821 sensors. It handles complex I2C register mappings and provides a high-level API to access multi-zone distance data, making advanced laser sensing accessible for embedded developers.",
      type: "Embedded & Driver Development",
      tags: ["Open Source", "MicroPython", "Embedded", "I2C"],
      features: [
        "Full I2C communication protocol",
        "Multi-zone detection support (8x8 zones)",
        "Real-time distance measurement & filtering",
        "Interrupt-driven data processing for low power"
      ],
      imgSrc: null,
      category: ProjectCategory.PROJECTS,
      hyperlinks: [
        {
          type: HyperLinkType.GITHUB,
          url: "https://github.com/K1ngGrim/tmf882X_micropython",
          icon: "github",
        }
      ],
      projectInfo: {
        "Year": "2023",
        "Status": "Completed",
      }
    },
    {
      id: "thesis-word-addin",
      title: "AI-Powered Word Add-In for Legal Tech",
      shortDesc: "A Microsoft Word Add-In for AI-supported analysis and creation of legal documents based on the Office-JS API.",
      longDesc: "Developed as part of a Master's thesis, this Add-In bridges the gap between traditional legal drafting and modern NLP. It integrates Large Language Models directly into the Word environment to assist lawyers with clause generation, consistency checks, and semantic analysis of complex legal frameworks.",
      type: "Legal Tech & NLP",
      tags: ["Office.js", "NLP", "LLMs", "Prompt Engineering", "TypeScript"],
      features: [
        "Semantic text analysis for risk detection",
        "Rule-based document verification",
        "Automated drafting of complex legal clauses",
        "Seamless integration with MS Word via Office.js"
      ],
      imgSrc: null,
      category: ProjectCategory.ACADEMIC,
      hyperlinks: [],
      projectInfo: {
        "Year": "2025",
        "Role": "Author & Developer",
        "Status": "Completed",
      }
    },
    {
      id: "whistledrop",
      title: "WhistleDrop – Secure Reporting Platform",
      shortDesc: "A web-based whistleblower platform with a strong focus on confidentiality, anonymity, and cryptographic security.",
      longDesc: "WhistleDrop is a secure gateway for anonymous whistleblowing. It utilizes advanced cryptographic methods to ensure that the identity of the user remains hidden from both the platform and the recipient. The architecture is designed to be resilient against traffic analysis and metadata leaks, incorporating Tor-network compatibility.",
      type: "Fullstack & Cybersecurity",
      tags: ["Flask", "React", "Cryptography", "Tor", "PostgreSQL"],
      features: [
        "End-to-end encryption for all submissions",
        "Anonymous reporting channels via Onion routing",
        "Tamper-proof audit logs for traceability",
        "Secure encrypted document management"
      ],
      imgSrc: null,
      category: ProjectCategory.PROJECTS,
      hyperlinks: [],
      projectInfo: {
        "Year": "2025",
        "Purpose": "Student Project",
        "Role": "Backend Developer",
        "Status": "Completed",
      }
    }
  ];

  public getProjects(category: ProjectCategory | null = null): Project[] {
    return category ? this.projects.filter(p => p.category === category) : this.projects;
  }

  public getProjectById(id: string): Project | null {
    return this.projects.find(p => p.id === id) || null;
  }

  hasHyperLink(project: Project, type: HyperLinkType) {
    return project.hyperlinks.find(link => link.type === type);
  }


}

export interface Project {
  id: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  tags: string[];
  features: string[];
  imgSrc: string | null;
  category: ProjectCategory;
  type: string;
  hyperlinks: { type: HyperLinkType; url: string; icon: string}[];
  projectInfo?: {[key: string]: string};
}

export enum HyperLinkType {
  GITHUB = 'github',
  DOCUMENTATION = 'documentation',
  OTHER = 'other'
}

export enum ProjectCategory {
  PROJECTS = 'projects',
  ACADEMIC = 'academic'
}
