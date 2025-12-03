import { Component } from '@angular/core';
import {NgClass} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  imports: [
    NgClass,
    RouterLink
  ],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.scss',
})
export class NavBar {

  navItems: string[] = ['Home', 'Skills', 'Projekte', 'Kontakt'];

}
