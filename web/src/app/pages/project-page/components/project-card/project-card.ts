import {Component, input} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {Project} from '../../../../data/services/project-data';

@Component({
  selector: 'app-project-card',
    imports: [
        NgOptimizedImage
    ],
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss',
})
export class ProjectCard {

  readonly project = input.required<Project>();

}
