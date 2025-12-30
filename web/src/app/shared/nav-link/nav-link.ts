import {Component, inject, input} from '@angular/core';
import {Router, RouterLink, RouterLinkActive} from '@angular/router';
import {NgClass} from '@angular/common';
import {colors} from '../../app';

@Component({
  selector: 'app-nav-link',
  imports: [
    NgClass,
    RouterLinkActive,
    RouterLink
  ],
  templateUrl: './nav-link.html',
  styleUrl: './nav-link.scss',
})
export class NavLink {
  // Inputs für die Route und das Label (wie Props in React)
  public readonly  route = input.required<string | []>();
  public readonly  label = input.required<string>();

  public readonly isHome = input<boolean>(false);

  protected readonly router = inject(Router);

  onClick() {
    this.router.navigate([this.route()]);
  }

  protected readonly colors = colors;
}
