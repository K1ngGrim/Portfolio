import {computed, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {

  navItems: {title: string, route: string | []}[] = [
    {
      title: 'home',
      route: '/'
    },
    {
      title: 'about',
      route: '/about'
    },
    {
      title: 'projects',
      route: '/projects'
    },

  ];

  public readonly nav = computed(() => {
    return this.navItems;

  });

}
