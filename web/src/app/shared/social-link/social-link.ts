import {Component, input} from '@angular/core';

@Component({
  selector: 'app-social-link',
  imports: [],
  templateUrl: './social-link.html',
  styleUrl: './social-link.scss',
})
export class SocialLink {

  public readonly href = input.required<string>();

}
