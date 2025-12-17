import {Component} from '@angular/core';
import {MatIcon} from '@angular/material/icon';

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
    MatIcon
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



  navItems: string[] = ['Home', 'Skills', 'Projekte', 'Kontakt'];

  frontendTech: string[] = ['React', 'TypeScript', 'Next.js', 'Tailwind', 'Three.js'];
  backendTech: string[] = ['Go', 'Node.js', 'Docker', 'Kubernetes', 'PostgreSQL'];
  dataTech: string[] = ['Python', 'PyTorch', 'Pandas', 'RAG', 'LLMs'];

  projects: Project[] = [
    {
      title: 'Distributed Task Queue',
      desc: 'Eine fehlertolerante, verteilte Warteschlange in Go. Implementiert Raft Consensus für Leader Election und garantiert Exactly-Once Processing. Benchmarking mit 10k RPS.',
      tags: ['Go', 'gRPC', 'Redis', 'Consensus Algo'],
      color: 'from-blue-900/60 to-slate-900',
      link: 'project-details.html'
    },
    {
      title: 'Neural Network Visualizer',
      desc: 'Interaktives Web-Tool zur Visualisierung von Backpropagation in Echtzeit. Gebaut für Lehre und Verständnis von Gradient Descent. Nutzt WebGL für Rendering.',
      tags: ['React', 'Three.js', 'TensorFlow.js', 'WebGL'],
      color: 'from-purple-900/60 to-slate-900'
    }
  ];

}
