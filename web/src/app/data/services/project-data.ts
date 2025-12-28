import {Injectable, signal} from '@angular/core';
import {SkillLevel} from '../../pages/home-page/components/skill-entry/skill-entry';

@Injectable({
  providedIn: 'root',
})
export class ProjectData {

  skills = signal<{name: string, level: SkillLevel}[]>([
    { name: 'Machine Learning', level: SkillLevel.ADVANCED },
    { name: 'Web Development', level: SkillLevel.ADVANCED },
    { name: 'Embedded Systems', level: SkillLevel.INTERMEDIATE },
  ]);



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
      title: "MicroPython Bibliothek für TMF882X ToF-Sensor",
      description: `
        Open-Source MicroPython-Bibliothek zur Ansteuerung von Laser-Entfernungssensoren der TMF882X-Serie.
      `,
      tags: [
        "Open Source",
        "MicroPython",
        "Embedded"
      ],
      imgSrc: null,
      category: ProjectCategory.PROJECTS
    },
    {
      id: "thesis-word-addin",
      title: "KI-gestütztes Word-Add-In für juristische Dokumente",
      description: `
        Microsoft-Word-Add-In zur KI-gestützten Analyse und Erstellung juristischer Texte. Umsetzung auf Basis der Office-JavaScript-API mit Modulen für semantische Analyse, regelbasierte Prüfungen und automatisiertes Drafting.
      `,
      tags: [
        "Microsoft Word Add-In",
        "Office.js",
        "NLP",
        "LLM",
        "Prompt Engineering",
        "Legal Tech"
      ],
      imgSrc: null,
      noImage: true,
      category: ProjectCategory.ACADEMIC,
      content: "thesis-word-addin.md"
    },
    {
      id: "whistledrop",
      title: "WhistleDrop – Sichere Whistleblower-Plattform",
      description: `
        Webbasierte Whistleblower-Plattform mit Fokus auf Vertraulichkeit und Anonymität.
        Umsetzung mit Flask im Backend und React im Frontend. Ziel ist eine sichere, nachvollziehbare und robuste Übermittlung sensibler Informationen.
        `,
      tags: [
        "Flask",
        "React",
        "Cryptography",
        "Tor"
      ],
      imgSrc: null,
      noImage: false,
      category: ProjectCategory.PROJECTS
    }
  ];

  public getProjects(category: ProjectCategory | null = null): Project[] {
    return category ? this.projects.filter(p => p.category === category) : this.projects;
  }


}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imgSrc: string | null;
  noImage?: boolean;
  category: ProjectCategory;
  content?: string;
}

enum ProjectCategory {
  PROJECTS = 'projects',
  ACADEMIC = 'academic'
}
