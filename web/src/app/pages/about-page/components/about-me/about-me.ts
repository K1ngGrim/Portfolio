import {Component} from '@angular/core';
import {NgClass, NgForOf} from '@angular/common';
import {PageHeader} from '../../../../shared/page-header/page-header';
import {colors} from '../../../../app';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-about-me',
  imports: [
    PageHeader,
    NgClass,
    NgForOf,
    MatIcon
  ],
  templateUrl: './about-me.html',
  styleUrl: './about-me.scss',
})
export class AboutMe {

  techStack: string[] = [
    'Angular',
    'TypeScript',
    'C / C++',
    'Python',
    'Java / Kotlin',
    '.NET',
    'Docker',
    'SQL / PostgreSQL'
  ];


  protected readonly colors = colors;
}
