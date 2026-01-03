import {Component, inject} from '@angular/core';
import {HyperLinkType, ProjectCategory, ProjectData} from '../../../../data/services/project-data';
import {ProjectCard} from '../project-card/project-card';
import {PageHeader} from '../../../../shared/page-header/page-header';
import {MatIcon} from '@angular/material/icon';
import {colors} from '../../../../app';

@Component({
  selector: 'app-projects',
  imports: [
    ProjectCard,
    PageHeader,
    MatIcon
  ],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {

  protected readonly projects = inject(ProjectData);

  protected readonly colors = colors;
  protected readonly ProjectCategory = ProjectCategory;
  protected readonly HyperLinkType = HyperLinkType;
}
