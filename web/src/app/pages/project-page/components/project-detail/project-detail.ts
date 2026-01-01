import {Component, inject, OnInit, signal} from '@angular/core';
import {MarkdownComponent} from 'ngx-markdown';
import {NgClass} from '@angular/common';
import {colors} from '../../../../app';
import {Project, ProjectData} from '../../../../data/services/project-data';
import {ActivatedRoute, Router} from '@angular/router';
import {Projects} from '../projects/projects';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-project-detail',
  imports: [
    NgClass,
    MatIcon
  ],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.scss',
})
export class ProjectDetail implements OnInit{

  private readonly router = inject(Router);
  private readonly projectService = inject(ProjectData);
  private readonly activatedRoute = inject(ActivatedRoute);

  public readonly project = signal<Project | null>(null);

  async ngOnInit() {
    let projectId = this.activatedRoute.snapshot.paramMap.get('id');

    if (projectId) {
      const proj = this.projectService.getProjectById(projectId);
      this.project.set(proj);
    }
  }

  async navigateTo(path: string) {
    await this.router.navigate([path]);
  }

  protected readonly colors = colors;
}
