import {Component, inject} from '@angular/core';
import {MatIcon} from '@angular/material/icon';
import {RouterLink} from '@angular/router';
import {ProjectData} from '../../../../data/services/project-data';
import {SkillEntry} from '../skill-entry/skill-entry';

interface Project {
  title: string;
  desc: string;
  tags: string[];
  color: string;
  link?: string;
}

@Component({
  selector: 'app-home-page',
  imports: [
    MatIcon,
    RouterLink,
    SkillEntry
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

  links: { name: string; icon: string; url: string }[] = [
    {
      name: 'GitHub',
      icon: 'github',
      url: 'https://github.com/k1ngGrim'
    },
    {
      name: 'LinkedIn',
      icon: 'linkedin',
      url: 'https://www.linkedin.com/in/flor1an-ka1ser/'
    }
  ]

  protected readonly projects = inject(ProjectData);


  navItems: string[] = ['Home', 'Skills', 'Projekte', 'Kontakt'];

  frontendTech: string[] = ['React', 'TypeScript', 'Next.js', 'Tailwind', 'Three.js'];
  backendTech: string[] = ['Go', 'Node.js', 'Docker', 'Kubernetes', 'PostgreSQL'];
  dataTech: string[] = ['Python', 'PyTorch', 'Pandas', 'RAG', 'LLMs'];

}
