import {Component, inject, OnInit, signal} from '@angular/core';
import {ProjectCard} from '../project-card/project-card';
import {PageHeader} from '../../../../shared/page-header/page-header';
import {MatIcon} from '@angular/material/icon';
import {colors} from '../../../../app';
import {ProjectHyperlinkEntryTypeEnum, ProjectService} from '../../../../../../projects/strapi-lib/src/lib';
import {hasHyperLink, StrapiProject} from '../../../../../../projects/strapi-lib/src/model/strapi-project';
import {lastValueFrom} from 'rxjs';

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
export class Projects implements OnInit {

  private readonly projectService = inject(ProjectService);

  public readonly projects = signal<StrapiProject[]>([]);



  async ngOnInit() {
    const projects = (await lastValueFrom(this.projectService.projectGetProjects({
      status: 'published',
      populate: 'hyperlinks'
    }))).data as StrapiProject[];

    this.projects.set(projects);
  }

  protected readonly hasHyperLink = hasHyperLink;
  protected readonly ProjectHyperlinkEntryTypeEnum = ProjectHyperlinkEntryTypeEnum;
  protected readonly colors = colors;
}
