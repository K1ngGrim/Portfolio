import { Component } from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  imports: [
    NgClass
  ],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.scss',
})
export class NavBar {

  navItems: string[] = ['Home', 'Work', 'About Me', 'Contact'];

}
