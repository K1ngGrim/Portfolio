import {Component} from '@angular/core';
import {NgClass} from '@angular/common';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  imports: [
    NgClass,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.scss',
})
export class NavBar {

  navItems: {title: string, route: string | []}[] = [
    {
      title: 'Home',
      route: '/'
    },
    {
      title: 'Work',
      route: '/projects'
    },
    {
      title: 'About Me',
      route: '/me'
    },
    {
      title: 'Contact',
      route: '/contact'
    }];

}
