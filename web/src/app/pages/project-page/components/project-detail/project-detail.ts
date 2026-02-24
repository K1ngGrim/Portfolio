import {Component, inject, OnInit, signal} from '@angular/core';
import {NgClass, NgOptimizedImage} from '@angular/common';
import {colors} from '../../../../app';
import {ActivatedRoute, Router} from '@angular/router';
import {MatIcon} from '@angular/material/icon';
import {BASE_PATH, ProjectInfoEntryTypeEnum, ProjectService} from '../../../../../../projects/strapi-lib/src/lib';
import {lastValueFrom} from 'rxjs';
import {
  castToTextBlock,
  ContentBlockTypeEnum,
  StrapiProject
} from '../../../../../../projects/strapi-lib/src/model/strapi-project';
import {OrderByPipe} from '../../../../shared/pipes/order-by-pipe';
import {environment} from '../../../../../environments/environment';

@Component({
  selector: 'app-project-detail',
  imports: [
    NgClass,
    MatIcon,
    OrderByPipe,
    NgOptimizedImage
  ],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.scss',
})
export class ProjectDetail implements OnInit{

  private readonly router = inject(Router);
  private readonly activatedRoute = inject(ActivatedRoute);
  public readonly basePath = inject(BASE_PATH);

  private readonly projectControllerService = inject(ProjectService);

  public readonly project = signal<StrapiProject | null>(null);

  async ngOnInit() {
    let projectId = this.activatedRoute.snapshot.paramMap.get('id');

    if (projectId) {
      const responseData = await lastValueFrom(this.projectControllerService.projectGetProjectsById({
        id: projectId,
        populate: '*'
      }));

      console.log(responseData);

      this.project.set(responseData.data as StrapiProject)
    }
  }

  async navigateTo(path: string) {
    await this.router.navigate([path]);
  }

  protected readonly colors = colors;
  protected readonly ProjectInfoEntryTypeEnum = ProjectInfoEntryTypeEnum;
  protected readonly ContentBlockTypeEnum = ContentBlockTypeEnum;
  protected readonly castToTextBlock = castToTextBlock;
  protected readonly environment = environment;
}
