import {Component, input} from '@angular/core';
import {NgClass} from '@angular/common';
import {colors} from '../../app';

@Component({
  selector: 'app-page-header',
  imports: [
    NgClass
  ],
  templateUrl: './page-header.html',
  styleUrl: './page-header.scss',
})
export class PageHeader {

  public readonly title = input.required<string>();
  public readonly subtitle = input.required<string>();

  protected readonly colors = colors;
}
