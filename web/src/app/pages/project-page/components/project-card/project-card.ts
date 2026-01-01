import {Component, inject, input} from '@angular/core';
import {NgClass} from "@angular/common";
import {Router} from '@angular/router';
import {colors} from '../../../../app';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-project-card',
  imports: [
    NgClass,
    MatIcon
  ],
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss',
})
export class ProjectCard {

  readonly id = input.required<string>();
  readonly title = input.required<string>();
  readonly desc = input.required<string>();
  readonly tech = input.required<string[]>();

  readonly githubRef = input<string>('');
  readonly hasDetails = input<boolean>(false);

  private readonly router = inject(Router);

  protected async openProject() {
    await this.router.navigate(['/projects', this.id()]);
  }

  protected readonly colors = colors;
}
