import {Component, inject, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {MatIcon, MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';
import {NgClass} from '@angular/common';
import {NavLink} from './shared/nav-link/nav-link';
import {NavigationService} from './shared/services/navigation-service';
import {SocialLink} from './shared/social-link/social-link';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgClass, NavLink, SocialLink, MatIcon],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

  scrolled = false;

  protected readonly title = signal('web');

  private matIconRegistry = inject(MatIconRegistry);
  private domSanitizer = inject(DomSanitizer);
  public readonly navService = inject(NavigationService);

  constructor() {
    this.matIconRegistry.addSvgIconSet(
      this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/mdi.svg')
    );
  }

  openContact() {
    window.open('mailto:hello@example.com');
  }

  protected readonly colors = colors;
  protected readonly links = links;
}

export const links: { name: string; icon: string; url: string }[] = [
  {
    name: 'GitHub',
    icon: 'github',
    url: 'https://github.com/k1ngGrim'
  },
  {
    name: 'LinkedIn',
    icon: 'linkedin',
    url: 'https://www.linkedin.com/in/flor1an-ka1ser/'
  },
  {
    name: 'Mail',
    icon: 'email',
    url: 'mailto:hello@example.com'
  }
]

export const colors = {
  bg: 'bg-[#121212]',      // Main background
  surface: 'bg-[#1E1E1E]', // Card background
  primary: 'text-[#BB86FC]', // Purple - Primary
  accent: 'text-[#03DAC6]',  // Teal - Secondary
  warn: 'text-[#CF6679]',    // Red - Error/Warn
  textMain: 'text-[#E1E1E1]', // High emphasis
  textMuted: 'text-[#A0A0A0]', // Medium emphasis
  border: 'border-[#2C2C2C]',
  comment: 'text-[#607D8B]'   // Syntax highlighting comment color
};
