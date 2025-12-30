import {Component, inject} from '@angular/core';
import {MatIcon} from '@angular/material/icon';
import {Router, RouterLink} from '@angular/router';
import {ProjectData} from '../../../../data/services/project-data';
import {SkillEntry} from '../skill-entry/skill-entry';
import {colors} from '../../../../app';
import {NgClass} from '@angular/common';

interface Project {
  title: string;
  desc: string;
  tags: string[];
  color: string;
  link?: string;
}

@Component({
  selector: 'app-home-page',
  imports: [
    MatIcon,
    RouterLink,
    SkillEntry,
    NgClass
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

  private readonly router = inject(Router);


  async navigateTo(view: string) {
    await this.router.navigate([view]);
  }

  protected readonly colors = colors;
}
