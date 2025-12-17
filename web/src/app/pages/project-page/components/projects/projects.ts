import {Component, inject} from '@angular/core';
import {ProjectData} from '../../../../data/services/project-data';
import {ProjectCard} from '../project-card/project-card';

@Component({
  selector: 'app-projects',
  imports: [
    ProjectCard
  ],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {

  protected readonly projects = inject(ProjectData);

}
