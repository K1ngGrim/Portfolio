import {Routes} from '@angular/router';
import {Home} from './pages/home-page/components/home/home';

export const routes: Routes = [
  { path: '', component: Home },
  {
    path: 'projects',
    loadComponent: () => import('./pages/project-page/components/projects/projects').then(m => m.Projects)
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about-page/components/about-me/about-me').then(m => m.AboutMe)
  },
  {
    path: 'projects/:id',
    loadComponent: () => import('./pages/project-page/components/project-detail/project-detail').then(m => m.ProjectDetail)
  },
  { path: '**', redirectTo: '' } // fallback
];
