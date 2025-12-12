import {Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProjectData {

  categories = signal([
    {
      type: ProjectCategory.PROJECTS,
      label: 'Projects'
    },
    {
      type: ProjectCategory.ACADEMIC,
      label: 'Academic Work & Research'
    }
  ])

  projects: Project[] = [
    {
      id: "1",
      title: 'Distributed Task Queue',
      description: 'Eine fehlertolerante, verteilte Warteschlange in Go. Implementiert Raft Consensus für Leader Election und garantiert Exactly-Once Processing. Benchmarking mit 10k RPS.',
      tags: ['Go', 'gRPC', 'Redis', 'Consensus Algo'],
      category: ProjectCategory.PROJECTS,
      imgSrc: null,
    },
    {
      id: "2",
      title: 'Neural Network Visualizer',
      description: 'Interaktives Web-Tool zur Visualisierung von Backpropagation in Echtzeit. Gebaut für Lehre und Verständnis von Gradient Descent. Nutzt WebGL für Rendering.',
      tags: ['React', 'Three.js', 'TensorFlow.js', 'WebGL'],
      category: ProjectCategory.ACADEMIC,
      imgSrc: null,
    }
  ];

  public getProjects(category: ProjectCategory | null = null): Project[] {
    return category ? this.projects.filter(p => p.category === category) : this.projects;
  }


}

interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imgSrc: string | null;
  category: ProjectCategory;
}

enum ProjectCategory {
  PROJECTS = 'projects',
  ACADEMIC = 'academic'
}
