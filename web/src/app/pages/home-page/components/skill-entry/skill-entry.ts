import {Component, input} from '@angular/core';
import {NgClass, NgStyle} from '@angular/common';

@Component({
  selector: 'app-skill-entry',
  imports: [
    NgClass,
    NgStyle
  ],
  templateUrl: './skill-entry.html',
  styleUrl: './skill-entry.scss',
})
export class SkillEntry {

  public readonly skillLevel = input.required<SkillLevel>();
  public readonly skillName = input<string>();

  protected readonly skillToLevelMap = skillToLevelMap;


  public getLevelWidth(): string {
    const level = skillToLevelMap[this.skillLevel()];

    const delta = (Math.random() * 0.1 - 0.05) * (Math.random() * 10);

    return `${(level + delta) * 25}%`;
  }


}

const skillToLevelMap: {[skill: string]: number} = {
  'Beginner': 1,
  'Intermediate': 2,
  'Advanced': 3,
  'Expert': 4
}

export enum SkillLevel {
  BEGINNER = 'Beginner',
  INTERMEDIATE = 'Intermediate',
  ADVANCED = 'Advanced',
  EXPERT = 'Expert'
}
