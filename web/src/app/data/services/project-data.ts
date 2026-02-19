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
      projectInfo: [
        { label: "Year", value: "2023", type: "text", order: 1 },
        { label: "Status", value: "Completed", type: "text", order: 2 },
      ]
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
      projectInfo: [
        { label: "Year", value: "2025", type: "text", order: 1 },
        { label: "Role", value: "Author & Developer", type: "text", order: 2 },
        { label: "Status", value: "Completed", type: "text", order: 3 },
      ];
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
      projectInfo: [
        { label: "Year", value: "2025", type: "text", order: 1 },
        { label: "Purpose", value: "Student Project", type: "text", order: 2 },
        { label: "Role", value: "Backend Developer", type: "text", order: 3 },
        { label: "Contributors", value: "Chris Jemming" } as ContributorInfo,
        { label: "Status", value: "Completed", type: "text", order: 5 },
      ]
    },
    {
      id: "modelcomputer",
      title: "ModelComputer – In-Browser CPU & Assembler Simulator",
      shortDesc: "Ein interaktiver, webbasierter Simulator für einen einfachen Prozessor mit integriertem Code-Editor, Assembler und Debugger.",
      longDesc: "ModelComputer ist ein browserbasiertes Lern- und Prototyping-Tool, das eine kleine, von‑Hand definierte Assemblersprache, einen Editor mit Syntax-Highlighting (Monaco), einen Assembler/Compiler und eine virtuelle CPU kombiniert. Benutzer können Assembler-Code schreiben, bauen, ausführen und schrittweise debuggen. Die Architektur trennt Editor, Compiler und Prozessor in unabhängige Services (z. B. CompilerService, ProcessorService, LoggingService) und nutzt Angular (Standalone Components), Monaco Editor, Angular Material und Tailwind für UI/Styling. Das System eignet sich für Lehre, Experimente mit CPU‑Designs und zum Veranschaulichen von Laufzeit- und Debugging-Konzepten.",
      type: "Frontend / Educational Tool",
      tags: ["Angular", "TypeScript", "Monaco Editor", "Web Simulator", "Assembler", "Angular Material", "TailwindCSS"],
      features: ["In-Browser Code-Editor mit Monaco (Syntax-Highlighting, Reformat)", "Assembler/Build-Pipeline: Text → Maschinencode (via CompilerService)", "Virtuelle CPU: Ausführen, Stop, Reset, Schritt-für-Schritt Debugging", "Debug-Integration: Hervorheben der aktuellen Ausführungszeile im Editor", "Logging-Konsole mit Laufzeitmeldungen (via LoggingService)", "Binär-/Hex-Formatierungstools (z. B. formatBin)", "Standalone Angular-Architektur (Components + Services) – leicht erweiterbar"],
      imgSrc: null,
      category: ProjectCategory.PROJECTS,
      hyperlinks: [],
      projectInfo: [
        { label: "Year", value: "2026", type: "text", order: 1 },
        { label: "Role", value: "Developer", type: "text", order: 2 },
        { label: "Purpose", value: "Lernprojekt", type: "text", order: 3 },
        { label: "Status", value: "Prototype", type: "text", order: 4 },
      ],
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
  projectInfo?: ProjectInfo[];
}

export interface ProjectInfo {
  label: string;
  value: string;
  type: string;
  order: number;
}

export class ContributorInfo implements ProjectInfo{
  label: string = "Contributor";
  order: number = 999;
  type: string = ProjectInfoType.Contributor;
  value: string = "";
  link: string ="";
}

export enum ProjectInfoType {
  Year = 'Year',
  Role = 'Role',
  Purpose = 'Purpose',
  Status = 'Status',
  Contributor = 'Contributor'
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
