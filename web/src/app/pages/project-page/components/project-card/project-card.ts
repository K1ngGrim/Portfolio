import {Component, inject, input} from '@angular/core';
import {NgClass, NgOptimizedImage} from "@angular/common";
import {Project} from '../../../../data/services/project-data';
import {Router} from '@angular/router';

@Component({
  selector: 'app-project-card',
  imports: [
    NgOptimizedImage,
    NgClass
  ],
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss',
})
export class ProjectCard {

  readonly project = input.required<Project>();
  private readonly router = inject(Router);

  protected async openProjectDialog(p: Project) {
    await this.router.navigate(['/projects', p.id]);
  }
}
