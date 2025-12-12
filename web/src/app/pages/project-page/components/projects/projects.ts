import {Component, inject} from '@angular/core';
import {NgClass, NgOptimizedImage} from '@angular/common';
import {ProjectData} from '../../../../data/services/project-data';

interface Project {
  title: string;
  desc: string;
  tags: string[];
  color: string;
  link?: string;
}

@Component({
  selector: 'app-projects',
  imports: [
    NgClass,
    NgOptimizedImage
  ],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {

  protected readonly projects = inject(ProjectData);

}
